import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ConversationList.css'

export default class ConversationList extends Component {

    static propTypes = {
        conversationId: PropTypes.string,
        conversations: PropTypes.array,
        getConversations: PropTypes.func,
        setShowNewConversationPopup: PropTypes.func,
        setConversationId: PropTypes.func
    }

    componentDidMount() {
        this.props.getConversations()
    }


    render() {
        const { conversations, setShowNewConversationPopup, getConversations, setConversationId, conversationId } = this.props;
        const renderConversation = (conversation) => {
            const baseClass = "ConversationList-conversation"
            const modifierClassName = conversationId === conversation.id ? baseClass+'__selected ' : ''
            return (
                <div>
                    <div className={modifierClassName + baseClass} onClick={() => setConversationId(conversation.id)}>
                        {_.join(_.map(conversation.users, (x) => x.username), ' - ')}
                    </div>
                </div>
            )
        }

        return (
            <div className="ConversationList">
                <div className="ConversationList-buttons">
                    <button className="ConversationList-button ConversationList-new" onClick={() => setShowNewConversationPopup(true)}>
                        New Conversation
                    </button>
                    <button className="ConversationList-button ConversationList-refresh" onClick={getConversations}>
                        Refresh
                    </button>
                </div>
                <div className="ConversationList-conversations">
                    {_.map(conversations, renderConversation)}
                </div>
            </div>
        )

    }
}
