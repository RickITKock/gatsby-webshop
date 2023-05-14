/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useState } from "react"
import Form from "react-bootstrap/Form"

//=============================================================================

const NameInput = () => {
  const [messageInput, setMessageInput] = useState({
    name: "message",
    placeholder: "Type your message here...",
    as: "textarea",
    rows: 5,
    touched: false,
    valid: false,
    required: true,
    isValidMessage: "Looks good!",
    isNotValidMessage: "Please complete this required field.",
    validation: {
      required: true,
      isEmail: false,
    },
  })

  const validateEmail = emailValue => {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return pattern.test(emailValue)
  }

  const checkValidity = (value, rules) => {
    let isValid = true

    if (!rules) {
      return true
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid
    }

    if (rules.isEmail) {
      isValid = validateEmail(value) && isValid
    }

    return isValid
  }

  const handleMessageInputChange = event => {
    const { value } = event.target

    const updatedMessage = {
      ...messageInput,
      value: value,
      touched: false,
    }

    setMessageInput(updatedMessage)
  }

  const handleMessageInputBlur = event => {
    const { value } = event.target

    const updatedMessage = {
      ...messageInput,
      touched: true,
      valid: checkValidity(value, messageInput.validation),
    }

    setMessageInput(updatedMessage)
  }

  return (
    <>
      <Form.Control
        {...messageInput}
        isValid={messageInput.valid && messageInput.touched}
        isInvalid={!messageInput.valid && messageInput.touched}
        onChange={event => handleMessageInputChange(event)}
        onBlur={event => handleMessageInputBlur(event)}
        className="border-0 card-shadow"
        size="lg"
      />
      <Form.Control.Feedback type={messageInput.valid ? "valid" : "invalid"}>
        {messageInput.valid
          ? messageInput.isValidMessage
          : messageInput.isNotValidMessage}
      </Form.Control.Feedback>
    </>
  )
}

export default NameInput

//=============================================================================
