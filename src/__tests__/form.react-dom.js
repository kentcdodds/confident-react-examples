import React from 'react'
import ReactDOM from 'react-dom'
import {Simulate} from 'react-dom/test-utils'
import {Login} from '../form'

test('raw ReactDOM version', () => {
  const handleSubmit = jest.fn()
  const container = document.createElement('div')

  ReactDOM.render(<Login onSubmit={handleSubmit} />, container)
  const inputs = container.querySelectorAll('input')
  const usernameInput = inputs[0]
  usernameInput.value = 'chucknorris'
  const passwordInput = inputs[1]
  passwordInput.value = 'I need no password'
  const form = container.querySelector('form')
  Simulate.submit(form)

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      username: 'chucknorris',
      password: 'I need no password',
    }),
  )
})
