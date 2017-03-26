import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import Routes from '../components/Routes'
import Trip from '../components/Trip'
import { getTripsForRoute } from '../reducers/trips'
import { fetchTripsIfNeeded } from '../actions/trips'
import './TripList.css'

// Cribbed from examples => async => containers/App

class TripList extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired,
    // isFetching: PropTypes.bool.isRequired,
    fetchTripsIfNeeded: PropTypes.func.isRequired
  }

  componentDidMount = () => {
    this.props.fetchTripsIfNeeded(this.props.route)
  }

  render() {
    const {trips} = this.props

    const tripList = trips.map(trip =>
      <Trip {...trip} key={trip.tripId} />
    )

    return (
      <div className='trips'>
        {tripList}
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    // isFetching: state.trips.isFetching,
    trips: getTripsForRoute(state.trips, ownProps.route.id),
  }
}


// I got this from http://redux.js.org/docs/basics/UsageWithReact.html
// "Implementing Container Components"

export default connect(mapStateToProps, {
  fetchTripsIfNeeded // Kinda from real-world/containers/RepoPage
})(TripList)
