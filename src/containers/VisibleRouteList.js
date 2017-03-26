import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import Routes from '../components/Routes'
import Route from '../components/Route'
import Overview from '../components/Overview'
import TripList from './TripList'
import { getRoutes } from '../reducers/routes'
import { getOverview } from '../reducers/trips'
import { fetchRoutesIfNeeded } from '../actions/routes'
import { fetchTripIfNeeded } from '../actions/trips'

// Cribbed from examples => async => containers/App

class VisibleRouteList extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    fetchRoutesIfNeeded: PropTypes.func.isRequired,
    overview: PropTypes.object.isRequired
  }

  componentDidMount = () => {
    this.props.fetchRoutesIfNeeded()
  }

  render() {
    const {routes, onRouteRefreshClick, overview} = this.props

    const routeList = routes.map(route => <div key={route.id} >
      <Route {...route} onRouteRefreshClick={() => onRouteRefreshClick(route.id)} />
      <TripList route={route} />
    </div>)


    let stats = {
      ...overview,
      notTracked: overview['not tracked'],
      ontime: overview['on time']
    }

    return (
      <div className='routes'>
        <Overview {...stats} />
        {routeList}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    isFetching: state.routes.isFetching,
    routes: getRoutes(state.routes),
    overview: getOverview(state.trips)
  }
}


// I got this from http://redux.js.org/docs/basics/UsageWithReact.html
// "Implementing Container Components"

export default connect(mapStateToProps, {
  fetchRoutesIfNeeded, // Kinda from real-world/containers/RepoPage
  onRouteRefreshClick: fetchTripIfNeeded
})(VisibleRouteList)
