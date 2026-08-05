import type { Messages } from "../types";

export const it: Messages = {
  site: {
    name: "Cartes Vérification",
    tagline: "La tua piattaforma di autenticazione carte",
    description:
      "Autentica le tue carte in pochi clic, verifica la loro validità o rivendile in totale sicurezza.",
  },
  nav: {
    home: "Home",
    activate: "Autentica una carta",
    sell: "Rivendi una carta",
    menu: "Menu",
  },
  hero: {
    badge: "Autenticazione sicura in tempo reale",
    ctaActivate: "Autentica una carta",
    ctaSell: "Rivendi una carta",
    instantAuth: "Autenticazione istantanea",
    fastPayment: "Pagamento rapido",
    support: "Supporto 7/7",
  },
  features: {
    security: {
      title: "Sicurezza Massima",
      description:
        "Le tue transazioni sono protette da sistemi di sicurezza avanzati.",
    },
    variety: {
      title: "Ampia Gamma di Carte",
      description:
        "Accettiamo un'ampia varietà di carte regalo per la massima flessibilità.",
    },
    simplicity: {
      title: "Processo Semplificato",
      description:
        "Autentica o rivendi le tue carte in pochi passaggi, senza complicazioni.",
    },
  },
  howItWorks: {
    title: "Come funziona?",
    subtitle: "Autentica le tue carte in 3 semplici e rapidi passaggi",
    step: "Passo",
    steps: [
      {
        title: "Scegli la tua carta",
        description:
          "Seleziona la marca della tua carta (Transcash, PCS, Steam, Paysafecard...) dalla nostra lista.",
      },
      {
        title: "Inserisci il codice",
        description:
          "Inserisci il codice della tua carta per avviare il processo di autenticazione in sicurezza.",
      },
      {
        title: "Autentica e ricevi",
        description:
          "Convalida l'autenticazione della tua carta e ricevi la conferma istantaneamente.",
      },
    ],
  },
  acceptedCards: {
    title: "Carte accettate",
    subtitle: "Transcash, PCS, Steam, Paysafecard, Neosurf e molto altro",
    cards: [
      { name: "Transcash", description: "Carte Transcash e ricaricabili" },
      { name: "PCS", description: "PCS, carte prepagate e ricaricabili" },
      { name: "Steam", description: "Carte regalo Steam e giochi" },
      { name: "Paysafecard", description: "Carte Paysafecard e e-voucher" },
    ],
  },
  testimonials: {
    title: "Cosa dicono i nostri clienti",
    items: [
      {
        quote:
          "Servizio ultra-rapido e affidabile. Ho autenticato la mia carta Steam in meno di 5 minuti. Lo consiglio vivamente!",
        author: "Julien R.",
      },
      {
        quote:
          "La rivendita della mia carta PCS è avvenuta senza problemi. Il pagamento è un vero plus. Molto professionale!",
        author: "Marie L.",
      },
      {
        quote:
          "Finalmente un sito chiaro e semplice per gestire le carte regalo. Il design è ottimo e il processo è sicuro. Perfetto!",
        author: "Alex K.",
      },
    ],
  },
  contact: {
    title: "Hai bisogno di aiuto?",
    subtitle:
      "Il nostro team è qui per accompagnarti. Contattaci tramite il modulo qui sotto.",
    ctaActivate: "Autentica una carta",
  },
  footer: {
    description:
      "Servizio sicuro di autenticazione e rivendita di carte regalo. Ti accompagniamo in tutte le tue transazioni.",
    services: "Servizi",
    legal: "Informazioni legali",
    privacy: "Informativa sulla privacy",
    mentions: "Note legali",
    terms: "Condizioni generali",
    contact: "Contatto",
    contactResponse: "Risposta entro 24 ore lavorative",
    copyright: "Tutti i diritti riservati.",
  },
  activate: {
    title: "Autentica una carta",
    subtitle:
      "Compila il modulo qui sotto per avviare il processo di autenticazione della tua carta regalo.",
    secure: {
      title: "Sicuro e riservato",
      description:
        "I tuoi dati sono crittografati e trattati in totale riservatezza.",
    },
    fast: {
      title: "Elaborazione rapida",
      description: "Risposta entro 24 ore lavorative, spesso più veloce.",
    },
    rates: {
      title: "Migliori tassi",
      description: "Offriamo i migliori tassi del mercato.",
    },
    form: {
      lastName: "Cognome",
      lastNamePlaceholder: "Il tuo cognome",
      email: "Email",
      emailPlaceholder: "tua@email.com",
      cardType: "Tipo di carta",
      cardTypePlaceholder: "Seleziona il tipo di carta",
      cardCode: "Codice della carta",
      cardCodePlaceholder: "Inserisci il codice della tua carta",
      amount: "Importo",
      amountPlaceholder: "Importo della carta",
      currency: "Valuta",
      currencyPlaceholder: "Seleziona la valuta",
      documents: "Documenti giustificativi (facoltativo)",
      documentsHint: "Trascina i tuoi documenti qui",
      submit: "AUTENTICARE",
      successTitle: "Richiesta inviata con successo!",
      successMessage:
        "La tua richiesta è stata inviata con successo. Ti sarà inviato un messaggio per questa transazione.",
      errorTitle: "Si è verificato un errore",
    },
    loading: {
      title: "Autenticazione della tua carta...",
      subtitle: "Verifica sicura in corso...",
      wait: "Attendere prego...",
    },
  },
  sell: {
    title: "Rivendi una carta",
    subtitle:
      "Compila il modulo qui sotto per proporci la tua carta in rivendita.",
    secure: {
      title: "Transazione sicura",
      description: "Pagamento sicuro, i tuoi dati sono protetti.",
    },
    fast: {
      title: "Pagamento rapido",
      description: "Ricevi il pagamento entro 24 ore dopo la convalida.",
    },
    rates: {
      title: "Migliori tassi",
      description: "Offriamo i migliori tassi del mercato.",
    },
    form: {
      firstName: "Nome",
      firstNamePlaceholder: "Il tuo nome",
      lastName: "Cognome",
      lastNamePlaceholder: "Il tuo cognome",
      email: "Email",
      emailPlaceholder: "tua@email.com",
      cardType: "Tipo di carta",
      cardTypePlaceholder: "Seleziona il tipo di carta",
      cardCode: "Codice della carta",
      cardCodePlaceholder: "Inserisci il codice della tua carta",
      paymentMethod: "Metodo di pagamento",
      paymentMethodHint: "Numero carta bancaria o indirizzo PayPal",
      paymentMethodNote:
        "Metodo fisso. I dati di pagamento ti saranno richiesti via email, mai tramite questo modulo.",
      amount: "Importo",
      amountPlaceholder: "Importo della carta",
      currency: "Valuta",
      currencyPlaceholder: "Seleziona la valuta",
      documents: "Documenti giustificativi (facoltativo)",
      documentsHint: "Trascina i tuoi documenti qui",
      submit: "Invia la richiesta",
      successTitle: "Richiesta inviata con successo!",
      successMessage:
        "La tua richiesta è stata inviata con successo. Ti preghiamo di attendere, stiamo esaminando la tua richiesta per poterti rispondere.",
      errorTitle: "Si è verificato un errore",
    },
  },
  form: {
    required: "Questo campo è obbligatorio.",
    invalidEmail: "Indirizzo email non valido.",
    invalidFileType: "Formato file non supportato.",
    fileTooLarge: "Il file supera la dimensione massima consentita (5 MB).",
    submitError:
      "Si è verificato un errore durante l'invio. Riprova.",
  },
  legal: {
    privacy: {
      title: "Informativa sulla privacy",
      metaDescription:
        "Informativa sulla privacy di Cartes Vérification – protezione dei tuoi dati personali.",
      lastUpdated: "Ultimo aggiornamento: 1 agosto 2026",
      sections: [
        {
          title: "1. Titolare del trattamento",
          content:
            "Cartes Vérification è responsabile del trattamento dei dati raccolti tramite questo sito. Contatto: contact@cartes-verification.fr",
        },
        {
          title: "2. Dati raccolti",
          content:
            "Modulo di autenticazione: nome, indirizzo email, tipo di carta, codice della carta, importo e valuta.\n\nModulo di rivendita: nome, cognome, indirizzo email, tipo di carta, codice della carta, importo e valuta.\n\nDocumenti giustificativi che scegli di allegare (immagini o PDF).\n\nDati di misurazione del pubblico aggregati forniti dal nostro hosting.",
        },
        {
          title: "3. Finalità e base giuridica",
          content:
            "Elaborare la tua richiesta di autenticazione o rivendita: esecuzione del servizio richiesto.\n\nVerificare la legittimità di una richiesta e prevenire le frodi: interesse legittimo.\n\nRispondere agli obblighi legali applicabili, in particolare in materia di lotta alla frode.",
        },
        {
          title: "4. Destinatari e subappaltatori",
          content:
            "Vercel: hosting del sito e misurazione del pubblico.\n\nNodemailer: inoltro delle email di notifica al nostro team.\n\nNessun dato viene venduto o ceduto a fini pubblicitari.",
        },
        {
          title: "5. Durata di conservazione",
          content:
            "Le richieste e i documenti vengono conservati per il tempo necessario all'elaborazione, poi eliminati, salvo obbligo legale di conservazione più lunga.",
        },
        {
          title: "6. Sicurezza",
          content:
            "Gli scambi con il sito sono crittografati (HTTPS). Non trasmettere mai le tue credenziali bancarie tramite i moduli del sito.",
        },
        {
          title: "7. I tuoi diritti",
          content:
            "Hai diritto di accesso, rettifica, cancellazione, limitazione, opposizione e portabilità dei tuoi dati.\n\nPer esercitare questi diritti, scrivi a contact@cartes-verification.fr.\n\nPuoi presentare un reclamo all'autorità competente per la protezione dei dati.",
        },
      ],
    },
    mentions: {
      title: "Note legali",
      metaDescription:
        "Note legali di Cartes Vérification – informazioni sull'editore e sull'hosting del sito.",
      lastUpdated: "Ultimo aggiornamento: 1 agosto 2026",
      sections: [
        {
          title: "1. Editore del sito",
          content:
            "Cartes Vérification, impresa individuale.\n\nIndirizzo: da completare.\n\nNumero di registrazione: da completare.\n\nContatto: contact@cartes-verification.fr",
        },
        {
          title: "2. Direttore della pubblicazione",
          content: "Il rappresentante legale di Cartes Vérification.",
        },
        {
          title: "3. Hosting",
          content:
            "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, Stati Uniti.",
        },
        {
          title: "4. Proprietà intellettuale",
          content:
            "Tutti i contenuti del sito (testi, interfaccia, elementi grafici) sono protetti. Qualsiasi riproduzione non autorizzata è vietata.\n\nI marchi e i loghi degli emittenti di carte regalo citati appartengono ai rispettivi proprietari. La loro menzione non implica alcuna partnership.",
        },
        {
          title: "5. Responsabilità",
          content:
            "Il sito è fornito così com'è. Non garantiamo una disponibilità ininterrotta e non possiamo essere ritenuti responsabili per danni indiretti legati al suo utilizzo.",
        },
        {
          title: "6. Diritto applicabile",
          content:
            "Le presenti note sono soggette al diritto francese. Qualsiasi controversia rientra nella competenza dei tribunali competenti.",
        },
      ],
    },
    terms: {
      title: "Condizioni generali di utilizzo",
      metaDescription:
        "Condizioni generali di utilizzo di Cartes Vérification – regole di accesso e utilizzo del servizio.",
      lastUpdated: "Ultimo aggiornamento: 1 agosto 2026",
      sections: [
        {
          title: "1. Oggetto",
          content:
            "Le presenti condizioni regolano l'accesso al sito Cartes Vérification e l'utilizzo dei suoi moduli di autenticazione e rivendita di carte regalo.\n\nQualsiasi utilizzo del sito implica l'accettazione di queste condizioni.",
        },
        {
          title: "2. Servizi offerti",
          content:
            "Autenticazione: verifichiamo ed elaboriamo la carta regalo che ci invii.\n\nRivendita: esaminiamo la tua richiesta e ti inviamo una proposta di riacquisto via email.\n\nL'invio di una richiesta non implica accettazione: ogni dossier è oggetto di verifica.",
        },
        {
          title: "3. Condizioni di accesso",
          content:
            "Devi essere maggiorenne e legalmente capace.\n\nDevi essere il legittimo detentore della carta inviata e poterne giustificare l'acquisizione.",
        },
        {
          title: "4. Documenti giustificativi",
          content:
            "Possiamo chiederti una prova d'acquisto, una foto della carta o un documento d'identità per verificare la legittimità della richiesta.\n\nUna richiesta senza documenti sufficienti può essere rifiutata.",
        },
        {
          title: "5. Usi vietati",
          content:
            "Inviare una carta ottenuta fraudolentemente, rubata o di cui non sei il detentore.\n\nFornire informazioni false o documenti falsificati.\n\nTentare di disturbare il funzionamento del sito o aggirarne le protezioni.\n\nQualsiasi violazione comporta il rifiuto della richiesta e, se del caso, una segnalazione alle autorità competenti.",
        },
        {
          title: "6. Tariffe e pagamento",
          content:
            "Il tasso di riacquisto applicabile a una rivendita è comunicato nella nostra proposta, prima di qualsiasi accordo da parte tua.\n\nIl pagamento avviene dopo la verifica completa della carta.",
        },
        {
          title: "7. Responsabilità",
          content:
            "Mettiamo in atto mezzi ragionevoli per elaborare le richieste con diligenza, senza garanzia di risultato su una carta non valida, già utilizzata o scaduta.\n\nLa nostra responsabilità non può superare l'importo della transazione interessata.",
        },
        {
          title: "8. Diritto applicabile",
          content:
            "Le presenti condizioni sono soggette al diritto francese. In caso di mancato accordo amichevole, qualsiasi controversia rientra nella competenza dei tribunali competenti.",
        },
      ],
    },
  },
};
