import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_SUPPORT, IDS, LICENSES, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI, French sole proprietorship), trading as Primisia";

export const en: Locale = {
  code: "en",
  dir,
  name: "English",
  updated: "November 21, 2026",
  ui: {
    legalDocuments: "Legal Documents",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    support: "Support",
    privacySub: "Data, advertising, consent &amp; your rights",
    termsSub: "License, ads, Remove ads purchase &amp; liability",
    supportSub: "Contact, FAQ &amp; purchase help",
    lastUpdated: "Last updated",
    footer: "Published by Marc SAMSON EI, trading as Primisia",
    indexDesc: "Privacy Policy, Terms of Use and Support for the Match the Digits puzzle game.",
    privacyDesc: "Match the Digits privacy: local progress, leaderboards, security, ads, Premium purchases and account deletion.",
    termsDesc: "Terms of Use of the Match the Digits puzzle game: license, advertising, one-time Remove ads purchase, liability and governing law.",
    supportDesc: "Support, contact and frequently asked questions for the Match the Digits puzzle game.",
    supportIntro: "Need help? Write to us and include your device model if you can.",
    emailSupport: "Email support",
    faqTitle: "Frequently asked questions",
    language: "Language",
    translationNote: "This translation is provided for convenience. In case of discrepancy, the French version prevails.",
  },
  faq: [
    ["Do I need an account?", "No email or password is required to play. The leaderboard creates an anonymous identity with an assigned nickname."],
    ["How many hints and adds are available?", "Each board allows up to 4 hints and 5 adds. The first 2 adds are free; without Premium, the next 3 and hints offer a rewarded ad."],
    ["What if an ad does not work?", "If unavailable after your request, the action may be granted without a video within your remaining allowance. Declining or voluntarily closing the video before the reward does not grant the action."],
    ["Is Premium a subscription?", "No. It is a one-time ad-free purchase, including hints and adds. Gameplay limits stay the same."],
    ["How do I restore Premium?", "In Settings, choose Restore purchases using the original store and account. There is no automatic transfer between Apple and Google."],
    ["How do I delete my leaderboard account?", "Use the account section in Settings and follow its progress. Without app access, email support with Match the Digits and your leaderboard nickname/identifier, never a token or password. Verification may be needed."],
    ["Can I return after deletion?", "Once completed, you can request a new identity and nickname, subject to anti-abuse restrictions. Retained progress may allow resubmitting your record. Premium remains available under the store’s rules."],
    ["What does Also erase my progress do?", "It resets the game, record and relevant local results, without deleting Premium or preferences. Without this option, local progress is kept."],
    ["Does uninstalling delete everything?", "It may lose local progress, but does not request deletion of the server account. The leaderboard is not a full game backup."],
    ["Where can I manage advertising consent?", "This version does not yet have an advertising privacy-choice centre in Settings. Phone advertising-identifier controls and support are available; they do not replace a form required before processing."],
    ["Why is my reminder not appearing?", "Check reminders in the app and notification permission in phone settings."],
    ["How do I request a refund?", "Contact Apple or Google according to the purchase store. Their procedures are linked in the terms; you can also contact our support."]
  ],
  privacy: {
    sections: [
      { id: "0", title: "Summary", content: "Updated November 21, 2026.\n\nYou can play without providing a name, email or password. The leaderboard uses an anonymous account; a technical identifier does not make the associated data anonymous. Your game and settings stay on your device, while your leaderboard nickname and record are stored on our server and visible in the leaderboard. Third parties provide security, advertising and purchase services. You can request deletion of your leaderboard account, with or without erasing local progress." },
      {
        id: "1",
        title: "1. Data Controller",
        content: `The App is published by:\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nContact for any question about your data: ${EMAIL}\n\nFor the advertising data processed by Google, Google acts as an independent controller, under its own rules (Section 5).`,
      },
      { id: "2", title: "2. Local progress and preferences", content: "Your device stores your current game, local best score, daily challenge results, trophy statistics, preferences and rating-prompt dates. These support resuming play and displaying progress. The record intended for the leaderboard is transmitted separately as described below.\n\nWe do not offer a server backup that restores all your progress on another device. Clearing app data or uninstalling may lose that progress. Any operating-system backup depends on your device settings." },
      { id: "2a", title: "2a. Account and leaderboard", content: "A technical anonymous account is created when you first access the leaderboard. Our self-hosted Supabase service stores the login identity, sessions, assigned nickname, published record, associated dates and account status. Session credentials are also kept on your device to recognize your account.\n\nYour nickname, score and position are visible in the leaderboard; login credentials and deletion receipts are not public. An eligible record from a finished or abandoned game may be sent or retried later after a network failure. The leaderboard is not a backup of your game." },
      { id: "2b", title: "2b. Security and abuse prevention", content: "We process technical request information, including the IP address at the service entry point, installation or network hashes and dates/counters, to protect the leaderboard, limit repeated registrations and handle deletions and restrictions. These hashes remain pseudonymous data.\n\nFirebase App Check and Apple/Google attestation mechanisms verify app requests using technical data and attestation tokens. Firebase no longer provides leaderboard authentication or storage. Details: https://firebase.google.com/support/privacy" },
      {
        id: "3",
        title: "3. Reminders (Notifications)",
        content:
          "If you turn on reminders in the settings, the App asks for permission to show notifications. Reminders are scheduled locally on your device: no notification token is created or sent to a server. You can turn them off at any time in the App's settings or in your device settings. Reminders contain no advertising.",
      },
      { id: "4", title: "4. Support", content: `When you contact ${EMAIL}, we receive your email address, message and any attachments you choose to send. The app-prepared message may include app and operating-system versions; you can remove them.\n\nWe use this information to respond, verify account-related requests and resolve issues. It is kept while handling the request, and afterwards only where needed for follow-up, legal claims or a legal obligation. Never send passwords, login tokens or banking details.` },
      { id: "5", title: "5. Advertising and privacy choices", content: `Google AdMob supplies a banner and optional rewarded videos. Depending on the system and permissions, its SDK processes IP addresses, advertising or app identifiers, app/ad interactions and diagnostics to deliver and measure ads and prevent fraud. Premium removes ads, including rewarded videos.\n\nAgreeing to watch a video does not itself consent to advertising data processing. Where consent is required, it must be possible to refuse or withdraw it. This version does not yet provide an advertising privacy-choice centre in app settings. You may contact us to exercise your rights; this does not replace a consent form required before processing.\n\nAndroid lets you reset or delete the advertising identifier in phone settings. On iOS, IDFA access and tracking subject to ATT require the corresponding Apple authorization. These settings alone do not erase data already held by providers. Local rights, including rights to opt out of certain targeted advertising, remain applicable.\n\nGoogle: ${GOOGLE_PRIVACY}\nPartner-service data: ${GOOGLE_PARTNERS}` },
      { id: "6", title: "6. Premium purchase and restoration", content: "Apple or Google processes payment and retains billing information under its own rules. We do not receive your payment-card number.\n\nRevenueCat helps verify and restore the one-time ad-free purchase. It processes a pseudonymous identifier, transaction/receipt information, product, store and Premium entitlement status. The app also stores information needed for Premium access. Deleting your leaderboard account does not delete this purchase; data needed for restoration and applicable obligations is handled separately.\n\nDetails: https://www.revenuecat.com/privacy" },
      {
        id: "7",
        title: "7. Ratings and Reviews",
        content:
          "When the App invites you to rate it, it uses Apple's or Google's official window. Your rating and review are processed by the store concerned, under its own rules; the App has no access to them.",
      },
      { id: "8", title: "8. Purposes and legal bases", content: "Gameplay, the requested leaderboard account and managing/restoring Premium rely on providing the service or contract. Security, anti-abuse limits and support rely on our legitimate interest in protecting the service and its users, subject to your rights. Reminders are optional and require device permission.\n\nAdvertising processing and identifier access rely on consent where required. Some retention is needed for legal obligations or establishing, exercising or defending legal claims. These bases do not authorize unrestricted reuse for other purposes." },
      { id: "9", title: "9. Providers and international transfers", content: `Necessary recipients include:\n• Contabo for the server hosting Supabase and the leaderboard;\n• Cloudflare for routing and protecting requests;\n• Backblaze for encrypted backups and the decision journal;\n• Google/Firebase and Apple for attestation and system services;\n• Google AdMob for advertising;\n• RevenueCat and Apple/Google for purchases;\n• GitHub Pages for these public documents; and authorities where legally required.\n\nSupabase is self-hosted; this does not mean player data is hosted in Supabase Cloud. International providers may process data outside the European Economic Area, including the United States. Transfer safeguards depend on the applicable service and contract; request details from ${EMAIL}. We do not guarantee that all processing stays in Europe. We do not sell leaderboard data.\n\nNotices: https://contabo.com/en/legal/privacy/ ; https://www.cloudflare.com/privacypolicy/ ; https://www.backblaze.com/company/privacy ; https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement` },
      {
        id: "10",
        title: "10. Children",
        content: `The App is intended for people aged at least 16. It is not directed at children, and we do not knowingly collect data about them.\n\nIn France, a minor under 15 cannot consent alone to the processing of their data based on consent: the agreement of a holder of parental authority is also required (Article 45 of the French Data Protection Act, Loi Informatique et Libertés). If you are a parent and believe your child has given consent, write to us at ${EMAIL}: we will tell you how to withdraw it.`,
      },
      { id: "11", title: "11. Account deletion and your rights", content: `The leaderboard account section in Settings lets you request deletion and follow its progress. Once the server accepts the request, the profile is removed from the leaderboard and its identity and related active data are subsequently deleted. An offline request must first be transmitted; uninstalling alone does not delete the server account.\n\n“Also erase my progress” resets the game, record and relevant local results. Without it, they remain on your device. Premium and preferences are preserved. After deletion completes, voluntarily rejoining creates a new identity and nickname, subject to anti-abuse restrictions. Your retained local record may be submitted again; the old account is not restored and its nickname may be reassigned.\n\nWithout app access, email ${EMAIL}, identifying Match the Digits and the leaderboard nickname/identifier you have, never a token or password. Proportionate verification may be necessary to avoid deleting someone else’s account.\n\nDepending on your circumstances, you have rights of access, rectification, erasure, restriction, objection, portability and consent withdrawal. We normally respond within one month, extendable as permitted by law. You may complain to the CNIL at ${CNIL_URL} or your competent national authority.` },
      { id: "12", title: "12. Security", content: "Network exchanges use encryption in transit. Administrative access is restricted; backups and the decision journal are encrypted. These measures reduce risk without guaranteeing absolute security. The public leaderboard remains visible to its users; do not send secrets through support channels." },
      { id: "12a", title: "12a. Retention and backups", content: `Local data remains until erased or replaced. The leaderboard account and record remain until the account is deleted. Temporary counters and security restrictions have their own expiry times; some traces are needed to prevent abuse and handle disputes.\n\nBackups rotate through 7 daily, 4 weekly and 2 monthly restore points. This does not guarantee erasure of every copy on an exact date. The decision journal helps prevent a restore from reintroducing a deleted account.\n\nDeletion receipts and this journal currently remain stored without automatic purging. They may contain technical identifiers, hashes, dates and status information. You may request a review of their retention or erasure at ${EMAIL}. Purchase data separately follows restoration needs and applicable obligations.` },
      { id: "13", title: "13. Policy changes", content: "This policy is available in settings and on our website. Its date identifies the text version. It is updated to reflect service changes. Applicable duties to inform you and obtain new consent where required remain in force." },
      { id: "14", title: "14. Contact", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Publisher",
        content: `The Match the Digits mobile application (the "App") is published by:\n\n${PUBLISHER}\n• Address: ${ADDRESS}\n• Phone: ${PHONE}\n• Email: ${EMAIL}\n• ${IDS}, ${REG}\n• EU VAT number: ${VAT}, VAT not applicable, Article 293 B of the French General Tax Code\n• Publication director: Marc SAMSON\n• Host of the pages of the privacy policy and of these Terms: ${HOST}, ${HOST_SUPPORT}`,
      },
      {
        id: "2",
        title: "2. Purpose and Acceptance",
        content: `These terms (the "Terms") govern the use of the App. By downloading or using the App, you accept them. If you do not accept them, do not use the App.\n\nThe App is intended for people aged at least 16.\n\nThe use of your personal data is described in the Privacy Policy, available at ${privacyUrl(dir)} and from the App's settings.`,
      },
      {
        id: "3",
        title: "3. License",
        content: `The publisher grants you a personal, non-exclusive, non-transferable and revocable license to install and use the App on the devices you own or control, for private and non-commercial purposes.\n\n• On iOS, the App is licensed to you under Apple's standard Licensed Application End User License Agreement: ${APPLE_EULA}\nThese Terms supplement it; in the event of a conflict, Apple's agreement prevails for the use of the App on iOS.\n• On Android, the use of the App is also subject to the Google Play Terms of Service.\n\nThe App is licensed, not sold.`,
      },
      {
        id: "4",
        title: "4. Use of the App",
        content:
          "You agree not to:\n\n• copy, modify, decompile, disassemble or attempt to extract the source code of the App, except where expressly permitted by law;\n• circumvent or disrupt its technical mechanisms, including the display of ads and in-app purchases;\n• artificially generate ad impressions or clicks;\n• use the App in a way that is unlawful or infringes the rights of third parties.",
      },
      { id: "5", title: "5. Gameplay, progress and leaderboard", content: "You can play without an email/password account. The leaderboard uses a technical anonymous identity and an assigned nickname. Marked virtual profiles do not represent real players. The leaderboard does not award cash prizes.\n\nGames, challenges, trophies and settings are mainly local. The server stores the published record, not a complete progress backup. Finishing or abandoning a game to start a new one may submit the eligible record, with later retries after network failure.\n\nEach board allows at most five adds, the first two free, and four hints. Without Premium, the remaining three adds and hints offer rewarded advertising. Premium uses the same limits.\n\nCheating, falsified scores and abusive repeated registrations may lead to leaderboard restrictions or exclusion. You may dispute a restriction through support." },
      { id: "6", title: "6. Ads and rewards", content: "A banner may appear during play. A rewarded video is offered, with your agreement, before a relevant hint or recharge. Once the reward is confirmed, the action is granted within the remaining allowance.\n\nIf the ad is technically unavailable after your request, the app may grant that action without a video and show a discreet notice. Declining or closing the video before earning the reward does not grant that action. Premium does not provide adds beyond the limit when the allowance is exhausted.\n\nAds and linked destinations are provided by third parties. The Privacy Policy describes related data processing; agreeing to watch a video is not privacy consent." },
      { id: "7", title: "7. \"Remove ads\" Purchase", subsections: [{ subtitle: "What you receive", content: "Premium is a one-time purchase without automatic renewal. It removes banners and rewarded ads: hints and adds are available directly within the same limits of four hints and five adds per board. The grid may use the space freed by the banner." },
{ subtitle: "Price and payment", content: "When available, the offer shows the store-provided localized price. Check the price and conditions in the Apple or Google confirmation before paying. Cancelled, pending or failed purchases are not treated as completed. RevenueCat verifies Premium entitlement; we do not receive your payment-card details." },
{ subtitle: "Restoration", content: "Use Restore purchases in Settings with the original store and account. Connectivity may be required. An Apple purchase does not automatically transfer to Google Play, or vice versa. Deleting leaderboard data or progress does not cancel the purchase." },
{
            subtitle: "Withdrawal and refunds",
            content: `The purchase concerns digital content supplied immediately after payment. The right of withdrawal and refund requests are exercised under the conditions provided by applicable law and by the rules of the store concerned:\n\n• App Store: request from Apple, at ${APPLE_REFUND}\n• Google Play: request from Google, following the procedure at ${GOOGLE_REFUND}\n\nYou can also write to us at ${EMAIL}.`,
          }] },
      {
        id: "8",
        title: "8. Reminders",
        content:
          "If you turn them on, the App may send you local reminders. You can turn them off at any time in the App's settings or in your device settings. They contain no advertising.",
      },
      {
        id: "9",
        title: "9. Intellectual Property",
        content: `The App, its name, visuals, texts, sounds, code and presentation are protected by intellectual property law and belong to the publisher or its licensors. Certain third-party elements are used under their own license:\n\n${LICENSES}\n\nAny unauthorized reproduction or reuse is prohibited.`,
      },
      { id: "10", title: "10. Availability and updates", content: "The leaderboard, purchases and some verification require connectivity and also depend on providers. Outages, maintenance, security restrictions or unavailable ads may affect these services. Local play may remain available depending on the game state.\n\nWe may fix or develop the app. Mandatory consumer rights and digital-service obligations remain applicable; an ad-free purchase does not guarantee perpetual availability of the online service." },
      {
        id: "11",
        title: "11. Warranties and Liability",
        content:
          "The App is provided \"as is\". Nothing in these Terms limits the rights you have under the law as a consumer, in particular the legal guarantee of conformity of digital content and services.\n\nTo the extent permitted by law, the publisher is not liable for:\n\n• the loss of your progress stored on your device (Section 5);\n• indirect damages;\n• advertising content provided by third parties;\n• unavailability caused by your device, your operating system, your connection or the services of Apple and Google.\n\nThese limitations do not apply in the event of gross negligence or wilful misconduct, to personal injury, or where the law prohibits them.",
      },
      { id: "12", title: "12. Deletion and ending use", content: `You may stop playing at any time. To delete the server account, use the leaderboard section in Settings or contact ${EMAIL}; uninstalling is not enough. Processing and backups are described in the Privacy Policy.\n\nErasing local progress is optional. A deleted account cannot be recovered; permitted rejoining creates a new identity and nickname. A retained local record may be reused. Premium remains tied to the purchase independently of leaderboard deletion.\n\nAbuse may lead to leaderboard restrictions without removing your statutory rights. Intellectual-property, liability and dispute-resolution provisions continue after use ends.` },
      { id: "13", title: "13. Changes to these terms", content: "The current version is available in the app and on the website with its update date. Service and legal developments may require revisions. Statutory information duties and acquired consumer rights remain applicable." },
      { id: "14", title: "14. Applicable law, mediation and disputes", content: `French law applies without depriving consumers of mandatory protections in their country of residence.\n\nSend complaints to ${EMAIL}. You retain the right to free consumer mediation under applicable legal conditions after a prior written complaint. The publisher’s membership of a mediation scheme is still to be finalized; the mediator’s contact details will be published after joining. These terms do not appoint a mediator.\n\nIf no agreement is reached, competent courts may be approached; consumers retain applicable remedies associated with their place of residence.` },
      { id: "15", title: "15. Contact", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
};
