const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore, applyMiddleware, compose } = require('redux')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const reducer = require('./reducers')
const initialState = require('../state')

// Top Level Components
const App = require('./containers/app')
const Home = require('./containers/home')
const FarmProfile = require('./containers/farmProfile')

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
})

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='/farm/:id' component={FarmProfile} />
        </Route>
      </Router>
    </Provider>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')

  ReactDOM.render(
    <Root store={store} />,
		root
	)
})
