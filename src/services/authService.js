// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/utilisateurs';

export const inscrireUtilisateur = (data) => {
    return axios.post(`${API_URL}/inscription`, data);
};

export const connecterUtilisateur = (data) => {
    return axios.post(`${API_URL}/connexion`, data);
};
