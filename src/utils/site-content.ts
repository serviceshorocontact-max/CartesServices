export const siteConfig = {
  name: "Cartes Vérification",
  tagline: "Votre plateforme de gestion de cartes cadeaux",
  description:
    "Vérifiez la validité de vos cartes, activez-les en quelques clics ou revendez-les en toute sécurité.",
  email: "serviceshorocontact@gmail.com",
  whatsapp: "+33600000000",
  whatsappMessage:
    "Bonjour, je souhaite des informations sur la vérification de mes cartes cadeaux.",
};

export const navLinks = [
  { label: "Accueil", href: "#accueil", icon: "home" as const },
  { label: "Activer une carte", href: "#contact", icon: "activate" as const },
  { label: "Revendre une carte", href: "#contact", icon: "sell" as const },
];

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
      "Activez ou revendez vos cartes en quelques étapes, sans complications.",
    icon: "check" as const,
    color: "from-pink-400 to-rose-500",
  },
];

export const acceptedCards = [
  {
    name: "Cartes bancaires",
    image: "/cards/carte0.jpg",
    description: "Visa, Mastercard et cartes prépayées",
  },
  {
    name: "Cartes internationales",
    image: "/cards/carte1.jpg",
    description: "Mastercard et Visa internationales",
  },
  {
    name: "Cartes prépayées",
    image: "/cards/carte2.jpg",
    description: "PCS, Transcash et cartes rechargeables",
  },
  {
    name: "Cartes cadeaux",
    image: "/cards/carte3.jpg",
    description: "Google Play, Steam, Neosurf et plus",
  },
  {
    name: "Cartes premium",
    image: "/cards/crte4.jpg",
    description: "Cartes Visa et Mastercard premium",
  },
];

export const testimonials = [
  {
    quote:
      "Service ultra-rapide et fiable. J'ai pu activer ma carte Steam en moins de 5 minutes. Je recommande vivement !",
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

export const cardBrands = ["PCS", "Transcash", "Google Play", "Steam", "Neosurf", "Apple"];
