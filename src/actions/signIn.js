import axios from 'axios'

export const SIGN_IN_PENDING = 'SIGN_IN_PENDING'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'

const API_HOST = process.env.API_HOST|| 'http://localhost:3000'

export function signInPending() {
    return {
        type: SIGN_IN_PENDING,
    };
}

export function signInSuccess(payload) {
    return {
        type: SIGN_IN_SUCCESS,
        payload
    };
}

export function signInFailure(error) {
    return {
        type: SIGN_IN_FAILURE,
        payload: error,
    };
}

const endpoint = `${API_HOST}/sign_in`;

export function signInStart(payload) {
    return (dispatch) => {
        dispatch(signInPending());

        axios.post(endpoint, payload)
            .then(function (response) {
                dispatch(signInSuccess(response.data))
            })
            .catch(function (error) {
                dispatch(signInFailure(error))
            });
    };
}

