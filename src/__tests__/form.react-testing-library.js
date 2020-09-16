import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Login} from '../form'

test('react-testing-library version', () => {
  const handleSubmit = jest.fn()

  render(<Login onSubmit={handleSubmit} />)

  const usernameInput = screen.getByRole('textbox', {name: /username/i})
  userEvent.type(usernameInput, 'chucknorris')
  const passwordInput = screen.getByLabelText(/password/i)
  userEvent.type(passwordInput, 'I need no password')

  userEvent.click(screen.getByText(/submit/i))

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      username: 'chucknorris',
      password: 'I need no password',
    }),
  )
})
