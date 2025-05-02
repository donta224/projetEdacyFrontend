import React from 'react';

function ProductDetailsModal({ produit, onClose }) {
  if (!produit) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3>Détails du produit</h3>
        <p><strong>Nom :</strong> {produit.nom}</p>
        <p><strong>Description :</strong> {produit.description}</p>
        <p><strong>Prix :</strong> {produit.prix} CFA</p>
        <p><strong>Stock :</strong> {produit.quantite_stock}</p>
        {produit.image && (
          <img
            src={`http://localhost:5000/uploads/${produit.image}`}
            alt={produit.nom}
            style={{ width: '100%', marginTop: '10px', borderRadius: '5px' , height: '410px' }}
          />
        )}
        <button onClick={onClose} style={{ marginTop: '15px' }}>
          Fermer
        </button>
      </div>
    </div>
  );
}

export default ProductDetailsModal;
