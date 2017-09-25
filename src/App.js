import React, { Component } from 'react';
import { configureStore } from './store';
import SignUpView from './components/signUp/SignUpViewContainer'
import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';


const store = configureStore();

class App extends Component {
    render() {
        return (
                <Provider store={store}>
                    <div className="App">
                        <div className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1>Welcome to ChatterBot</h1>
                        </div>
                        <SignUpView />
                    </div>
                </Provider>
        );
    }
}

export default App;
