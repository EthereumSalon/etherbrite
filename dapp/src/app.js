import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

// import components
import App from './components/app'
import Crowdsale from './components/crowdsale'
import Welcome from './components/welcome'
import Layout from './components/layout'
import Create from './components/create'
// import Rigester from './components/rigester'
// import Checkin from './components/checkin'
import reducers from './reducers'

// import actions that will be used in this file, after building store
import { connectEth } from './actions'

// read styling
import './styles/index.scss'

// create a store from reducers and reduxThunk
const store = applyMiddleware(reduxThunk)(createStore)(reducers)

// initialize the connection with ethereum blockchain
connectEth()(store.dispatch);

// build the Root Component and declare Routes
const Root = () => (
  <Provider store={store}>
    <HashRouter hashType="noslash">
      <Layout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/create" component={Create} />
          {/* <Route path="/event" component={Event} /> */}
          {/* <Route path="/rigester" component={Rigester} />
          <Route path="/checkin" component={Checkin} /> */}
        </Switch>
      </Layout>
    </HashRouter>
  </Provider>
)

// render the App to root element
ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
