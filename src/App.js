// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import AjouterProduit from './components/AjouterProduit';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/"
          element={
            <PrivateRoute>
              <ProductList />
            </PrivateRoute>} />
        <Route path="/ajouter-produit" element={<PrivateRoute><AjouterProduit /></PrivateRoute>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
