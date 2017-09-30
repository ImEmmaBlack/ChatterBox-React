import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import enhancers from './enhancers'
import { rootReducer } from '../reducers'
import delayedDispatch from 'redux-delayed-dispatch'

export default function configureStore(middlewares) {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(...([thunk, delayedDispatch].concat(middlewares))),
            ...enhancers
        )
    )

    // This enables hot module reloading for the Redux store when you make changes to the reducers.
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').rootReducer
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
}

