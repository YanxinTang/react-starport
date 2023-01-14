import React from 'react';
import { StarportOptions } from '../options';
import { Action, ActionCallback } from '../store/actions';
import State from '../store/state';

interface StarportContextInterface {
  /**
   * options holds StarportOptions passed from StarportCarrier component
   */
  options: Partial<StarportOptions>;

  /**
   * state holds all of the starport instances. It is created by useState hooks
   * and is asynchronous.
   */
  state: State;

  dispatch: React.Dispatch<Action | ActionCallback>;
}

const StarportContext = React.createContext<StarportContextInterface | null>(
  null
);
StarportContext.displayName = 'StarportContext';

export default StarportContext;
export type { StarportContextInterface };
