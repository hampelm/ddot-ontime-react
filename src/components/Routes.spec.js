import React from 'react'
import { shallow } from 'enzyme'
import Route from './Route'
import Routes from './Routes'

const fakeRoutes =  [{
  id: 1,
  name: 'Dexter'
}]

function setup() {
  const component = shallow(
    <Routes routes={fakeRoutes} isFetching={false} />
  )

  return {
    component: component,
    routes: component.find(Route)
  }
}

describe('Routes component', () => {
  it('should list the routes', () => {
    const { routes } = setup()

    expect(routes.at(0).props()).toEqual(fakeRoutes[0])
  })
})
