import StarportContext from './StarportContext';
import StarportCraft from './StarportCraft';
import StarportContextProvider from './StarportContextProvider';
import { StarportOptions } from '../options';

interface StarportCarrierProps extends Partial<StarportOptions> {
  children?: React.ReactNode;
}

/**
 * StarportCarrier container's style
 */
const style: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 9999, // make sure all detached elements on the top of document
};

const StarportCarrier = (props: StarportCarrierProps) => {
  const { children, ...options } = props;
  return (
    <StarportContextProvider options={options}>
      {children}
      <StarportContext.Consumer>
        {ctx => {
          if (!ctx) {
            return null;
          }
          return (
            <div style={style}>
              {Object.entries(ctx.state)
                /**
                 * We cannot use `createPortal` to attach the instance.el into target element
                 *
                 * Because of SyntheticEvent of react, after adding instance.el to the target,
                 * the events fired in the instance.el will not bubble to the DOM architecture, but
                 * to the React architecture.
                 *
                 * Just render instance that are not landed yet
                 */
                .filter(([, instance]) => !instance.isLanded)
                .map(([port, instance]) => {
                  return <StarportCraft key={port} instance={instance} />;
                })}
            </div>
          );
        }}
      </StarportContext.Consumer>
    </StarportContextProvider>
  );
};

export default StarportCarrier;
export type { StarportCarrierProps };
