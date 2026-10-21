import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_PHONE, IDS, LICENSES, MEDIATOR, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "es/";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI, empresario individual francés), con el nombre comercial Primisia";

export const es: Locale = {
  code: "es",
  dir,
  name: "Español",
  updated: "21 de octubre de 2026",
  ui: {
    legalDocuments: "Documentos legales",
    privacyPolicy: "Política de privacidad",
    termsOfUse: "Condiciones de uso",
    support: "Soporte",
    privacySub: "Datos, publicidad, consentimiento y tus derechos",
    termsSub: "Licencia, publicidad, compra Quitar anuncios y responsabilidad",
    supportSub: "Contacto, preguntas frecuentes y ayuda con compras",
    lastUpdated: "Última actualización",
    footer: "Publicado por Marc SAMSON EI, con el nombre comercial Primisia",
    indexDesc: "Política de privacidad, condiciones de uso y soporte del juego de lógica Match the Digits.",
    privacyDesc: "Política de privacidad del juego Match the Digits: sin cuenta, datos de juego en tu dispositivo, publicidad de Google AdMob con consentimiento.",
    termsDesc: "Condiciones de uso del juego Match the Digits: licencia, publicidad, compra única Quitar anuncios, responsabilidad y ley aplicable.",
    supportDesc: "Soporte, contacto y preguntas frecuentes del juego de lógica Match the Digits.",
    supportIntro: "¿Necesitas ayuda? Escríbenos e indica, si puedes, el modelo de tu dispositivo.",
    emailSupport: "Soporte por correo electrónico",
    faqTitle: "Preguntas frecuentes",
    language: "Idioma",
    translationNote: "Esta traducción se ofrece solo a título informativo. En caso de discrepancia, prevalece la versión francesa.",
  },
  faq: [
    ["¿Tengo que crear una cuenta?", "No. Match the Digits no requiere cuenta, registro ni inicio de sesión. Puedes jugar en cuanto lo instales."],
    ["Compré «Quitar anuncios» pero sigo viendo anuncios", "Abre los ajustes de la app y toca <strong>Restaurar compras</strong>. Comprueba que has iniciado sesión con la misma cuenta de App Store o Google Play que usaste para la compra."],
    ["¿«Quitar anuncios» es una suscripción?", "No. Es una compra única: se cobra una sola vez y nunca se renueva. Elimina todos los anuncios, incluido el anuncio con recompensa opcional para las pistas. No da ninguna ventaja de juego: cada jugador tiene 4 pistas por partida."],
    ["¿Cómo funcionan las pistas?", "Cada partida te da 4 pistas. Sin la compra «Quitar anuncios», puedes elegir ver un anuncio breve para revelar una pista. Es opcional: siempre puedes seguir jugando sin verlo."],
    ["¿Cómo cambio mis opciones de publicidad?", "Abre los ajustes de la app para consultar o cambiar el consentimiento que diste para la publicidad. En Android también puedes restablecer o eliminar tu ID de publicidad en los ajustes del dispositivo."],
    ["Mi recordatorio no aparece", "Comprueba que las notificaciones de Match the Digits están permitidas en los ajustes del dispositivo y que los recordatorios están activados en los ajustes de la app."],
    ["¿Perderé mi progreso?", "Tu partida, tus puntuaciones, tus resultados diarios y tus ajustes se guardan solo en tu dispositivo. Desinstalar la app, borrar sus datos o cambiar de dispositivo los elimina definitivamente: no guardamos ninguna copia y no podemos restaurarlos."],
    ["¿Cómo obtengo un reembolso?", `Las compras las gestionan Apple o Google. Solicita un reembolso a Apple en <a href="${APPLE_REFUND}">reportaproblem.apple.com</a>, o a Google siguiendo <a href="${GOOGLE_REFUND}">este procedimiento</a>. También puedes escribirnos.`],
  ],
  privacy: {
    sections: [
      {
        id: "0",
        title: "Resumen",
        content:
          "Fecha de entrada en vigor: 21 de octubre de 2026.\n\nEsta política explica qué datos se tratan cuando usas la aplicación móvil Match the Digits (la «Aplicación») en iOS y Android, por qué, quién los trata, durante cuánto tiempo y cómo ejercer tus derechos.\n\n• La Aplicación no te pide crear una cuenta ni te pide tu nombre, tu correo electrónico o tu fecha de nacimiento para jugar.\n• Tu progreso y tus ajustes se guardan solo en tu dispositivo. Nosotros no los recibimos.\n• La Aplicación muestra publicidad proporcionada por Google (AdMob). Para ello, Google trata algunos datos de tu dispositivo, descritos en la sección 5. En el Espacio Económico Europeo, el Reino Unido y Suiza, se solicita tu consentimiento antes de cualquier publicidad personalizada.\n• Solo recibimos datos sobre ti si nos escribes (soporte).",
      },
      {
        id: "1",
        title: "1. Responsable del tratamiento",
        content: `La Aplicación es publicada por:\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nContacto para cualquier pregunta sobre tus datos: ${EMAIL}\n\nPara los datos publicitarios tratados por Google, Google actúa como responsable del tratamiento independiente, según sus propias normas (sección 5).`,
      },
      {
        id: "2",
        title: "2. Datos guardados solo en tu dispositivo",
        content:
          "Los siguientes datos se guardan en el almacenamiento local de la Aplicación, en tu dispositivo. No se nos envían ni se envían a ningún servidor del editor:\n\n• Partida en curso (tablero, puntuación, pistas y añadidos restantes): para retomar tu partida\n• Mejor puntuación: para mostrarla en la pantalla de inicio y en los trofeos\n• Resultados diarios (tableros completados, puntos, parejas, desafíos diarios): calendario, estadísticas, trofeos\n• Preferencias: idioma, respuesta háptica, efectos de sonido, recordatorios: para respetar tus ajustes\n• Fechas de las solicitudes de valoración ya mostradas: para no pedirte con demasiada frecuencia que valores la Aplicación\n\nEstos datos se conservan mientras la Aplicación esté instalada. Puedes eliminarlos en cualquier momento borrando los datos de la Aplicación (Android) o desinstalándola (iOS y Android). Después no se pueden recuperar: el editor no hace ninguna copia de seguridad.",
      },
      {
        id: "3",
        title: "3. Recordatorios (notificaciones)",
        content:
          "Si activas los recordatorios en los ajustes, la Aplicación te pide permiso para mostrar notificaciones. Los recordatorios se programan localmente en tu dispositivo: no se crea ni se envía a ningún servidor ningún identificador de notificación. Puedes desactivarlos en cualquier momento en los ajustes de la Aplicación o de tu dispositivo. Los recordatorios no contienen publicidad.",
      },
      {
        id: "4",
        title: "4. Soporte (cuando nos escribes)",
        content: `El botón «Contactar con soporte» abre tu aplicación de correo con un mensaje prerrellenado dirigido a ${EMAIL}. Si lo envías, recibimos:\n\n• tu dirección de correo electrónico y el contenido de tu mensaje;\n• la versión de la Aplicación, el sistema operativo (iOS o Android) y su versión, añadidos automáticamente al final del mensaje para ayudarnos a resolver el problema. Puedes borrarlos antes de enviarlo.\n\nEstos datos se usan solo para responderte. Se eliminan en cuanto se ha tramitado tu solicitud.`,
      },
      {
        id: "5",
        title: "5. Publicidad (Google AdMob)",
        subsections: [
          {
            subtitle: "Datos tratados por Google",
            content:
              "La Aplicación muestra publicidad proporcionada por Google AdMob, mediante el SDK Google Mobile Ads integrado en la Aplicación. Según la documentación que Google publica para desarrolladores, Google trata:\n\n• Dirección IP, que puede usarse para estimar la ubicación aproximada del dispositivo: publicidad, medición, prevención del fraude\n• Interacciones con la Aplicación (inicios, toques, vídeos vistos): publicidad, medición, prevención del fraude\n• Datos de diagnóstico y rendimiento (tiempo de inicio, bloqueos, consumo de energía); en iOS, registros de fallos no vinculados al usuario: diagnóstico, mejora, publicidad, medición\n• Identificadores del dispositivo: ID de publicidad (Android), App Set ID, otros identificadores propios de la aplicación o del desarrollador: publicidad y medición\n• Datos publicitarios (anuncios vistos): publicidad y medición\n\nGoogle indica que estos datos se cifran durante su transferencia (TLS). El editor no tiene acceso a estos datos individuales: solo recibe estadísticas agregadas (número de impresiones, ingresos).",
          },
          {
            subtitle: "Anuncios que se muestran en la Aplicación",
            content:
              "• un banner en la pantalla de juego;\n• un anuncio con recompensa opcional: puedes elegir ver un vídeo para obtener una pista. Rechazarlo no te impide jugar.\n\nSi has comprado «Quitar anuncios» (sección 6), no se muestra ningún anuncio.",
          },
          {
            subtitle: "Tu consentimiento (EEE, Reino Unido, Suiza)",
            content:
              "En el primer inicio, una ventana de consentimiento gestionada por la herramienta de consentimiento de Google te permite aceptar o rechazar el uso de tus datos con fines publicitarios, finalidad por finalidad. Si lo rechazas, la Aplicación sigue siendo totalmente jugable; en ese caso pueden mostrarse anuncios no personalizados o limitados. Puedes cambiar tu elección en cualquier momento en los ajustes de la Aplicación.",
          },
          {
            subtitle: "iOS: seguimiento",
            content:
              "La Aplicación no te pide permiso para rastrear tu actividad (App Tracking Transparency): no se usa el identificador publicitario de tu dispositivo (IDFA). La Aplicación nunca te obliga a aceptar el seguimiento para jugar.",
          },
          {
            subtitle: "Android: ID de publicidad",
            content: "Puedes restablecer o eliminar tu ID de publicidad en los ajustes de tu dispositivo.",
          },
          {
            subtitle: "Estados Unidos",
            content:
              "Según el Estado en el que vivas, la ley puede darte derecho a oponerte a la «venta» o al «intercambio» de tus datos para publicidad dirigida. Puedes ejercer esta opción desde los ajustes de privacidad de la Aplicación o escribiéndonos.",
          },
          {
            subtitle: "Más información",
            content: `Política de privacidad de Google: ${GOOGLE_PRIVACY}\nCómo usa Google la información de sitios o aplicaciones que utilizan sus servicios: ${GOOGLE_PARTNERS}`,
          },
        ],
      },
      {
        id: "6",
        title: "6. Compra «Quitar anuncios»",
        content:
          "La compra única que elimina los anuncios la gestionan exclusivamente App Store (Apple) o Google Play (Google). Nunca recibimos tus datos de pago (tarjeta bancaria, nombre, dirección de facturación). La Aplicación solo recibe de la tienda la confirmación de que se ha realizado la compra, para eliminar los anuncios y permitir restaurarla. El tratamiento del pago se rige por las políticas de privacidad de Apple o de Google.",
      },
      {
        id: "7",
        title: "7. Valoraciones y reseñas",
        content:
          "Cuando la Aplicación te invita a valorarla, utiliza la ventana oficial de Apple o de Google. Tu valoración y tu reseña las trata la tienda correspondiente, según sus propias normas; la Aplicación no tiene acceso a ellas.",
      },
      {
        id: "8",
        title: "8. Bases jurídicas (RGPD)",
        content:
          "• Funcionamiento del juego y almacenamiento local de tu progreso y tus ajustes: prestación del servicio que solicitas (contrato)\n• Acceso a los identificadores del dispositivo y publicidad, personalizada o no, cuando la ley exige consentimiento: consentimiento, que puedes retirar en cualquier momento (sección 5)\n• Mostrar recordatorios: consentimiento (permiso de notificaciones), que puedes retirar en cualquier momento\n• Responder a tus solicitudes de soporte: interés legítimo en responderte; o medidas precontractuales / contrato si la solicitud se refiere a una compra\n• Cumplimiento de obligaciones legales (por ejemplo, contables en relación con las compras): obligación legal",
      },
      {
        id: "9",
        title: "9. Destinatarios y transferencias fuera de la Unión Europea",
        content:
          "El editor no vende ni alquila los datos tratados por la Aplicación. Los únicos destinatarios son:\n\n• Google, para la publicidad (sección 5);\n• Apple o Google, para las compras, las valoraciones y las notificaciones del sistema, según tu dispositivo;\n• las autoridades, solo cuando la ley lo exija.\n\nGoogle puede tratar datos fuera de la Unión Europea, en particular en Estados Unidos, con las garantías descritas en su política de privacidad.",
      },
      {
        id: "10",
        title: "10. Menores",
        content: `La Aplicación está destinada a personas de al menos 16 años. No está dirigida a menores y no recogemos a sabiendas datos sobre ellos.\n\nEn Francia, un menor de 15 años no puede consentir por sí solo el tratamiento de sus datos basado en el consentimiento: también se requiere el acuerdo de un titular de la patria potestad (artículo 45 de la Ley francesa de protección de datos, Loi Informatique et Libertés). Si eres padre o madre y crees que tu hijo ha dado su consentimiento, escríbenos a ${EMAIL}: te indicaremos cómo retirarlo.`,
      },
      {
        id: "11",
        title: "11. Tus derechos",
        content: `Según la ley aplicable (en particular el RGPD), tienes derecho de acceso, rectificación, supresión, limitación, oposición y portabilidad, así como derecho a retirar tu consentimiento en cualquier momento, sin que ello afecte a los tratamientos ya realizados.\n\n• Datos en tu dispositivo: los controlas directamente (sección 2).\n• Consentimiento publicitario: puede modificarse en cualquier momento desde los ajustes de la Aplicación (sección 5).\n• Datos publicitarios en poder de Google: herramientas y contactos descritos en la política de privacidad de Google.\n• Datos de soporte: escribe a ${EMAIL}. Respondemos en el plazo de un mes, prorrogable en las condiciones previstas por el RGPD.\n\nSi consideras que no se han respetado tus derechos, puedes presentar una reclamación ante la ${CNIL}, o en línea en ${CNIL_URL}, o ante la autoridad de protección de datos de tu país de residencia.`,
      },
      {
        id: "12",
        title: "12. Seguridad",
        content:
          "Los datos de juego permanecen en tu dispositivo y se benefician de sus protecciones. Los intercambios con Google están cifrados (TLS). Ningún dato de juego se almacena en un servidor del editor.",
      },
      {
        id: "13",
        title: "13. Cambios",
        content:
          "Podemos modificar esta política, en particular si la Aplicación evoluciona. La fecha de la última actualización figura en la parte superior de esta página. En caso de un cambio importante, se te informará en la Aplicación antes de que se aplique.",
      },
      { id: "14", title: "14. Contacto", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Editor",
        content: `La aplicación móvil Match the Digits (la «Aplicación») es publicada por:\n\n${PUBLISHER}\n• Dirección: ${ADDRESS}\n• Teléfono: ${PHONE}\n• Correo electrónico: ${EMAIL}\n• ${IDS}, ${REG}\n• Número de IVA intracomunitario: ${VAT}, IVA no aplicable, artículo 293 B del Código General de Impuestos francés\n• Director de la publicación: Marc SAMSON\n• Alojamiento de las páginas de la política de privacidad y de estas Condiciones: ${HOST}, ${HOST_PHONE}`,
      },
      {
        id: "2",
        title: "2. Objeto y aceptación",
        content: `Estas condiciones (las «Condiciones») regulan el uso de la Aplicación. Al descargar o usar la Aplicación, las aceptas. Si no las aceptas, no uses la Aplicación.\n\nLa Aplicación está destinada a personas de al menos 16 años.\n\nEl uso de tus datos personales se describe en la Política de privacidad, disponible en ${privacyUrl(dir)} y en los ajustes de la Aplicación.`,
      },
      {
        id: "3",
        title: "3. Licencia",
        content: `El editor te concede una licencia personal, no exclusiva, intransferible y revocable para instalar y usar la Aplicación en los dispositivos que poseas o controles, con fines privados y no comerciales.\n\n• En iOS, la Aplicación se te concede con arreglo al contrato de licencia de usuario final estándar de Apple (Licensed Application End User License Agreement): ${APPLE_EULA}\nEstas Condiciones lo complementan; en caso de contradicción, prevalece el contrato de Apple para el uso de la Aplicación en iOS.\n• En Android, el uso de la Aplicación también está sujeto a las Condiciones de Servicio de Google Play.\n\nLa Aplicación se concede bajo licencia, no se vende.`,
      },
      {
        id: "4",
        title: "4. Uso de la Aplicación",
        content:
          "Te comprometes a no:\n\n• copiar, modificar, descompilar, desensamblar ni intentar extraer el código fuente de la Aplicación, salvo cuando la ley lo permita expresamente;\n• eludir o alterar sus mecanismos técnicos, incluida la visualización de anuncios y las compras integradas;\n• generar artificialmente impresiones o clics en anuncios;\n• usar la Aplicación de forma ilícita o que vulnere derechos de terceros.",
      },
      {
        id: "5",
        title: "5. El juego y tu progreso",
        content:
          "La Aplicación no requiere cuenta. Tu progreso (partida en curso, puntuaciones, resultados diarios, trofeos) y tus ajustes se guardan solo en tu dispositivo.\n\nEl editor no hace copia de seguridad de ellos: se pierden si desinstalas la Aplicación, borras sus datos o cambias de dispositivo. El editor no puede restaurarlos.\n\nLas reglas del juego, el número de pistas y añadidos disponibles y los tableros propuestos pueden cambiar de una versión a otra.",
      },
      {
        id: "6",
        title: "6. Publicidad",
        content:
          "La Aplicación es gratuita y se financia con publicidad proporcionada por Google AdMob:\n\n• un banner en la pantalla de juego;\n• un anuncio con recompensa opcional: puedes elegir ver un vídeo para obtener una pista. La recompensa se indica antes del vídeo y se concede una vez visto. Si lo rechazas, o si no hay ningún anuncio disponible, puedes seguir jugando.\n\nLos anuncios los selecciona Google. El editor no controla su contenido y no es responsable de los productos o servicios que presentan. Tus opciones sobre el uso de tus datos con fines publicitarios se describen en la Política de privacidad.",
      },
      {
        id: "7",
        title: "7. Compra «Quitar anuncios»",
        subsections: [
          {
            subtitle: "Qué obtienes",
            content:
              "La Aplicación ofrece una compra única y permanente («Quitar anuncios»):\n\n• elimina todos los anuncios de la Aplicación, incluido el anuncio con recompensa: la pista se concede entonces directamente;\n• no da ninguna ventaja de juego: cada jugador tiene 4 pistas por partida, con o sin compra; el número de añadidos y las reglas son iguales para todos;\n• no es una suscripción: se cobra una sola vez y no se renueva.",
          },
          {
            subtitle: "Precio y pago",
            content:
              "El precio se muestra en App Store o Google Play antes de la compra, con los impuestos aplicables en tu país. El pago lo gestionan exclusivamente Apple o Google, según sus condiciones. El editor nunca recibe tus datos de pago.",
          },
          {
            subtitle: "Restaurar tu compra",
            content:
              "La compra está vinculada a la cuenta de Apple o Google con la que se realizó. Puedes recuperarla gratis en un nuevo dispositivo o tras reinstalar, con la misma cuenta, mediante el botón «Restaurar compras» de los ajustes.",
          },
          {
            subtitle: "Desistimiento y reembolsos",
            content: `La compra se refiere a contenido digital suministrado inmediatamente después del pago. El derecho de desistimiento y las solicitudes de reembolso se ejercen en las condiciones previstas por la ley aplicable y por las normas de la tienda correspondiente:\n\n• App Store: solicitud a Apple, en ${APPLE_REFUND}\n• Google Play: solicitud a Google, siguiendo el procedimiento de ${GOOGLE_REFUND}\n\nTambién puedes escribirnos a ${EMAIL}.`,
          },
        ],
      },
      {
        id: "8",
        title: "8. Recordatorios",
        content:
          "Si los activas, la Aplicación puede enviarte recordatorios locales. Puedes desactivarlos en cualquier momento en los ajustes de la Aplicación o de tu dispositivo. No contienen publicidad.",
      },
      {
        id: "9",
        title: "9. Propiedad intelectual",
        content: `La Aplicación, su nombre, sus elementos visuales, textos, sonidos, código y presentación están protegidos por el derecho de propiedad intelectual y pertenecen al editor o a sus licenciantes. Algunos elementos de terceros se usan con su propia licencia:\n\n${LICENSES}\n\nQueda prohibida cualquier reproducción o reutilización no autorizada.`,
      },
      {
        id: "10",
        title: "10. Disponibilidad y actualizaciones",
        content:
          "El editor puede modificar la Aplicación, corregir errores, cambiar o eliminar funciones o dejar de distribuirla. Algunas actualizaciones pueden ser necesarias para seguir usando la Aplicación. El editor procura que funcione correctamente, pero no garantiza que esté disponible sin interrupciones, en particular en cuanto a la visualización de anuncios, que depende de Google.",
      },
      {
        id: "11",
        title: "11. Garantías y responsabilidad",
        content:
          "La Aplicación se proporciona «tal cual». Nada en estas Condiciones limita los derechos que te reconoce la ley como consumidor, en particular la garantía legal de conformidad de los contenidos y servicios digitales.\n\nEn la medida en que lo permita la ley, el editor no es responsable de:\n\n• la pérdida de tu progreso guardado en tu dispositivo (sección 5);\n• los daños indirectos;\n• los contenidos publicitarios proporcionados por terceros;\n• la falta de disponibilidad causada por tu dispositivo, tu sistema operativo, tu conexión o los servicios de Apple y Google.\n\nEstas limitaciones no se aplican en caso de negligencia grave o dolo, a los daños personales ni cuando la ley las prohíba.",
      },
      {
        id: "12",
        title: "12. Fin del uso",
        content:
          "Puedes dejar de usar la Aplicación en cualquier momento desinstalándola. El editor puede rescindir tu licencia si no cumples estas Condiciones. Las secciones 9, 11 y 14 siguen aplicándose tras el fin de la licencia.",
      },
      {
        id: "13",
        title: "13. Cambios en estas Condiciones",
        content:
          "El editor puede modificar estas Condiciones, en particular para adaptarlas a la evolución de la Aplicación o de la ley. La fecha de la última actualización figura en la parte superior de esta página. En caso de un cambio importante, se te informará en la Aplicación antes de su entrada en vigor. Si no aceptas las nuevas Condiciones, puedes dejar de usar la Aplicación.",
      },
      {
        id: "14",
        title: "14. Ley aplicable, mediación y litigios",
        content: `Estas Condiciones se rigen por la ley francesa. Si eres un consumidor que reside en otro país, conservas la protección de las normas imperativas de la ley de tu país.\n\nEn caso de dificultad, escribe primero a ${EMAIL}: buscaremos una solución amistosa.\n\nMediación de consumo: si eres consumidor y tu reclamación escrita no se ha resuelto, puedes recurrir gratuitamente al siguiente mediador de consumo: ${MEDIATOR}.\n\nA falta de acuerdo, el litigio se someterá a los tribunales competentes; si eres consumidor, puedes acudir en particular al tribunal de tu lugar de residencia.`,
      },
      { id: "15", title: "15. Contacto", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
};
