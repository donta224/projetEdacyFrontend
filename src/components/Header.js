import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/connexion');
  };

  return (
    <header style={{
      backgroundColor: '#007BFF',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white'
    }}>
      <div>
        <NavLink to="/" style={navStyle}>Dashboard</NavLink>
        <NavLink to="/ajouter-produit" style={navStyle}>Ajouter un produit</NavLink>
      </div>
      <button onClick={handleLogout} style={{
        backgroundColor: 'white',
        color: '#007BFF',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Déconnexion
      </button>
    </header>
  );
}

const navStyle = ({ isActive }) => ({
  marginRight: '15px',
  textDecoration: 'none',
  color: isActive ? '#FFD700' : 'white',
  fontWeight: 'bold'
});

export default Header;
