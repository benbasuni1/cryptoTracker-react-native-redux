import React from 'react';
import { Platform } from 'react-native';

// Redux
import { createStore, applyMiddleware, compose } from 'redux';

// Middleware
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Dev Tools
import devTools from 'remote-redux-devtools';

// Your Root Reducer
import RootReducer from './Reducer';

const middleWare = applyMiddleware(thunk, promise, logger);

// Store to be exported with options
const Store = createStore(

    // 1st param is Root Reducer
    RootReducer,

    // 2nd param includes compose that has middleware && devtools to be used
    // Note: Don't forget to include remoteDev option in package.json!!
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