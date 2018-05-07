import React from 'react';
import { Platform } from 'react-native';

// Redux
import { createStore, applyMiddleware, compose } from 'redux';

// Middleware
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import devTools from 'remote-redux-devtools';

import RootReducer from './Reducer';

const middleWare = applyMiddleware(thunk, promise, logger);

const Store = createStore(
    RootReducer,
    compose(
        middleWare,
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        }),
    )
);

export default Store;