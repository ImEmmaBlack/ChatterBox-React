import { connect } from 'react-redux'
import SignInView from './SignInView'
import { signInStart } from '../../actions'
import { currentUserSelector } from '../../selectors';

export function mapStateToProps(state) {
    const { username, email } = currentUserSelector(state);
    return { username, email }
}

export const mapDispatchToProps = {
    signInStart
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInView)
