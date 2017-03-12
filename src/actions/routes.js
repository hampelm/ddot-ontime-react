export const REQUEST_ROUTES = 'REQUEST_ROUTES'
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES'
// export const SELECT_ROUTE = 'SELECT_ROUTE'
// export const INVALIDATE_ROUTE = 'INVALIDATE_ROUTE'


export const requestRoutes = ({
  type: REQUEST_ROUTES
})

export const receiveRoutes = (json) => ({
  type: RECEIVE_ROUTES,
  routes: json.data.list,
  receivedAt: Date.now()
})

const fetchRoutes = () => (dispatch) => {
  dispatch(requestRoutes)
  return fetch('https://ddot-beta.herokuapp.com/api/api/where/routes-for-agency/DDOT.json?key=BETA&format=json')
    .then(response => response.json())
    .then(json => dispatch(receiveRoutes(json)))
}

const shouldFetchRoutes = (state) => {
  const routes = state.routes
  if (!routes || routes.routeIds.length === 0) {
    return true
  }

  if (routes.isFetching) {
    return false
  }

  return false
}

export const fetchRoutesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchRoutes(getState())) {
    return dispatch(fetchRoutes())
  }
}
