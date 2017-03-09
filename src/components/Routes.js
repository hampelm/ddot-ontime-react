import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Route from './Route'

const Routes = ({routes, fetchPostsIfNeeded}) => {
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
  fetchPostsIfNeeded()
}

Routes.propTypes = {
  routes: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchPostsIfNeeded: PropTypes.func.isRequired
}

export default Routes
