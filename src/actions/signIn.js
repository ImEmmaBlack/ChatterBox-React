import _ from 'lodash'
import axios from 'axios'
import token from './token'
import { push } from 'react-router-redux'
import { delayAction } from 'redux-delayed-dispatch'
import WebNotifications from './webNotifications'
import { getMessages } from './messages'
import { getConversations } from './conversations'

export const SIGN_IN_PENDING = 'SIGN_IN_PENDING'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'
export const SIGN_OUT = 'SIGN_OUT'
export const SET_IDS = "SET_IDS"

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

export function signOut() {
    return (dispatch) => {
        dispatch(push('/sign_in'))
        token.remove()
        dispatch({type: SIGN_OUT })
    }
}

export function setIds() {
    return (dispatch) => {
        WebNotifications.create(token.get())
        WebNotifications.subscribe((data) => {
            dispatch(getMessages(data.conversation_id))
            dispatch(getConversations())
        })
        dispatch({
            type: SET_IDS,
            payload: { id: token.getId(), jwt: token.get() }
        })
    }
}

const endpoint = `${API_HOST}/sign_in`;

export function signInStart(payload) {
    return (dispatch) => {
        dispatch(signInPending());

        axios.post(endpoint, payload)
            .then((response) => {
                token.save(response.data.jwt, response.data.id)
                dispatch(signInSuccess(response.data))
                dispatch(setIds)
                dispatch(delayAction(push('/home'), 600))
            })
            .catch((error) => dispatch(signInFailure(error)));
    };
}

