import * as trips from './trips'


const testRoute = {
  id: 1
}

describe('Trip actions', () => {
  describe('shouldFetchTrips', () => {
    it('should fetch if not currently fetching this route', () => {
      const state = {
        trips: {
          tripsByRoute: {},
          isFetching: {}
        }
      }

      const shouldFetch = trips.shouldFetchTrips(testRoute, state);
      expect(shouldFetch).toBe(true)
    })

    it('should return false if already fetching', () => {
      const state = {
        trips: {
          tripsByRoute: {},
          isFetching: { 1: true }
        }
      }

      const shouldFetch = trips.shouldFetchTrips(testRoute, state);
      expect(shouldFetch).toBe(false)
    })


  })

  describe('receiveTrips', () => {
    xit('process trips correctly', () => {

    })

    xit('process trips correctly', () => {

    })
  })
})
