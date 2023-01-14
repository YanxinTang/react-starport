import { createStarportInstance } from '../instance';
import { isType } from '../utils';
import State from './state';
import {
  Action,
  ActionCallback,
  ActionType,
  DisposeActionPayload,
  InitialActionPayload,
  UpdateActionPayload,
} from './actions';

const reducer = (state: State, action: Action | ActionCallback): State => {
  if (isType<ActionCallback>(action, action => typeof action === 'function')) {
    return reducer(state, action(state));
  }
  const { type, payload } = action;
  switch (type) {
    case ActionType.INITIAL: {
      const { port } = payload as InitialActionPayload;
      let instance = state[port];
      if (!instance) {
        instance = createStarportInstance(port, {});
      }
      return {
        ...state,
        [port]: instance,
      };
    }

    case ActionType.UPDATE: {
      const { port, update } = payload as UpdateActionPayload;
      const instance = state[port];
      if (!instance) {
        return state;
      }
      return {
        ...state,
        [port]: { ...instance, ...update },
      };
    }

    case ActionType.DISPOSE: {
      const { port } = payload as DisposeActionPayload;
      const { [port]: deletedInstance, ...rest } = state;
      return deletedInstance?.el ? state : rest;
    }

    default:
      throw new Error(`React Starport: unsupported action [${type as string}]`);
  }
};

export default reducer;
