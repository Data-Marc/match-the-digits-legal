// Version française de référence ; les copies HTML, JSON et Markdown sont générées depuis ces sources.
import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_SUPPORT, IDS, LICENSES, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "fr/";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI), exerçant sous l'enseigne Primisia";

export const fr: Locale = {
  code: "fr",
  dir,
  name: "Français",
  updated: "21 novembre 2026",
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
    privacyDesc: "Confidentialité de Match the Digits : progression locale, classement, sécurité, publicités, achats Premium et suppression du compte.",
    termsDesc: "Conditions d'utilisation du jeu Match the Digits : licence, publicité, achat unique Supprimer les publicités, responsabilité et droit applicable.",
    supportDesc: "Support, contact et questions fréquentes du jeu de réflexion Match the Digits.",
    supportIntro: "Besoin d'aide ? Écrivez-nous en indiquant si possible le modèle de votre appareil.",
    emailSupport: "Support par e-mail",
    faqTitle: "Questions fréquentes",
    language: "Langue",
    translationNote: "",
  },
  faq: [
    ["Faut-il un compte ?", "Aucun e-mail ni mot de passe n’est demandé pour jouer. Le classement crée une identité anonyme avec un pseudo attribué."],
    ["Combien d’indices et d’ajouts ?", "Par plateau : 4 indices et 5 ajouts au maximum. Les 2 premiers ajouts sont gratuits ; sans Premium, les 3 suivants et les indices proposent une publicité récompensée."],
    ["Et si la publicité ne fonctionne pas ?", "Si elle est indisponible après votre demande, l’action peut être accordée sans vidéo dans le quota restant. Refuser ou fermer volontairement la vidéo avant la récompense ne donne pas cette action."],
    ["Premium est-il un abonnement ?", "Non : c’est un achat unique sans publicité, y compris pour les indices et ajouts. Les plafonds du jeu restent identiques."],
    ["Comment restaurer Premium ?", "Dans Settings, choisissez Restaurer les achats avec le compte et la boutique d’origine. Il n’y a pas de transfert automatique entre Apple et Google."],
    ["Comment supprimer mon compte de classement ?", "Utilisez la rubrique du compte dans Settings et suivez la suppression. Sans accès à l’app, contactez le support par e-mail en indiquant Match the Digits et votre pseudo/identifiant de classement, jamais un jeton ni un mot de passe. Une vérification peut être nécessaire."],
    ["Puis-je revenir après suppression ?", "Après traitement, vous pouvez demander une nouvelle identité et un nouveau pseudo, sous réserve des restrictions anti-abus. La progression conservée peut servir à republier votre record. Le Premium reste acquis selon les règles de la boutique."],
    ["Que fait Effacer aussi ma progression ?", "Cette option remet à zéro la partie, le record et les résultats locaux concernés. Elle ne supprime ni le Premium ni vos préférences. Sans cette option, la progression locale reste conservée."],
    ["Une désinstallation supprime-t-elle tout ?", "Elle peut faire perdre votre progression locale, mais ne constitue pas une demande de suppression du compte serveur. Le classement n’est pas une sauvegarde complète de la partie."],
    ["Où gérer le consentement publicitaire ?", "Cette version n’a pas encore de centre de choix publicitaires dans Settings. Les réglages d’identifiant publicitaire du téléphone et le contact support restent disponibles ; ils ne remplacent pas un formulaire requis avant traitement."],
    ["Pourquoi mon rappel ne s’affiche-t-il pas ?", "Vérifiez les rappels dans l’app et l’autorisation des notifications dans les paramètres du téléphone."],
    ["Comment demander un remboursement ?", "Adressez-vous à Apple ou Google selon la boutique d’achat. Les procédures sont liées dans les conditions d’utilisation ; vous pouvez aussi contacter notre support."]
  ],
  privacy: {
    sections: [
      { id: "0", title: "En résumé", content: "Mise à jour : 21 novembre 2026.\n\nVous pouvez jouer sans fournir de nom, d’e-mail ni de mot de passe. L’accès au classement utilise un compte anonyme : un identifiant technique n’est pas une anonymisation des données. Votre partie et vos réglages restent sur l’appareil ; votre pseudo et votre record de classement sont enregistrés sur notre serveur et visibles dans le classement. Des services tiers interviennent pour la sécurité, les publicités et les achats. Vous pouvez demander la suppression du compte de classement, avec ou sans effacement de votre progression locale." },
      {
        id: "1",
        title: "1. Responsable du traitement",
        content: `L'Application est éditée par :\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nContact pour toute question relative à vos données : ${EMAIL}\n\nPour les données publicitaires traitées par Google, Google agit en tant que responsable de traitement indépendant, selon ses propres règles (section 5).`,
      },
      { id: "2", title: "2. Progression et préférences locales", content: "L’appareil conserve la partie en cours, le meilleur score local, les résultats des défis quotidiens, les statistiques servant aux trophées, les préférences et les dates des demandes de notation. Ces données permettent de reprendre le jeu et d’adapter son affichage. Le record destiné au classement est transmis séparément, comme expliqué ci-dessous.\n\nNous ne proposons pas de sauvegarde serveur permettant de restaurer toute votre progression sur un autre appareil. L’effacement des données de l’app ou sa désinstallation peut faire perdre cette progression. Les éventuelles sauvegardes du système relèvent des réglages de votre appareil." },
      { id: "2a", title: "2 bis. Compte et classement", content: "Un compte technique anonyme est créé lors du premier accès au classement. Notre service Supabase auto-hébergé conserve l’identité de connexion, les sessions, le pseudo attribué, le record publié, les dates associées et l’état du compte. Les identifiants de session sont également conservés sur l’appareil pour reconnaître votre compte.\n\nLe pseudo, le score et la position sont visibles dans le classement ; les identifiants de connexion et les reçus de suppression ne sont pas publics. Le record d’une partie terminée ou abandonnée peut être envoyé ou réessayé ultérieurement en cas d’échec réseau. Le classement ne constitue pas une sauvegarde de votre partie." },
      { id: "2b", title: "2 ter. Sécurité et prévention des abus", content: "Nous traitons des informations techniques de requête, dont l’adresse IP à l’entrée du service, des empreintes d’installation ou de réseau et des dates/compteurs pour protéger le classement, limiter les créations répétées et traiter les suppressions et restrictions. Ces empreintes restent des données pseudonymes.\n\nFirebase App Check et les mécanismes d’attestation Apple/Google vérifient les requêtes de l’app au moyen de données techniques et de jetons d’attestation. Firebase n’assure plus l’authentification ni le stockage du classement. Informations : https://firebase.google.com/support/privacy" },
      {
        id: "3",
        title: "3. Rappels (notifications)",
        content:
          "Si vous activez les rappels dans les réglages, l'Application vous demande l'autorisation d'afficher des notifications. Les rappels sont programmés localement sur votre appareil : aucun identifiant de notification n'est créé ni envoyé à un serveur. Vous pouvez les désactiver à tout moment dans les réglages de l'Application ou dans ceux de votre appareil. Les rappels ne contiennent aucune publicité.",
      },
      { id: "4", title: "4. Assistance", content: `Si vous contactez ${EMAIL}, nous recevons votre adresse e-mail, votre message et les pièces que vous choisissez d’envoyer. Le message préparé par l’app peut inclure sa version et celle du système ; vous pouvez les retirer.\n\nNous utilisons ces informations pour répondre, vérifier une demande relative au compte et résoudre les difficultés. Nous les conservons pendant le traitement, puis seulement si elles restent nécessaires à un suivi, à la défense d’un droit ou à une obligation légale. N’envoyez jamais de mot de passe, de jeton de connexion ni de données bancaires.` },
      { id: "5", title: "5. Publicité et choix de confidentialité", content: `Google AdMob fournit une bannière et des vidéos récompensées facultatives. Selon le système et les autorisations, son SDK traite notamment l’adresse IP, des identifiants publicitaires ou propres à l’app, des interactions avec l’app/les annonces et des diagnostics, pour diffuser et mesurer les annonces et prévenir la fraude. L’achat Premium retire les publicités, y compris les vidéos récompensées.\n\nAccepter de regarder une vidéo ne vaut pas consentement à l’utilisation de vos données publicitaires. Lorsqu’un consentement est requis, il doit pouvoir être refusé ou retiré. La version actuelle ne propose pas encore de centre de choix publicitaires dans les réglages de l’app. Vous pouvez nous contacter pour exercer vos droits ; cela ne remplace pas un formulaire de consentement requis avant un traitement.\n\nAndroid permet de réinitialiser ou supprimer l’identifiant publicitaire dans les paramètres du téléphone. Sur iOS, l’accès à l’IDFA et le suivi soumis à ATT nécessitent l’autorisation Apple correspondante. Ces réglages n’effacent pas à eux seuls les données déjà détenues par les prestataires. Les droits locaux, notamment d’opposition à certaines formes de publicité ciblée, restent applicables.\n\nGoogle : ${GOOGLE_PRIVACY}\nDonnées des services partenaires : ${GOOGLE_PARTNERS}` },
      { id: "6", title: "6. Achat Premium et restauration", content: "Apple ou Google traite le paiement et conserve les informations de facturation selon ses propres règles. Nous ne recevons pas votre numéro de carte bancaire.\n\nRevenueCat nous aide à vérifier et restaurer l’achat unique sans publicité. Il traite un identifiant pseudonyme, les informations de transaction/reçu, le produit, la boutique et l’état du droit Premium. L’app conserve aussi l’état nécessaire à l’accès Premium. La suppression du compte de classement ne supprime pas cet achat ; les données nécessaires à sa restauration et aux obligations applicables sont distinctes.\n\nInformations : https://www.revenuecat.com/privacy" },
      {
        id: "7",
        title: "7. Notes et avis",
        content:
          "Lorsque l'Application vous propose de la noter, elle utilise la fenêtre officielle d'Apple ou de Google. Votre note et votre avis sont traités par la boutique concernée, selon ses propres règles ; l'Application n'y a pas accès.",
      },
      { id: "8", title: "8. Finalités et bases légales", content: "Le jeu, le compte de classement demandé et la gestion/restauration du Premium reposent sur l’exécution du service ou du contrat. La sécurité, les quotas anti-abus et la réponse à l’assistance reposent sur notre intérêt légitime à protéger le service et ses utilisateurs, sous réserve de vos droits. Les rappels sont facultatifs et soumis à l’autorisation du téléphone.\n\nLes traitements publicitaires et l’accès aux identifiants reposent sur le consentement lorsqu’il est exigé. Certaines conservations répondent à une obligation légale ou à la nécessité de constater, exercer ou défendre un droit. Ces bases ne permettent pas de réutiliser librement les données à d’autres fins." },
      { id: "9", title: "9. Prestataires et transferts", content: `Les destinataires nécessaires sont :\n• Contabo, pour le serveur hébergeant Supabase et le classement ;\n• Cloudflare, pour l’acheminement et la protection des requêtes ;\n• Backblaze, pour les sauvegardes et le journal chiffrés ;\n• Google/Firebase et Apple, pour l’attestation et les services du système ;\n• Google AdMob, pour la publicité ;\n• RevenueCat et Apple/Google, pour la gestion des achats ;\n• GitHub Pages, pour ces documents publics ; et les autorités lorsque la loi l’exige.\n\nSupabase est auto-hébergé ; cela ne signifie pas un hébergement des joueurs dans Supabase Cloud. Les prestataires internationaux peuvent traiter des données hors de l’Espace économique européen, notamment aux États-Unis. Les garanties de transfert dépendent du service et du contrat applicables ; vous pouvez demander des informations à ${EMAIL}. Nous ne garantissons pas que tout traitement reste en Europe. Nous ne vendons pas les données du classement.\n\nNotices : https://contabo.com/en/legal/privacy/ ; https://www.cloudflare.com/privacypolicy/ ; https://www.backblaze.com/company/privacy ; https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement` },
      {
        id: "10",
        title: "10. Enfants",
        content: `L'Application est destinée aux personnes âgées d'au moins 16 ans. Elle n'est pas destinée aux enfants, et nous ne collectons pas sciemment de données les concernant.\n\nEn France, un mineur de moins de 15 ans ne peut consentir seul au traitement de ses données fondé sur le consentement : l'accord d'un titulaire de l'autorité parentale est également requis (article 45 de la loi Informatique et Libertés). Si vous êtes parent et pensez que votre enfant a donné son consentement, écrivez-nous à ${EMAIL} : nous vous indiquerons comment le retirer.`,
      },
      { id: "11", title: "11. Suppression du compte et autres droits", content: `Dans Settings, la rubrique du compte de classement permet de demander sa suppression et de suivre son traitement. Après acceptation par le serveur, le profil est retiré du classement, puis l’identité et les données actives correspondantes sont supprimées. Une demande hors ligne doit d’abord être transmise ; une désinstallation ne supprime pas à elle seule le compte serveur.\n\nL’option « Effacer aussi ma progression » remet à zéro la partie, le record et les résultats locaux concernés. Sans cette option, ils restent sur votre appareil. Le Premium et les préférences sont conservés. Une fois la suppression terminée, un retour volontaire au classement crée une nouvelle identité et un nouveau pseudo, sous réserve des restrictions anti-abus. Le record local conservé peut alors être proposé à nouveau ; l’ancien compte n’est pas restauré et son pseudo peut être réattribué.\n\nSans accès à l’app, écrivez à ${EMAIL} en indiquant Match the Digits et le pseudo/identifiant de classement dont vous disposez, jamais un jeton ou un mot de passe. Une vérification proportionnée peut être nécessaire pour éviter de supprimer le compte d’une autre personne.\n\nSelon votre situation, vous disposez des droits d’accès, de rectification, d’effacement, de limitation, d’opposition, de portabilité et de retrait du consentement. Réponse en principe sous un mois, prolongeable dans les cas légaux. Vous pouvez saisir la CNIL : ${CNIL_URL}, ou l’autorité compétente de votre pays.` },
      { id: "12", title: "12. Sécurité", content: "Les échanges réseau utilisent le chiffrement en transit. Les accès administratifs sont restreints et les sauvegardes ainsi que le journal de décisions sont chiffrés. Ces mesures réduisent les risques sans garantir une sécurité absolue. Le classement public reste visible par ses utilisateurs ; n’utilisez pas les canaux d’assistance pour transmettre des secrets." },
      { id: "12a", title: "12 bis. Conservation et sauvegardes", content: `Les données locales restent jusqu’à leur effacement ou remplacement. Le compte de classement et son record restent tant que le compte n’est pas supprimé. Les compteurs temporaires et restrictions de sécurité ont leurs propres échéances ; certaines traces sont nécessaires pour empêcher les abus et traiter les contestations.\n\nLes sauvegardes suivent une rotation de 7 points quotidiens, 4 hebdomadaires et 2 mensuels. Cette rotation ne garantit pas l’effacement de toutes les copies à une date exacte. Le journal de décisions sert à empêcher qu’une restauration réintroduise un compte supprimé.\n\nLes reçus de suppression et ce journal restent actuellement conservés sans purge automatique. Ils peuvent contenir des identifiants techniques, empreintes, dates et états. Vous pouvez demander l’examen de leur conservation ou de leur effacement à ${EMAIL}. Les données d’achat suivent séparément les besoins de restauration et les obligations applicables.` },
      { id: "13", title: "13. Évolution de cette politique", content: "Cette politique est accessible dans les réglages et sur notre site. Sa date indique la version du texte. Elle est mise à jour pour refléter l’évolution du service. Les obligations d’information et, lorsqu’il est requis, de recueil d’un nouveau consentement restent applicables." },
      { id: "14", title: "14. Contact", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Éditeur",
        content: `L'application mobile Match the Digits (l'« Application ») est éditée par :\n\n${PUBLISHER}\n• Adresse : ${ADDRESS}\n• Téléphone : ${PHONE}\n• E-mail : ${EMAIL}\n• ${IDS}, ${REG}\n• N° de TVA intracommunautaire : ${VAT}, TVA non applicable, article 293 B du Code général des impôts\n• Directeur de la publication : Marc SAMSON\n• Hébergeur des pages de la politique de confidentialité et des présentes Conditions : ${HOST}, ${HOST_SUPPORT}`,
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
      { id: "5", title: "5. Jeu, progression et classement", content: "Vous pouvez jouer sans créer de compte avec e-mail ou mot de passe. Le classement utilise une identité technique anonyme et un pseudo attribué. Les profils virtuels signalés dans le classement ne représentent pas des joueurs réels. Le classement n’accorde pas de prix en argent.\n\nLa partie, les défis, trophées et réglages sont principalement locaux. Le serveur conserve le record publié ; il ne permet pas de restaurer toute votre progression. Une partie terminée ou abandonnée au profit d’une nouvelle partie peut entraîner l’envoi du record éligible, avec reprise ultérieure en cas d’échec réseau.\n\nPar plateau : cinq ajouts au maximum, dont les deux premiers gratuits, et quatre indices au maximum. Sans Premium, les trois ajouts suivants et les indices passent par une proposition de publicité récompensée. Les mêmes plafonds s’appliquent avec Premium.\n\nLa triche, les scores falsifiés et les créations répétées abusives peuvent entraîner une limitation ou une exclusion du classement. Vous pouvez contester une restriction auprès du support." },
      { id: "6", title: "6. Publicité et récompenses", content: "Une bannière peut apparaître pendant le jeu. Une vidéo récompensée est proposée avant un indice ou une recharge concernée, avec votre accord. Après validation de la récompense, l’action est accordée dans la limite restante.\n\nSi la publicité est techniquement indisponible après votre demande, l’app peut accorder cette action sans vidéo et afficher un message discret. Refuser la proposition ou fermer la vidéo avant la récompense ne donne pas ce droit. Une fois les ajouts épuisés, Premium n’ajoute pas de recharges au-delà du plafond.\n\nLes annonces et destinations sont fournies par des tiers. La Politique de confidentialité explique les traitements de données associés ; accepter une vidéo n’équivaut pas à un consentement de confidentialité." },
      { id: "7", title: "7. Achat « Supprimer les publicités »", subsections: [{ subtitle: "Ce que vous obtenez", content: "Premium est un achat unique sans renouvellement automatique. Il retire la bannière et les publicités récompensées : les indices et ajouts sont accessibles directement, dans les mêmes limites de quatre indices et cinq ajouts par plateau. L’espace libéré par la bannière peut être utilisé par la grille." },
{ subtitle: "Prix et paiement", content: "L’offre affiche le prix localisé fourni par la boutique lorsqu’elle est disponible. Vérifiez le prix et les conditions dans la confirmation Apple ou Google avant de payer. Un achat annulé, en attente ou échoué n’est pas présenté comme acquis. RevenueCat vérifie le droit Premium ; nous ne recevons pas vos coordonnées de carte bancaire." },
{ subtitle: "Restauration", content: "Utilisez « Restaurer les achats » dans Settings avec le compte et la boutique d’origine. Une connexion peut être nécessaire. Un achat Apple n’est pas automatiquement transféré sur Google Play, ou inversement. Supprimer le compte de classement ou la progression n’annule pas l’achat." },
{
            subtitle: "Rétractation et remboursement",
            content: `L'achat porte sur un contenu numérique fourni immédiatement après le paiement. Le droit de rétractation et les demandes de remboursement s'exercent dans les conditions prévues par la loi applicable et par les règles de la boutique concernée :\n\n• App Store : demande auprès d'Apple, sur ${APPLE_REFUND}\n• Google Play : demande auprès de Google, selon la procédure décrite sur ${GOOGLE_REFUND}\n\nVous pouvez aussi nous écrire à ${EMAIL}.`,
          }] },
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
      { id: "10", title: "10. Disponibilité et mises à jour", content: "Le classement, les achats et certaines vérifications nécessitent une connexion et dépendent aussi de prestataires. Une panne, une maintenance, une restriction de sécurité ou une annonce indisponible peut affecter ces services. Le jeu local peut rester accessible selon l’état de la partie.\n\nNous pouvons corriger ou faire évoluer l’app. Les droits impératifs du consommateur et les obligations liées aux services numériques restent applicables ; l’achat sans publicité n’est pas une garantie de disponibilité perpétuelle du service en ligne." },
      {
        id: "11",
        title: "11. Garanties et responsabilité",
        content:
          "L'Application est fournie en l'état. Rien dans les présentes Conditions ne limite les droits que vous tenez de la loi en tant que consommateur, notamment la garantie légale de conformité des contenus et services numériques.\n\nDans les limites permises par la loi, l'éditeur n'est pas responsable :\n\n• de la perte de votre progression enregistrée sur votre appareil (article 5) ;\n• des dommages indirects ;\n• des contenus publicitaires fournis par des tiers ;\n• d'une indisponibilité due à votre appareil, à votre système, à votre connexion ou aux services d'Apple et de Google.\n\nCes limitations ne s'appliquent pas en cas de faute lourde ou intentionnelle, ni aux dommages corporels, ni dans les cas où la loi les interdit.",
      },
      { id: "12", title: "12. Suppression et fin d’utilisation", content: `Vous pouvez arrêter de jouer à tout moment. Pour supprimer le compte serveur, utilisez la rubrique de classement dans Settings ou contactez ${EMAIL} ; désinstaller l’app ne suffit pas. Le traitement et les sauvegardes sont décrits dans la Politique de confidentialité.\n\nL’effacement de la progression locale est optionnel. Le compte supprimé n’est pas récupérable ; un retour autorisé au classement crée une nouvelle identité et un nouveau pseudo. Un record local conservé peut être réutilisé. Le Premium reste lié à l’achat, indépendamment de la suppression du classement.\n\nEn cas d’abus, l’accès au classement peut être restreint sans supprimer vos droits légaux. Les clauses de propriété intellectuelle, de responsabilité et de règlement des litiges restent applicables après l’arrêt de l’utilisation.` },
      { id: "13", title: "13. Modification des conditions", content: "La version en vigueur est accessible dans l’app et sur le site, avec sa date de mise à jour. Les évolutions du service et de la loi peuvent nécessiter une révision. Les obligations légales d’information et les droits acquis du consommateur restent applicables." },
      { id: "14", title: "14. Droit applicable, médiation et litiges", content: `Le droit français s’applique, sans vous priver des protections impératives de votre pays de résidence lorsque vous êtes consommateur.\n\nPour une réclamation, écrivez à ${EMAIL}. Vous conservez le droit à une médiation de la consommation gratuite dans les conditions légales après une réclamation écrite préalable. L’adhésion de l’éditeur à un dispositif de médiation reste à finaliser ; les coordonnées du médiateur seront publiées après adhésion. Aucun médiateur n’est désigné par les présentes conditions.\n\nÀ défaut d’accord, les juridictions compétentes peuvent être saisies ; le consommateur conserve notamment les possibilités de recours liées à son lieu de résidence.` },
      { id: "15", title: "15. Contact", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
};
