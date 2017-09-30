import axios from 'axios'
import token from './token'
import { push } from 'react-router-redux'
import { delayAction } from 'redux-delayed-dispatch'
import { setIds } from './signIn'

export const SIGN_UP_PENDING = 'SIGN_UP_PENDING'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

const API_HOST = process.env.API_HOST|| 'http://localhost:3000'

export function signUpPending() {
    return {
        type: SIGN_UP_PENDING,
    };
}

export function signUpSuccess(payload) {
    return {
        type: SIGN_UP_SUCCESS,
        payload
    };
}

export function signUpFailure(error) {
    return {
        type: SIGN_UP_FAILURE,
        payload: error,
    };
}

const endpoint = `${API_HOST}/sign_up`;

export function signUpStart(payload) {
    return (dispatch) => {
        dispatch(signUpPending());

        axios.post(endpoint, payload)
            .then(function (response) {
                token.save(response.data.jwt, response.data.id)
                dispatch(signUpSuccess(response.data))
                dispatch(setIds)
                dispatch(delayAction(push('/home'), 600))
            })
            .catch(function (error) {
                dispatch(signUpFailure(error))
            });
    };
}

