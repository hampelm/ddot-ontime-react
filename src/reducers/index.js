import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import routes from './routes'

const reducer = combineReducers({
  routes,
  routing // for react-router-redux
})

export default reducer
