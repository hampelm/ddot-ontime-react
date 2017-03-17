import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Route from './Route'

// TODO I think this is deprecated!! 
const Routes = ({routes, fetchRoutesIfNeeded, onRouteRefreshClick}) => {
  const routeList = routes.map(route =>
    <Route {...route} onRouteRefreshClick={() => onRouteRefreshClick(route.id)} key={route.id} />
  )

  return (
    <table className='routes'>
      {routeList}
    </table>
  )
}

Routes.componentDidMount = () => {
  fetchRoutesIfNeeded()
}

Routes.propTypes = {
  routes: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchRoutesIfNeeded: PropTypes.func.isRequired,
  onRouteRefreshClick: PropTypes.func.isRequired
}

export default Routes
