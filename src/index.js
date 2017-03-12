import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import Root from './containers/Root'
import reducer from './reducers'


// Dev middleware
const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}


const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)
const history = syncHistoryWithStore(browserHistory, store)

const rootEl = document.getElementById('root')

render(
  <Root store={store} history={history} />,
  rootEl
)
