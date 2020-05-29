import { combineReducers } from 'redux';
import heroes from "../tempDB";

// import {
//
// } from '../constants/index.js';


export const initialState = {
    heroesList: heroes,
};


export const Content = (store = initialState, action) => {
            return store
};



export const rootReducer = combineReducers({
    content: Content
});