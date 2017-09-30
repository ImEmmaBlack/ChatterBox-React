import { connect } from 'react-redux'
import NewConversationPopup from './NewConversationPopup'
import { selectUsers, setShowNewConversationPopup, createConversation, getUsers } from '../../actions'
import { currentUserSelector, conversationsSelector } from '../../selectors';

export function mapStateToProps(state) {
    const { id } = currentUserSelector(state)
    const { showNewConversationPopup, users, selectedUsers } = conversationsSelector(state)
    return { currentUserId: id, showNewConversationPopup, users, selectedUsers }
}

export const mapDispatchToProps = {
    setShowNewConversationPopup,
	getUsers,
    createConversation,
    selectUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(NewConversationPopup)

