import React, { useEffect, useState } from 'react';
import { getProduits, deleteProduit } from '../services/productService';
import ProductEditForm from './ProductEditForm';
import ProductDetailsModal from './ProductDetailsModal';


function ProductList() {
    const [produits, setProduits] = useState([]);
    const [produitEdite, setProduitEdite] = useState(null);
    const [message, setMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalProduit, setModalProduit] = useState(null);


    const fetchProduits = async () => {
        try {
            const response = await getProduits();
            setProduits(response.data);
        } catch {
            setMessage('Erreur lors du chargement des produits.');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Confirmer la suppression ?')) return;
        try {
            await deleteProduit(id);
            fetchProduits();
        } catch {
            alert('Erreur de suppression');
        }
    };

    useEffect(() => {
        fetchProduits();
    }, []);

    const openEditModal = (produit) => {
        setProduitEdite(produit);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setProduitEdite(null);
    };

    return (
        <div className="container">
            <h2>Liste des produits</h2>
            {message && <p>{message}</p>}

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '2px',
                marginTop: '20px'
            }}>
                {produits.map((produit) => (
                    <div key={produit.id} style={{
                        border: '1px solid #ccc',
                        padding: '15px',
                        borderRadius: '8px',
                        background: '#fff'
                    }}>
                        <strong>{produit.nom}</strong><br />
                        {produit.description}<br />
                        Prix : {produit.prix} CFA<br />
                        Stock : {produit.quantite_stock}<br />
                        {produit.image && (
                            <img
                                src={`http://localhost:5000/uploads/${produit.image}`}
                                alt={produit.nom}
                                style={{ width: '100%', marginTop: '10px' }}
                            />
                        )}
                        <div style={{ marginTop: '10px' }}>
                            <button onClick={() => openEditModal(produit)} style={{ marginRight: '10px' }}>
                                Modifier
                            </button>
                            <button onClick={() => handleDelete(produit.id)} style={{ backgroundColor: 'red', marginRight: '10px', color: 'white' }}>
                                Supprimer
                            </button>
                            <button onClick={() => setModalProduit(produit)} style={{ marginBottom: '10px', marginTop: '10px' }}>
                                Voir plus
                            </button>

                        </div>
                    </div>
                ))}
            </div>
            {modalProduit && (
  <ProductDetailsModal
    produit={modalProduit}
    onClose={() => setModalProduit(null)}
  />
)}

            {/* Modal */}
            {modalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <ProductEditForm
                            produit={produitEdite}
                            onCancel={closeModal}
                            onUpdate={() => {
                                closeModal();
                                fetchProduits();
                            }}
                        />
                    </div>
                </div>
            )} 

        </div>
        
        
    );
    
}

export default ProductList;
