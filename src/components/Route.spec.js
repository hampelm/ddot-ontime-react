import React from 'react'
import { shallow } from 'enzyme'
import Route from './Route'

const noop = () => {}

const sampleRoute = {
  longName: 'Dexter',
  id: '123',
  onRouteRefreshClick: noop
}

const setup = props => {
  const component = shallow(
    <Route {...sampleRoute} />
  )

  return {
    component: component,
    div: component.find('div.route')
  }
}

describe('Route', () => {
  it('should render the route name', () => {
    const { div } = setup(sampleRoute)
    expect(div.text()).toMatch(/Dexter/)
  })
})
