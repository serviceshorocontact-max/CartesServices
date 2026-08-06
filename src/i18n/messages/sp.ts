import type { Messages } from "../types";

export const es: Messages = {
  site: {
    name: "Cartes Vérification",
    tagline: "Su plataforma de autenticación de tarjetas",
    description:
      "Autentique sus tarjetas en pocos clics, verifique su validez o véndalas de forma segura.",
  },
  nav: {
    home: "Inicio",
    activate: "Autenticar tarjeta",
    sell: "Vender tarjeta",
    menu: "Menú",
  },
  hero: {
    badge: "Autenticación segura en tiempo real",
    ctaActivate: "Autenticar tarjeta",
    ctaSell: "Vender tarjeta",
    instantAuth: "Autenticación instantánea",
    fastPayment: "Pago rápido",
    support: "Soporte 24/7",
  },
  features: {
    security: {
      title: "Máxima seguridad",
      description:
        "Sus transacciones están protegidas por sistemas de seguridad avanzados.",
    },
    variety: {
      title: "Amplia variedad de tarjetas",
      description:
        "Aceptamos una gran variedad de tarjetas regalo para máxima flexibilidad.",
    },
    simplicity: {
      title: "Proceso simplificado",
      description:
        "Autentique o venda sus tarjetas en pocos pasos, sin complicaciones.",
    },
  },
  howItWorks: {
    title: "¿Cómo funciona?",
    subtitle: "Autentique sus tarjetas en 3 pasos simples y rápidos",
    step: "Paso",
    steps: [
      {
        title: "Elija su tarjeta",
        description:
          "Elija la marca de su tarjeta (Transcash, PCS, Steam, Paysafecard...) de nuestra lista.",
      },
      {
        title: "Ingrese el código",
        description:
          "Ingrese el código de su tarjeta para iniciar el proceso de autenticación de forma segura.",
      },
      {
        title: "Autentique y reciba",
        description:
          "Confirme la autenticación de su tarjeta y reciba su confirmación al instante.",
      },
    ],
  },
  acceptedCards: {
    title: "Tarjetas aceptadas",
    subtitle: "Transcash, PCS, Steam, Paysafecard, Neosurf y muchas más",
    cards: [
      { name: "Transcash", description: "Tarjetas Transcash y recargables" },
      { name: "PCS", description: "Tarjetas PCS, prepago y recargables" },
      { name: "Steam", description: "Tarjetas regalo y juegos de Steam" },
      { name: "Paysafecard", description: "Paysafecard y vales electrónicos" },
    ],
  },
  testimonials: {
    title: "Lo que dicen nuestros clientes",
    items: [
      {
        quote:
          "Servicio ultrarrápido y confiable. Autentiqué mi tarjeta Steam en menos de 5 minutos. ¡Muy recomendable!",
        author: "Julien R.",
      },
      {
        quote:
          "La venta de mi tarjeta PCS se realizó sin problemas. El pago es un verdadero punto a favor. ¡Muy profesional!",
        author: "Marie L.",
      },
      {
        quote:
          "Por fin un sitio web claro y sencillo para gestionar tarjetas regalo. El diseño es excelente y el proceso es seguro. ¡Perfecto!",
        author: "Alex K.",
      },
    ],
  },
  contact: {
    title: "¿Necesita ayuda?",
    subtitle:
      "Nuestro equipo está a su disposición. Contáctenos mediante el formulario a continuación.",
    ctaActivate: "Autenticar tarjeta",
  },
  footer: {
    description:
      "Servicio seguro de autenticación y reventa de tarjetas regalo. Le acompañamos en todas sus transacciones.",
    services: "Servicios",
    legal: "Información legal",
    privacy: "Política de privacidad",
    mentions: "Aviso legal",
    terms: "Términos y condiciones",
    contact: "Contacto",
    contactResponse: "Respuesta en 24 horas hábiles",
    copyright: "Todos los derechos reservados.",
  },
  activate: {
    title: "Autenticar tarjeta",
    subtitle:
      "Complete el formulario a continuación para iniciar el proceso de autenticación de su tarjeta regalo.",
    secure: {
      title: "Seguro y confidencial",
      description:
        "Sus datos se cifran y se tratan de forma confidencial.",
    },
    fast: {
      title: "Procesamiento rápido",
      description: "Respuesta en 24 horas hábiles, a menudo más rápido.",
    },
    rates: {
      title: "Mejores tarifas",
      description: "Ofrecemos las mejores tarifas del mercado.",
    },
    form: {
      lastName: "Apellido",
      lastNamePlaceholder: "Su apellido",
      email: "Correo electrónico",
      emailPlaceholder: "su@correo.com",
      cardType: "Tipo de tarjeta",
      cardTypePlaceholder: "Seleccione un tipo de tarjeta",
      cardCode: "Código de la tarjeta",
      cardCodePlaceholder: "Ingrese el código de su tarjeta",
      amount: "Monto",
      amountPlaceholder: "Monto de la tarjeta",
      currency: "Moneda",
      currencyPlaceholder: "Seleccione una moneda",
      documents: "Comprobantes (opcional)",
      documentsHint: "Suelte los documentos aquí",
      submit: "AUTENTICAR",
      successTitle: "¡Solicitud enviada con éxito!",
      successMessage:
        "Su solicitud ha sido enviada con éxito. Se le enviará un mensaje para esta transacción.",
      errorTitle: "Se produjo un error",
    },
    loading: {
      title: "Autenticando su tarjeta...",
      subtitle: "Verificación segura en curso...",
      wait: "Por favor espere...",
    },
    success: {
      title: "Autenticación de su tarjeta exitosa",
      message: "Por favor, espere, le responderemos en unos instantes.",
      goHome: "Volver al inicio",
    },
  },
  sell: {
    title: "Vender tarjeta",
    subtitle:
      "Complete el formulario a continuación para ofrecernos su tarjeta para reventa.",
    secure: {
      title: "Transacción segura",
      description: "Pago seguro, sus datos están protegidos.",
    },
    fast: {
      title: "Pago rápido",
      description: "Reciba su pago dentro de las 24 horas posteriores a la confirmación.",
    },
    rates: {
      title: "Mejores tarifas",
      description: "Ofrecemos las mejores tarifas del mercado.",
    },
    form: {
      firstName: "Nombre",
      firstNamePlaceholder: "Su nombre",
      lastName: "Apellido",
      lastNamePlaceholder: "Su apellido",
      email: "Correo electrónico",
      emailPlaceholder: "su@correo.com",
      cardType: "Tipo de tarjeta",
      cardTypePlaceholder: "Seleccione un tipo de tarjeta",
      cardCode: "Código de la tarjeta",
      cardCodePlaceholder: "Ingrese el código de su tarjeta",
      paymentMethod: "Método de pago",
      paymentMethodHint: "Número de tarjeta bancaria o dirección de PayPal",
      paymentMethodNote:
        "Método fijo. Los datos de pago se solicitarán por correo electrónico, nunca a través de este formulario.",
      amount: "Monto",
      amountPlaceholder: "Monto de la tarjeta",
      currency: "Moneda",
      currencyPlaceholder: "Seleccione una moneda",
      documents: "Comprobantes (opcional)",
      documentsHint: "Suelte los documentos aquí",
      submit: "Enviar solicitud",
      successTitle: "¡Solicitud enviada con éxito!",
      successMessage:
        "Su solicitud ha sido enviada con éxito. Por favor, espere, estamos examinando su solicitud para poder responderle.",
      errorTitle: "Se produjo un error",
    },
  },
  form: {
    required: "Este campo es obligatorio.",
    invalidEmail: "Dirección de correo electrónico no válida.",
    invalidFileType: "Formato de archivo no compatible.",
    fileTooLarge: "El archivo supera el tamaño máximo permitido (5 MB).",
    submitError:
      "Se produjo un error al enviar. Por favor, inténtelo de nuevo.",
  },
  legal: {
    privacy: {
      title: "Política de privacidad",
      metaDescription:
        "Política de privacidad de Cartes Vérification: protección de sus datos personales.",
      lastUpdated: "Última actualización: 1 de agosto de 2026",
      sections: [
        {
          title: "1. Responsable del tratamiento",
          content:
            "Cartes Vérification es responsable del tratamiento de los datos recopilados a través de este sitio web. Contacto: contact@cartes-verification.fr",
        },
        {
          title: "2. Datos recopilados",
          content:
            "Formulario de autenticación: nombre, dirección de correo electrónico, tipo de tarjeta, código de la tarjeta, monto y moneda.\n\nFormulario de venta: nombre, apellido, dirección de correo electrónico, tipo de tarjeta, código de la tarjeta, monto y moneda.\n\nComprobantes que adjunte (imágenes o PDF).\n\nDatos agregados de medición de audiencia de nuestro proveedor de alojamiento.",
        },
        {
          title: "3. Finalidades y base jurídica",
          content:
            "Tramitación de su solicitud de autenticación o venta: ejecución del servicio solicitado.\n\nVerificación de la legitimidad de una solicitud y prevención del fraude: interés legítimo.\n\nCumplimiento de las obligaciones legales vigentes, en particular en materia de lucha contra el fraude.",
        },
        {
          title: "4. Destinatarios y encargados del tratamiento",
          content:
            "Vercel: alojamiento del sitio web y medición de audiencia.\n\nNodemailer: reenvío de correos electrónicos de notificación a nuestro equipo.\n\nNingún dato se vende ni se comparte con fines publicitarios.",
        },
        {
          title: "5. Plazo de conservación",
          content:
            "Las solicitudes y los documentos se conservan durante el tiempo necesario para su tramitación y luego se eliminan, salvo obligación legal de conservación más prolongada.",
        },
        {
          title: "6. Seguridad",
          content:
            "La comunicación con el sitio web está cifrada (HTTPS). Nunca envíe sus datos bancarios a través de los formularios del sitio.",
        },
        {
          title: "7. Sus derechos",
          content:
            "Tiene derecho de acceso, rectificación, supresión, limitación, oposición y portabilidad de los datos.\n\nPara ejercer estos derechos, escriba a contact@cartes-verification.fr.\n\nPuede presentar una reclamación ante la autoridad de protección de datos competente.",
        },
      ],
    },
    mentions: {
      title: "Aviso legal",
      metaDescription:
        "Aviso legal de Cartes Vérification: información sobre el editor y el proveedor de alojamiento.",
      lastUpdated: "Última actualización: 1 de agosto de 2026",
      sections: [
        {
          title: "1. Editor del sitio web",
          content:
            "Cartes Vérification, empresa individual.\n\nDirección: por completar.\n\nNúmero de registro: por completar.\n\nContacto: contact@cartes-verification.fr",
        },
        {
          title: "2. Director de publicación",
          content: "El representante legal de Cartes Vérification.",
        },
        {
          title: "3. Proveedor de alojamiento",
          content:
            "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, Estados Unidos.",
        },
        {
          title: "4. Propiedad intelectual",
          content:
            "Todo el contenido del sitio web (textos, interfaz de usuario, elementos gráficos) está protegido. Queda prohibida cualquier reproducción no autorizada.\n\nLas marcas y logotipos de los proveedores de tarjetas regalo mencionados pertenecen a sus respectivos propietarios. Su mención no implica ninguna asociación.",
        },
        {
          title: "5. Responsabilidad",
          content:
            "El sitio web se proporciona tal cual. No garantizamos una disponibilidad ininterrumpida y no somos responsables de los daños indirectos relacionados con su uso.",
        },
        {
          title: "6. Ley aplicable",
          content:
            "Este aviso legal se rige por la legislación francesa. Los litigios son competencia de los tribunales correspondientes.",
        },
      ],
    },
    terms: {
      title: "Términos y condiciones",
      metaDescription:
        "Términos y condiciones de Cartes Vérification: normas de acceso y uso del servicio.",
      lastUpdated: "Última actualización: 1 de agosto de 2026",
      sections: [
        {
          title: "1. Objeto",
          content:
            "Estos términos regulan el acceso al sitio web de Cartes Vérification y el uso de sus formularios para la autenticación y reventa de tarjetas regalo.\n\nCualquier uso del sitio web implica la aceptación de estos términos.",
        },
        {
          title: "2. Servicios ofrecidos",
          content:
            "Autenticación: verificamos y procesamos la tarjeta regalo que usted presenta.\n\nReventa: examinamos su solicitud y le enviamos una oferta de recompra por correo electrónico.\n\nEl envío de una solicitud no constituye una aceptación: cada caso se examina individualmente.",
        },
        {
          title: "3. Condiciones de acceso",
          content:
            "Debe ser mayor de edad y tener plena capacidad jurídica.\n\nDebe ser el titular legítimo de la tarjeta presentada y poder demostrar su adquisición.",
        },
        {
          title: "4. Comprobantes",
          content:
            "Podemos solicitar un comprobante de compra, una foto de la tarjeta o un documento de identidad para verificar la legitimidad de la solicitud.\n\nUna solicitud sin comprobantes suficientes puede ser rechazada.",
        },
        {
          title: "5. Usos prohibidos",
          content:
            "Presentar una tarjeta obtenida fraudulentamente, robada o de la que usted no sea el titular.\n\nProporcionar información falsa o documentos falsificados.\n\nIntentar perturbar el funcionamiento del sitio web o eludir sus medidas de protección.\n\nCualquier infracción dará lugar al rechazo de la solicitud y, en su caso, a una notificación a las autoridades competentes.",
        },
        {
          title: "6. Precios y pago",
          content:
            "La tasa de recompra aplicable a una reventa se le comunicará en nuestra oferta antes de que usted la acepte.\n\nEl pago se realiza tras la verificación completa de la tarjeta.",
        },
        {
          title: "7. Responsabilidad",
          content:
            "Empleamos medios razonables para tramitar las solicitudes con diligencia, sin garantizar el resultado en el caso de tarjetas inválidas, ya utilizadas o caducadas.\n\nNuestra responsabilidad se limita al importe de la transacción en cuestión.",
        },
        {
          title: "8. Ley aplicable",
          content:
            "Estos términos se rigen por la legislación francesa. A falta de acuerdo amistoso, los litigios son competencia de los tribunales correspondientes.",
        },
      ],
    },
  },
};
