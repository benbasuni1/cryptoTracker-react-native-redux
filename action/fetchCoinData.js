import axios from 'axios';
import { apiBaseURL } from './../utils/constants';

// Import Action Types from Reducer
import { FETCH_COIN_DATA, FETCH_COIN_DATA_FAILED, FETCH_COIN_DATA_SUCCESS } from './../utils/actionTypes';

export default function FetchCoinData() {
   return dispatch => {
       dispatch({ type : FETCH_COIN_DATA })

       return axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
        .then(res => {
            dispatch({ type : FETCH_COIN_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type : FETCH_COIN_DATA_FAILED, payload: res.data })
        })
   }
}