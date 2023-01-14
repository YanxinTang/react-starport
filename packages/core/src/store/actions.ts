import { StarportInstance } from '../instance';
import State from './state';

enum ActionType {
  INITIAL = 'INITIAL',
  UPDATE = 'UPDATE',
  DISPOSE = 'DISPOSE',
}

type Action<T = unknown> = {
  type: ActionType;
  payload: T;
};
type ActionCallback<T = unknown> = (state: State) => Action<T>;

/**
 * initial will create an starport instance if it does not exist
 */
type InitialActionPayload = {
  port: string;
};
const initial = (port: string): Action<InitialActionPayload> => {
  return { type: ActionType.INITIAL, payload: { port } };
};

/**
 * update will update starport instance partially
 */
type UpdateActionPayload = {
  port: string;
  update: Partial<StarportInstance>;
};
const update = (
  port: string,
  update: Partial<StarportInstance>
): Action<UpdateActionPayload> => {
  return { type: ActionType.UPDATE, payload: { port, update } };
};

/**
 * dispose will delete starport instance from state
 */
type DisposeActionPayload = {
  port: string;
};
const dispose = (port: string): Action<DisposeActionPayload> => {
  return { type: ActionType.DISPOSE, payload: { port } };
};

export { ActionType, initial, update, dispose };
export type {
  Action,
  ActionCallback,
  InitialActionPayload,
  UpdateActionPayload,
  DisposeActionPayload,
};
