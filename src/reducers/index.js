import { combineReducers } from 'redux';
import heroes from "../tempDB";

// import {
//
// } from '../constants/index.js';


export const initialState = {
    heroesList: heroes,
    page: 1,
};


export const Content = (store = initialState, action) => {
            return store
};



export const rootReducer = combineReducers({
    content: Content
});