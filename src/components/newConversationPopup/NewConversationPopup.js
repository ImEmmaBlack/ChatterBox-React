import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import './NewConversationPopup.css'

export default class NewConversationPopup extends Component {

    static propTypes = {
        currentUserId: PropTypes.string,
        showNewConversationPopup: PropTypes.bool,

        users: PropTypes.array,
        getUsers: PropTypes.func,
        selectedUsers: PropTypes.array,
        createConversation: PropTypes.func,
        selectUsers: PropTypes.func,
        setShowNewConversationPopup: PropTypes.func
    }

    componentWillMount() {
        const { showNewConversationPopup, getUsers } = this.props;
        getUsers()
    }

    componentWillReceiveProp(newProps) {
        const { showNewConversationPopup, getUsers } = this.props;
        if (newProps.showNewConversationPopup !== showNewConversationPopup) getUsers()
    }

    render() {
        const { users,
            selectUsers,
            selectedUsers,
            createConversation,
            showNewConversationPopup,
            currentUserId,
            setShowNewConversationPopup } = this.props;

        const userIsSelected= (user) => {
            return _.includes(selectedUsers, user.id)
        }

        const select = (user) => {
            selectUsers(_.union(selectedUsers, [user.id]))
        }

        const deselect = (user) => {
            selectUsers(_.without(selectedUsers, user.id))
        }

        const toggleUser = (user) => {
            if (userIsSelected(user)) {
                deselect(user)
            } else {
                select(user)
            }
        }

        const renderUser = (user) => {
            if (user.id === currentUserId) return
            return (
                <div
                    className={`NewConversationPopup-user ${userIsSelected(user) ? 'selected' : ''}`}
                    onClick={() => toggleUser(user)}>
                    {user.username}
                </div>
            )
        }

        const renderButton = () => {
            if (selectedUsers.length === 0) return
            return (
                <button  className="NewConversationPopup-button" onClick={() =>createConversation(selectedUsers)}>
                    Start Chatting
                </button>
            )
        }

        const style = {
            content : {
                top: '20%',
                left: '20%',
                right: '20%',
                bottom: '20%',
                border: '1px solid #c9c9c9',
                textAlign: 'center',
            }
        }

        return (
            <Modal style={style} isOpen={showNewConversationPopup} onRequestClose={() => setShowNewConversationPopup(false)} >
                <div className="NewConversationPopup-header">Start a new Conversation</div>
                <div className="NewConversationPopup-instructions">Choose some users, then click "Start Chatting" when you are ready!</div>
                <div className="NewConversationPopup-button-row">
                    {renderButton()}
                </div>
                <div className="NewConversationPopup-users">
                    {_.map(users, renderUser)}
                </div>
            </Modal>
        )

    }
}


