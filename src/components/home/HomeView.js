import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ConversationList from '../conversationList/ConversationListContainer'
import ConversationView from '../conversationView/ConversationViewContainer'
import NewConversationPopup from '../newConversationPopup/NewConversationPopupContainer'
import './HomeView.css'

export default class HomeView extends Component {

    static propTypes = {
        currentUserId: PropTypes.string,
        setIds: PropTypes.func
    }

    componentWillMount() {
        const { setIds, currentUserId } = this.props
        if (!currentUserId) setIds()
    }

    render() {
        return (
            <div className="HomeView">
                <NewConversationPopup />
                <div className="HomeView-left-panel">
                    <ConversationList />
                </div>
                <div className="HomeView-right-panel">
                    <ConversationView />
                </div>
            </div>
        )
    }
}
