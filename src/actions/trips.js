export const REQUEST_TRIPS = 'REQUEST_TRIPS'
export const RECEIVE_TRIPS = 'RECEIVE_TRIPS'
// export const SELECT_ROUTE = 'SELECT_ROUTE'
// export const INVALIDATE_ROUTE = 'INVALIDATE_ROUTE'


export const requestTrips = (route) => ({
  type: REQUEST_TRIPS,
  route: route
})

export const receiveTrips = (route, json) => ({
  type: RECEIVE_TRIPS,
  route: route,
  trips: json.data.list,
  receivedAt: Date.now()
})

const fetchTrips = (route) => (dispatch) => {
  dispatch(requestTrips(route))
  return fetch(`https://ddot-beta.herokuapp.com/api/api/where/trips-for-route/${route.id}.json?key=BETA&format=json`)
    .then(response => response.json())
    .then(json => dispatch(receiveTrips(route, json)))
}

export const shouldFetchTrips = (route, state) => {
  const trips = state.trips

  if (trips.isFetching[route.id] === true) {
    return false
  }

  return true
}

export const fetchTripsIfNeeded = (route) => (dispatch, getState) => {
  if (shouldFetchTrips(route, getState())) {
    return dispatch(fetchTrips(route))
  }
}
