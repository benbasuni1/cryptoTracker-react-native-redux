import axios from 'axios';
import { apiBaseURL } from './../utils/constants';

/* Note on dispatch:
    Dispatch sets the state to whatever is in actionType, using Object.assign (Look in CrpytoReducer.js for this file)
    Dispatch takes an object
*/

// Import Action Types from Reducer
import { FETCHING_COIN_DATA, FETCHING_COIN_DATA_FAILED, FETCHING_COIN_DATA_SUCCESS } from './../utils/actionTypes';

export default function FetchCoinData() {

    // How does dispatch know that FETCHING_COIN, etc is in CryptoReducer.js
    return dispatch => {

        // dispatch FETCH COIN DATA
        dispatch({ type : FETCHING_COIN_DATA })

        return axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
            .then(res => {
                dispatch({ type : FETCHING_COIN_DATA_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type : FETCHING_COIN_DATA_FAILED, payload: res.data })
            })
   }
}