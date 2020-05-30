import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const insertHero = payload => api.post(`/hero`, payload);
export const getAllHeroes = () => api.get(`/heroes`);
export const updateHeroById = (id, payload) => api.put(`/hero/${id}`, payload);
export const deleteHeroById = id => api.delete(`/hero/${id}`);
export const getHeroById = id => api.get(`/hero/${id}`);

const apis = {
    insertHero,
    getAllHeroes,
    updateHeroById,
    deleteHeroById,
    getHeroById,
};

export default apis;