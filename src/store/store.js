import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {usData, statesInformation, statesCurrent, usDaily} from '../reducer/covidReducer'

const initailState = {}

const middleleware = [thunk];

const store = createStore(combineReducers({usData, statesInformation, statesCurrent, usDaily}), initailState, compose(
    
    
    applyMiddleware(...middleleware),
))

export default store;
