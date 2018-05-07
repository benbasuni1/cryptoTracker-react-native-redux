// Import Action Types 
import { FETCH_COIN_DATA, FETCH_COIN_DATA_FAILED, FETCH_COIN_DATA_SUCCESS } from './../../utils/actionTypes';

// Initial Reducer State
const initialReducer = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMsg: null
}

export default function(state = initialReducer, action) {

    // In determining what type of action, use switch case statement
    // Also note that we are using Object.assign to the state
    switch (action.type) {
        case FETCH_COIN_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                errorMsg: null
            })
        case FETCH_COIN_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMsg: null
            })
        case FETCH_COIN_DATA_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: true,
                errorMsg: action.err
            })
        default:
            return state;
    }
    return state;
}