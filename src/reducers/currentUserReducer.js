import _ from 'lodash'
import { ActionTypes } from '../actions'

export const CURRENT_USER_KEY = 'currentUser'

const initialState = {
  username: '',
  email: '',
  jwt: '',
  signupErrors: [],
  loginErrors: []
}

export default function currentUserReducer(state = initialState, action) {
  switch (_.get(action, 'type')) {

  case ActionTypes.SET_USERNAME:
    return {
      ...state,
      username: action.payload,
    }
  case ActionTypes.SET_EMAIL:
    return {
      ...state,
      email: action.payload,
    }
  case ActionTypes.SET_JWT:
    return {
      ...state,
      jwt: action.payload,
    }
  case ActionTypes.LOGIN_SUCCESS:
  case ActionTypes.SIGN_UP_SUCCESS:
    return {
      ...state,
      username: action.payload.username,
      email: action.payload.email,
      jwt: action.payload.jwt
    }
  case ActionTypes.LOG_IN_FAILURE:
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

  default:
    return state
  }
}
