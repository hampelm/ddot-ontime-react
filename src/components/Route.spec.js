import React from 'react'
import { shallow } from 'enzyme'
import Route from './Route'

const sampleRoute = {
  longName: 'Dexter',
  id: '123'
}

const setup = props => {
  const component = shallow(
    <Route {...sampleRoute} />
  )

  return {
    component: component,
    tr: component.find('tr')
  }
}

describe('Route', () => {
  it('should render the route name', () => {
    const { tr } = setup(sampleRoute)
    expect(tr.text()).toMatch(/Dexter/)
  })
})
