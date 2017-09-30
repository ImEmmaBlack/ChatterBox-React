import _ from 'lodash'
import { ActionTypes } from '../actions'

export const CURRENT_USER_KEY = 'currentUser'

const initialState = {
    id: null,
    username: null,
    email: null,
    jwt: null,
    signupErrors: [],
    loginErrors: []
}

export default function currentUserReducer(state = initialState, action) {
    switch (_.get(action, 'type')) {

    case ActionTypes.SET_IDS:
        return {
            ...state,
            id: action.payload.id,
            jwt: action.payload.jwt
        }
    case ActionTypes.SIGN_IN_SUCCESS:
    case ActionTypes.SIGN_UP_SUCCESS:
        return {
            ...state,
            id: action.payload.id,
            username: action.payload.username,
            email: action.payload.email,
            jwt: action.payload.jwt
        }
    case ActionTypes.SIGN_IN_FAILURE:
        return {
            ...state,
            loginErrors: action.payload,
        }
    case ActionTypes.SIGN_UP_FAILURE:
        return {
            ...state,
            signupErrors: action.payload,
        }
    case ActionTypes.AUTH_FAILURE:
        return {
            ...state,
            jwt: initialState.jwt
        }
    case ActionTypes.SIGN_OUT:
        return {
            ...state,
            jwt: null
        }

    default:
        return state
    }
}
