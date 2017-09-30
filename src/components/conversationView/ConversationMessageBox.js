import FontAwesome from 'react-fontawesome'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ConversationMessageBox = props => {
    const { handleSubmit } = props
    const handleKeyDown = (e, callback) => {
        if (e.key === 'Enter' && e.shiftKey === false) {
            e.preventDefault()
            callback()
        }
    }
    return (
        <form onSubmit={ handleSubmit } onKeyDown={(e) => handleKeyDown(e, handleSubmit)}>
            <div className="ConversationMessageBox">
                <div className="ConversationMessageBox-body">
                    <Field className="ConversationMessageBox-body-input" name="body" component="textarea" />
                </div>
                <div className="ConversationMessageBox-submit">
                    <button className="ConversationMessageBox-submit-button" type="submit">
                        <FontAwesome name='paper-plane' size='2x' />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ConversationMessageBox = reduxForm({
    form: 'ConversationMessageBox'
})(ConversationMessageBox)
