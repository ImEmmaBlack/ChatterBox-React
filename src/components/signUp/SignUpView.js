import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Text } from 'react-form'
import './SignUpView.css';

export default class SignUpView extends Component {

  static propTypes = {
    username: PropTypes.string.required,
    email: PropTypes.string.required,
    signUpStart: PropTypes.func.required
  }

  render() {
    const { signUpStart } = this.props;
    return (
        <Form onSubmit={(values) => signUpStart(values)}>
        {({submitForm}) => {
          return (
              <form onSubmit={submitForm}>
              <h3>Sign Up</h3>

              <div className="form-row">
                <div className="label">
                  Username
                </div>
                <div className="text-input">
                  <Text className="form-text-input" field="username" placeholder="Username" />
                </div>
              </div>

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

              <div className="form-row">
                <div className="label">
                  Confirm Password
                </div>
                <div className="text-input">
                  <Text className="form-text-input" type="password" field="password_confirmation" placeholder="Confirm Password" />
                </div>
              </div>

              <div>
                <button className="btn" type='submit'>Sign Up</button>
              </div>
            </form>
          )}
        }
    </Form>
    )
  }
}
