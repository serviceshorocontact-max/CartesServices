export const siteConfig = {
  name: "Cartes Vérification",
  tagline: "Votre plateforme d'authentification de cartes",
  description:
    "Authentifiez vos cartes en quelques clics, vérifiez leur validité ou revendez-les en toute sécurité.",
  activateUrl: "/activate",
  sellUrl: "/sell",
};

export const navLinks = [
  { label: "Accueil", href: "/", icon: "home" as const },
  {
    label: "Authentifier une carte",
    href: "/activate",
    icon: "activate" as const,
  },
  {
    label: "Revendre une carte",
    href: "/sell",
    icon: "sell" as const,
  },
];

export const cardTypes = [
  "Transcash",
  "PCS",
  "Neosurf",
  "Apple",
  "Google Play",
  "Steam",
  "Paysafecard",
  "Amazon",
  "PlayStation",
  "Xbox",
  "Netflix",
  "Spotify",
  "Roblox",
  "Autres",
];

export const currencies = ["EUR", "USD", "GBP", "CHF", "CAD", "Autres"];

export const features = [
  {
    title: "Sécurité Maximale",
    description:
      "Vos transactions sont protégées par des systèmes de sécurité avancés.",
    icon: "shield" as const,
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Large Gamme de Cartes",
    description:
      "Nous acceptons un grand nombre de types de cartes cadeaux, pour une flexibilité maximale.",
    icon: "gift" as const,
    color: "from-emerald-400 to-green-500",
  },
  {
    title: "Processus Simplifié",
    description:
      "Authentifiez ou revendez vos cartes en quelques étapes, sans complications.",
    icon: "check" as const,
    color: "from-pink-400 to-rose-500",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Choisissez votre carte",
    description:
      "Sélectionnez la marque de votre carte (Transcash, PCS, Steam, Paysafecard...) parmi notre liste.",
    image: "/fi1.jpg",
    icon: "search" as const,
  },
  {
    step: "02",
    title: "Entrez votre code",
    description:
      "Saisissez le code de votre carte pour lancer le processus d'authentification en toute sécurité.",
    image: "/fi2.jpg",
    icon: "key" as const,
  },
  {
    step: "03",
    title: "Authentifiez et recevez",
    description:
      "Validez l'authentification de votre carte et recevez votre confirmation instantanément.",
    image: "/fi3.jpg",
    icon: "check" as const,
  },
];

export const acceptedCards = [
  {
    name: "Transcash",
    image: "/cards/carte0.jpg",
    description: "Cartes Transcash et rechargeables",
  },
  {
    name: "PCS",
    image: "/cards/carte1.jpg",
    description: "PCS, cartes prépayées et rechargeables",
  },
  {
    name: "Steam",
    image: "/cards/carte2.jpg",
    description: "Cartes cadeaux Steam et jeux",
  },
  {
    name: "Paysafecard",
    image: "/cards/carte3.jpg",
    description: "Cartes Paysafecard et e-vouchers",
  },
];

export const testimonials = [
  {
    quote:
      "Service ultra-rapide et fiable. J'ai pu authentifier ma carte Steam en moins de 5 minutes. Je recommande vivement !",
    author: "Julien R.",
    initial: "J",
  },
  {
    quote:
      "La revente de ma carte PCS s'est faite sans aucun souci. Le paiement est un vrai plus. Très pro !",
    author: "Marie L.",
    initial: "M",
  },
  {
    quote:
      "Enfin un site clair et simple pour gérer ses cartes cadeaux. Le design est top et le processus est sécurisé. Parfait !",
    author: "Alex K.",
    initial: "A",
  },
];

export const cardBrands = [
  "Transcash",
  "PCS",
  "Steam",
  "Paysafecard",
  "Neosurf",
  "Apple",
];

