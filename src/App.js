import React, { Component } from 'react';
import { configureStore } from './store';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { Route } from 'react-router'
import SignUpView from './components/signUp/SignUpViewContainer'
import SignInView from './components/signIn/SignInViewContainer'
import HomeView from './components/home/HomeViewContainer'
import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';

const history = createHistory()
const middleware = routerMiddleware(history)
const store = configureStore([middleware])

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <div className="container"> </div>
            <div className="container">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>ChatterBot</h1>
            </div>
            <div className="container links">
              <a href="/sign_in">Sign in</a> &nbsp;--&nbsp;&nbsp;
              <a href="/sign_up">Sign up</a>
            </div>
          </div>
          <ConnectedRouter history={history}>
            <div>
              <Route exact path="/" component={HomeView}/>
              <Route path="/home" component={HomeView}/>
              <Route path="/sign_up" component={SignUpView}/>
              <Route path="/sign_in" component={SignInView}/>
            </div>
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
