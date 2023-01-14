import { useEffect, useState } from 'react';

export default function useStorage<T>(key: string, initValue: T) {
  const state = useState(() => {
    const item = localStorage.getItem(key);
    if (item) {
      try {
        const foo = JSON.parse(item);
        return foo;
      } catch {
        return item;
      }
    }
    return initValue;
  });
  const [value] = state;

  useEffect(() => {
    const item =
      value instanceof Object ? JSON.stringify(value) : String(value);
    localStorage.setItem(key, item);
  }, [key, value]);

  return state;
}
