import React, { PropTypes } from 'react'
import './Route.css'

const Route = ({ shortName, longName, onRouteRefreshClick }) => (
  <div className="route">
    <h2>
      {shortName} {longName}
      <button onClick={onRouteRefreshClick}>Refresh</button>
    </h2>

    <div className="trip">
      <div>Trip id</div>
      <div>Headsign</div>
      <div>Last data from bus</div>
      <div>Schedule deviation in seconds</div>
      <div>Status</div>
    </div>
  </div>
)

Route.propTypes = {
  longName: PropTypes.string.isRequired,
  shortName: PropTypes.string,
  id:   PropTypes.string.isRequired,
  onRouteRefreshClick: PropTypes.func.isRequired
}

export default Route
