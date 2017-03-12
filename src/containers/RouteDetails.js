import React, { PropTypes } from 'react'

const RouteDetails = ({  }) => (
  <div className="route">
    <h3>Route details go here!!! </h3>
  </div>
)

Route.propTypes = {
  longName: PropTypes.string,
  id:   PropTypes.string
}

export default Route
