import axios from 'axios'
import { signOut } from '../actions'
import authHeader from './authHeader'

export const GET_CONVERSATIONS_PENDING = 'GET_CONVERSATIONS_PENDING'
export const GET_CONVERSATIONS_SUCCESS = 'GET_CONVERSATIONS_SUCCESS'
export const GET_CONVERSATIONS_FAILURE = 'GET_CONVERSATIONS_FAILURE'
export const CREATE_CONVERSATION_PENDING = 'CREATE_CONVERSATION_PENDING'
export const CREATE_CONVERSATION_SUCCESS = 'CREATE_CONVERSATION_SUCCESS'
export const CREATE_CONVERSATION_FAILURE = 'CREATE_CONVERSATION_FAILURE'
export const SHOW_NEW_CONVERSATION_POPUP = 'SHOW_NEW_CONVERSATION_POPUP'
export const SET_CONVERSATION_ID = 'SET_CONVERSATION_ID'

const API_HOST = process.env.API_HOST || 'http://localhost:3000'

export function getConversationsPending() {
    return {
        type: GET_CONVERSATIONS_PENDING
    }
}

export function getConversationsSuccess(conversations) {
    return {
        type: GET_CONVERSATIONS_SUCCESS,
        payload: conversations
    }
}

export function getConversationsFailure(error) {
    return {
        type: GET_CONVERSATIONS_FAILURE,
        payload: error
    }
}
export function createConversationPending() {
    return {
        type: CREATE_CONVERSATION_PENDING
    }
}

export function createConversationSuccess() {
    return {
        type: CREATE_CONVERSATION_SUCCESS
    }
}

export function createConversationFailure(error) {
    return {
        type: CREATE_CONVERSATION_FAILURE,
        payload: error
    }
}

export function setConversationId(id) {
    return {
        type: SET_CONVERSATION_ID,
        payload: id
    }
}

export function setShowNewConversationPopup(value) {
    return {
        type: SHOW_NEW_CONVERSATION_POPUP,
        payload: value
    }
}

const endpoint = `${API_HOST}/api/v1/conversations`;

export function getConversations() {
    return (dispatch) => {
        dispatch(getConversationsPending())
        axios.get(endpoint, authHeader())
            .then((response) => dispatch(getConversationsSuccess(response.data)))
            .catch((error) => {
                if (error.status === 401) dispatch(signOut())
                dispatch(getConversationsFailure(error))
            })
    }
}

export function createConversation(userIds) {
    return (dispatch) => {
        dispatch(createConversationPending())
        axios.post(endpoint, {conversation: {user_ids: userIds} }, authHeader())
            .then((response) => {
                dispatch(createConversationSuccess())
                dispatch(setConversationId(response.data.id))
                dispatch(setShowNewConversationPopup(false))
                dispatch(getConversations())
            })
            .catch((error) => {
                if (error.status === 401) dispatch(signOut())
                dispatch(createConversationFailure(error))
            })
    }
}
