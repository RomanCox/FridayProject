import {ActionType} from './store';

export type RegistrationType = typeof initialState;

let initialState = {};

const registrationReducer = (state: RegistrationType = initialState, action: ActionType) => {};

export default registrationReducer;