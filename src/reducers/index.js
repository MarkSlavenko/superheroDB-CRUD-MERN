import { combineReducers } from 'redux';

import {
    SET_TOTAL_PAGES,
    SET_PAGE,
    SET_HEROES,
    SET_LOADING
} from '../constants/index.js';



export const initialState = {
    heroesList: null,
    page: 2,
    isLoading: false,
    totalPages: 'Calculation'
};


export const Content = (store = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_PAGES :
            return {...store,
                totalPages: action.totalPages
            };
        case SET_PAGE :
            return {...store,
                page: action.page
            };
        case SET_HEROES :
            return {...store,
                heroesList: action.heroesList
            };
        case SET_LOADING :
            return {...store,
                isLoading: action.isLoading
            };
        default :
            return store;
    }
};



export const rootReducer = combineReducers({
    content: Content
});