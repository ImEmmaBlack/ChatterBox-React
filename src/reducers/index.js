import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import currentUserReducer, { CURRENT_USER_KEY } from './currentUserReducer'
import conversationsReducer, { CONVERSATIONS_KEY } from './conversationsReducer'

export const rootReducer = combineReducers({
    [CURRENT_USER_KEY]: currentUserReducer,
    [CONVERSATIONS_KEY]: conversationsReducer,
    router: routerReducer,
    form: formReducer
})
