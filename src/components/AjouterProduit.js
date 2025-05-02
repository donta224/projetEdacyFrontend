import React from 'react';
import ProductForm from './ProductForm';
import Header from './Header';

function AjouterProduit() {
  return (
    <>
      <Header />
      <div className="container">
        <h2>Ajouter un nouveau produit</h2>
        <ProductForm />
      </div>
    </>
  );
}

export default AjouterProduit;
