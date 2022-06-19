import {ActionType} from './store';

export type LoginType = typeof initialState;

let initialState = {};

const loginReducer = (state: LoginType = initialState, action: ActionType) => {};

export default loginReducer;