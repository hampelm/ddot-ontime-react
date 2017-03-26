import React, { PropTypes } from 'react'
import Moment from 'react-moment';
import './Trip.css'

const Trip = ({ tripId, tripHeadsign, lastUpdateTime, scheduleDeviation, delay }) => (
  <div className="trip">
    <div>{tripId}</div>
    <div>{tripHeadsign}</div>
    <div><Moment format="h:mma MMMM Do YYYY">{lastUpdateTime}</Moment></div>
    <div className="refreshes">{scheduleDeviation}</div>
    <div className="refreshes">{delay}</div>
  </div>
)

Trip.propTypes = {
  tripId: PropTypes.string.isRequired,
  tripHeadsign: PropTypes.string,
  lastUpdateTime: PropTypes.number,
  scheduleDeviation: PropTypes.number,
  delay: PropTypes.string
}

export default Trip
