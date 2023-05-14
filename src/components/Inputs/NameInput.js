/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useState } from "react"
import Form from "react-bootstrap/Form"

//=============================================================================

const NameInput = () => {
  const [nameInput, setNameInput] = useState({
    name: "name",
    type: "text",
    placeholder: "Name",
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

  const handleNameInputChange = event => {
    const { value } = event.target

    const updatedEmail = {
      ...nameInput,
      value: value,
      touched: false,
    }

    setNameInput(updatedEmail)
  }

  const handleNameInputBlur = event => {
    const { value } = event.target

    const updatedName = {
      ...nameInput,
      touched: true,
      valid: checkValidity(value, nameInput.validation),
    }

    setNameInput(updatedName)
  }

  return (
    <>
      <Form.Control
        {...nameInput}
        isValid={nameInput.valid && nameInput.touched}
        isInvalid={!nameInput.valid && nameInput.touched}
        onChange={event => handleNameInputChange(event)}
        onBlur={event => handleNameInputBlur(event)}
        className="border-0 card-shadow"
        size="lg"
      />
      <Form.Control.Feedback type={nameInput.valid ? "valid" : "invalid"}>
        {nameInput.valid
          ? nameInput.isValidMessage
          : nameInput.isNotValidMessage}
      </Form.Control.Feedback>
    </>
  )
}

export default NameInput

//=============================================================================
