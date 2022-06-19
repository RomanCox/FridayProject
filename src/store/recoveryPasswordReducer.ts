import {ActionType} from './store';

export type RecoveryPasswordType = typeof initialState;

let initialState = {};

const recoveryPasswordReducer = (state: RecoveryPasswordType = initialState, action: ActionType) => {};

export default recoveryPasswordReducer;