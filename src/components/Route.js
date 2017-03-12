import React, { PropTypes } from 'react'

const Route = ({ longName }) => (
  <div className="route">
    <h3>{longName}</h3>
  </div>
)

Route.propTypes = {
  longName: PropTypes.string.isRequired,
  id:   PropTypes.string.isRequired
}

export default Route