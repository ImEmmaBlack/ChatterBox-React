import { connect } from 'react-redux'
import ConversationView from './ConversationView'
import { getMessages, sendMessage } from '../../actions'
import { currentUserSelector, conversationsSelector } from '../../selectors';

export function mapStateToProps(state) {
    const { id } = currentUserSelector(state)
    const { conversationId, messages, selectedMessageType } = conversationsSelector(state);
    return { currentUserId: id, conversationId, messages, selectedMessageType }
}

export const mapDispatchToProps = {
    getMessages,
    sendMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationView)


