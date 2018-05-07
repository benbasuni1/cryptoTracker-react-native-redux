// Import Action Types 
import { FETCHING_COIN_DATA, FETCHING_COIN_DATA_FAILED, FETCHING_COIN_DATA_SUCCESS } from './../../utils/actionTypes';

// Initial Reducer State
const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMsg: null
}

// 2 params for reducers, initial State, and action (whatever is returned)
export default function(state = initialState, action) {

    // In determining what type of action, use switch case statement
    // Also note that we are using Object.assign to the state
    switch (action.type) {
        case FETCHING_COIN_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                errorMsg: null
            })
        case FETCHING_COIN_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMsg: null
            })
        case FETCHING_COIN_DATA_FAILED:
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