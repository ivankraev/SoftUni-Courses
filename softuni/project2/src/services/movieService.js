import * as request from './requester.js'
import * as api from './api.js'


export const getAll = () => request.get(api.movies);

export const getOne = (id) => request.get(`${api.movies}/${id}`);

export const create = (title, imageUrl, description) => request.post(`${api.movies}`, { title, img: imageUrl, description });