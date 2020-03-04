import axios from 'axios';
import {apiBaseURL} from './../Utils/Constants';
import {FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIl} from './../Utils/ActionTypes';

export default function FetchCoindata() {
    return dispatch => {
        dispatch({type: FETCHING_COIN_DATA})

        return axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
        .then(res => {
            return dispatch({type: FETCHING_COIN_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            return dispatch({type: FETCHING_COIN_DATA_FAIl, payload: err})
        })
    }
}