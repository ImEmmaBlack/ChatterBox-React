import { connect } from 'react-redux'
import HomeView from './HomeView'
import { setIds } from '../../actions'
import { currentUserSelector } from '../../selectors';

export function mapStateToProps(state) {
    const { id } = currentUserSelector(state)
    return { currentUserId: id }
}

export const mapDispatchToProps = {
    setIds
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
