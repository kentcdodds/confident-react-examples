import React from 'react'
import ReactDOM from 'react-dom'
import {Login} from '../form'

test('raw ReactDOM version', () => {
  // setup
  const container = document.createElement('div')
  document.body.append(container)

  const handleSubmit = jest.fn()
  ReactDOM.render(<Login onSubmit={handleSubmit} />, container)

  const inputs = container.querySelectorAll('input')
  const usernameInput = inputs[0]
  usernameInput.value = 'chucknorris'
  const passwordInput = inputs[1]
  passwordInput.value = 'I need no password'

  const form = container.querySelector('form')
  const submitEvent = new Event('submit', {
    bubbles: true,
    cancelable: true,
  })
  form.dispatchEvent(submitEvent)

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      username: 'chucknorris',
      password: 'I need no password',
    }),
  )

  // cleanup
  container.remove()
})
