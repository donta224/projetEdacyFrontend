import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { inscrireUtilisateur } from '../services/authService';

function Register() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleInscription = async (e) => {
    e.preventDefault();
    try {
      await inscrireUtilisateur({ nom, email, mot_de_passe: motDePasse });
      setMessage('Inscription réussie');
      setTimeout(() => navigate('/connexion'), 1500);
    } catch (error) {
      setMessage(error.response?.data?.message || "Erreur lors de l'inscription");
    }
  };


  return (
    <div  className="container">
      <h2>Inscription</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleInscription}>
        <div>
          <label>Nom</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            required
          />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Register;
