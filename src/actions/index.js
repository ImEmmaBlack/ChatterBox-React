import { signUpStart, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_PENDING } from './signUp'
import { signInStart, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_IN_PENDING } from './signIn'

export const ActionTypes = {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_PENDING,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_IN_PENDING
}

export {
    signUpStart,
    signInStart
}
