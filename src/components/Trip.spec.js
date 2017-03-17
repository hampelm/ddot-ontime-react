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
    tr: component.find('tr')
  }
}

describe('Trip', () => {
  it('should render the trip name', () => {
    const { tr } = setup(sampleTrip)
    expect(tr.text()).toMatch(/Sample trip/)
  })
})
