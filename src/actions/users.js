import axios from 'axios'
import { signOut } from '../actions'
import authHeader from './authHeader'

export const GET_USERS_PENDING = 'GET_USERS_PENDING'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'
export const SELECT_USERS = 'SELECT_USERS'

const API_HOST = process.env.API_HOST || 'http://localhost:3000'

export function getUsersPending() {
    return {
        type: GET_USERS_PENDING
    }
}

export function getUsersSuccess(users) {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
}

export function getUsersFailure(error) {
    return {
        type: GET_USERS_FAILURE,
        payload: error
    }
}

export function selectUsers(users) {
    return {
        type: SELECT_USERS,
        payload: users
    }
}

export function getUsers() {
    const endpoint = `${API_HOST}/api/v1/users`;
    return (dispatch) => {
        dispatch(getUsersPending())
        axios.get(endpoint, authHeader())
            .then((response) => dispatch(getUsersSuccess(response.data)))
            .catch((error) => {
                if (error.status === 401) dispatch(signOut())
                dispatch(getUsersFailure(error))
            })
    }
}
