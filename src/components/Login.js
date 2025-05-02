import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connecterUtilisateur } from '../services/authService';

function Login() {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleConnexion = async (e) => {
    e.preventDefault();
    try {
      const response = await connecterUtilisateur({ email, mot_de_passe: motDePasse });
      localStorage.setItem('token', response.data.token);
      setMessage('Connexion réussie !');
      setTimeout(() => navigate('/'), 1000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Erreur de connexion');
    }
  };

  return (
    <div className="container">
      <h2>Connexion</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleConnexion}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Mot de passe</label>
        <input type="password" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} required />

        <button type="submit">Se connecter</button>
      </form>

      <p style={{ marginTop: '15px' }}>
        Pas encore de compte ?{' '}
        <button onClick={() => navigate('/inscription')} className="button-secondary">
          Créer un compte
        </button>
      </p>
    </div>
  );
}

export default Login;
