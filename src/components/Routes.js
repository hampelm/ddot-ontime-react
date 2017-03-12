import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Route from './Route'

const Routes = ({routes, fetchRoutesIfNeeded}) => {
  const routeList = routes.map(route =>
    <Route {...route} key={route.id} />
  )

  return (
    <div className='routes'>
      {routeList}
    </div>
  )
}


Routes.componentDidMount = () => {
  fetchRoutesIfNeeded()
}

Routes.propTypes = {
  routes: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchRoutesIfNeeded: PropTypes.func.isRequired
}

export default Routes
