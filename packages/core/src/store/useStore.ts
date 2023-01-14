import { useReducer } from 'react';
import { Action, ActionCallback } from './actions';
import reducer from './reducer';
import State from './state';

const useStore = () => {
  return useReducer<React.Reducer<State, Action | ActionCallback>>(reducer, {});
};

export default useStore;
