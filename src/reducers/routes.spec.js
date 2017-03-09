import routes from './routes'

describe('routes', () => {

  const initialState = {
    routeIds: [],
    isFetching: false,
    byId: {}
  }

  it('should provide the initial state', () => {
    const state = routes(undefined, {})
    expect(state).toEqual(initialState)
  })
})
