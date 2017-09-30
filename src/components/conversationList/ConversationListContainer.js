import { connect } from 'react-redux'
import ConversationList from './ConversationList'
import { getConversations, setShowNewConversationPopup, setConversationId } from '../../actions'
import { conversationsSelector } from '../../selectors';

export function mapStateToProps(state) {
    const { conversations, conversationId } = conversationsSelector(state);
    return { conversations, conversationId }
}

export const mapDispatchToProps = {
    getConversations,
    setShowNewConversationPopup,
    setConversationId
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationList)

