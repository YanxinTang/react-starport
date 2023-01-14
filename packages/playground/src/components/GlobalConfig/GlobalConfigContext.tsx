import React from 'react';
import useDark from '../../hooks/useDark';

interface GlobalConfigContext {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  resetSize: () => void;
  dark: ReturnType<typeof useDark>[0];
  setDark: ReturnType<typeof useDark>[1];
  debug: boolean;
  setDebug: React.Dispatch<React.SetStateAction<boolean>>;
}

// eslint-disable-next-line
const GlobalConfigContext = React.createContext<GlobalConfigContext | null>(
  null
);

export default GlobalConfigContext;
