import { combineReducers } from 'redux';
import currentUserReducer, { CURRENT_USER_KEY } from './currentUserReducer'

export const rootReducer = combineReducers({
    [CURRENT_USER_KEY]: currentUserReducer
})
