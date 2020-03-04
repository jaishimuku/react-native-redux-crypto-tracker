import {combineReducers} from 'redux';
import CryptoReducer from'./CryptoReducers';

export default combineReducers({
    crypto: CryptoReducer
})