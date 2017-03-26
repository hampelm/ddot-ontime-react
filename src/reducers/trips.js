import { combineReducers } from 'redux'

import {
  REQUEST_TRIPS, RECEIVE_TRIPS
} from '../actions/trips'

const LATE = 'late'
const ONTIME = 'on time'
const EARLY = 'early'
const NOT_TRACKED = 'not tracked'

export const calculateDelay = (seconds) => {
  if (seconds >= 360) {
    return LATE
  } else if (seconds >=0) {
    return ONTIME
  } else {
    return EARLY
  }
}

const overview = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TRIPS:
      return state
    default:
      return state
  }
}

const tripIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TRIPS:
      return [...new Set([
        ...state,
        ...action.trips.map(trip => trip.tripId)
      ])]
    default:
      return state
  }
}


export const mergeTripDetails = (tripDetails = [], trip = {}) => {
  for (var i = 0; i < tripDetails.length; i++) {
    if (tripDetails[i].id === trip.tripId) {
      return Object.assign({},
        trip,
        trip.status,
        tripDetails[i]
      )
    }
  }

  return trip
}

const byId  = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_TRIPS:
      return {
        ...state,
        ...action.trips.reduce((obj, trip) => {
          obj[trip.tripId] = mergeTripDetails(action.tripDetails, trip)
          obj[trip.tripId].delay = calculateDelay(obj[trip.tripId].scheduleDeviation)

          if (!obj[trip.tripId].scheduleDeviation && !obj[trip.tripId].predicted) {
            obj[trip.tripId].delay = NOT_TRACKED
          }
          return obj
        }, {})
      }
    default:
      return state
  }
}


const byRoute  = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_TRIPS:
      return {
        ...state,
        [action.route.id]: action.trips.map((trip) => {
          return trip.tripId
        })
      }
    default:
      return state
  }
}


const isFetching = (state = {}, action) => {
  switch(action.type) {
    case REQUEST_TRIPS:
      return {
        ...state,
        [action.route.id]: true
      }
    case RECEIVE_TRIPS:
      return {
        ...state,
        [action.route.id]: false
      }
    default:
      return state
  }
}


export default combineReducers({
  byId,
  tripIds,
  isFetching,
  byRoute
})


export const getTrip = (state, id) =>
  state.byId[id]


export const getTrips = state =>
  state.tripIds.map(id => getTrip(state, id))


export const getOverview = state => {
  let overview = {}
  overview[EARLY] = 0
  overview[ONTIME] = 0
  overview[LATE] = 0
  overview[NOT_TRACKED] = 0

  getTrips(state).forEach((trip) => {
    overview[trip.delay]++
  })

  return overview
}


export const getTripsForRoute = (state, routeId) => {
  const ids = state.byRoute[routeId]
  if (ids === undefined) { return [] }

  const trips = ids.map(id => {
    // Filter out mismatches
    let trip = state.byId[id];
    if (!trip) return;
    if (trip.routeId === routeId) {
      return trip
    }
  })
  return trips.filter(obj => {
    return !!obj
  })
}
