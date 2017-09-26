import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import currentUserReducer, { CURRENT_USER_KEY } from './currentUserReducer'

export const rootReducer = combineReducers({
    [CURRENT_USER_KEY]: currentUserReducer,
    router: routerReducer
})
