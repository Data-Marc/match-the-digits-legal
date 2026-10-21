// Version française = version de référence (texte de legal/*.md du dépôt de l'app).
import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_PHONE, IDS, LICENSES, MEDIATOR, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "fr/";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI), exerçant sous l'enseigne Primisia";

export const fr: Locale = {
  code: "fr",
  dir,
  name: "Français",
  updated: "21 octobre 2026",
  ui: {
    legalDocuments: "Documents légaux",
    privacyPolicy: "Politique de confidentialité",
    termsOfUse: "Conditions d'utilisation",
    support: "Support",
    privacySub: "Données, publicité, consentement &amp; vos droits",
    termsSub: "Licence, publicité, achat Supprimer les publicités &amp; responsabilité",
    supportSub: "Contact, FAQ &amp; aide sur les achats",
    lastUpdated: "Dernière mise à jour",
    footer: "Édité par Marc SAMSON EI, sous l'enseigne Primisia",
    indexDesc: "Politique de confidentialité, conditions d'utilisation et support du jeu de réflexion Match the Digits.",
    privacyDesc: "Politique de confidentialité du jeu Match the Digits : aucun compte, données de jeu sur votre appareil, publicité Google AdMob avec consentement.",
    termsDesc: "Conditions d'utilisation du jeu Match the Digits : licence, publicité, achat unique Supprimer les publicités, responsabilité et droit applicable.",
    supportDesc: "Support, contact et questions fréquentes du jeu de réflexion Match the Digits.",
    supportIntro: "Besoin d'aide ? Écrivez-nous en indiquant si possible le modèle de votre appareil.",
    emailSupport: "Support par e-mail",
    faqTitle: "Questions fréquentes",
    language: "Langue",
    translationNote: "",
  },
  faq: [
    ["Dois-je créer un compte ?", "Non. Match the Digits ne demande ni compte, ni inscription, ni connexion. Vous pouvez jouer dès l'installation."],
    ["J'ai acheté « Supprimer les publicités » mais je vois encore des publicités", "Ouvrez les réglages de l'application et appuyez sur <strong>Restaurer les achats</strong>. Vérifiez que vous êtes connecté avec le même compte App Store ou Google Play que celui de l'achat."],
    ["« Supprimer les publicités » est-il un abonnement ?", "Non. C'est un achat unique : il est facturé une seule fois et ne se renouvelle jamais. Il retire toutes les publicités, y compris la publicité récompensée facultative pour les indices. Il ne donne aucun avantage de jeu : chaque joueur dispose de 4 indices par partie."],
    ["Comment fonctionnent les indices ?", "Chaque partie vous donne 4 indices. Sans l'achat « Supprimer les publicités », vous pouvez choisir de regarder une courte publicité pour révéler un indice. C'est facultatif : vous pouvez toujours continuer à jouer sans."],
    ["Comment modifier mes choix publicitaires ?", "Ouvrez les réglages de l'application pour consulter ou modifier le consentement donné pour la publicité. Sur Android, vous pouvez aussi réinitialiser ou supprimer votre identifiant publicitaire dans les paramètres de l'appareil."],
    ["Mon rappel ne s'affiche pas", "Vérifiez que les notifications sont autorisées pour Match the Digits dans les paramètres de votre appareil, puis que les rappels sont activés dans les réglages de l'application."],
    ["Vais-je perdre ma progression ?", "Votre partie, vos scores, vos résultats quotidiens et vos réglages sont enregistrés uniquement sur votre appareil. Désinstaller l'application, effacer ses données ou changer d'appareil les supprime définitivement : nous n'en gardons aucune copie et ne pouvons pas les restaurer."],
    ["Comment obtenir un remboursement ?", `Les achats sont traités par Apple ou Google. Demandez un remboursement à Apple sur <a href="${APPLE_REFUND}">reportaproblem.apple.com</a>, ou à Google selon <a href="${GOOGLE_REFUND}">cette procédure</a>. Vous pouvez aussi nous écrire.`],
  ],
  privacy: {
    sections: [
      {
        id: "0",
        title: "En résumé",
        content:
          "Date d'entrée en vigueur : 21 octobre 2026.\n\nLa présente politique explique quelles données sont traitées lorsque vous utilisez l'application mobile Match the Digits (l'« Application »), sur iOS et Android, pourquoi, par qui, combien de temps, et comment exercer vos droits.\n\n• L'Application ne vous demande pas de créer de compte et ne vous demande ni nom, ni e-mail, ni date de naissance pour jouer.\n• Votre progression et vos réglages sont enregistrés uniquement sur votre appareil. Nous ne les recevons pas.\n• L'Application affiche des publicités fournies par Google (AdMob). Pour cela, Google traite certaines données de votre appareil, décrites à la section 5. Dans l'Espace économique européen, au Royaume-Uni et en Suisse, votre consentement est demandé avant toute publicité personnalisée.\n• Nous ne recevons des données vous concernant que si vous nous écrivez (support).",
      },
      {
        id: "1",
        title: "1. Responsable du traitement",
        content: `L'Application est éditée par :\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nContact pour toute question relative à vos données : ${EMAIL}\n\nPour les données publicitaires traitées par Google, Google agit en tant que responsable de traitement indépendant, selon ses propres règles (section 5).`,
      },
      {
        id: "2",
        title: "2. Données enregistrées uniquement sur votre appareil",
        content:
          "Les données suivantes sont enregistrées dans le stockage local de l'Application, sur votre appareil. Elles ne nous sont pas transmises et ne sont envoyées à aucun serveur de l'éditeur :\n\n• Partie en cours (plateau, score, indices et ajouts restants) — reprendre votre partie\n• Meilleur score — l'afficher sur l'accueil et dans les trophées\n• Résultats quotidiens (plateaux terminés, points, paires, défis du jour) — calendrier, statistiques, trophées\n• Préférences : langue, retours haptiques, effets sonores, rappels — respecter vos réglages\n• Dates des demandes de notation déjà affichées — ne pas vous redemander trop souvent de noter l'Application\n\nCes données sont conservées tant que l'Application est installée. Vous pouvez les supprimer à tout moment en effaçant les données de l'Application (Android) ou en la désinstallant (iOS et Android). Elles ne peuvent pas être récupérées ensuite : aucune sauvegarde n'est faite par l'éditeur.",
      },
      {
        id: "3",
        title: "3. Rappels (notifications)",
        content:
          "Si vous activez les rappels dans les réglages, l'Application vous demande l'autorisation d'afficher des notifications. Les rappels sont programmés localement sur votre appareil : aucun identifiant de notification n'est créé ni envoyé à un serveur. Vous pouvez les désactiver à tout moment dans les réglages de l'Application ou dans ceux de votre appareil. Les rappels ne contiennent aucune publicité.",
      },
      {
        id: "4",
        title: "4. Support (quand vous nous écrivez)",
        content: `Le bouton « Contacter le support » ouvre votre application de messagerie avec un e-mail pré-rempli adressé à ${EMAIL}. Si vous l'envoyez, nous recevons :\n\n• votre adresse e-mail et le contenu de votre message ;\n• la version de l'Application, le système (iOS ou Android) et sa version, ajoutés automatiquement en bas du message pour nous aider à résoudre le problème. Vous pouvez les supprimer avant l'envoi.\n\nCes données servent uniquement à vous répondre. Elles sont supprimées dès que votre demande est traitée.`,
      },
      {
        id: "5",
        title: "5. Publicité (Google AdMob)",
        subsections: [
          {
            subtitle: "Données traitées par Google",
            content:
              "L'Application affiche des publicités fournies par Google AdMob, au moyen du SDK Google Mobile Ads intégré à l'Application. Selon la documentation qu'il publie à l'attention des développeurs, Google traite :\n\n• Adresse IP, pouvant servir à estimer la localisation approximative de l'appareil — publicité, mesure, prévention de la fraude\n• Interactions avec l'Application (lancement, appuis, vidéos vues) — publicité, mesure, prévention de la fraude\n• Données de diagnostic et de performance (temps de lancement, blocages, consommation d'énergie) ; sur iOS, journaux de plantage non liés à l'utilisateur — diagnostic, amélioration, publicité, mesure\n• Identifiants de l'appareil : identifiant publicitaire (Android), App Set ID, autres identifiants propres à l'application ou au développeur — publicité et mesure\n• Données publicitaires (publicités vues) — publicité et mesure\n\nGoogle indique que ces données sont chiffrées pendant leur transfert (protocole TLS). L'éditeur n'a pas accès à ces données individuelles : il reçoit seulement des statistiques agrégées (nombre d'affichages, revenus).",
          },
          {
            subtitle: "Publicités affichées dans l'Application",
            content:
              "• une bannière sur l'écran de jeu ;\n• une publicité récompensée facultative : vous pouvez choisir de regarder une vidéo pour obtenir un indice. Refuser ne vous empêche pas de jouer.\n\nSi vous avez acheté « Supprimer les publicités » (section 6), aucune publicité n'est affichée.",
          },
          {
            subtitle: "Votre consentement (Espace économique européen, Royaume-Uni, Suisse)",
            content:
              "Au premier lancement, une fenêtre de consentement, gérée par l'outil de consentement de Google, vous permet d'accepter ou de refuser l'utilisation de vos données à des fins publicitaires, finalité par finalité. Si vous refusez, l'Application reste entièrement jouable ; des publicités non personnalisées ou limitées peuvent alors être affichées. Vous pouvez modifier votre choix à tout moment dans les réglages de l'Application.",
          },
          {
            subtitle: "iOS — suivi publicitaire",
            content:
              "L'Application ne vous demande pas l'autorisation de suivre votre activité (App Tracking Transparency) : l'identifiant publicitaire de votre appareil (IDFA) n'est pas utilisé. L'Application ne vous oblige jamais à accepter le suivi pour jouer.",
          },
          {
            subtitle: "Android — identifiant publicitaire",
            content: "Vous pouvez réinitialiser ou supprimer votre identifiant publicitaire dans les paramètres de votre appareil.",
          },
          {
            subtitle: "États-Unis",
            content:
              "Selon l'État où vous résidez, la loi peut vous donner le droit de refuser la « vente » ou le « partage » de vos données à des fins de publicité ciblée. Vous pouvez exercer ce choix depuis les réglages de confidentialité de l'Application, ou en nous écrivant.",
          },
          {
            subtitle: "En savoir plus",
            content: `Règles de confidentialité de Google : ${GOOGLE_PRIVACY}\nUtilisation des données par Google sur les sites et applications de ses partenaires : ${GOOGLE_PARTNERS}`,
          },
        ],
      },
      {
        id: "6",
        title: "6. Achat « Supprimer les publicités »",
        content:
          "L'achat définitif qui retire les publicités est traité exclusivement par l'App Store (Apple) ou Google Play (Google). Nous ne recevons jamais vos données de paiement (carte bancaire, nom, adresse de facturation). L'Application reçoit seulement de la boutique la confirmation que l'achat a été effectué, afin de retirer les publicités et de permettre sa restauration. Le traitement du paiement relève des politiques de confidentialité d'Apple ou de Google.",
      },
      {
        id: "7",
        title: "7. Notes et avis",
        content:
          "Lorsque l'Application vous propose de la noter, elle utilise la fenêtre officielle d'Apple ou de Google. Votre note et votre avis sont traités par la boutique concernée, selon ses propres règles ; l'Application n'y a pas accès.",
      },
      {
        id: "8",
        title: "8. Bases légales (RGPD)",
        content:
          "• Fonctionnement du jeu et enregistrement local de votre progression et de vos réglages — exécution du service que vous demandez (contrat)\n• Accès aux identifiants de l'appareil et publicité, personnalisée ou non, lorsque la loi exige un consentement — consentement, retirable à tout moment (section 5)\n• Affichage des rappels — consentement (autorisation des notifications), retirable à tout moment\n• Réponse à vos demandes de support — intérêt légitime à vous répondre ; ou mesures précontractuelles / contrat si la demande porte sur un achat\n• Respect d'obligations légales (par exemple, comptables pour les achats) — obligation légale",
      },
      {
        id: "9",
        title: "9. Destinataires et transferts hors de l'Union européenne",
        content:
          "Les données traitées par l'Application ne sont ni vendues ni louées par l'éditeur. Les seuls destinataires sont :\n\n• Google, pour la publicité (section 5) ;\n• Apple ou Google, pour les achats, les notes et les notifications système, selon votre appareil ;\n• les autorités, uniquement si la loi l'exige.\n\nGoogle peut traiter des données hors de l'Union européenne, notamment aux États-Unis, selon les garanties décrites dans ses règles de confidentialité.",
      },
      {
        id: "10",
        title: "10. Enfants",
        content: `L'Application est destinée aux personnes âgées d'au moins 16 ans. Elle n'est pas destinée aux enfants, et nous ne collectons pas sciemment de données les concernant.\n\nEn France, un mineur de moins de 15 ans ne peut consentir seul au traitement de ses données fondé sur le consentement : l'accord d'un titulaire de l'autorité parentale est également requis (article 45 de la loi Informatique et Libertés). Si vous êtes parent et pensez que votre enfant a donné son consentement, écrivez-nous à ${EMAIL} : nous vous indiquerons comment le retirer.`,
      },
      {
        id: "11",
        title: "11. Vos droits",
        content: `Selon la loi applicable (notamment le RGPD), vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition, de portabilité, et du droit de retirer votre consentement à tout moment, sans que cela remette en cause les traitements déjà effectués.\n\n• Données sur votre appareil : vous les contrôlez directement (section 2).\n• Consentement publicitaire : modifiable à tout moment depuis les réglages de l'Application (section 5).\n• Données publicitaires détenues par Google : outils et contacts décrits dans les règles de confidentialité de Google.\n• Données de support : écrivez à ${EMAIL}. Nous répondons dans un délai d'un mois, prolongeable dans les conditions prévues par le RGPD.\n\nSi vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la ${CNIL}, ou en ligne sur ${CNIL_URL}, ou auprès de l'autorité de protection des données de votre pays de résidence.`,
      },
      {
        id: "12",
        title: "12. Sécurité",
        content:
          "Les données de jeu restent sur votre appareil et bénéficient de ses protections. Les échanges avec Google sont chiffrés (TLS). Aucune donnée de jeu n'est stockée sur un serveur de l'éditeur.",
      },
      {
        id: "13",
        title: "13. Modifications",
        content:
          "Nous pouvons modifier cette politique, notamment si l'Application évolue. La date de mise à jour figure en haut de la page. En cas de changement important, vous en serez informé dans l'Application avant son application.",
      },
      { id: "14", title: "14. Contact", content: `Marc SAMSON EI — Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Éditeur",
        content: `L'application mobile Match the Digits (l'« Application ») est éditée par :\n\n${PUBLISHER}\n• Adresse : ${ADDRESS}\n• Téléphone : ${PHONE}\n• E-mail : ${EMAIL}\n• ${IDS} — ${REG}\n• N° de TVA intracommunautaire : ${VAT} — TVA non applicable, article 293 B du Code général des impôts\n• Directeur de la publication : Marc SAMSON\n• Hébergeur des pages de la politique de confidentialité et des présentes Conditions : ${HOST} — ${HOST_PHONE}`,
      },
      {
        id: "2",
        title: "2. Objet et acceptation",
        content: `Les présentes conditions (les « Conditions ») encadrent l'utilisation de l'Application. En téléchargeant ou en utilisant l'Application, vous les acceptez. Si vous ne les acceptez pas, n'utilisez pas l'Application.\n\nL'Application est destinée aux personnes âgées d'au moins 16 ans.\n\nL'utilisation de vos données personnelles est décrite dans la Politique de confidentialité, disponible sur ${privacyUrl(dir)} et depuis les réglages de l'Application.`,
      },
      {
        id: "3",
        title: "3. Licence",
        content: `L'éditeur vous accorde une licence personnelle, non exclusive, non transférable et révocable pour installer et utiliser l'Application sur les appareils que vous possédez ou contrôlez, à des fins privées et non commerciales.\n\n• Sur iOS, l'Application vous est concédée sous licence selon le contrat de licence utilisateur final standard d'Apple (« Licensed Application End User License Agreement ») : ${APPLE_EULA}\nLes présentes Conditions le complètent ; en cas de contradiction, le contrat d'Apple prévaut pour l'utilisation de l'Application sur iOS.\n• Sur Android, l'utilisation de l'Application est également soumise aux conditions d'utilisation de Google Play.\n\nL'Application est concédée sous licence, et non vendue.`,
      },
      {
        id: "4",
        title: "4. Utilisation de l'Application",
        content:
          "Vous vous engagez à ne pas :\n\n• copier, modifier, décompiler, désassembler ou tenter d'extraire le code source de l'Application, sauf dans les cas expressément autorisés par la loi ;\n• contourner ou perturber ses mécanismes techniques, dont l'affichage des publicités et les achats intégrés ;\n• générer artificiellement des affichages ou des clics sur les publicités ;\n• utiliser l'Application d'une manière contraire à la loi ou portant atteinte aux droits de tiers.",
      },
      {
        id: "5",
        title: "5. Le jeu et votre progression",
        content:
          "L'Application ne nécessite pas de compte. Votre progression (partie en cours, scores, résultats quotidiens, trophées) et vos réglages sont enregistrés uniquement sur votre appareil.\n\nIls ne sont pas sauvegardés par l'éditeur : ils sont perdus si vous désinstallez l'Application, effacez ses données ou changez d'appareil. L'éditeur ne peut pas les restaurer.\n\nLes règles du jeu, le nombre d'indices et d'ajouts disponibles, ainsi que les plateaux proposés peuvent évoluer d'une version à l'autre.",
      },
      {
        id: "6",
        title: "6. Publicité",
        content:
          "L'Application est gratuite et financée par la publicité, fournie par Google AdMob :\n\n• une bannière sur l'écran de jeu ;\n• une publicité récompensée facultative : vous pouvez choisir de regarder une vidéo pour obtenir un indice. La récompense est indiquée avant la vidéo et accordée une fois la vidéo regardée. Si vous refusez ou si aucune publicité n'est disponible, vous pouvez continuer à jouer.\n\nLes publicités sont sélectionnées par Google. L'éditeur ne contrôle pas leur contenu et n'est pas responsable des produits ou services qui y sont présentés. Vos choix concernant l'utilisation de vos données à des fins publicitaires sont décrits dans la Politique de confidentialité.",
      },
      {
        id: "7",
        title: "7. Achat « Supprimer les publicités »",
        subsections: [
          {
            subtitle: "Ce que vous obtenez",
            content:
              "L'Application propose un achat unique et définitif (« Supprimer les publicités ») :\n\n• il retire toutes les publicités de l'Application, y compris la publicité récompensée : l'indice est alors accordé directement ;\n• il ne donne aucun avantage de jeu : chaque joueur dispose de 4 indices par partie, avec ou sans achat ; le nombre d'ajouts et les règles restent identiques pour tous ;\n• ce n'est pas un abonnement : il n'est facturé qu'une fois et ne se renouvelle pas.",
          },
          {
            subtitle: "Prix et paiement",
            content:
              "Le prix est affiché dans l'App Store ou Google Play avant l'achat, toutes taxes comprises selon votre pays. Le paiement est traité exclusivement par Apple ou Google, selon leurs conditions. L'éditeur ne reçoit jamais vos données de paiement.",
          },
          {
            subtitle: "Restauration",
            content:
              "L'achat est lié au compte Apple ou Google avec lequel il a été effectué. Vous pouvez le récupérer gratuitement sur un nouvel appareil ou après réinstallation, avec le même compte, grâce au bouton « Restaurer les achats » des réglages.",
          },
          {
            subtitle: "Rétractation et remboursement",
            content: `L'achat porte sur un contenu numérique fourni immédiatement après le paiement. Le droit de rétractation et les demandes de remboursement s'exercent dans les conditions prévues par la loi applicable et par les règles de la boutique concernée :\n\n• App Store : demande auprès d'Apple, sur ${APPLE_REFUND}\n• Google Play : demande auprès de Google, selon la procédure décrite sur ${GOOGLE_REFUND}\n\nVous pouvez aussi nous écrire à ${EMAIL}.`,
          },
        ],
      },
      {
        id: "8",
        title: "8. Rappels",
        content:
          "Si vous les activez, l'Application peut vous envoyer des rappels locaux. Vous pouvez les désactiver à tout moment dans les réglages de l'Application ou de votre appareil. Ils ne contiennent aucune publicité.",
      },
      {
        id: "9",
        title: "9. Propriété intellectuelle",
        content: `L'Application, son nom, ses visuels, ses textes, ses sons, son code et sa présentation sont protégés par le droit de la propriété intellectuelle et appartiennent à l'éditeur ou à ses concédants. Certains éléments tiers sont utilisés sous leur propre licence :\n\n${LICENSES}\n\nToute reproduction ou réutilisation non autorisée est interdite.`,
      },
      {
        id: "10",
        title: "10. Disponibilité et mises à jour",
        content:
          "L'éditeur peut faire évoluer l'Application, en corriger les erreurs, en modifier ou en retirer des fonctionnalités, ou en arrêter la distribution. Certaines mises à jour peuvent être nécessaires pour continuer à utiliser l'Application. L'éditeur s'efforce d'assurer son bon fonctionnement mais ne garantit pas qu'elle sera disponible sans interruption, notamment pour l'affichage des publicités qui dépend de Google.",
      },
      {
        id: "11",
        title: "11. Garanties et responsabilité",
        content:
          "L'Application est fournie en l'état. Rien dans les présentes Conditions ne limite les droits que vous tenez de la loi en tant que consommateur, notamment la garantie légale de conformité des contenus et services numériques.\n\nDans les limites permises par la loi, l'éditeur n'est pas responsable :\n\n• de la perte de votre progression enregistrée sur votre appareil (article 5) ;\n• des dommages indirects ;\n• des contenus publicitaires fournis par des tiers ;\n• d'une indisponibilité due à votre appareil, à votre système, à votre connexion ou aux services d'Apple et de Google.\n\nCes limitations ne s'appliquent pas en cas de faute lourde ou intentionnelle, ni aux dommages corporels, ni dans les cas où la loi les interdit.",
      },
      {
        id: "12",
        title: "12. Fin d'utilisation",
        content:
          "Vous pouvez cesser d'utiliser l'Application à tout moment en la désinstallant. L'éditeur peut mettre fin à votre licence si vous ne respectez pas les présentes Conditions. Les articles 9, 11 et 14 continuent de s'appliquer après la fin de la licence.",
      },
      {
        id: "13",
        title: "13. Modification des Conditions",
        content:
          "L'éditeur peut modifier les présentes Conditions, notamment pour suivre l'évolution de l'Application ou de la loi. La date de mise à jour figure en haut de la page. En cas de changement important, vous en serez informé dans l'Application avant son entrée en vigueur. Si vous n'acceptez pas les nouvelles Conditions, vous pouvez cesser d'utiliser l'Application.",
      },
      {
        id: "14",
        title: "14. Droit applicable, médiation et litiges",
        content: `Les présentes Conditions sont soumises au droit français. Si vous êtes un consommateur résidant dans un autre pays, vous conservez la protection des règles impératives du droit de votre pays.\n\nEn cas de difficulté, écrivez d'abord à ${EMAIL} : nous cherchons une solution amiable.\n\nMédiation de la consommation : si vous êtes un consommateur et que votre réclamation écrite n'a pas abouti, vous pouvez recourir gratuitement au médiateur de la consommation suivant : ${MEDIATOR}.\n\nÀ défaut d'accord, le litige sera porté devant les tribunaux compétents ; si vous êtes un consommateur, vous pouvez saisir notamment la juridiction de votre lieu de résidence.`,
      },
      { id: "15", title: "15. Contact", content: `Marc SAMSON EI — Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
};
