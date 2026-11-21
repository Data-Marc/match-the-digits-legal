import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_SUPPORT, IDS, LICENSES, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "es/";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI, empresario individual francés), con el nombre comercial Primisia";

export const es: Locale = {
  code: "es",
  dir,
  name: "Español",
  updated: "21 de noviembre de 2026",
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
    privacyDesc: "Privacidad de Match the Digits: progreso local, clasificación, seguridad, anuncios, compras Premium y eliminación de cuentas.",
    termsDesc: "Condiciones de uso del juego Match the Digits: licencia, publicidad, compra única Quitar anuncios, responsabilidad y ley aplicable.",
    supportDesc: "Soporte, contacto y preguntas frecuentes del juego de lógica Match the Digits.",
    supportIntro: "¿Necesitas ayuda? Escríbenos e indica, si puedes, el modelo de tu dispositivo.",
    emailSupport: "Soporte por correo electrónico",
    faqTitle: "Preguntas frecuentes",
    language: "Idioma",
    translationNote: "Esta traducción se ofrece solo a título informativo. En caso de discrepancia, prevalece la versión francesa.",
  },
  faq: [
    ["¿Necesito una cuenta?", "No necesitas correo ni contraseña para jugar. La clasificación crea una identidad anónima con apodo asignado."],
    ["¿Cuántas pistas y añadidos hay?", "Hasta 4 pistas y 5 añadidos por tablero. Los primeros 2 añadidos son gratis; sin Premium, los siguientes 3 y las pistas ofrecen anuncios recompensados."],
    ["¿Y si no funciona el anuncio?", "Si no está disponible tras solicitarlo, puede concederse la acción sin vídeo dentro del saldo restante. Rechazarlo o cerrarlo voluntariamente antes de la recompensa no la concede."],
    ["¿Premium es una suscripción?", "No, es una compra única sin anuncios, también para pistas y añadidos. Los límites no cambian."],
    ["¿Cómo restauro Premium?", "En Ajustes, Restaurar compras con la cuenta y tienda originales. No hay transferencia automática entre Apple y Google."],
    ["¿Cómo elimino mi cuenta de clasificación?", "Solicítalo en la sección de cuenta de Ajustes y sigue el estado. Sin acceso a la app, escribe al soporte indicando Match the Digits y apodo/identificador de clasificación, nunca tokens ni contraseñas. Puede requerirse verificación."],
    ["¿Puedo volver tras eliminarla?", "Después del trámite puedes pedir nueva identidad y apodo, sujeto a restricciones antiabuso. El progreso conservado permite volver a publicar el récord. Premium se conserva según la tienda."],
    ["¿Qué hace Borrar también mi progreso?", "Reinicia partida, récord y resultados locales afectados, sin borrar Premium ni preferencias. Sin la opción, se conserva el progreso local."],
    ["¿Desinstalar elimina todo?", "Puede perderse el progreso local, pero no solicita borrar la cuenta del servidor. La clasificación no es una copia completa de la partida."],
    ["¿Dónde gestiono el consentimiento publicitario?", "Esta versión aún no dispone de un centro de decisiones publicitarias en Ajustes. Los controles del teléfono y asistencia no sustituyen un formulario exigido antes del tratamiento."],
    ["¿Por qué no aparece mi recordatorio?", "Comprueba los recordatorios en la app y el permiso de notificaciones en el teléfono."],
    ["¿Cómo pido un reembolso?", "Acude a Apple o Google según la tienda de compra. Los procedimientos están enlazados en las condiciones; también puedes contactar al soporte."]
  ],
  privacy: {
    sections: [
      { id: "0", title: "Resumen", content: "Actualización: 21 de noviembre de 2026.\n\nPuedes jugar sin indicar nombre, correo ni contraseña. La clasificación utiliza una cuenta anónima; un identificador técnico no anonimiza los datos asociados. La partida y los ajustes permanecen en tu dispositivo; el apodo y récord de clasificación se guardan en nuestro servidor y son visibles en la clasificación. Otros proveedores intervienen en seguridad, anuncios y compras. Puedes eliminar la cuenta de clasificación con o sin borrar el progreso local." },
      {
        id: "1",
        title: "1. Responsable del tratamiento",
        content: `La Aplicación es publicada por:\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nContacto para cualquier pregunta sobre tus datos: ${EMAIL}\n\nPara los datos publicitarios tratados por Google, Google actúa como responsable del tratamiento independiente, según sus propias normas (sección 5).`,
      },
      { id: "2", title: "2. Progreso y preferencias locales", content: "El dispositivo guarda la partida actual, el récord local, los resultados de desafíos diarios, estadísticas de trofeos, preferencias y fechas de solicitudes de valoración. El récord para la clasificación se transmite por separado.\n\nNo ofrecemos una copia de servidor que restaure todo tu progreso en otro dispositivo. Borrar los datos o desinstalar puede provocar su pérdida. Las copias del sistema operativo dependen de los ajustes del dispositivo." },
      { id: "2a", title: "2 bis. Cuenta y clasificación", content: "Se crea una cuenta técnica anónima al acceder por primera vez a la clasificación. Nuestro servicio Supabase autoalojado conserva la identidad de acceso, sesiones, apodo asignado, récord publicado, fechas y estado de la cuenta. El dispositivo también guarda las credenciales de sesión.\n\nApodo, puntuación y posición son visibles; las credenciales y justificantes de eliminación no son públicos. Un récord válido de una partida terminada o abandonada puede enviarse o reintentarse después de un fallo de red. La clasificación no es una copia de la partida." },
      { id: "2b", title: "2 ter. Seguridad y prevención de abusos", content: "Tratamos datos técnicos de solicitudes, como la IP a la entrada del servicio, huellas de instalación o red, fechas y contadores, para proteger la clasificación, limitar altas repetidas y gestionar eliminaciones y restricciones. Estas huellas siguen siendo datos seudónimos.\n\nFirebase App Check y la atestación de Apple/Google verifican solicitudes con datos técnicos y tokens de atestación. Firebase ya no proporciona la autenticación ni el almacenamiento de la clasificación. Información: https://firebase.google.com/support/privacy" },
      {
        id: "3",
        title: "3. Recordatorios (notificaciones)",
        content:
          "Si activas los recordatorios en los ajustes, la Aplicación te pide permiso para mostrar notificaciones. Los recordatorios se programan localmente en tu dispositivo: no se crea ni se envía a ningún servidor ningún identificador de notificación. Puedes desactivarlos en cualquier momento en los ajustes de la Aplicación o de tu dispositivo. Los recordatorios no contienen publicidad.",
      },
      { id: "4", title: "4. Asistencia", content: `Al escribir a ${EMAIL}, recibimos tu correo, mensaje y los adjuntos que decidas enviar. El mensaje preparado puede incluir versiones de la app y del sistema; puedes retirarlas.\n\nLos usamos para responder, verificar solicitudes sobre cuentas y resolver problemas. Se conservan durante la gestión y después solo cuando sean necesarios para seguimiento, reclamaciones o una obligación legal. Nunca envíes contraseñas, tokens de acceso ni datos bancarios.` },
      { id: "5", title: "5. Anuncios y decisiones de privacidad", content: `Google AdMob proporciona un banner y vídeos recompensados opcionales. Según el sistema y los permisos, su SDK trata IP, identificadores publicitarios o de la app, interacciones y diagnósticos para mostrar y medir anuncios y prevenir fraude. Premium elimina los anuncios, incluidos los vídeos recompensados.\n\nAceptar ver un vídeo no equivale a consentir el tratamiento publicitario. Cuando se exige consentimiento, debe poder rechazarse o retirarse. Esta versión aún no ofrece un centro de decisiones de privacidad publicitaria en los ajustes. Puedes contactarnos para ejercer tus derechos; esto no sustituye un formulario de consentimiento exigible antes del tratamiento.\n\nAndroid permite restablecer o eliminar el identificador publicitario en los ajustes del teléfono. En iOS, el acceso al IDFA y el seguimiento sujeto a ATT requieren la autorización correspondiente de Apple. Estos ajustes no borran por sí solos datos ya conservados por proveedores. Se mantienen los derechos locales, incluida la oposición a determinadas formas de publicidad dirigida.\n\nGoogle: ${GOOGLE_PRIVACY}\nServicios asociados: ${GOOGLE_PARTNERS}` },
      { id: "6", title: "6. Compra Premium y restauración", content: "Apple o Google procesa el pago y conserva datos de facturación según sus propias reglas. No recibimos el número de tu tarjeta.\n\nRevenueCat ayuda a verificar y restaurar la compra única sin anuncios. Trata un identificador seudónimo, datos de transacción/recibo, producto, tienda y estado del derecho Premium. La app también conserva el estado necesario para el acceso. Eliminar la cuenta de clasificación no elimina la compra; los datos de restauración y obligaciones aplicables se gestionan por separado.\n\nInformación: https://www.revenuecat.com/privacy" },
      {
        id: "7",
        title: "7. Valoraciones y reseñas",
        content:
          "Cuando la Aplicación te invita a valorarla, utiliza la ventana oficial de Apple o de Google. Tu valoración y tu reseña las trata la tienda correspondiente, según sus propias normas; la Aplicación no tiene acceso a ellas.",
      },
      { id: "8", title: "8. Finalidades y bases legales", content: "El juego, la cuenta de clasificación solicitada y la gestión/restauración de Premium se basan en prestar el servicio o ejecutar el contrato. La seguridad, los límites antiabuso y la asistencia responden a nuestro interés legítimo en proteger el servicio y sus usuarios, respetando tus derechos. Los recordatorios son opcionales y requieren permiso del dispositivo.\n\nLa publicidad y el acceso a identificadores se basan en el consentimiento cuando sea exigible. Ciertas conservaciones responden a obligaciones legales o a formular, ejercer o defender reclamaciones. Estas bases no autorizan reutilizaciones ilimitadas." },
      { id: "9", title: "9. Proveedores y transferencias", content: `Destinatarios necesarios:\n• Contabo, servidor de Supabase y clasificación;\n• Cloudflare, encaminamiento y protección de solicitudes;\n• Backblaze, copias y diario de decisiones cifrados;\n• Google/Firebase y Apple, atestación y servicios del sistema;\n• Google AdMob, publicidad;\n• RevenueCat y Apple/Google, compras;\n• GitHub Pages, estos documentos públicos; y autoridades cuando lo exija la ley.\n\nSupabase es autoalojado; no implica alojar jugadores en Supabase Cloud. Los proveedores internacionales pueden tratar datos fuera del EEE, incluidos los Estados Unidos. Las garantías dependen del servicio y contrato aplicables; solicita información a ${EMAIL}. No garantizamos un tratamiento exclusivamente europeo. No vendemos datos de clasificación.\n\nAvisos: https://contabo.com/en/legal/privacy/ ; https://www.cloudflare.com/privacypolicy/ ; https://www.backblaze.com/company/privacy ; https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement` },
      {
        id: "10",
        title: "10. Menores",
        content: `La Aplicación está destinada a personas de al menos 16 años. No está dirigida a menores y no recogemos a sabiendas datos sobre ellos.\n\nEn Francia, un menor de 15 años no puede consentir por sí solo el tratamiento de sus datos basado en el consentimiento: también se requiere el acuerdo de un titular de la patria potestad (artículo 45 de la Ley francesa de protección de datos, Loi Informatique et Libertés). Si eres padre o madre y crees que tu hijo ha dado su consentimiento, escríbenos a ${EMAIL}: te indicaremos cómo retirarlo.`,
      },
      { id: "11", title: "11. Eliminación de cuenta y derechos", content: `La sección de cuenta de clasificación en Ajustes permite solicitar la eliminación y seguir su estado. Cuando el servidor acepta la solicitud, el perfil se retira de la clasificación y después se eliminan la identidad y los datos activos relacionados. Una solicitud sin conexión debe transmitirse primero; desinstalar no elimina la cuenta del servidor.\n\n«Borrar también mi progreso» reinicia partida, récord y resultados locales afectados. Sin esta opción permanecen en el dispositivo. Premium y preferencias se conservan. Tras finalizar la eliminación, volver voluntariamente crea una identidad y apodo nuevos, sujeto a restricciones antiabuso. El récord local conservado puede publicarse de nuevo; no se restaura la cuenta anterior y su apodo puede reasignarse.\n\nSin acceso a la app, escribe a ${EMAIL} indicando Match the Digits y el apodo/identificador de clasificación disponible, nunca un token o contraseña. Puede requerirse una comprobación proporcionada para evitar borrar cuentas ajenas.\n\nSegún tu situación, tienes derechos de acceso, rectificación, supresión, limitación, oposición, portabilidad y retirada del consentimiento. Respondemos normalmente en un mes, prorrogable legalmente. Puedes reclamar ante la CNIL: ${CNIL_URL}, o tu autoridad competente.` },
      { id: "12", title: "12. Seguridad", content: "Las comunicaciones usan cifrado en tránsito. El acceso administrativo está restringido; copias y diario de decisiones están cifrados. Estas medidas reducen riesgos sin garantizar seguridad absoluta. La clasificación pública sigue visible; no envíes secretos por los canales de asistencia." },
      { id: "12a", title: "12 bis. Conservación y copias", content: `Los datos locales permanecen hasta borrarse o sustituirse. La cuenta y el récord de clasificación permanecen hasta la eliminación de la cuenta. Los contadores temporales y restricciones tienen vencimientos propios; ciertas trazas sirven para evitar abusos y gestionar disputas.\n\nLa rotación mantiene 7 puntos diarios, 4 semanales y 2 mensuales. No garantiza borrar todas las copias en una fecha exacta. El diario evita que una restauración reintroduzca una cuenta eliminada.\n\nActualmente, justificantes de eliminación y diario se conservan sin purga automática. Pueden contener identificadores técnicos, huellas, fechas y estados. Solicita revisar su conservación o supresión a ${EMAIL}. Los datos de compra siguen por separado las necesidades de restauración y obligaciones aplicables.` },
      { id: "13", title: "13. Cambios", content: "Esta política está disponible en Ajustes y en nuestra web. La fecha identifica la versión. Se actualiza con la evolución del servicio. Siguen vigentes las obligaciones de información y de obtener nuevo consentimiento cuando corresponda." },
      { id: "14", title: "14. Contacto", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Editor",
        content: `La aplicación móvil Match the Digits (la «Aplicación») es publicada por:\n\n${PUBLISHER}\n• Dirección: ${ADDRESS}\n• Teléfono: ${PHONE}\n• Correo electrónico: ${EMAIL}\n• ${IDS}, ${REG}\n• Número de IVA intracomunitario: ${VAT}, IVA no aplicable, artículo 293 B del Código General de Impuestos francés\n• Director de la publicación: Marc SAMSON\n• Alojamiento de las páginas de la política de privacidad y de estas Condiciones: ${HOST}, ${HOST_SUPPORT}`,
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
      { id: "5", title: "5. Juego, progreso y clasificación", content: "Puedes jugar sin cuenta con correo/contraseña. La clasificación usa una identidad técnica anónima y un apodo asignado. Los perfiles virtuales señalados no representan jugadores reales. No se conceden premios en dinero.\n\nPartidas, desafíos, trofeos y ajustes son principalmente locales. El servidor conserva el récord publicado, no una copia completa del progreso. Terminar o abandonar una partida para iniciar otra puede enviar el récord válido, con reintentos si falla la red.\n\nPor tablero: hasta cinco añadidos, los dos primeros gratuitos, y cuatro pistas. Sin Premium, los tres añadidos restantes y las pistas ofrecen un anuncio recompensado. Premium mantiene los mismos límites.\n\nLas trampas, puntuaciones falsas y altas repetidas abusivas pueden provocar restricciones o exclusión. Puedes impugnarlas ante asistencia." },
      { id: "6", title: "6. Anuncios y recompensas", content: "Puede aparecer un banner al jugar. Antes de una pista o recarga correspondiente se ofrece, con tu aceptación, un vídeo recompensado. Confirmada la recompensa, se concede la acción dentro del saldo disponible.\n\nSi el anuncio no está técnicamente disponible tras solicitarlo, la app puede conceder la acción sin vídeo y mostrar un aviso discreto. Rechazarlo o cerrarlo antes de obtener la recompensa no concede esa acción. Premium no añade recargas por encima del límite agotado.\n\nLos anuncios y destinos son de terceros. La política explica sus tratamientos de datos; aceptar el vídeo no es consentimiento de privacidad." },
      { id: "7", title: "7. Compra «Quitar anuncios»", subsections: [{ subtitle: "Qué obtienes", content: "Premium es una compra única sin renovación automática. Elimina banner y anuncios recompensados: pistas y añadidos se conceden directamente, con los mismos límites de cuatro pistas y cinco añadidos por tablero. La cuadrícula puede ocupar el espacio liberado por el banner." },
{ subtitle: "Precio y pago", content: "Cuando esté disponible, la oferta muestra el precio localizado de la tienda. Revisa precio y condiciones en la confirmación Apple o Google. Una compra cancelada, pendiente o fallida no se considera adquirida. RevenueCat verifica Premium; no recibimos datos de tarjeta." },
{ subtitle: "Restauración", content: "Usa Restaurar compras en Ajustes con la cuenta y tienda originales. Puede requerirse conexión. Una compra Apple no pasa automáticamente a Google Play ni a la inversa. Borrar cuenta de clasificación o progreso no cancela la compra." },
{
            subtitle: "Desistimiento y reembolsos",
            content: `La compra se refiere a contenido digital suministrado inmediatamente después del pago. El derecho de desistimiento y las solicitudes de reembolso se ejercen en las condiciones previstas por la ley aplicable y por las normas de la tienda correspondiente:\n\n• App Store: solicitud a Apple, en ${APPLE_REFUND}\n• Google Play: solicitud a Google, siguiendo el procedimiento de ${GOOGLE_REFUND}\n\nTambién puedes escribirnos a ${EMAIL}.`,
          }] },
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
      { id: "10", title: "10. Disponibilidad y actualizaciones", content: "Clasificación, compras y ciertas verificaciones necesitan conexión y dependen de proveedores. Fallos, mantenimiento, restricciones de seguridad o anuncios indisponibles pueden afectar al servicio. El juego local puede seguir disponible según el estado de la partida.\n\nPodemos corregir o desarrollar la app. Se mantienen los derechos imperativos del consumidor y obligaciones de servicios digitales; comprar sin anuncios no garantiza disponibilidad perpetua del servicio en línea." },
      {
        id: "11",
        title: "11. Garantías y responsabilidad",
        content:
          "La Aplicación se proporciona «tal cual». Nada en estas Condiciones limita los derechos que te reconoce la ley como consumidor, en particular la garantía legal de conformidad de los contenidos y servicios digitales.\n\nEn la medida en que lo permita la ley, el editor no es responsable de:\n\n• la pérdida de tu progreso guardado en tu dispositivo (sección 5);\n• los daños indirectos;\n• los contenidos publicitarios proporcionados por terceros;\n• la falta de disponibilidad causada por tu dispositivo, tu sistema operativo, tu conexión o los servicios de Apple y Google.\n\nEstas limitaciones no se aplican en caso de negligencia grave o dolo, a los daños personales ni cuando la ley las prohíba.",
      },
      { id: "12", title: "12. Eliminación y fin del uso", content: `Puedes dejar de jugar cuando quieras. Para borrar la cuenta del servidor usa la sección de clasificación en Ajustes o ${EMAIL}; desinstalar no basta. La política describe el tratamiento y las copias.\n\nBorrar el progreso local es opcional. La cuenta eliminada no es recuperable; volver, si está permitido, crea una nueva identidad y apodo. El récord local conservado puede reutilizarse. Premium sigue vinculado a la compra, independientemente de la clasificación.\n\nLos abusos pueden restringir la clasificación sin eliminar tus derechos legales. Propiedad intelectual, responsabilidad y resolución de disputas siguen aplicándose.` },
      { id: "13", title: "13. Cambios de las condiciones", content: "La versión vigente está en la app y web con su fecha. La evolución del servicio o de la ley puede requerir cambios. Se mantienen las obligaciones legales de información y los derechos adquiridos del consumidor." },
      { id: "14", title: "14. Ley, mediación y litigios", content: `Se aplica la ley francesa sin privar al consumidor de las protecciones imperativas de su país de residencia.\n\nDirige reclamaciones a ${EMAIL}. Conservas el derecho a mediación de consumo gratuita bajo las condiciones legales tras una reclamación escrita previa. La adhesión del editor a un sistema de mediación está pendiente; los datos del mediador se publicarán tras la adhesión. Estas condiciones no designan un mediador.\n\nSin acuerdo, se podrá acudir a los tribunales competentes, conservando el consumidor los recursos relacionados con su residencia.` },
      { id: "15", title: "15. Contacto", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
};
