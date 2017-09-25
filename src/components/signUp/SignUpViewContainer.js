import { connect } from 'react-redux'
import SignUpView from './SignUpView'
import { signUpStart } from '../../actions'
import { currentUserSelector } from '../../selectors';

export function mapStateToProps(state) {
    const { username, email } = currentUserSelector(state);
    console.log(signUpStart)
    return { username, email }
}

export const mapDispatchToProps = {
    signUpStart
}

export default connect( mapStateToProps, mapDispatchToProps)(SignUpView)
