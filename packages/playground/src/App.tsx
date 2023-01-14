import { useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation, useOutlet } from 'react-router-dom';
import './App.css';
import { StarportCarrier } from '@react-starport/core';
import Nav from './components/Navigation';
import { GlobalConfigProvider } from './components/GlobalConfig';
import GlobalConfigContext from './components/GlobalConfig/GlobalConfigContext';
import { classNames } from './utils';

function App() {
  let location = useLocation();
  const currentOutlet = useOutlet();
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <GlobalConfigProvider>
      <GlobalConfigContext.Consumer>
        {config => {
          const { debug } = config!;
          return (
            <main
              className={classNames(
                'font-sans text-center text-gray-700 dark:text-gray-200 relative',
                debug ? 'debug' : undefined
              )}
            >
              <Nav></Nav>
              <StarportCarrier>
                <SwitchTransition>
                  <CSSTransition
                    key={location.pathname}
                    nodeRef={nodeRef}
                    classNames="page"
                    timeout={{
                      appear: 0,
                      enter: 300,
                      exit: 0,
                    }}
                    unmountOnExit
                  >
                    <div ref={nodeRef}> {currentOutlet} </div>
                  </CSSTransition>
                </SwitchTransition>
              </StarportCarrier>
            </main>
          );
        }}
      </GlobalConfigContext.Consumer>
    </GlobalConfigProvider>
  );
}

export default App;
