import React from 'react'
import renderer from 'react-test-renderer'
import App from '../src/components/App.jsx'

test('App gets rendered', () => {
  const component = renderer.create(<App />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})