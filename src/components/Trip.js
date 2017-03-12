import React, { PropTypes } from 'react'

const Trip = ({ tripId }) => (
  <div className="trip">
    <h3>Here is a trip {tripId}</h3>
  </div>
)

Trip.propTypes = {
  tripId: PropTypes.string.isRequired
}

export default Trip
