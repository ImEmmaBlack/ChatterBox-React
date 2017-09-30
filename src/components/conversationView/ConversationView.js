import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Textarea } from 'react-form'
import ConversationMessageBox from './ConversationMessageBox'
import './ConversationView.css'

export default class ConversationView extends Component {

    static propTypes = {
        currentUserId: PropTypes.string,
        conversationId: PropTypes.string,
        messages: PropTypes.array,
        getMessages: PropTypes.func,
        sendMessage: PropTypes.func,
        selectedMessageType: PropTypes.number,
    }

    componentWillMount() {
        const { conversationId, getMessages } = this.props;
        if (!_.isNil(conversationId)) getMessages(conversationId)
    }

    componentWillReceiveProps(newProps) {
        const { conversationId, getMessages} = this.props;
        if (newProps.conversationId !== conversationId) getMessages(newProps.conversationId)
    }

    render() {
        const { currentUserId, messages } = this.props;
        const renderMessage = (message, i) => {
            const isUser = message.user.id === currentUserId;
            const isChained = i > 0 && message.user_id === messages[i-1].user.id
            const chainedClass = (isChained) ? 'CV-chain' : 'CV-first'
            const userClass = (isUser) ? 'CV-user' : 'CV-other'
            return(
                <div className={`ConversationView-message ${chainedClass} ${userClass}`}>
                    <div className={`ConversationView-message-left ${chainedClass} ${userClass}`}>
                        {(isUser && !isChained) ? message.user.username : ''}
                    </div>
                    <div className={`ConversationView-message-center ${chainedClass} ${userClass}`}>
                        {message.body}
                    </div>
                    <div className={`ConversationView-message-right ${chainedClass} ${userClass}`}>
                        {(!isUser && !isChained) ? message.user.username : ''}
                    </div>
                </div>
            )
        }

        const { sendMessage, conversationId } = this.props;
        if (_.isNil(conversationId)) return(<div className="ConversationView-no-conversation"/>);
        return (
            <div className="ConversationView">
                <div className="ConversationView-messages">
                    <div className="ConversationView-messages-container">
                        {_.map(messages, renderMessage)}
                    </div>
                </div>
                <div className="ConversationView-new-message">
                    <ConversationMessageBox onSubmit={(values) => sendMessage(conversationId, values)} />
                </div>
            </div>
        )

    }
}

