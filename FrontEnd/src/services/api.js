import axios from 'axios';

const api = axios.create({
  baseURL: 'https://examen-parcial2.onrender.com/api',
});

export const searchProducts = async (query) => {
    const response = await api.get(`/items?q=${query}`);
    return response.data;
};

export const getProductDetail = async (id) => {
    const response = await api.get(`/items/${id}`);
    return response.data;
};

export const getSales = async () => {
    const response = await api.get('/sales');
    return response.data;
};

export default api;
