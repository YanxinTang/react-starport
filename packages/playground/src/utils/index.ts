import { HTMLAttributes } from 'react';

type ClassName = HTMLAttributes<HTMLElement>['className'];

export function classNames(...classNames: ClassName[]): ClassName {
  return classNames.reduce((all, current) => {
    if (all) {
      return current ? `${all} ${current}` : all;
    }
    return current;
  }, '');
}
