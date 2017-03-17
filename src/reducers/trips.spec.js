import trips from './trips'
import { getTripsForRoute, mergeTripDetails } from './trips'

import {
  REQUEST_TRIPS, RECEIVE_TRIPS
} from '../actions/trips'

describe('trips', () => {

  const initialState = {
    tripIds: [],
    isFetching: {},
    byId: {},
    byRoute: {}
  }

  it('should provide the initial state', () => {
    const state = trips(undefined, {})
    expect(state).toEqual(initialState)
  })

  it('should handle REQUEST_TRIPS', () => {
    const state = trips({}, {
      type: REQUEST_TRIPS,
      route: {
        id: 1
      }
    })

    expect(state).toEqual({
      tripIds: [],
      isFetching: {
        1: true
      },
      byId: {},
      byRoute: {}
    })
  })


  it('should handle RECEIVE_TRIPS', () => {
    const state = trips({}, {
      type: RECEIVE_TRIPS,
      route: {
        id: 1
      },
      trips: [{
        tripId: 22,
      }, {
        tripId: 33
      }]
    })

    expect(state).toEqual({
      tripIds: [22, 33],
      isFetching: {
        1: false
      },
      byId: {
        22: {
          tripId: 22
        },
        33: {
          tripId: 33
        }
      },
      byRoute: {
        1: [22, 33]
      }
    })
  })


  describe('mergeTripDetails', () => {
    it('Should map details to a trip', () => {
      const tripDetails = [{
        id: 'trip1',
        details: 'Joy Road'
      }, {
        id: 'trip2',
        details: "Dexter"
      }]

      const trip = {
        tripId: 'trip2',
        otherDetails: 'Westbound',
        status: {
          scheduleDeviation: 25
        }
      }

      const results = mergeTripDetails(tripDetails, trip)

      expect(results.tripId).toEqual(trip.tripId)
      expect(results.otherDetails).toEqual(trip.otherDetails)
      expect(results.details).toEqual(tripDetails[1].details)
      expect(results.scheduleDeviation).toEqual(trip.status.scheduleDeviation)
    })

  })


  describe('getTripsForRoute', () => {
    it('Should get trips for a route', () => {
      const state = {
        tripIds: [22, 33],
        isFetching: {
          1: false
        },
        byId: {
          22: {
            tripId: 22
          },
          33: {
            tripId: 33
          }
        },
        byRoute: {
          1: [22, 33]
        }
      }

      const routeTrips = getTripsForRoute(state, 1)

      expect(routeTrips).toEqual([{tripId: 22}, {tripId: 33}])
    })

    it('Should get an empty array if no trips', () => {
      const state = {
        tripIds: [],
        isFetching: {},
        byId: {},
        byRoute: {}
      }

      const routeTrips = getTripsForRoute(state, 1)

      expect(routeTrips).toEqual([])
    })
  })
})
