import { combineReducers } from 'redux'

import {
  REQUEST_TRIPS, RECEIVE_TRIPS
} from '../actions/trips'

const tripIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TRIPS:
      return [
        ...state,
        ...action.trips.map(trip => trip.tripId)
      ]
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
  state.routeIds.map(id => getTrip(state, id))


export const getTripsForRoute = (state, routeId) => {
  const ids = state.byRoute[routeId]
  if (ids === undefined) { return [] }

  const trips = ids.map(id => {
    return state.byId[id]
  })
  return trips
}
