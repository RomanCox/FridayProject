import {ActionType} from './store';

export type ProfileType = typeof initialState;

let initialState = {};

const profileReducer = (state: ProfileType = initialState, action: ActionType) => {};

export default profileReducer;