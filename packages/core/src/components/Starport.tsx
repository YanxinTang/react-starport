import React, {
  useContext,
  useRef,
  useLayoutEffect,
  useEffect,
  isValidElement,
} from 'react';
import { defaultOptions, StarportOptions } from '../options';
import StarportContext from './StarportContext';
import pickBy from 'lodash.pickby';
import { getRectOfElement, StarportInstance } from '../instance';
import { dispose, initial, update } from '../store/actions';
import { classNames } from '../utils';

interface StarportProps extends Partial<StarportOptions> {
  port: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Starport = (props: StarportProps) => {
  const { port, children } = props;

  const ctx = useContext(StarportContext);
  if (!ctx) {
    throw new Error(
      '[React Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.'
    );
  }

  const { state, dispatch } = ctx;
  const instance = state[port];
  const elRef = useRef<HTMLDivElement>(null);

  /**
   * use `useLayoutEffect` here to calculate transition end style before painting
   * blank children
   *
   *                          isLanded
   *                           ||
   *                          false
   *                ┌─────┐   ┌─────┐   ┌─────┐
   * useEffect      │ ▲   ├───┤     ├───┤ ▲   │
   *                └─────┘   └─────┘   └─────┘
   *                ┌─────┐   ┌─────┐   ┌─────┐
   * useLayoutEffect│ ▲   ├───┤ ▲   ├───┤   ▲ │
   *                └─────┘   └─────┘   └─────┘
   */
  useLayoutEffect(() => {
    if (!instance) {
      dispatch(initial(port));
    }

    const el = elRef.current;
    if (!el) {
      return;
    }

    let payload: Partial<StarportInstance> = { el };

    if (instance) {
      if (instance.isLanded) {
        payload.liftOffTime = Date.now();
      }

      if (instance.prevEl !== elRef.current) {
        payload.isLanded = false;
        const nextRect = getRectOfElement(el);

        let transitionStartProps = null;
        if (
          isValidElement(instance.element) &&
          isValidElement(children) &&
          instance.element.type === children.type
        ) {
          transitionStartProps = instance.element.props;
          payload.needRenderNext = true;
        }

        if (instance.isLanded) {
          payload = {
            ...payload,
            needRenderNext: true,
            nextRect,
          };
        } else {
          payload = {
            ...payload,
            rect: nextRect,
          };
        }
        payload = {
          ...payload,
          transitionStartProps,
        };
      }
    }
    dispatch(update(port, payload));

    return () => {
      // eslint-disable-next-line
      const el = elRef.current;
      if (!el) {
        return;
      }

      const payload: Partial<StarportInstance> = {
        el: null,
        prevEl: el,
      };
      const rect = getRectOfElement(el);

      dispatch(state => {
        const instance = state[port];
        if (instance.isLanded) {
          // Calculate transition start style
          payload.rect = rect;
        }
        return update(port, payload);
      });

      // Wait for the next painting to deside whether to dispose
      requestAnimationFrame(() => {
        dispatch(dispose(port));
      });
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(update(port, { element: children }));
  }, [children, dispatch, port]);

  useEffect(() => {
    const localOptions = {
      duration: props.duration,
      easing: props.easing,
    };
    dispatch(
      update(port, {
        options: {
          ...defaultOptions,
          ...ctx.options,
          ...pickBy(localOptions, (v: unknown) => v !== undefined),
        },
      })
    );
  }, [ctx.options, dispatch, port, props.duration, props.easing]);

  return (
    <div
      ref={elRef}
      className={classNames(
        'starport',
        instance?.isLanded ? 'starport--landed' : undefined,
        props.className
      )}
      style={props.style}
    >
      {instance?.isLanded ? props.children : null}
    </div>
  );
};

export default Starport;
export type { StarportProps };
