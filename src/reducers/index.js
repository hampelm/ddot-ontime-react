import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import routes from './routes'
import trips from './trips'

console.log('xxxx using trips reducer', trips)

const reducer = combineReducers({
  routes,
  trips,
  routing // for react-router-redux
})

export default reducer
