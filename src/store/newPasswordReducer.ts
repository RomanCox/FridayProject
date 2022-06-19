import {ActionType} from './store';

export type NewPasswordType = typeof initialState;

let initialState = {};

const newPasswordReducer = (state: NewPasswordType = initialState, action: ActionType) => {};

export default newPasswordReducer;