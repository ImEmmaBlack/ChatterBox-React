import { CONVERSATIONS_KEY } from '../reducers/conversationsReducer'
import { createSelector } from 'reselect'

const conversationsSelector = createSelector(
    state => state[CONVERSATIONS_KEY],
    conversations => conversations
)

export default conversationsSelector

