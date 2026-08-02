# Cartes Vérification

Application Next.js 15 pour la soumission de demandes de vérification de cartes, avec envoi par email via Nodemailer.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** & **GSAP** (animations)
- **React Hook Form** + **Zod** (validation)
- **Nodemailer** (envoi email)
- **Lucide React** (icônes)

## Démarrage

```bash
cd frontend
npm install
npm run dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

## Configuration email

Copiez `.env.example` vers `.env.local` et renseignez vos identifiants :

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=votre-email@gmail.com
EMAIL_PASSWORD=votre-mot-de-passe-application
DESTINATION_EMAIL=destination@gmail.com
```

> **Gmail** : utilisez un [mot de passe d'application](https://myaccount.google.com/apppasswords), pas votre mot de passe principal.

Ces variables restent **côté serveur** et ne sont jamais exposées au frontend.

## Déploiement Vercel

1. Poussez le projet sur GitHub
2. Importez le repo dans [Vercel](https://vercel.com)
3. Définissez le **Root Directory** sur `frontend`
4. Ajoutez les variables d'environnement dans les paramètres du projet
5. Déployez

## Structure

```
src/
├── app/           # Pages et Server Actions
├── components/    # Composants React
├── animations/    # Framer Motion & GSAP
├── assets/        # Fichiers statiques
├── hooks/         # Hooks personnalisés
├── services/      # Services (email)
├── lib/           # Utilitaires et validation
├── types/         # Types TypeScript
├── utils/         # Constantes et helpers
└── styles/        # Styles additionnels
```

## Fonctionnalités

- Formulaire premium avec validation côté client et serveur
- Upload d'image (JPG, PNG, WEBP — max 5 Mo)
- Prévisualisation, suppression et remplacement d'image
- Envoi automatique par email avec pièce jointe
- Aucune base de données requise
