import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const insertHero = payload => api.post(`/movie`, payload);
export const getAllHeroes = () => api.get(`/movies`);
export const updateHeroById = (id, payload) => api.put(`/movie/${id}`, payload);
export const deleteHeroById = id => api.delete(`/movie/${id}`);
export const getHeroById = id => api.get(`/movie/${id}`);

const apis = {
    insertHero,
    getAllHeroes,
    updateHeroById,
    deleteHeroById,
    getHeroById,
};

export default apis;