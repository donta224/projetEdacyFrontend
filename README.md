# Projet Edacy Frontend

Ce projet est une application web développée avec **React.js** permettant la gestion de produits et d'utilisateurs. Il communique avec une API backend (Node.js/Express) située dans le dossier `../projetEdacyBackend`.

## Prérequis

- **Node.js** (v14 ou supérieur recommandé)
- **npm** (installé avec Node.js)
- **Git**
- Le backend doit être fonctionnel (voir instructions dans `../projetEdacyBackend/README.md`)

## Installation

1. **Cloner le dépôt frontend**

```bash
git clone https://github.com/donta224/projetEdacyFrontend.git
cd projetEdacyFrontend
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configurer l'URL de l'API**

Par défaut, l'application frontend communique avec le backend à l'adresse :

```
http://localhost:5000/api/
```

Si votre backend tourne sur une autre adresse ou un autre port, modifiez les constantes `API_URL` dans :
- `src/services/authService.js`
- `src/services/productService.js`

## Lancer l'application

Assurez-vous que le backend est démarré avant de lancer le frontend.

```bash
npm start
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

## Fonctionnalités principales

- **Authentification** : Inscription et connexion des utilisateurs (JWT)
- **Gestion des produits** :
  - Ajout, modification, suppression de produits
  - Upload d'image pour chaque produit
  - Visualisation détaillée des produits
- **Dashboard** : Vue d'ensemble des produits (accès protégé)

## Utilisation

1. **Inscription** :
   - Rendez-vous sur `/inscription` pour créer un compte utilisateur.
2. **Connexion** :
   - Connectez-vous via `/connexion`.
3. **Gestion des produits** :
   - Accédez au dashboard pour voir la liste des produits, en ajouter, modifier ou supprimer.
   - L'ajout/modification nécessite de renseigner :
     - Nom (obligatoire)
     - Description (optionnelle)
     - Prix (obligatoire, en CFA)
     - Quantité en stock (obligatoire)
     - Image (optionnelle, format image)

## Structure du projet

- `src/components/` : Composants React (Login, Register, Dashboard, ProductList, etc.)
- `src/services/` : Services pour la communication avec l'API backend
- `src/App.js` : Point d'entrée principal
- `src/App.css` : Styles principaux (CSS classique)

## Personnalisation du style

Le projet utilise du CSS classique (voir `src/App.css`). Vous pouvez personnaliser l'apparence selon vos besoins.

## Crédits

© 2025 Thierno Mahmoudou Ba – Tous droits réservés.

---

**Remarques importantes :**
- L'application frontend ne fonctionnera que si le backend est démarré et accessible.
- Les routes principales de l'API sont `/api/utilisateurs` et `/api/produits`.
- Pour toute modification de l'URL de l'API, pensez à adapter les fichiers de service côté frontend.
