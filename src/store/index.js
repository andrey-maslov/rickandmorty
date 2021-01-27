import { createStore, compose, applyMiddleware, Middleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga'
import { charactersWatcher } from "../saga/charactersSaga";

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => (
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(sagaMiddleware)
        )
    )
);

const index = configureStore({});

sagaMiddleware.run(charactersWatcher)

export default index;