import React from 'react'
import { shallow } from 'enzyme'
import Route from './Route'
import Routes from './Routes'

const noop = () => {}

const fakeRoutes =  [{
  id: 'ddot123',
  longName: 'Dexter',
  fetchRoutesIfNeeded: noop,
  onRouteRefreshClick: noop
}]


function setup() {
  const component = shallow(
    <Routes routes={fakeRoutes} isFetching={false} onRouteRefreshClick={noop} fetchRoutesIfNeeded={noop} />
  )

  return {
    component: component,
    routes: component.find(Route)
  }
}

describe('Routes component', () => {
  it('should list the routes', () => {
    const { routes } = setup()

    const props = routes.at(0).props()
    expect(props.id).toEqual(fakeRoutes[0].id)
    expect(props.longName).toEqual(fakeRoutes[0].longName)
    expect(props.fetchRoutesIfNeeded).toEqual(fakeRoutes[0].fetchRoutesIfNeeded)
    // expect(props.id).to.have.key('onRouteRefreshClick')
  })
})
