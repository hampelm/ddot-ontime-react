import React from 'react'
import { shallow } from 'enzyme'
import Trip from './Trip'

const sampleTrip = {
  tripId: '123'
}

const setup = props => {
  const component = shallow(
    <Trip {...sampleTrip} />
  )

  return {
    component: component,
    h3: component.find('h3')
  }
}

describe('Trip', () => {
  it('should render the trip name', () => {
    const { h3 } = setup(sampleTrip)
    expect(h3.text()).toMatch(/Here is a trip/)
  })
})
