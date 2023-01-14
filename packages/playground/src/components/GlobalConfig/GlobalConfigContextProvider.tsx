import React, { useState } from 'react';
import useDark from '../../hooks/useDark';
import useStorage from '../../hooks/useStorage';
import GlobalConfigContext from './GlobalConfigContext';

type RenderFunc = (config: GlobalConfigContext | null) => React.ReactNode;

interface GlobalConfigContextProviderProps {
  children?: React.ReactNode | RenderFunc;
}

const GlobalConfigContextProvider = (
  props: GlobalConfigContextProviderProps
) => {
  const [mode, setMode] = useStorage('mode', false);
  const [size, setSize] = useStorage('size', 200);
  const [dark, setDark] = useDark();
  const [debug, setDebug] = useState(false);

  const resetSize = () => {
    setSize(200);
  };

  const value = {
    mode,
    setMode,
    size,
    setSize,
    resetSize,
    dark,
    setDark,
    debug,
    setDebug,
  };

  let { children } = props;
  if (typeof children === 'function') {
    children = (
      <GlobalConfigContext.Consumer
        children={children}
      ></GlobalConfigContext.Consumer>
    );
  }

  return (
    <GlobalConfigContext.Provider value={value}>
      {children}
    </GlobalConfigContext.Provider>
  );
};

export default GlobalConfigContextProvider;
