export type Locale = "fr" | "en" | "it" | "sp" | "de";

export interface LocaleInfo {
  code: Locale;
  label: string;
  flag: string;
}

export interface LegalSection {
  title: string;
  content: string;
}

export interface LegalPageContent {
  title: string;
  metaDescription: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export interface Messages {
  site: {
    name: string;
    tagline: string;
    description: string;
  };
  nav: {
    home: string;
    activate: string;
    sell: string;
    menu: string;
  };
  hero: {
    badge: string;
    ctaActivate: string;
    ctaSell: string;
    instantAuth: string;
    fastPayment: string;
    support: string;
  };
  features: {
    security: { title: string; description: string };
    variety: { title: string; description: string };
    simplicity: { title: string; description: string };
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step: string;
    steps: Array<{ title: string; description: string }>;
  };
  acceptedCards: {
    title: string;
    subtitle: string;
    cards: Array<{ name: string; description: string }>;
  };
  testimonials: {
    title: string;
    items: Array<{ quote: string; author: string }>;
  };
  contact: {
    title: string;
    subtitle: string;
    ctaActivate: string;
  };
  footer: {
    description: string;
    services: string;
    legal: string;
    privacy: string;
    mentions: string;
    terms: string;
    contact: string;
    contactResponse: string;
    copyright: string;
  };
  activate: {
    title: string;
    subtitle: string;
    secure: { title: string; description: string };
    fast: { title: string; description: string };
    rates: { title: string; description: string };
    form: {
      lastName: string;
      lastNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      cardType: string;
      cardTypePlaceholder: string;
      cardCode: string;
      cardCodePlaceholder: string;
      amount: string;
      amountPlaceholder: string;
      currency: string;
      currencyPlaceholder: string;
      documents: string;
      documentsHint: string;
submit: string;
      successTitle: string;
      successMessage: string;
      errorTitle: string;
    };
    loading: {
      title: string;
      subtitle: string;
      wait: string;
    };
    success: {
      title: string;
      message: string;
      goHome: string;
    };
  };
  sell: {
    title: string;
    subtitle: string;
    secure: { title: string; description: string };
    fast: { title: string; description: string };
    rates: { title: string; description: string };
    form: {
      firstName: string;
      firstNamePlaceholder: string;
      lastName: string;
      lastNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      cardType: string;
      cardTypePlaceholder: string;
      cardCode: string;
      cardCodePlaceholder: string;
      paymentMethod: string;
      paymentMethodHint: string;
      paymentMethodNote: string;
      amount: string;
      amountPlaceholder: string;
      currency: string;
      currencyPlaceholder: string;
      documents: string;
      documentsHint: string;
      submit: string;
      successTitle: string;
      successMessage: string;
      errorTitle: string;
    };
  };
  form: {
    required: string;
    invalidEmail: string;
    invalidFileType: string;
    fileTooLarge: string;
    submitError: string;
  };
  legal: {
    privacy: LegalPageContent;
    mentions: LegalPageContent;
    terms: LegalPageContent;
  };
}
