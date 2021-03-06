import {
    SET_TOTAL_PAGES,
    SET_PAGE,
    SET_HEROES,
    SET_LOADING
} from '../constants/index.js';

import {getHeroes, getTotalPages} from '../API';

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
        dispatch(loadContent());
    }
};

export const loadContent = () => {
    return (dispatch, getState) => {
        dispatch(isLoading(true));
        getHeroes(getState().content.page)
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
    return (dispatch) => {
        dispatch(isLoading(loading));
    }
};

export const TotalPages = () => {
  return (dispatch) => {
      getTotalPages()
          .then(res => {
              const totalHeroes = res.data.data;
              const totalPages = Math.ceil(totalHeroes/5)
              dispatch(setTotalPages(totalPages));
          });
  }
};