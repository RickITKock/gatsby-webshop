/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useState } from "react"
import Form from "react-bootstrap/Form"

//=============================================================================

const EmailInput = () => {
  // Email state
  const [emailInput, setEmailInput] = useState({
    name: "email",
    type: "email",
    placeholder: "Email",
    touched: false,
    valid: false,
    required: true,
    isValidMessage: "Looks good!",
    isNotValidMessage: "Please complete this required field in correct format.",
    validation: {
      required: true,
      isEmail: true,
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

  const handleEmailInputChange = event => {
    const { value } = event.target

    const updatedEmail = {
      ...emailInput,
      value: value,
      touched: false,
    }

    setEmailInput(updatedEmail)
  }

  const handleEmailInputBlur = event => {
    const { value } = event.target

    const updatedEmail = {
      ...emailInput,
      touched: true,
      valid: checkValidity(value, emailInput.validation),
    }

    setEmailInput(updatedEmail)
  }

  return (
    <>
      <Form.Control
        {...emailInput}
        isValid={emailInput.valid && emailInput.touched}
        isInvalid={!emailInput.valid && emailInput.touched}
        onChange={event => handleEmailInputChange(event)}
        onBlur={event => handleEmailInputBlur(event)}
        className="border-0 card-shadow"
        size="lg"
      />
      <Form.Control.Feedback type={emailInput.valid ? "valid" : "invalid"}>
        {emailInput.valid
          ? emailInput.isValidMessage
          : emailInput.isNotValidMessage}
      </Form.Control.Feedback>
    </>
  )
}

export default EmailInput

//=============================================================================
