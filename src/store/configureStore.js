import { applyMiddleware, compose, createStore } from 'redux'
import enhancers from './enhancers'
import { rootReducer } from '../reducers'

export default function configureStore() {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(),
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

