import type { Messages } from "../types";

export const fr: Messages = {
  site: {
    name: "Cartes Vérification",
    tagline: "Votre plateforme d'authentification de cartes",
    description:
      "Authentifiez vos cartes en quelques clics, vérifiez leur validité ou revendez-les en toute sécurité.",
  },
  nav: {
    home: "Accueil",
    activate: "Authentifier une carte",
    sell: "Revendre une carte",
    menu: "Menu",
  },
  hero: {
    badge: "Authentification sécurisée en temps réel",
    ctaActivate: "Authentifier une carte",
    ctaSell: "Revendre une carte",
    instantAuth: "Authentification instantanée",
    fastPayment: "Paiement rapide",
    support: "Support 7j/7",
  },
  features: {
    security: {
      title: "Sécurité Maximale",
      description:
        "Vos transactions sont protégées par des systèmes de sécurité avancés.",
    },
    variety: {
      title: "Large Gamme de Cartes",
      description:
        "Nous acceptons un grand nombre de types de cartes cadeaux, pour une flexibilité maximale.",
    },
    simplicity: {
      title: "Processus Simplifié",
      description:
        "Authentifiez ou revendez vos cartes en quelques étapes, sans complications.",
    },
  },
  howItWorks: {
    title: "Comment ça marche ?",
    subtitle: "Authentifiez vos cartes en 3 étapes simples et rapides",
    step: "Étape",
    steps: [
      {
        title: "Choisissez votre carte",
        description:
          "Sélectionnez la marque de votre carte (Transcash, PCS, Steam, Paysafecard...) parmi notre liste.",
      },
      {
        title: "Entrez votre code",
        description:
          "Saisissez le code de votre carte pour lancer le processus d'authentification en toute sécurité.",
      },
      {
        title: "Authentifiez et recevez",
        description:
          "Validez l'authentification de votre carte et recevez votre confirmation instantanément.",
      },
    ],
  },
  acceptedCards: {
    title: "Cartes acceptées",
    subtitle: "Transcash, PCS, Steam, Paysafecard, Neosurf et bien plus encore",
    cards: [
      { name: "Transcash", description: "Cartes Transcash et rechargeables" },
      { name: "PCS", description: "PCS, cartes prépayées et rechargeables" },
      { name: "Steam", description: "Cartes cadeaux Steam et jeux" },
      { name: "Paysafecard", description: "Cartes Paysafecard et e-vouchers" },
    ],
  },
  testimonials: {
    title: "Ce que nos clients disent",
    items: [
      {
        quote:
          "Service ultra-rapide et fiable. J'ai pu authentifier ma carte Steam en moins de 5 minutes. Je recommande vivement !",
        author: "Julien R.",
      },
      {
        quote:
          "La revente de ma carte PCS s'est faite sans aucun souci. Le paiement est un vrai plus. Très pro !",
        author: "Marie L.",
      },
      {
        quote:
          "Enfin un site clair et simple pour gérer ses cartes cadeaux. Le design est top et le processus est sécurisé. Parfait !",
        author: "Alex K.",
      },
    ],
  },
  contact: {
    title: "Besoin d'aide ?",
    subtitle:
      "Notre équipe est là pour vous accompagner. Contactez-nous via le formulaire ci-dessous.",
    ctaActivate: "Authentifier une carte",
  },
  footer: {
    description:
      "Service sécurisé d'authentification et de revente de cartes cadeaux. Nous vous accompagnons dans toutes vos transactions.",
    services: "Services",
    legal: "Informations légales",
    privacy: "Politique de confidentialité",
    mentions: "Mentions légales",
    terms: "Conditions générales",
    contact: "Contact",
    contactResponse: "Réponse sous 24h ouvrées",
    copyright: "Tous droits réservés.",
  },
  activate: {
    title: "Authentifier une carte",
    subtitle:
      "Remplissez le formulaire ci-dessous pour lancer le processus d'authentification de votre carte cadeau.",
    secure: {
      title: "Sécurisé et confidentiel",
      description:
        "Vos données sont chiffrées et traitées en toute confidentialité.",
    },
    fast: {
      title: "Traitement rapide",
      description: "Réponse sous 24h ouvrées, souvent plus rapide.",
    },
    rates: {
      title: "Meilleurs taux",
      description: "Nous proposons les meilleurs taux du marché.",
    },
    form: {
      lastName: "Nom",
      lastNamePlaceholder: "Votre nom",
      email: "Email",
      emailPlaceholder: "votre@email.com",
      cardType: "Type de carte",
      cardTypePlaceholder: "Sélectionnez le type de carte",
      cardCode: "Code de la carte",
      cardCodePlaceholder: "Entrez le code de votre carte",
      amount: "Montant",
      amountPlaceholder: "Montant de la carte",
      currency: "Devise",
      currencyPlaceholder: "Sélectionnez la devise",
      documents: "Justificatifs (facultatif)",
      documentsHint: "Glissez vos documents ici",
      submit: "AUTHENTIFIER",
      successTitle: "Demande envoyée avec succès !",
      successMessage:
        "Votre demande a été envoyée avec succès. Un message vous sera envoyé pour cette transaction.",
      errorTitle: "Une erreur est survenue",
    },
loading: {
      title: "Authentification de votre carte...",
      subtitle: "Vérification sécurisée en cours...",
      wait: "Veuillez patienter...",
    },
success: {
      title: "Félicitations, votre authentification a été effectuée avec succès",
      message: "Vous pouvez attendre quelques instants pour vérifier votre mail",
      goHome: "Retour à l'accueil",
    },
  },
  sell: {
    title: "Revendre une carte",
    subtitle:
      "Remplissez le formulaire ci-dessous pour nous proposer votre carte à la revente.",
    secure: {
      title: "Transaction sécurisée",
      description: "Paiement sécurisé, vos données sont protégées.",
    },
    fast: {
      title: "Paiement rapide",
      description: "Recevez votre paiement sous 24h après validation.",
    },
    rates: {
      title: "Meilleurs taux",
      description: "Nous proposons les meilleurs taux du marché.",
    },
    form: {
      firstName: "Prénom",
      firstNamePlaceholder: "Votre prénom",
      lastName: "Nom",
      lastNamePlaceholder: "Votre nom",
      email: "Email",
      emailPlaceholder: "votre@email.com",
      cardType: "Type de carte",
      cardTypePlaceholder: "Sélectionnez le type de carte",
      cardCode: "Code de la carte",
      cardCodePlaceholder: "Entrez le code de votre carte",
      paymentMethod: "Méthode de paiement",
      paymentMethodHint: "Numéro de carte bancaire ou adresse PayPal",
      paymentMethodNote:
        "Méthode fixe. Les coordonnées de paiement vous seront demandées par email, jamais via ce formulaire.",
      amount: "Montant",
      amountPlaceholder: "Montant de la carte",
      currency: "Devise",
      currencyPlaceholder: "Sélectionnez la devise",
documents: "Justificatifs (facultatif)",
      documentsHint: "Glissez vos documents ici",
      submit: "Lancer la demande",
      successTitle: "Demande envoyée avec succès !",
      successMessage:
        "Votre demande a été envoyée avec succès. Veuillez patienter, nous examinons votre demande afin de pouvoir vous répondre.",
      errorTitle: "Une erreur est survenue",
    },
  },
  form: {
    required: "Ce champ est obligatoire.",
    invalidEmail: "Adresse email invalide.",
    invalidFileType: "Format de fichier non supporté.",
    fileTooLarge: "Le fichier dépasse la taille maximale autorisée (5 Mo).",
    submitError:
      "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
  },
  legal: {
    privacy: {
      title: "Politique de confidentialité",
      metaDescription:
        "Politique de confidentialité de Cartes Vérification – protection de vos données personnelles.",
      lastUpdated: "Dernière mise à jour : 1er août 2026",
      sections: [
        {
          title: "1. Responsable du traitement",
          content:
            "Cartes Vérification est responsable du traitement des données collectées via ce site. Contact : contact@cartes-verification.fr",
        },
        {
          title: "2. Données collectées",
          content:
            "Formulaire d'authentification : nom, adresse email, type de carte, code de la carte, montant et devise.\n\nFormulaire de revente : prénom, nom, adresse email, type de carte, code de la carte, montant et devise.\n\nDocuments justificatifs que vous choisissez de joindre (images ou PDF).\n\nDonnées de mesure d'audience agrégées fournies par notre hébergeur.",
        },
        {
          title: "3. Finalités et base légale",
          content:
            "Traiter votre demande d'authentification ou de revente : exécution du service que vous demandez.\n\nVérifier la légitimité d'une demande et prévenir la fraude : intérêt légitime.\n\nRépondre aux obligations légales applicables, notamment en matière de lutte contre la fraude.",
        },
        {
          title: "4. Destinataires et sous-traitants",
          content:
            "Vercel : hébergement du site et mesure d'audience.\n\nNodemailer : acheminement des emails de notification vers notre équipe.\n\nAucune donnée n'est vendue ni cédée à des fins publicitaires.",
        },
        {
          title: "5. Durée de conservation",
          content:
            "Les demandes et documents sont conservés le temps nécessaire au traitement, puis supprimés, sauf obligation légale de conservation plus longue.",
        },
        {
          title: "6. Sécurité",
          content:
            "Les échanges avec le site sont chiffrés (HTTPS). Ne transmettez jamais vos identifiants bancaires via les formulaires du site.",
        },
        {
          title: "7. Vos droits",
          content:
            "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité sur vos données.\n\nPour exercer ces droits, écrivez à contact@cartes-verification.fr.\n\nVous pouvez introduire une réclamation auprès de la CNIL (www.cnil.fr).",
        },
      ],
    },
    mentions: {
      title: "Mentions légales",
      metaDescription:
        "Mentions légales de Cartes Vérification – informations sur l'éditeur et l'hébergeur du site.",
      lastUpdated: "Dernière mise à jour : 1er août 2026",
      sections: [
        {
          title: "1. Éditeur du site",
          content:
            "Cartes Vérification, entreprise individuelle.\n\nAdresse : à compléter.\n\nNuméro d'immatriculation : à compléter.\n\nContact : contact@cartes-verification.fr",
        },
        {
          title: "2. Directeur de la publication",
          content: "Le représentant légal de Cartes Vérification.",
        },
        {
          title: "3. Hébergeur",
          content:
            "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.",
        },
        {
          title: "4. Propriété intellectuelle",
          content:
            "L'ensemble des contenus du site (textes, interface, éléments graphiques) est protégé. Toute reproduction sans autorisation est interdite.\n\nLes marques et logos des émetteurs de cartes cadeaux cités appartiennent à leurs propriétaires respectifs. Leur mention n'implique aucun partenariat.",
        },
        {
          title: "5. Responsabilité",
          content:
            "Le site est fourni en l'état. Nous ne garantissons pas une disponibilité ininterrompue et ne saurions être tenus responsables des dommages indirects liés à son utilisation.",
        },
        {
          title: "6. Droit applicable",
          content:
            "Les présentes mentions sont soumises au droit français. Tout litige relève des tribunaux compétents.",
        },
      ],
    },
    terms: {
      title: "Conditions générales d'utilisation",
      metaDescription:
        "Conditions générales d'utilisation de Cartes Vérification – règles d'accès et d'utilisation du service.",
      lastUpdated: "Dernière mise à jour : 1er août 2026",
      sections: [
        {
          title: "1. Objet",
          content:
            "Les présentes conditions régissent l'accès au site Cartes Vérification et l'utilisation de ses formulaires d'authentification et de revente de cartes cadeaux.\n\nToute utilisation du site vaut acceptation de ces conditions.",
        },
        {
          title: "2. Services proposés",
          content:
            "Authentification : nous vérifions et traitons la carte cadeau que vous nous soumettez.\n\nRevente : nous étudions votre demande et vous adressons une proposition de rachat par email.\n\nLe dépôt d'une demande ne vaut pas acceptation : chaque dossier fait l'objet d'une vérification.",
        },
        {
          title: "3. Conditions d'accès",
          content:
            "Vous devez être majeur et juridiquement capable.\n\nVous devez être le détenteur légitime de la carte soumise et pouvoir en justifier l'acquisition.",
        },
        {
          title: "4. Justificatifs",
          content:
            "Nous pouvons vous demander un justificatif d'achat, une photo de la carte ou une pièce d'identité afin de vérifier la légitimité de la demande.\n\nUne demande sans justificatif suffisant peut être refusée.",
        },
        {
          title: "5. Usages interdits",
          content:
            "Soumettre une carte obtenue frauduleusement, volée ou dont vous n'êtes pas le détenteur.\n\nFournir de fausses informations ou des documents falsifiés.\n\nTenter de perturber le fonctionnement du site ou d'en contourner les protections.\n\nTout manquement entraîne le refus de la demande et, le cas échéant, un signalement aux autorités compétentes.",
        },
        {
          title: "6. Tarifs et paiement",
          content:
            "Le taux de rachat applicable à une revente est communiqué dans notre proposition, avant tout accord de votre part.\n\nLe paiement intervient après vérification complète de la carte.",
        },
        {
          title: "7. Responsabilité",
          content:
            "Nous mettons en œuvre les moyens raisonnables pour traiter les demandes avec diligence, sans garantie de résultat sur une carte invalide, déjà utilisée ou expirée.\n\nNotre responsabilité ne saurait excéder le montant de la transaction concernée.",
        },
        {
          title: "8. Droit applicable",
          content:
            "Les présentes conditions sont soumises au droit français. À défaut d'accord amiable, tout litige relève des tribunaux compétents.",
        },
      ],
    },
  },
};
