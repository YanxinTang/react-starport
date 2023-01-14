import { useEffect, useRef, useState } from 'react';
import useStorage from './useStorage';

export default function useDark() {
  const isFirstRender = useRef(true);
  const [colorScheme, setColorSeheme] = useStorage<string>(
    'color-scheme',
    'auto'
  );
  const darkState = useState<boolean>(() => {
    if (colorScheme === 'auto') {
      const isDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isDark;
    }
    return colorScheme === 'dark';
  });
  const [dark] = darkState;

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setColorSeheme(dark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', dark);
  }, [dark, setColorSeheme]);

  return darkState;
}
