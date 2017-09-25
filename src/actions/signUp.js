import axios from 'axios'

export const SIGN_UP_PENDING = 'SIGN_UP_PENDING'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

const API_HOST = process.env.API_HOST|| 'localhost:3000'

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

const endpoint = `${API_HOST}/signup`;

export function signUpStart(payload) {
    return (dispatch) => {
        dispatch(signUpPending());

        axios.post(endpoint, payload)
            .then(function (response) {
                dispatch(signUpSuccess(response.data))
                console.log(response)
            })
            .catch(function (error) {
                dispatch(signUpFailure(error))
                console.log(error)
            });
    };
}

