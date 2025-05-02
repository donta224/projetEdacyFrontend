// src/services/productService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/produits';

const config = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export const getProduits = () => axios.get(API_URL, config());

export const createProduit = (formData) =>
    axios.post(API_URL, formData, {
        ...config(),
        headers: {
            ...config().headers,
            'Content-Type': 'multipart/form-data'
        }
    });

export const updateProduit = (id, formData) =>
    axios.put(`${API_URL}/${id}`, formData, {
        ...config(),
        headers: {
            ...config().headers,
            'Content-Type': 'multipart/form-data'
        }
    });

export const deleteProduit = (id) => axios.delete(`${API_URL}/${id}`, config());
