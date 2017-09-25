import { CURRENT_USER_KEY } from '../reducers/currentUserReducer'
import { createSelector } from 'reselect'

const currentUserSelector = createSelector(
    state => state[CURRENT_USER_KEY],
    currentUser => currentUser
)

export default currentUserSelector
