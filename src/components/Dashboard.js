import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import Header from './Header';

function Dashboard() {
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const handleRefresh = () => setRefresh(!refresh);

  return (
    <>
      <Header />
      <div className="container">
        <h2 style={{ marginLeft: '30%' , fontSize: '50px'}}>Tableau de bord</h2>

        <button onClick={() => navigate('/ajouter-produit')} style={{ marginBottom: '20px' , fontSize: '30px' , backgroundColor: 'azure' }}>
          Ajouter un produit
        </button>

        <ProductList key={refresh} />
      </div>
    </>
  );
}

export default Dashboard;
