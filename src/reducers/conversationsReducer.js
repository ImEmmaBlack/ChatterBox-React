import _ from 'lodash'
import { ActionTypes } from '../actions'

export const CONVERSATIONS_KEY = 'conversations'

const initialState = {
    conversations: [],
    conversationId: null,
    messages: [],
    showNewConversationPopup: false,
    selectedUsers: [],
    users: [],
    selectedMessageType: 0
}

export default function currentUserReducer(state = initialState, action) {
  switch (_.get(action, 'type')) {

  case ActionTypes.GET_CONVERSATIONS_SUCCESS:
    return {
      ...state,
      conversations: action.payload,
    }
  case ActionTypes.SET_CONVERSATION_ID:
    return {
      ...state,
      conversationId: action.payload,
    }
  case ActionTypes.SHOW_NEW_CONVERSATION_POPUP:
    return {
      ...state,
      showNewConversationPopup: action.payload,
    }
  case ActionTypes.SELECT_USERS:
    return {
      ...state,
      selectedUsers: action.payload,
    }
  case ActionTypes.GET_USERS_SUCCESS:
    return {
      ...state,
      users: action.payload,
    }
  case ActionTypes.GET_MESSAGES_SUCCESS:
    if(action.payload.conversationId === state.conversationId) {
        return {
          ...state,
          messages: action.payload.messages,
        }
    } else {
        return state
    }
  default:
    return state
  }
}

