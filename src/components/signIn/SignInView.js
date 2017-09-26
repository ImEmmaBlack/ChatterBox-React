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
              <div>
                <h6>
                  Email
                </h6>
                <span className="text-input">
                  <Text type="email" field="email" placeholder="Email" />
                </span>
              </div>

              <div>
                <h6>
                  Password
                </h6>
                <span className="text-input">
                  <Text type="password" field="password" placeholder="Password" />
                </span>
              </div>

              <div>
                <button type='submit'>Sign In</button>
              </div>
            </form>
          )}
        }
    </Form>
    )
  }
}
