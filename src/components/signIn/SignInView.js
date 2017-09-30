import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Text } from 'react-form'

export default class SignInView extends Component {

  static propTypes = {
    username: PropTypes.string.required,
    email: PropTypes.string.required,
    signInStart: PropTypes.func.required
  }

  render() {
    const { signInStart } = this.props;
    return (
        <Form onSubmit={(values) => signInStart(values)}>
        {({submitForm}) => {
          return (
            <form onSubmit={submitForm}>
              <h3>Sign In</h3>

              <div className="form-row">
                <div className="label">
                  Email
                </div>
                <div className="text-input">
                  <Text className="form-text-input" type="email" field="email" placeholder="Email" />
                </div>
              </div>

              <div className="form-row">
                <div className="label">
                  Password
                </div>
                <div className="text-input">
                  <Text className="form-text-input" type="password" field="password" placeholder="Password" />
                </div>
              </div>

              <div>
                <button className="btn" type='submit'>Sign In</button>
              </div>
            </form>
          )}
        }
    </Form>
    )
  }
}
