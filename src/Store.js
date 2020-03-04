import {Platform} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
//import devTools from 'remote-redux-devtools';
import devTools from 'remote-redux-devtools-sp';

import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './Reducers/CryptoReducer';

const middleware = applyMiddleware(promise, thunk);

const Store = createStore(
    RootReducer,
    compose(
        middleware,
        devTools({
            realtime: true,
            name: Platform.OS,
            hostname: 'localhost',
            port: 8000
        }),
    )
)
export default Store;
