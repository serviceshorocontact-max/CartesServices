import type { Messages } from "../types";

export const en: Messages = {
  site: {
    name: "Cartes Vérification",
    tagline: "Your card authentication platform",
    description:
      "Authenticate your cards in just a few clicks, check their validity, or sell them securely.",
  },
  nav: {
    home: "Home",
    activate: "Authenticate a card",
    sell: "Sell a card",
    menu: "Menu",
  },
  hero: {
    badge: "Secure real-time authentication",
    ctaActivate: "Authenticate a card",
    ctaSell: "Sell a card",
    instantAuth: "Instant authentication",
    fastPayment: "Fast payment",
    support: "Support 24/7",
  },
  features: {
    security: {
      title: "Maximum security",
      description:
        "Your transactions are protected by advanced security systems.",
    },
    variety: {
      title: "Wide range of cards",
      description:
        "We accept a wide variety of gift cards for maximum flexibility.",
    },
    simplicity: {
      title: "Simplified process",
      description:
        "Authenticate or sell your cards in just a few steps, without hassle.",
    },
  },
  howItWorks: {
    title: "How does it work?",
    subtitle: "Authenticate your cards in 3 simple and fast steps",
    step: "Step",
    steps: [
      {
        title: "Choose your card",
        description:
          "Choose your card brand (Transcash, PCS, Steam, Paysafecard...) from our list.",
      },
      {
        title: "Enter the code",
        description:
          "Enter your card's code to securely start the authentication process.",
      },
      {
        title: "Authenticate and receive",
        description:
          "Confirm your card's authentication and receive your confirmation instantly.",
      },
    ],
  },
  acceptedCards: {
    title: "Accepted cards",
    subtitle: "Transcash, PCS, Steam, Paysafecard, Neosurf and many more",
    cards: [
      { name: "Transcash", description: "Transcash and prepaid cards" },
      { name: "PCS", description: "PCS, prepaid, and rechargeable cards" },
      { name: "Steam", description: "Steam gift cards and games" },
      { name: "Paysafecard", description: "Paysafecard and e-vouchers" },
    ],
  },
  testimonials: {
    title: "What our customers say",
    items: [
      {
        quote:
          "Ultra-fast, reliable service. I authenticated my Steam card in under 5 minutes. Highly recommended!",
        author: "Julien R.",
      },
      {
        quote:
          "Selling my PCS card went off without a hitch. The payment is a real plus. Very professional!",
        author: "Marie L.",
      },
      {
        quote:
          "Finally a clear and simple website for managing gift cards. The design is top-notch and the process is secure. Perfect!",
        author: "Alex K.",
      },
    ],
  },
  contact: {
    title: "Need help?",
    subtitle:
      "Our team is here for you. Contact us using the form below.",
    ctaActivate: "Authenticate a card",
  },
  footer: {
    description:
      "A secure service for authenticating and reselling gift cards. We support you through all your transactions.",
    services: "Services",
    legal: "Legal information",
    privacy: "Privacy policy",
    mentions: "Legal notice",
    terms: "Terms and conditions",
    contact: "Contact",
    contactResponse: "Response within 24 business hours",
    copyright: "All rights reserved.",
  },
  activate: {
    title: "Authenticate a card",
    subtitle:
      "Fill out the form below to start the authentication process for your gift card.",
    secure: {
      title: "Secure and confidential",
      description:
        "Your data is encrypted and kept confidential.",
    },
    fast: {
      title: "Fast processing",
      description: "Response within 24 business hours, often faster.",
    },
    rates: {
      title: "Best rates",
      description: "We offer the best rates on the market.",
    },
    form: {
      lastName: "Last name",
      lastNamePlaceholder: "Your last name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      cardType: "Card type",
      cardTypePlaceholder: "Select a card type",
      cardCode: "Card code",
      cardCodePlaceholder: "Enter your card's code",
      amount: "Amount",
      amountPlaceholder: "Card amount",
      currency: "Currency",
      currencyPlaceholder: "Select a currency",
      documents: "Proof documents (optional)",
      documentsHint: "Drop documents here",
      submit: "AUTHENTICATE",
      successTitle: "Request successfully sent!",
      successMessage:
        "Your request has been sent successfully. A message will be sent to you for this transaction.",
      errorTitle: "An error occurred",
},
    loading: {
      title: "Authenticating your card...",
      subtitle: "Secure verification in progress...",
      wait: "Please wait...",
    },
    success: {
      title: "Your card authentication was successful",
      message: "Thank you for your patience, we will respond within a few moments.",
      goHome: "Back to home",
    },
  },
  sell: {
    title: "Sell a card",
    subtitle:
      "Fill out the form below to offer us your card for resale.",
    secure: {
      title: "Secure transaction",
      description: "Secure payment, your data is protected.",
    },
    fast: {
      title: "Fast payment",
      description: "Receive your payment within 24 hours of confirmation.",
    },
    rates: {
      title: "Best rates",
      description: "We offer the best rates on the market.",
    },
    form: {
      firstName: "First name",
      firstNamePlaceholder: "Your first name",
      lastName: "Last name",
      lastNamePlaceholder: "Your last name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      cardType: "Card type",
      cardTypePlaceholder: "Select a card type",
      cardCode: "Card code",
      cardCodePlaceholder: "Enter your card's code",
      paymentMethod: "Payment method",
      paymentMethodHint: "Bank card number or PayPal address",
      paymentMethodNote:
        "Fixed method. Payment details will be requested by email, never through this form.",
      amount: "Amount",
      amountPlaceholder: "Card amount",
      currency: "Currency",
      currencyPlaceholder: "Select a currency",
      documents: "Proof documents (optional)",
      documentsHint: "Drop documents here",
      submit: "Send request",
      successTitle: "Request successfully sent!",
      successMessage:
        "Your request has been sent successfully. Please be patient, we are reviewing your request in order to respond to you.",
      errorTitle: "An error occurred",
    },
  },
  form: {
    required: "This field is required.",
    invalidEmail: "Invalid email address.",
    invalidFileType: "Unsupported file format.",
    fileTooLarge: "The file exceeds the maximum allowed size (5 MB).",
    submitError:
      "An error occurred while sending. Please try again.",
  },
  legal: {
    privacy: {
      title: "Privacy policy",
      metaDescription:
        "Cartes Vérification privacy policy – protection of your personal data.",
      lastUpdated: "Last updated: August 1, 2026",
      sections: [
        {
          title: "1. Data controller",
          content:
            "Cartes Vérification is responsible for processing the data collected through this website. Contact: contact@cartes-verification.fr",
        },
        {
          title: "2. Data collected",
          content:
            "Authentication form: name, email address, card type, card code, amount, and currency.\n\nSale form: first name, last name, email address, card type, card code, amount, and currency.\n\nProof documents you attach (images or PDF).\n\nAggregated audience measurement data from our hosting provider.",
        },
        {
          title: "3. Purposes and legal basis",
          content:
            "Processing your authentication or sale request: fulfillment of the service you requested.\n\nVerifying the legitimacy of a request and fraud prevention: legitimate interest.\n\nCompliance with applicable legal obligations, particularly regarding fraud prevention.",
        },
        {
          title: "4. Recipients and data processors",
          content:
            "Vercel: website hosting and audience measurement.\n\nNodemailer: forwarding notification emails to our team.\n\nNo data is sold or shared for advertising purposes.",
        },
        {
          title: "5. Retention period",
          content:
            "Requests and documents are kept for as long as necessary for processing, then deleted, unless a longer legal retention obligation applies.",
        },
        {
          title: "6. Security",
          content:
            "Communication with the website is encrypted (HTTPS). Never send your bank details through the website's forms.",
        },
        {
          title: "7. Your rights",
          content:
            "You have the right to access, rectify, erase, restrict, object, and to data portability.\n\nTo exercise these rights, write to contact@cartes-verification.fr.\n\nYou may file a complaint with the relevant data protection authority.",
        },
      ],
    },
    mentions: {
      title: "Legal notice",
      metaDescription:
        "Cartes Vérification legal notice – information about the publisher and hosting provider.",
      lastUpdated: "Last updated: August 1, 2026",
      sections: [
        {
          title: "1. Website publisher",
          content:
            "Cartes Vérification, sole proprietorship.\n\nAddress: to be completed.\n\nRegistration number: to be completed.\n\nContact: contact@cartes-verification.fr",
        },
        {
          title: "2. Publication director",
          content: "The legal representative of Cartes Vérification.",
        },
        {
          title: "3. Hosting provider",
          content:
            "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, United States.",
        },
        {
          title: "4. Intellectual property",
          content:
            "All content on the website (text, user interface, graphic elements) is protected. Any unauthorized reproduction is prohibited.\n\nThe trademarks and logos of the gift card providers mentioned belong to their respective owners. Their mention does not imply any partnership.",
        },
        {
          title: "5. Liability",
          content:
            "The website is provided as is. We do not guarantee uninterrupted availability and are not liable for indirect damages related to its use.",
        },
        {
          title: "6. Applicable law",
          content:
            "This legal notice is governed by French law. Disputes fall under the jurisdiction of the competent courts.",
        },
      ],
    },
    terms: {
      title: "Terms and conditions",
      metaDescription:
        "Cartes Vérification terms and conditions – rules for accessing and using the service.",
      lastUpdated: "Last updated: August 1, 2026",
      sections: [
        {
          title: "1. Purpose",
          content:
            "These terms govern access to the Cartes Vérification website and the use of its forms for authenticating and reselling gift cards.\n\nAny use of the website constitutes acceptance of these terms.",
        },
        {
          title: "2. Services offered",
          content:
            "Authentication: we verify and process the gift card you submit.\n\nResale: we review your request and send you a buyback offer by email.\n\nSubmitting a request does not constitute acceptance: each case is reviewed.",
        },
        {
          title: "3. Access conditions",
          content:
            "You must be of legal age and have full legal capacity.\n\nYou must be the rightful owner of the submitted card and be able to prove its purchase.",
        },
        {
          title: "4. Proof",
          content:
            "We may request a proof of purchase, a photo of the card, or an ID to verify the legitimacy of the request.\n\nA request without sufficient proof may be rejected.",
        },
        {
          title: "5. Prohibited uses",
          content:
            "Submitting a fraudulently obtained or stolen card, or a card of which you are not the owner.\n\nProviding false information or forged documents.\n\nAttempting to disrupt the operation of the website or bypass its protective measures.\n\nAny violation will result in the rejection of the request and, where applicable, a report to the relevant authorities.",
        },
        {
          title: "6. Pricing and payment",
          content:
            "The buyback rate applicable to a resale will be communicated in our offer before you agree to it.\n\nPayment is made after full verification of the card.",
        },
        {
          title: "7. Liability",
          content:
            "We use reasonable means to process requests carefully, without guaranteeing the outcome for invalid, already used, or expired cards.\n\nOur liability is limited to the amount of the transaction in question.",
        },
        {
          title: "8. Applicable law",
          content:
            "These terms are governed by French law. In the absence of an amicable settlement, disputes fall under the jurisdiction of the competent courts.",
        },
      ],
    },
  },
};