import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_PHONE, IDS, LICENSES, MEDIATOR, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI, French sole proprietorship), trading as Primisia";

export const en: Locale = {
  code: "en",
  dir,
  name: "English",
  updated: "October 21, 2026",
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
    privacyDesc: "Privacy Policy of the Match the Digits puzzle game: no account, game data stored on your device, Google AdMob advertising with consent.",
    termsDesc: "Terms of Use of the Match the Digits puzzle game: license, advertising, one-time Remove ads purchase, liability and governing law.",
    supportDesc: "Support, contact and frequently asked questions for the Match the Digits puzzle game.",
    supportIntro: "Need help? Write to us and include your device model if you can.",
    emailSupport: "Email support",
    faqTitle: "Frequently asked questions",
    language: "Language",
    translationNote: "This translation is provided for convenience. In case of discrepancy, the French version prevails.",
  },
  faq: [
    ["Do I need to create an account?", "No. Match the Digits requires no account, no registration and no login. You can start playing right after installing."],
    ["I bought \"Remove ads\" but I still see ads", "Open the settings in the app and tap <strong>Restore purchases</strong>. Make sure you are signed in with the same App Store or Google Play account used for the original purchase."],
    ["Is \"Remove ads\" a subscription?", "No. It is a one-time purchase: it is charged once and never renews. It removes all ads, including the optional rewarded ad for hints. It gives no gameplay advantage: every player has 4 hints per game."],
    ["How do hints work?", "Each game gives you 4 hints. Without the \"Remove ads\" purchase, you can choose to watch a short ad to reveal a hint. Watching is optional: you can always keep playing without it."],
    ["How do I change my advertising choices?", "Open the app's settings to review or change the consent you gave for advertising. On Android, you can also reset or delete your advertising ID in your device settings."],
    ["My reminder does not show up", "Check that notifications are allowed for Match the Digits in your device settings, then confirm that reminders are turned on in the app's settings."],
    ["Will I lose my progress?", "Your game, scores, daily results and settings are stored only on your device. Uninstalling the app, clearing its data or changing devices permanently deletes them: we keep no copy and cannot restore them."],
    ["How do I get a refund?", `Purchases are processed by Apple or Google. Request a refund from Apple at <a href="${APPLE_REFUND}">reportaproblem.apple.com</a>, or from Google following <a href="${GOOGLE_REFUND}">this procedure</a>. You can also write to us.`],
  ],
  privacy: {
    sections: [
      {
        id: "0",
        title: "Summary",
        content:
          "Effective date: October 21, 2026.\n\nThis policy explains what data is processed when you use the Match the Digits mobile application (the \"App\") on iOS and Android, why, by whom, for how long, and how to exercise your rights.\n\n• The App does not ask you to create an account, and does not ask for your name, email address or date of birth to play.\n• Your progress and settings are stored only on your device. We do not receive them.\n• The App displays advertising provided by Google (AdMob). To do so, Google processes some data from your device, described in Section 5. In the European Economic Area, the United Kingdom and Switzerland, your consent is requested before any personalized advertising.\n• We only receive data about you if you write to us (support).",
      },
      {
        id: "1",
        title: "1. Data Controller",
        content: `The App is published by:\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nContact for any question about your data: ${EMAIL}\n\nFor the advertising data processed by Google, Google acts as an independent controller, under its own rules (Section 5).`,
      },
      {
        id: "2",
        title: "2. Data Stored Only on Your Device",
        content:
          "The following data is stored in the App's local storage, on your device. It is not sent to us and is not sent to any server operated by the publisher:\n\n• Game in progress (board, score, remaining hints and additions): to resume your game\n• Best score: to show it on the home screen and in the trophies\n• Daily results (boards cleared, points, pairs, daily challenges): calendar, statistics, trophies\n• Preferences: language, haptic feedback, sound effects, reminders: to respect your settings\n• Dates of the rating requests already shown: so that you are not asked too often to rate the App\n\nThis data is kept as long as the App is installed. You can delete it at any time by clearing the App's data (Android) or by uninstalling it (iOS and Android). It cannot be recovered afterwards: the publisher makes no backup.",
      },
      {
        id: "3",
        title: "3. Reminders (Notifications)",
        content:
          "If you turn on reminders in the settings, the App asks for permission to show notifications. Reminders are scheduled locally on your device: no notification token is created or sent to a server. You can turn them off at any time in the App's settings or in your device settings. Reminders contain no advertising.",
      },
      {
        id: "4",
        title: "4. Support (When You Write to Us)",
        content: `The "Contact support" button opens your email application with a pre-filled email addressed to ${EMAIL}. If you send it, we receive:\n\n• your email address and the content of your message;\n• the App version, the operating system (iOS or Android) and its version, added automatically at the bottom of the message to help us solve the problem. You can remove them before sending.\n\nThis data is used only to reply to you. It is deleted as soon as your request has been handled.`,
      },
      {
        id: "5",
        title: "5. Advertising (Google AdMob)",
        subsections: [
          {
            subtitle: "Data processed by Google",
            content:
              "The App displays advertising provided by Google AdMob, through the Google Mobile Ads SDK built into the App. According to the documentation Google publishes for developers, Google processes:\n\n• IP address, which may be used to estimate the approximate location of the device: advertising, measurement, fraud prevention\n• Interactions with the App (launches, taps, videos viewed): advertising, measurement, fraud prevention\n• Diagnostic and performance data (launch time, hang rate, energy use); on iOS, crash logs not linked to the user: diagnostics, improvement, advertising, measurement\n• Device identifiers: advertising ID (Android), App Set ID, other app- or developer-scoped identifiers: advertising and measurement\n• Advertising data (ads viewed): advertising and measurement\n\nGoogle states that this data is encrypted in transit (TLS). The publisher has no access to this individual data: it only receives aggregated statistics (number of impressions, revenue).",
          },
          {
            subtitle: "Ads shown in the App",
            content:
              "• a banner on the game screen;\n• an optional rewarded ad: you can choose to watch a video to get a hint. Declining does not prevent you from playing.\n\nIf you have purchased \"Remove ads\" (Section 6), no ads are shown.",
          },
          {
            subtitle: "Your consent (EEA, United Kingdom, Switzerland)",
            content:
              "On first launch, a consent window managed by Google's consent tool lets you accept or refuse the use of your data for advertising purposes, purpose by purpose. If you refuse, the App remains fully playable; non-personalized or limited ads may then be shown. You can change your choice at any time in the App's settings.",
          },
          {
            subtitle: "iOS: tracking",
            content:
              "The App does not ask for permission to track your activity (App Tracking Transparency): your device's advertising identifier (IDFA) is not used. The App never requires you to accept tracking in order to play.",
          },
          {
            subtitle: "Android: advertising ID",
            content: "You can reset or delete your advertising ID in your device settings.",
          },
          {
            subtitle: "United States",
            content:
              "Depending on the State where you live, the law may give you the right to opt out of the \"sale\" or \"sharing\" of your data for targeted advertising. You can exercise this choice from the App's privacy settings, or by writing to us.",
          },
          {
            subtitle: "Learn more",
            content: `Google Privacy Policy: ${GOOGLE_PRIVACY}\nHow Google uses information from sites or apps that use its services: ${GOOGLE_PARTNERS}`,
          },
        ],
      },
      {
        id: "6",
        title: "6. \"Remove ads\" Purchase",
        content:
          "The one-time purchase that removes ads is processed exclusively by the App Store (Apple) or Google Play (Google). We never receive your payment data (bank card, name, billing address). The App only receives confirmation from the store that the purchase was made, in order to remove the ads and allow it to be restored. Payment processing is governed by Apple's or Google's privacy policies.",
      },
      {
        id: "7",
        title: "7. Ratings and Reviews",
        content:
          "When the App invites you to rate it, it uses Apple's or Google's official window. Your rating and review are processed by the store concerned, under its own rules; the App has no access to them.",
      },
      {
        id: "8",
        title: "8. Legal Bases (GDPR)",
        content:
          "• Running the game and storing your progress and settings locally: performance of the service you request (contract)\n• Access to device identifiers and advertising, personalized or not, where the law requires consent: consent, which you can withdraw at any time (Section 5)\n• Showing reminders: consent (notification permission), which you can withdraw at any time\n• Replying to your support requests: legitimate interest in replying to you; or pre-contractual measures / contract if the request concerns a purchase\n• Compliance with legal obligations (for example, accounting obligations for purchases): legal obligation",
      },
      {
        id: "9",
        title: "9. Recipients and Transfers Outside the European Union",
        content:
          "The data processed by the App is neither sold nor rented by the publisher. The only recipients are:\n\n• Google, for advertising (Section 5);\n• Apple or Google, for purchases, ratings and system notifications, depending on your device;\n• the authorities, only where required by law.\n\nGoogle may process data outside the European Union, in particular in the United States, under the safeguards described in its privacy policy.",
      },
      {
        id: "10",
        title: "10. Children",
        content: `The App is intended for people aged at least 16. It is not directed at children, and we do not knowingly collect data about them.\n\nIn France, a minor under 15 cannot consent alone to the processing of their data based on consent: the agreement of a holder of parental authority is also required (Article 45 of the French Data Protection Act, Loi Informatique et Libertés). If you are a parent and believe your child has given consent, write to us at ${EMAIL}: we will tell you how to withdraw it.`,
      },
      {
        id: "11",
        title: "11. Your Rights",
        content: `Depending on the applicable law (in particular the GDPR), you have the rights of access, rectification, erasure, restriction, objection and portability, and the right to withdraw your consent at any time, without affecting processing already carried out.\n\n• Data on your device: you control it directly (Section 2).\n• Advertising consent: can be changed at any time from the App's settings (Section 5).\n• Advertising data held by Google: tools and contacts described in Google's privacy policy.\n• Support data: write to ${EMAIL}. We reply within one month, which may be extended under the conditions set out in the GDPR.\n\nIf you believe your rights have not been respected, you may lodge a complaint with the ${CNIL}, or online at ${CNIL_URL}, or with the data protection authority of your country of residence.`,
      },
      {
        id: "12",
        title: "12. Security",
        content:
          "Game data stays on your device and benefits from its protections. Exchanges with Google are encrypted (TLS). No game data is stored on a server operated by the publisher.",
      },
      {
        id: "13",
        title: "13. Changes",
        content:
          "We may change this policy, in particular if the App evolves. The date of the last update is shown at the top of this page. In the event of a significant change, you will be informed in the App before it applies.",
      },
      { id: "14", title: "14. Contact", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Publisher",
        content: `The Match the Digits mobile application (the "App") is published by:\n\n${PUBLISHER}\n• Address: ${ADDRESS}\n• Phone: ${PHONE}\n• Email: ${EMAIL}\n• ${IDS}, ${REG}\n• EU VAT number: ${VAT}, VAT not applicable, Article 293 B of the French General Tax Code\n• Publication director: Marc SAMSON\n• Host of the pages of the privacy policy and of these Terms: ${HOST}, ${HOST_PHONE}`,
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
      {
        id: "5",
        title: "5. The Game and Your Progress",
        content:
          "The App does not require an account. Your progress (game in progress, scores, daily results, trophies) and your settings are stored only on your device.\n\nThey are not backed up by the publisher: they are lost if you uninstall the App, clear its data or change devices. The publisher cannot restore them.\n\nThe game rules, the number of hints and additions available, and the boards offered may change from one version to another.",
      },
      {
        id: "6",
        title: "6. Advertising",
        content:
          "The App is free and funded by advertising, provided by Google AdMob:\n\n• a banner on the game screen;\n• an optional rewarded ad: you can choose to watch a video to get a hint. The reward is stated before the video and granted once the video has been watched. If you decline, or if no ad is available, you can keep playing.\n\nAds are selected by Google. The publisher does not control their content and is not responsible for the products or services they present. Your choices regarding the use of your data for advertising are described in the Privacy Policy.",
      },
      {
        id: "7",
        title: "7. \"Remove ads\" Purchase",
        subsections: [
          {
            subtitle: "What you get",
            content:
              "The App offers a one-time, permanent purchase (\"Remove ads\"):\n\n• it removes all ads from the App, including the rewarded ad: the hint is then granted directly;\n• it gives no gameplay advantage: every player has 4 hints per game, with or without the purchase; the number of additions and the rules are the same for everyone;\n• it is not a subscription: it is charged only once and does not renew.",
          },
          {
            subtitle: "Price and payment",
            content:
              "The price is shown in the App Store or Google Play before purchase, including taxes applicable in your country. Payment is processed exclusively by Apple or Google, under their terms. The publisher never receives your payment data.",
          },
          {
            subtitle: "Restoring your purchase",
            content:
              "The purchase is linked to the Apple or Google account used to make it. You can recover it free of charge on a new device or after reinstalling, with the same account, using the \"Restore purchases\" button in the settings.",
          },
          {
            subtitle: "Withdrawal and refunds",
            content: `The purchase concerns digital content supplied immediately after payment. The right of withdrawal and refund requests are exercised under the conditions provided by applicable law and by the rules of the store concerned:\n\n• App Store: request from Apple, at ${APPLE_REFUND}\n• Google Play: request from Google, following the procedure at ${GOOGLE_REFUND}\n\nYou can also write to us at ${EMAIL}.`,
          },
        ],
      },
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
      {
        id: "10",
        title: "10. Availability and Updates",
        content:
          "The publisher may change the App, fix errors, modify or remove features, or stop distributing it. Some updates may be necessary to keep using the App. The publisher strives to ensure that it works properly but does not guarantee that it will be available without interruption, in particular for the display of ads, which depends on Google.",
      },
      {
        id: "11",
        title: "11. Warranties and Liability",
        content:
          "The App is provided \"as is\". Nothing in these Terms limits the rights you have under the law as a consumer, in particular the legal guarantee of conformity of digital content and services.\n\nTo the extent permitted by law, the publisher is not liable for:\n\n• the loss of your progress stored on your device (Section 5);\n• indirect damages;\n• advertising content provided by third parties;\n• unavailability caused by your device, your operating system, your connection or the services of Apple and Google.\n\nThese limitations do not apply in the event of gross negligence or wilful misconduct, to personal injury, or where the law prohibits them.",
      },
      {
        id: "12",
        title: "12. End of Use",
        content:
          "You can stop using the App at any time by uninstalling it. The publisher may terminate your license if you do not comply with these Terms. Sections 9, 11 and 14 continue to apply after the license ends.",
      },
      {
        id: "13",
        title: "13. Changes to These Terms",
        content:
          "The publisher may change these Terms, in particular to follow changes to the App or to the law. The date of the last update is shown at the top of this page. In the event of a significant change, you will be informed in the App before it takes effect. If you do not accept the new Terms, you can stop using the App.",
      },
      {
        id: "14",
        title: "14. Governing Law, Mediation and Disputes",
        content: `These Terms are governed by French law. If you are a consumer living in another country, you keep the protection of the mandatory rules of the law of your country.\n\nIn case of difficulty, first write to ${EMAIL}: we will look for an amicable solution.\n\nConsumer mediation: if you are a consumer and your written complaint has not been resolved, you may use the following consumer mediator free of charge: ${MEDIATOR}.\n\nFailing agreement, the dispute will be brought before the competent courts; if you are a consumer, you may in particular bring proceedings before the court of your place of residence.`,
      },
      { id: "15", title: "15. Contact", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
};
