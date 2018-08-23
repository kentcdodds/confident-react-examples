import React from 'react'

function Login({onSubmit}) {
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <LabeledInput label="username" />
        <LabeledInput label="password" type="password" />
        <button type="submit">submit</button>
      </Form>
    </div>
  )
}

function Form({onSubmit, children}) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        const elementValues = getElementValues(event.target)
        onSubmit(elementValues)
      }}
    >
      {children}
    </form>
  )
}

function getElementValues(formNode) {
  return Object.getOwnPropertyNames(formNode.elements).reduce((obj, key) => {
    obj[key] = formNode.elements[key].value
    return obj
  }, {})
}

function LabeledInput({label, type = 'text'}) {
  return (
    <React.Fragment>
      <label htmlFor={label}>{label}</label>
      <input id={label} placeholder={label} type={type} />
    </React.Fragment>
  )
}

export {Login}
