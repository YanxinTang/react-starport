import { HTMLAttributes } from 'react';

const isServer = typeof window === 'undefined';
const isClient = !isServer;

const root = isClient ? document.documentElement || document.body : undefined;

function isType<T>(
  value: unknown,
  check: (value: unknown) => boolean
): value is T {
  return check(value);
}

type ClassName = HTMLAttributes<HTMLElement>['className'];
export function classNames(...classNames: ClassName[]): ClassName {
  return classNames.reduce((all, current) => {
    if (all) {
      return current ? `${all} ${current}` : all;
    }
    return current;
  }, '');
}

function pickBy<T>(
  object: Record<string | number | symbol, T>,
  predicate: (key: string | number | symbol, value: T) => boolean
) {
  const picked: Record<string | number | symbol, T> = {};
  for (const [key, value] of Object.entries(object)) {
    if (predicate(key, value)) {
      picked[key] = value;
    }
  }
  return picked;
}

export { isClient, isServer, root, isType, pickBy };
