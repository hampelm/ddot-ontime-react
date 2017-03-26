import React from 'react'
import { shallow } from 'enzyme'
import Trip from './Trip'

const sampleTrip = {
  tripId: 'Sample trip'
}

const setup = props => {
  const component = shallow(
    <Trip {...sampleTrip} />
  )

  return {
    component: component,
    div: component.find('div.trip')
  }
}

describe('Trip', () => {
  it('should render the trip name', () => {
    const { div } = setup(sampleTrip)
    expect(div.text()).toMatch(/Sample trip/)
  })
})
