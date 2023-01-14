import React, {
  cloneElement,
  isValidElement,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { StarportInstance } from '../instance';
import { update } from '../store/actions';
import StarportContext from './StarportContext';

interface StarportCraftProps {
  instance: StarportInstance;
}

const StarportCraft = (props: StarportCraftProps) => {
  const ctx = useContext(StarportContext);
  if (!ctx) {
    throw new Error(
      '[React Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.'
    );
  }
  const { dispatch } = ctx;
  const elRef = useRef(null);
  const { instance } = props;

  useEffect(() => {
    if (instance.needRenderNext) {
      // use requestAnimationFrame make sure the next state should be rendered in the next render
      requestAnimationFrame(() => {
        const payload: Partial<StarportInstance> = { needRenderNext: false };
        if (instance.nextRect) {
          payload.rect = instance.nextRect;
          payload.nextRect = null;
        }
        if (instance.transitionStartProps) {
          payload.transitionStartProps = null;
        }
        dispatch(update(instance.port, payload));
      });
    }
    // eslint-disable-next-line
  }, [instance.needRenderNext]);

  const { rect } = instance;

  const elapsed = Date.now() - instance.liftOffTime;
  const duration = Math.max(0, instance.options.duration - elapsed);

  const style: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    padding: rect.padding,

    /**
     * When using getBoundingClientRect to calculate the position,
     * the margin is already included, so there is no need to add margin here
     */

    transform: `translate3d(${rect.left}px,${rect.top}px,0px)`,
    transitionProperty: 'all',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: instance.options.easing,
  };

  const handleTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>
  ) => {
    /**
     * There are many properties will change in a transiton stage, but we shound
     * focus on position transform instead of the others
     *
     * Ignore transition events from the descendants
     */
    if (event.target === elRef.current && event.propertyName === 'transform') {
      dispatch(update(instance.port, { isLanded: true }));
    }
  };

  let element = instance.element;
  if (instance.transitionStartProps) {
    const transitionStartProps = { ...instance.transitionStartProps };
    if (isValidElement(element)) {
      /**
       * Clone element but only use `transitionStartProps` as the prop
       *
       * React.cloneElement cannot delete existed properties, we can do it manually
       */
      for (const key of Object.keys(element.props as object)) {
        if (!Object.prototype.hasOwnProperty.call(transitionStartProps, key)) {
          transitionStartProps[key] = null;
        }
      }
    }
    element = cloneElement(
      instance.element as React.ReactElement,
      transitionStartProps
    );
  }

  return (
    <div
      className="starport-craft"
      style={style}
      onTransitionEnd={handleTransitionEnd}
      ref={elRef}
    >
      {element}
    </div>
  );
};

export default StarportCraft;
export type { StarportCraftProps };
