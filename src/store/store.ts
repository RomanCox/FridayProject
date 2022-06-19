import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profileReducer';
import loginReducer from './loginReducer';
import registrationReducer from './registrationReducer';
import recoveryPasswordReducer from './recoveryPasswordReducer';
import newPasswordReducer from './newPasswordReducer';

export type ActionType = {};

export const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    recoveryPassword: recoveryPasswordReducer,
    newPassword: newPasswordReducer,
    profile: profileReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof rootReducer>

export default store;