import React from 'react'
import { shallow } from 'enzyme'
import Route from './Route'

const sampleRoute = {
  name: 'Dexter',
  id: 123
}

const setup = props => {
  const component = shallow(
    <Route {...sampleRoute} />
  )

  return {
    component: component,
    h3: component.find('h3')
  }
}

describe('Route', () => {
  it('should render the route name', () => {
    const { h3 } = setup(sampleRoute)
    expect(h3.text()).toMatch(/Dexter/)
  })
})
