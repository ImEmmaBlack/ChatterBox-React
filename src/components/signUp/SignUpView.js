import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Text } from 'react-form'

export default class SignUpView extends Component {

  static propTypes = {
    username: PropTypes.string.required,
    email: PropTypes.string.required,
    signUpStart: PropTypes.func.required
  }

  render() {
    return (
        <Form onSubmit={(values) => { console.log('Success!', values) }}>
        {({submitForm}) => {
          return (
              <form onSubmit={submitForm}>
              <div>
                <h6>
                  Username
                </h6>
                <span className="text-input">
                  <Text field="username" placeholder="Username" />
                </span>
              </div>

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
                <h6>
                  Confirm Password
                </h6>
                <span className="text-input">
                  <Text type="password" field="password_confirmation" placeholder="Confirm Password" />
                </span>
              </div>

              <div>
                <button type='submit'>Sign Up</button>
              </div>
            </form>
          )}
        }
    </Form>
    )
  }
}
