import type { Messages } from "../types";

export const de: Messages = {
  site: {
    name: "Cartes Vérification",
    tagline: "Ihre Plattform zur Kartenauthentifizierung",
    description:
      "Authentifizieren Sie Ihre Karten mit wenigen Klicks, überprüfen Sie deren Gültigkeit oder verkaufen Sie sie sicher.",
  },
  nav: {
    home: "Startseite",
    activate: "Karte authentifizieren",
    sell: "Karte verkaufen",
    menu: "Menü",
  },
  hero: {
    badge: "Sichere Echtzeit-Authentifizierung",
    ctaActivate: "Karte authentifizieren",
    ctaSell: "Karte verkaufen",
    instantAuth: "Sofortige Authentifizierung",
    fastPayment: "Schnelle Zahlung",
    support: "Support 7/7",
  },
  features: {
    security: {
      title: "Maximale Sicherheit",
      description:
        "Ihre Transaktionen werden durch fortschrittliche Sicherheitssysteme geschützt.",
    },
    variety: {
      title: "Breites Kartenangebot",
      description:
        "Wir akzeptieren eine Vielzahl von Geschenkkarten für maximale Flexibilität.",
    },
    simplicity: {
      title: "Vereinfachter Prozess",
      description:
        "Authentifizieren oder verkaufen Sie Ihre Karten in wenigen Schritten, ohne Komplikationen.",
    },
  },
  howItWorks: {
    title: "Wie funktioniert es?",
    subtitle: "Authentifizieren Sie Ihre Karten in 3 einfachen und schnellen Schritten",
    step: "Schritt",
    steps: [
      {
        title: "Wählen Sie Ihre Karte",
        description:
          "Wählen Sie die Marke Ihrer Karte (Transcash, PCS, Steam, Paysafecard...) aus unserer Liste.",
      },
      {
        title: "Code eingeben",
        description:
          "Geben Sie den Code Ihrer Karte ein, um den Authentifizierungsprozess sicher zu starten.",
      },
      {
        title: "Authentifizieren und erhalten",
        description:
          "Bestätigen Sie die Authentifizierung Ihrer Karte und erhalten Sie sofort Ihre Bestätigung.",
      },
    ],
  },
  acceptedCards: {
    title: "Akzeptierte Karten",
    subtitle: "Transcash, PCS, Steam, Paysafecard, Neosurf und vieles mehr",
    cards: [
      { name: "Transcash", description: "Transcash- und aufladbare Karten" },
      { name: "PCS", description: "PCS, Prepaid- und aufladbare Karten" },
      { name: "Steam", description: "Steam-Geschenkkarten und Spiele" },
      { name: "Paysafecard", description: "Paysafecard und E-Vouchers" },
    ],
  },
  testimonials: {
    title: "Was unsere Kunden sagen",
    items: [
      {
        quote:
          "Ultraschneller und zuverlässiger Service. Ich habe meine Steam-Karte in weniger als 5 Minuten authentifiziert. Sehr empfehlenswert!",
        author: "Julien R.",
      },
      {
        quote:
          "Der Verkauf meiner PCS-Karte verlief ohne Probleme. Die Zahlung ist ein echter Pluspunkt. Sehr professionell!",
        author: "Marie L.",
      },
      {
        quote:
          "Endlich eine klare und einfache Website zur Verwaltung von Geschenkkarten. Das Design ist top und der Prozess ist sicher. Perfekt!",
        author: "Alex K.",
      },
    ],
  },
  contact: {
    title: "Brauchen Sie Hilfe?",
    subtitle:
      "Unser Team ist für Sie da. Kontaktieren Sie uns über das untenstehende Formular.",
    ctaActivate: "Karte authentifizieren",
  },
  footer: {
    description:
      "Sicherer Service zur Authentifizierung und zum Weiterverkauf von Geschenkkarten. Wir begleiten Sie bei all Ihren Transaktionen.",
    services: "Dienste",
    legal: "Rechtliche Informationen",
    privacy: "Datenschutzrichtlinie",
    mentions: "Impressum",
    terms: "Allgemeine Geschäftsbedingungen",
    contact: "Kontakt",
    contactResponse: "Antwort innerhalb von 24 Werktagsstunden",
    copyright: "Alle Rechte vorbehalten.",
  },
  activate: {
    title: "Karte authentifizieren",
    subtitle:
      "Füllen Sie das untenstehende Formular aus, um den Authentifizierungsprozess Ihrer Geschenkkarte zu starten.",
    secure: {
      title: "Sicher und vertraulich",
      description:
        "Ihre Daten werden verschlüsselt und vertraulich behandelt.",
    },
    fast: {
      title: "Schnelle Bearbeitung",
      description: "Antwort innerhalb von 24 Werktagsstunden, oft schneller.",
    },
    rates: {
      title: "Beste Kurse",
      description: "Wir bieten die besten Kurse am Markt.",
    },
    form: {
      lastName: "Nachname",
      lastNamePlaceholder: "Ihr Nachname",
      email: "E-Mail",
      emailPlaceholder: "ihre@email.com",
      cardType: "Kartentyp",
      cardTypePlaceholder: "Kartentyp auswählen",
      cardCode: "Kartencode",
      cardCodePlaceholder: "Geben Sie den Code Ihrer Karte ein",
      amount: "Betrag",
      amountPlaceholder: "Kartenbetrag",
      currency: "Währung",
      currencyPlaceholder: "Währung auswählen",
      documents: "Nachweise (optional)",
      documentsHint: "Dokumente hier ablegen",
      submit: "AUTHENTIFIZIEREN",
      successTitle: "Anfrage erfolgreich gesendet!",
      successMessage:
        "Vielen Dank für Ihr Vertrauen. Unser Team bearbeitet Ihre Authentifizierungsanfrage und wird Ihnen so schnell wie möglich per E-Mail antworten.",
      errorTitle: "Ein Fehler ist aufgetreten",
    },
    loading: {
      title: "Authentifizierung Ihrer Karte...",
      subtitle: "Sichere Überprüfung läuft...",
      wait: "Bitte warten...",
    },
  },
  sell: {
    title: "Karte verkaufen",
    subtitle:
      "Füllen Sie das untenstehende Formular aus, um uns Ihre Karte zum Weiterverkauf anzubieten.",
    secure: {
      title: "Sichere Transaktion",
      description: "Sichere Zahlung, Ihre Daten sind geschützt.",
    },
    fast: {
      title: "Schnelle Zahlung",
      description: "Erhalten Sie Ihre Zahlung innerhalb von 24 Stunden nach Bestätigung.",
    },
    rates: {
      title: "Beste Kurse",
      description: "Wir bieten die besten Kurse am Markt.",
    },
    form: {
      firstName: "Vorname",
      firstNamePlaceholder: "Ihr Vorname",
      lastName: "Nachname",
      lastNamePlaceholder: "Ihr Nachname",
      email: "E-Mail",
      emailPlaceholder: "ihre@email.com",
      cardType: "Kartentyp",
      cardTypePlaceholder: "Kartentyp auswählen",
      cardCode: "Kartencode",
      cardCodePlaceholder: "Geben Sie den Code Ihrer Karte ein",
      paymentMethod: "Zahlungsmethode",
      paymentMethodHint: "Bankkartennummer oder PayPal-Adresse",
      paymentMethodNote:
        "Feste Methode. Zahlungsdaten werden per E-Mail angefordert, niemals über dieses Formular.",
      amount: "Betrag",
      amountPlaceholder: "Kartenbetrag",
      currency: "Währung",
      currencyPlaceholder: "Währung auswählen",
      documents: "Nachweise (optional)",
      documentsHint: "Dokumente hier ablegen",
      submit: "Anfrage senden",
      successTitle: "Anfrage erfolgreich gesendet!",
      successMessage:
        "Vielen Dank für Ihr Vertrauen. Unser Team prüft Ihre Verkaufsanfrage und sendet Ihnen so schnell wie möglich ein Angebot per E-Mail.",
      errorTitle: "Ein Fehler ist aufgetreten",
    },
  },
  form: {
    required: "Dieses Feld ist erforderlich.",
    invalidEmail: "Ungültige E-Mail-Adresse.",
    invalidFileType: "Nicht unterstütztes Dateiformat.",
    fileTooLarge: "Die Datei überschreitet die maximal zulässige Größe (5 MB).",
    submitError:
      "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
  },
  legal: {
    privacy: {
      title: "Datenschutzrichtlinie",
      metaDescription:
        "Datenschutzrichtlinie von Cartes Vérification – Schutz Ihrer persönlichen Daten.",
      lastUpdated: "Letzte Aktualisierung: 1. August 2026",
      sections: [
        {
          title: "1. Verantwortlicher",
          content:
            "Cartes Vérification ist für die Verarbeitung der über diese Website gesammelten Daten verantwortlich. Kontakt: contact@cartes-verification.fr",
        },
        {
          title: "2. Erhobene Daten",
          content:
            "Authentifizierungsformular: Name, E-Mail-Adresse, Kartentyp, Kartencode, Betrag und Währung.\n\nVerkaufsformular: Vorname, Nachname, E-Mail-Adresse, Kartentyp, Kartencode, Betrag und Währung.\n\nNachweisdokumente, die Sie anhängen (Bilder oder PDF).\n\nAggregierte Zielgruppenmessungsdaten unseres Hosting-Anbieters.",
        },
        {
          title: "3. Zwecke und Rechtsgrundlage",
          content:
            "Bearbeitung Ihrer Authentifizierungs- oder Verkaufsanfrage: Erfüllung des von Ihnen angeforderten Dienstes.\n\nÜberprüfung der Legitimität einer Anfrage und Betrugsprävention: berechtigtes Interesse.\n\nEinhaltung geltender gesetzlicher Verpflichtungen, insbesondere im Bereich Betrugsbekämpfung.",
        },
        {
          title: "4. Empfänger und Auftragsverarbeiter",
          content:
            "Vercel: Website-Hosting und Zielgruppenmessung.\n\nNodemailer: Weiterleitung von Benachrichtigungs-E-Mails an unser Team.\n\nKeine Daten werden zu Werbezwecken verkauft oder weitergegeben.",
        },
        {
          title: "5. Aufbewahrungsdauer",
          content:
            "Anfragen und Dokumente werden so lange aufbewahrt, wie für die Bearbeitung erforderlich, und anschließend gelöscht, sofern keine längere gesetzliche Aufbewahrungspflicht besteht.",
        },
        {
          title: "6. Sicherheit",
          content:
            "Die Kommunikation mit der Website ist verschlüsselt (HTTPS). Übermitteln Sie niemals Ihre Bankdaten über die Formulare der Website.",
        },
        {
          title: "7. Ihre Rechte",
          content:
            "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit.\n\nZur Ausübung dieser Rechte schreiben Sie an contact@cartes-verification.fr.\n\nSie können eine Beschwerde bei der zuständigen Datenschutzbehörde einreichen.",
        },
      ],
    },
    mentions: {
      title: "Impressum",
      metaDescription:
        "Impressum von Cartes Vérification – Informationen über den Herausgeber und den Hosting-Anbieter.",
      lastUpdated: "Letzte Aktualisierung: 1. August 2026",
      sections: [
        {
          title: "1. Herausgeber der Website",
          content:
            "Cartes Vérification, Einzelunternehmen.\n\nAdresse: zu vervollständigen.\n\nRegistrierungsnummer: zu vervollständigen.\n\nKontakt: contact@cartes-verification.fr",
        },
        {
          title: "2. Verantwortlicher für die Veröffentlichung",
          content: "Der gesetzliche Vertreter von Cartes Vérification.",
        },
        {
          title: "3. Hosting-Anbieter",
          content:
            "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, Vereinigte Staaten.",
        },
        {
          title: "4. Geistiges Eigentum",
          content:
            "Alle Inhalte der Website (Texte, Benutzeroberfläche, grafische Elemente) sind geschützt. Jede unbefugte Vervielfältigung ist untersagt.\n\nDie Marken und Logos der genannten Geschenkkartenanbieter gehören ihren jeweiligen Eigentümern. Ihre Erwähnung impliziert keine Partnerschaft.",
        },
        {
          title: "5. Haftung",
          content:
            "Die Website wird ohne Gewähr bereitgestellt. Wir garantieren keine ununterbrochene Verfügbarkeit und haften nicht für indirekte Schäden im Zusammenhang mit der Nutzung.",
        },
        {
          title: "6. Anwendbares Recht",
          content:
            "Dieses Impressum unterliegt französischem Recht. Streitigkeiten fallen in die Zuständigkeit der zuständigen Gerichte.",
        },
      ],
    },
    terms: {
      title: "Allgemeine Geschäftsbedingungen",
      metaDescription:
        "Allgemeine Geschäftsbedingungen von Cartes Vérification – Zugangs- und Nutzungsregeln des Dienstes.",
      lastUpdated: "Letzte Aktualisierung: 1. August 2026",
      sections: [
        {
          title: "1. Gegenstand",
          content:
            "Diese Bedingungen regeln den Zugang zur Website Cartes Vérification und die Nutzung ihrer Formulare zur Authentifizierung und zum Weiterverkauf von Geschenkkarten.\n\nJede Nutzung der Website gilt als Annahme dieser Bedingungen.",
        },
        {
          title: "2. Angebotene Dienste",
          content:
            "Authentifizierung: Wir überprüfen und bearbeiten die von Ihnen eingereichte Geschenkkarte.\n\nWeiterverkauf: Wir prüfen Ihre Anfrage und senden Ihnen ein Rückkaufangebot per E-Mail.\n\nDie Einreichung einer Anfrage gilt nicht als Annahme: Jeder Fall wird überprüft.",
        },
        {
          title: "3. Zugangsbedingungen",
          content:
            "Sie müssen volljährig und geschäftsfähig sein.\n\nSie müssen der rechtmäßige Inhaber der eingereichten Karte sein und deren Erwerb nachweisen können.",
        },
        {
          title: "4. Nachweise",
          content:
            "Wir können einen Kaufbeleg, ein Foto der Karte oder einen Ausweis anfordern, um die Legitimität der Anfrage zu überprüfen.\n\nEine Anfrage ohne ausreichende Nachweise kann abgelehnt werden.",
        },
        {
          title: "5. Verbotene Nutzungen",
          content:
            "Einreichen einer betrügerisch erworbenen, gestohlenen Karte oder einer Karte, deren Inhaber Sie nicht sind.\n\nAngabe falscher Informationen oder gefälschter Dokumente.\n\nVersuch, den Betrieb der Website zu stören oder Schutzmaßnahmen zu umgehen.\n\nJeder Verstoß führt zur Ablehnung der Anfrage und gegebenenfalls zur Meldung an die zuständigen Behörden.",
        },
        {
          title: "6. Preise und Zahlung",
          content:
            "Der für einen Weiterverkauf geltende Rückkaufskurs wird in unserem Angebot mitgeteilt, bevor Sie zustimmen.\n\nDie Zahlung erfolgt nach vollständiger Überprüfung der Karte.",
        },
        {
          title: "7. Haftung",
          content:
            "Wir setzen angemessene Mittel ein, um Anfragen sorgfältig zu bearbeiten, ohne Garantie für das Ergebnis bei ungültigen, bereits verwendeten oder abgelaufenen Karten.\n\nUnsere Haftung ist auf den Betrag der betreffenden Transaktion beschränkt.",
        },
        {
          title: "8. Anwendbares Recht",
          content:
            "Diese Bedingungen unterliegen französischem Recht. Bei fehlender gütlicher Einigung unterliegen Streitigkeiten der Zuständigkeit der zuständigen Gerichte.",
        },
      ],
    },
  },
};
