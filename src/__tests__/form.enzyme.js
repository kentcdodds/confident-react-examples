import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Login} from '../form'

Enzyme.configure({adapter: new Adapter()})

test('enzyme version', () => {
  const handleSubmit = jest.fn()

  const wrapper = mount(<Login onSubmit={handleSubmit} />)
  const usernameInput = wrapper.find('input').first().hostNodes().instance()
  usernameInput.value = 'chucknorris'
  const passwordInput = wrapper.find('input').at(1).hostNodes().instance()
  passwordInput.value = 'I need no password'
  const form = wrapper.find('Form').simulate('submit')

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      username: 'chucknorris',
      password: 'I need no password',
    }),
  )
})
