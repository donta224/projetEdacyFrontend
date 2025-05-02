import React, { useState } from 'react';
import { createProduit } from '../services/productService';
import { useNavigate } from 'react-router-dom';

function ProductForm() {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');
  const [quantiteStock, setQuantiteStock] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('description', description);
    formData.append('prix', prix);
    formData.append('quantite_stock', quantiteStock);
    if (image) formData.append('image', image);

    try {
      await createProduit(formData);
      setMessage('✅ Produit ajouté avec succès');

      // Rediriger vers le dashboard après 1 seconde
      setTimeout(() => {
        navigate('/');
      }, 1000);

    } catch (error) {
      setMessage(error.response?.data?.message || '❌ Erreur lors de l’ajout du produit');
    }
  };

  return (
    <div>
      <h3>Ajouter un produit</h3>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>Nom</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Prix (CFA)</label>
        <input
          type="number"
          step="0.01"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          required
        />

        <label>Quantité en stock</label>
        <input
          type="number"
          value={quantiteStock}
          onChange={(e) => setQuantiteStock(e.target.value)}
          required
        />

        <label>Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default ProductForm;
