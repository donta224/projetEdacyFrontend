import React, { useState } from 'react';
import { updateProduit } from '../services/productService';

function ProductEditForm({ produit, onCancel, onUpdate }) {
  const [nom, setNom] = useState(produit.nom);
  const [description, setDescription] = useState(produit.description);
  const [prix, setPrix] = useState(produit.prix);
  const [quantiteStock, setQuantiteStock] = useState(produit.quantite_stock);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('description', description);
    formData.append('prix', prix);
    formData.append('quantite_stock', quantiteStock);
    if (image) formData.append('image', image);

    try {
      await updateProduit(produit.id, formData);
      setMessage('Produit mis à jour');
      onUpdate();
    } catch (error) {
      setMessage(error.response?.data?.message || 'Erreur');
    }
  };

  return (
    <div>
      <h4>Modifier le produit</h4>
      {message && <p>{message}</p>}
      <form onSubmit={handleUpdate} encType="multipart/form-data">
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" value={prix} onChange={(e) => setPrix(e.target.value)} required />
        <input type="number" value={quantiteStock} onChange={(e) => setQuantiteStock(e.target.value)} required />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" />
        <button type="submit">Mettre à jour</button>
        <button type="button" onClick={onCancel}>Annuler</button>
      </form>
    </div>
  );
}

export default ProductEditForm;
