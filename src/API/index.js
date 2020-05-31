import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const insertHero = payload => api.post(`/hero`, payload);
export const getHeroes = (page) => api.get(`/heroes/${page}`);
export const updateHeroById = (id, payload) => api.put(`/hero/${id}`, payload);
export const deleteHeroById = id => api.delete(`/hero/${id}`);
export const getHeroById = id => api.get(`/hero/${id}`);

const apis = {
    insertHero,
    getHeroes,
    updateHeroById,
    deleteHeroById,
    getHeroById,
};

export default apis;