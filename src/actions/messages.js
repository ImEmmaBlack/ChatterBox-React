import axios from 'axios'
import { signOut } from '../actions'
import authHeader from './authHeader'
import {reset} from 'redux-form'

export const GET_MESSAGES_PENDING = 'GET_MESSAGES_PENDING'
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS'
export const GET_MESSAGES_FAILURE = 'GET_MESSAGES_FAILURE'
export const SEND_MESSAGE_PENDING = 'SEND_MESSAGE_PENDING'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE'

const API_HOST = process.env.API_HOST || 'http://localhost:3000'

export function getMessagesPending() {
    return {
        type: GET_MESSAGES_PENDING
    }
}

export function getMessagesSuccess(messages) {
    return {
        type: GET_MESSAGES_SUCCESS,
        payload: messages
    }
}

export function getMessagesFailure(error) {
    return {
        type: GET_MESSAGES_FAILURE,
        payload: error
    }
}

export function sendMessagePending() {
    return {
        type: SEND_MESSAGE_PENDING
    }
}

export function sendMessageSuccess() {
    return {
        type: SEND_MESSAGE_SUCCESS
    }
}

export function sendMessageFailure(error) {
    return {
        type: SEND_MESSAGE_FAILURE,
        payload: error
    }
}

export function getMessages(conversationId) {
    const endpoint = `${API_HOST}/api/v1/conversations/${conversationId}/messages`;
    return (dispatch) => {
        dispatch(getMessagesPending())
        axios.get(endpoint, authHeader())
            .then((response) => {
                dispatch(getMessagesSuccess({conversationId, messages: response.data}))
                dispatch(reset('ConversationMessageBox'))
            })
            .catch((error) => {
                if (error.status === 401) dispatch(signOut())
                dispatch(getMessagesFailure(error))
            })
    }
}

export function sendMessage(conversationId, message) {
    const endpoint = `${API_HOST}/api/v1/conversations/${conversationId}/messages`;
    return (dispatch) => {
        dispatch(sendMessagePending())
        axios.post(endpoint, message, authHeader())
            .then((response) => {
                dispatch(sendMessageSuccess())
                dispatch(getMessages(conversationId))
            })
            .catch((error) => {
                if (error.status === 401) dispatch(signOut())
                dispatch(sendMessageFailure(error))
            })
    }
}
