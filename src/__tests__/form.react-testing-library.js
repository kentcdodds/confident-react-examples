import React from 'react'
import {render, fireEvent, cleanup} from 'react-testing-library'
import {Login} from '../form'

afterEach(cleanup)

test('react-testing-library version', () => {
  const handleSubmit = jest.fn()

  const {getByLabelText, getByText} = render(<Login onSubmit={handleSubmit} />)
  const usernameInput = getByLabelText(/username/i)
  usernameInput.value = 'chucknorris'
  const passwordInput = getByLabelText(/password/i)
  passwordInput.value = 'I need no password'
  fireEvent.click(getByText(/submit/i))

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      username: 'chucknorris',
      password: 'I need no password',
    }),
  )
})
