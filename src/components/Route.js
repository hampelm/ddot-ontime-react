import React, { PropTypes } from 'react'

const Route = ({ longName, onRouteRefreshClick }) => (
  <tr className="route">
    <td colSpan="4">
      {longName}
      <button onClick={onRouteRefreshClick} value="Refresh route" />
    </td>
  </tr>
)

Route.propTypes = {
  longName: PropTypes.string.isRequired,
  id:   PropTypes.string.isRequired,
  onRouteRefreshClick: PropTypes.func.isRequired
}

export default Route
