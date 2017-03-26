import { combineReducers } from 'redux'

import {
  REQUEST_ROUTES, RECEIVE_ROUTES
} from '../actions/routes'

const routeIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ROUTES:
      return [
        ...state,
        ...action.routes.map(route => route.id)
      ]
    default:
      return state
  }
}

const byId  = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ROUTES:
      return {
        ...state,
        ...action.routes.reduce((obj, route) => {
          obj[route.id] = route
          obj.shortName = Number(route.shortName)
          return obj
        }, {})
      }
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch(action.type) {
    case REQUEST_ROUTES:
      return true
    case RECEIVE_ROUTES:
      return false
    default:
      return state
  }
}

export default combineReducers({
  byId,
  routeIds,
  isFetching
})

export const getRoute = (state, id) =>
  state.byId[id]

export const getRoutes = state =>
  state.routeIds.map(id => getRoute(state, id))
