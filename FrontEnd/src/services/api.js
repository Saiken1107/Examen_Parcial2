import axios from 'axios';

// Configuración de Axios para las solicitudes HTTP hacia el backend
const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Cambia a la URL de tu backend cuando esté en producción
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
