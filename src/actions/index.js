import {
    SET_TOTAL_PAGES,
    SET_PAGE,
    SET_HEROES,
    SET_LOADING
} from '../constants/index.js';

import {getHeroes} from '../API';

export const setPage = page => {
    return({
        type: SET_PAGE,
        page
    })
};

export const setTotalPages = totalPages => {
    return ({
        type: SET_TOTAL_PAGES,
        totalPages
    })
};

export const setHeroes = heroesList => {
    return({
        type: SET_HEROES,
        heroesList
    })
};

export const isLoading = isLoading => {
    return ({
        type: SET_LOADING,
        isLoading
    })
};

export const changePage = (page) => {
    return (dispatch, getState) => {
        dispatch(setPage(page));
        dispatch(loadContent(page));
    }
};

const loadContent = (page = 1) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        getHeroes(page)
            .then(heroes => {
            if (heroes.length === 0) {
                dispatch(isLoading(false));
                return []
            }
            let newHeroes = [];
            heroes.data.data.map(Hero => newHeroes.push(Hero));
            return newHeroes;

        })
            .then((data) => {
                    dispatch(setHeroes(data));
                    dispatch(isLoading(false));
            })
    }
};

export const setLoading = (loading) => {
    return (dispatch, getState) => {
        dispatch(isLoading(loading));
    }
};