// Valeurs partagées par toutes les langues. Un champ [TO BE CONFIRMED] rempli ici l'est partout.
export interface LegalSection {
  id: string;
  title: string;
  content?: string;
  subsections?: { subtitle: string; content: string }[];
}
export interface LegalDoc {
  sections: LegalSection[];
}
export interface Locale {
  code: string; // attribut lang + hreflang
  dir: string; // "" pour la racine (anglais), sinon "fr/", "de/"...
  name: string; // nom de la langue dans sa propre langue
  updated: string; // date de mise à jour, formatée dans la langue
  ui: {
    legalDocuments: string;
    privacyPolicy: string;
    termsOfUse: string;
    support: string;
    privacySub: string;
    termsSub: string;
    supportSub: string;
    lastUpdated: string;
    footer: string; // après « Match the Digits · »
    indexDesc: string;
    privacyDesc: string;
    termsDesc: string;
    supportDesc: string;
    supportIntro: string;
    emailSupport: string;
    faqTitle: string;
    language: string;
    translationNote: string; // "" pour le français (version de référence)
  };
  faq: [string, string][];
  privacy: LegalDoc;
  terms: LegalDoc;
}

export const BASE = "https://data-marc.github.io/match-the-digits-legal";
export const EMAIL = "hello@primisia.com";
export const ADDRESS = "17 rue Raspail, 92300 Levallois-Perret, France";
export const PHONE = "+33 7 69 18 24 97";
export const IDS = "SIREN 106684699, SIRET 10668469900015";
export const VAT = "FR87106684699";
export const REG = "[TO BE CONFIRMED: RCS / RNE]";
export const MEDIATOR = "[TO BE CONFIRMED: consumer mediator]";
export const HOST = "GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA";
export const HOST_PHONE = "[TO BE CONFIRMED: host phone]";
export const CNIL = "CNIL (Commission nationale de l'informatique et des libertés), Service des plaintes, 3 place de Fontenoy, 75007 Paris, France";
export const CNIL_URL = "https://www.cnil.fr/fr/adresser-une-plainte";
export const GOOGLE_PRIVACY = "https://policies.google.com/privacy";
export const GOOGLE_PARTNERS = "https://policies.google.com/technologies/partner-sites";
export const APPLE_EULA = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";
export const APPLE_REFUND = "https://reportaproblem.apple.com";
export const GOOGLE_REFUND = "https://support.google.com/googleplay/answer/15574897";
export const privacyUrl = (dir: string) => `${BASE}/${dir}privacy-policy.html`;

/** Licences tierces : noms propres, identiques dans toutes les langues. */
export const LICENSES = [
  "Poppins (The Poppins Project Authors): SIL Open Font License 1.1",
  "Noto Sans, Noto Sans Thai, Noto Sans JP / KR / SC (The Noto Project Authors): SIL Open Font License 1.1",
  "@expo/vector-icons: MIT License",
  "Material Icons (Google): Apache License 2.0",
  "Material Design Icons (Pictogrammers): Pictogrammers Free License (Apache License 2.0)",
  "\"Game experience level increased\" (Mixkit): Mixkit Sound Effects Free License",
]
  .map((l) => `• ${l}`)
  .join("\n");
