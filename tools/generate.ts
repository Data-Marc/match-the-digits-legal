// Génère le site GitHub Pages légal de Match the Digits (une version par langue de l'app).
// Usage : node tools/generate.ts   (depuis la racine du dépôt ; Node >= 23 exécute le TypeScript)
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ADDRESS, BASE, EMAIL, type LegalDoc, type Locale } from "./common.ts";
import { en } from "./locales/en.ts";
import { fr } from "./locales/fr.ts";
import { de } from "./locales/de.ts";
import { es } from "./locales/es.ts";
import { it } from "./locales/it.ts";
import { ptBR } from "./locales/pt-BR.ts";
import { ro } from "./locales/ro.ts";
import { ru } from "./locales/ru.ts";
import { ja } from "./locales/ja.ts";
import { ko } from "./locales/ko.ts";
import { zhHans } from "./locales/zh-Hans.ts";
import { vi } from "./locales/vi.ts";
import { th } from "./locales/th.ts";

const LOCALES: Locale[] = [en, fr, de, es, it, ptBR, ro, ru, ja, ko, zhHans, vi, th];
const ROOT = join(import.meta.dirname, "..");
const APP = "Match the Digits";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const link = (s: string) =>
  // Caractères d'URL ASCII seulement : la ponctuation pleine chasse (ja/zh) et les parenthèses restent hors du lien.
  esc(s).replace(/https?:\/\/[\w\-.~:/?#@!$*+=%]+/g, (m) => {
    const u = m.replace(/[.,;:!?]+$/, "");
    return `<a href="${u}">${u}</a>${m.slice(u.length)}`;
  });
const body = (text: string) =>
  text
    .split("\n\n")
    .map((para) => `        <p>${para.split("\n").map(link).join("<br>\n        ")}</p>`)
    .join("\n");

/** <head> commun : hreflang vers toutes les langues + sélecteur de langue. */
function head(l: Locale, file: string, title: string, desc: string, css: string) {
  const alts = LOCALES.map((o) => `  <link rel="alternate" hreflang="${o.code}" href="${BASE}/${o.dir}${file}">`).join("\n");
  return `<!DOCTYPE html>
<html lang="${l.code}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | ${APP}</title>
  <meta name="description" content="${esc(desc)}">
  <link rel="canonical" href="${BASE}/${l.dir}${file}">
${alts}
  <link rel="alternate" hreflang="x-default" href="${BASE}/${file}">
  <style>
${css}
    .lang { display: flex; justify-content: flex-end; margin-bottom: 16px; }
    .lang select { font: inherit; font-size: 12px; color: #475569; background: #fff; border: 1.5px solid #e2e8f0; border-radius: 8px; padding: 6px 8px; }
    .note { font-size: 11.5px; color: #64748b; background: #f1f5f9; border-radius: 8px; padding: 8px 12px; margin-top: 12px; line-height: 1.5; }
  </style>
</head>`;
}
function langSelect(l: Locale, file: string) {
  const up = l.dir ? "../" : "";
  const opts = LOCALES.map((o) => `<option value="${up}${o.dir}${file}"${o === l ? " selected" : ""}>${o.name}</option>`).join("");
  return `<div class="lang"><select aria-label="${l.ui.language}" onchange="location.href=this.value">${opts}</select></div>`;
}
const note = (l: Locale, file: string) =>
  l.ui.translationNote ? `\n    <p class="note">${l.ui.translationNote} <a href="${l.dir ? "../" : ""}fr/${file}">Français</a></p>` : "";
const foot = (l: Locale) => `${APP} &nbsp;·&nbsp; ${l.ui.footer}<br>${ADDRESS}`;

const DOC_CSS = `    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Noto Sans", sans-serif; background: #f8f9fa; color: #1a1a2e; min-height: 100vh; padding: 40px 20px; }
    .wrap { max-width: 680px; margin: 0 auto; }
    .top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
    .back { display: inline-flex; align-items: center; gap: 6px; color: #1a56db; font-size: 13px; font-weight: 600; text-decoration: none; margin-bottom: 24px; }
    .back:hover { text-decoration: underline; }
    .back svg { width: 14px; height: 14px; }
    header { margin-bottom: 32px; }
    .badge { display: inline-block; background: #e8f0fe; color: #1a56db; font-size: 11px; font-weight: 700; letter-spacing: 0.6px; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; margin-bottom: 12px; }
    h1 { font-size: 1.6rem; font-weight: 800; color: #0f172a; letter-spacing: -0.3px; margin-bottom: 4px; }
    .meta { font-size: 12px; color: #94a3b8; }
    .doc { background: #fff; border-radius: 16px; box-shadow: 0 2px 16px rgba(0,0,0,0.07); padding: 36px 40px; }
    section { padding-bottom: 16px; margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; }
    section:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
    h2 { font-size: 13.5px; font-weight: 700; color: #0f172a; margin-bottom: 6px; letter-spacing: 0.1px; }
    p { font-size: 13px; color: #475569; line-height: 1.7; margin-bottom: 8px; }
    p:last-child { margin-bottom: 0; }
    .subsection { margin-bottom: 12px; }
    .subsection:last-child { margin-bottom: 0; }
    .sub-title { font-size: 13px; font-weight: 600; color: #1e293b; margin-bottom: 4px; }
    a { color: #1a56db; word-break: break-all; }
    .footer-note { margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; font-size: 11px; color: #94a3b8; text-align: center; line-height: 1.7; }
    @media (max-width: 600px) { .doc { padding: 24px 20px; } }`;

function docPage(l: Locale, doc: LegalDoc, badge: string, file: string, desc: string) {
  const sections = doc.sections
    .map((s) => {
      const subs = (s.subsections ?? [])
        .map((sub) => `        <div class="subsection">\n          <div class="sub-title">${esc(sub.subtitle)}</div>\n${body(sub.content)}\n        </div>`)
        .join("\n");
      return `      <section id="s${esc(s.id)}">\n        <h2>${esc(s.title)}</h2>\n${s.content ? body(s.content) + "\n" : ""}${subs ? subs + "\n" : ""}      </section>`;
    })
    .join("\n\n");
  return `${head(l, file, badge, desc, DOC_CSS)}
<body>
  <div class="wrap">
    <div class="top">
      <a class="back" href="index.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        ${l.ui.legalDocuments}
      </a>
      ${langSelect(l, file)}
    </div>

    <header>
      <div class="badge">${badge}</div>
      <h1>${APP}</h1>
      <p class="meta">${l.ui.lastUpdated}: ${esc(l.updated)}</p>${note(l, file)}
    </header>

    <div class="doc">

${sections}

    </div>

    <div class="footer-note">
      ${foot(l)}
    </div>
  </div>
</body>
</html>
`;
}

const CARD_CSS = `    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Noto Sans", sans-serif; background: #f8f9fa; color: #1a1a2e; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 40px 20px; }
    .card { background: #fff; border-radius: 16px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); max-width: 480px; width: 100%; padding: 48px 40px; }
    .badge { display: inline-block; background: #e8f0fe; color: #1a56db; font-size: 11px; font-weight: 700; letter-spacing: 0.6px; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; margin-bottom: 20px; }
    h1 { font-size: 1.5rem; font-weight: 800; color: #0f172a; letter-spacing: -0.3px; margin-bottom: 6px; }
    .subtitle { font-size: 13px; color: #64748b; margin-bottom: 36px; line-height: 1.5; }
    .footer { margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; font-size: 11px; color: #94a3b8; text-align: center; line-height: 1.7; }
    @media (max-width: 600px) { .card { padding: 32px 22px; } }`;

const ICON = {
  shield: `<path d="M12 2l7 3.5v5c0 5.25-3.5 9.74-7 11.5-3.5-1.76-7-6.25-7-11.5v-5L12 2z"/>`,
  doc: `<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>\n            <path d="M14 2v6h6"/>\n            <line x1="8" y1="13" x2="16" y2="13"/>\n            <line x1="8" y1="17" x2="13" y2="17"/>`,
  help: `<circle cx="12" cy="12" r="10"/>\n            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>\n            <line x1="12" y1="17" x2="12.01" y2="17"/>`,
};
const docLink = (href: string, icon: string, label: string, sub: string) => `      <a href="${href}" class="doc-link">
        <div class="doc-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#1a56db" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            ${icon}
          </svg>
        </div>
        <div>
          <div class="doc-label">${label}</div>
          <div class="doc-sub">${sub}</div>
        </div>
        <span class="chevron">›</span>
      </a>`;

const index = (l: Locale) => `${head(l, "index.html", l.ui.legalDocuments, l.ui.indexDesc, `${CARD_CSS}
    .links { display: flex; flex-direction: column; gap: 12px; }
    a.doc-link { display: flex; align-items: center; gap: 14px; padding: 16px 18px; border: 1.5px solid #e2e8f0; border-radius: 12px; text-decoration: none; color: #0f172a; transition: border-color 0.15s, background 0.15s; }
    a.doc-link:hover { border-color: #1a56db; background: #f0f4ff; }
    .doc-icon { width: 38px; height: 38px; border-radius: 9px; background: #e8f0fe; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .doc-icon svg { width: 18px; height: 18px; }
    .doc-label { font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 2px; }
    .doc-sub { font-size: 11px; color: #94a3b8; }
    .chevron { margin-left: auto; color: #cbd5e1; font-size: 18px; }`)}
<body>
  <div class="card">
    ${langSelect(l, "index.html")}
    <div class="badge">${l.ui.legalDocuments}</div>
    <h1>${APP}</h1>
    <p class="subtitle">${l.ui.lastUpdated}: ${esc(l.updated)}</p>

    <div class="links">
${docLink("privacy-policy.html", ICON.shield, l.ui.privacyPolicy, l.ui.privacySub)}

${docLink("terms-of-service.html", ICON.doc, l.ui.termsOfUse, l.ui.termsSub)}

${docLink("support.html", ICON.help, l.ui.support, l.ui.supportSub)}
    </div>

    <div class="footer">
      ${foot(l)}
    </div>
  </div>
</body>
</html>
`;

const support = (l: Locale) => `${head(l, "support.html", l.ui.support, l.ui.supportDesc, `${CARD_CSS}
    .contact { display: flex; align-items: center; gap: 14px; padding: 16px 18px; border: 1.5px solid #1a56db; border-radius: 12px; background: #f0f4ff; margin-bottom: 32px; }
    .contact-icon { width: 38px; height: 38px; border-radius: 9px; background: #e8f0fe; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .contact-icon svg { width: 18px; height: 18px; }
    .contact-label { font-size: 11px; color: #64748b; margin-bottom: 2px; }
    .contact a { font-size: 14px; font-weight: 700; color: #1a56db; text-decoration: none; }
    .contact a:hover { text-decoration: underline; }
    h2 { font-size: 13px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 14px; }
    .faq { margin-bottom: 32px; }
    .faq-item { border-bottom: 1px solid #f1f5f9; padding: 14px 0; }
    .faq-item:last-child { border-bottom: none; }
    .faq-q { font-size: 13.5px; font-weight: 700; color: #0f172a; margin-bottom: 5px; }
    .faq-a { font-size: 12.5px; color: #64748b; line-height: 1.65; }
    .faq-a a { color: #1a56db; }
    .links { display: flex; gap: 10px; }
    a.doc-link { flex: 1; display: block; padding: 12px 14px; border: 1.5px solid #e2e8f0; border-radius: 10px; text-decoration: none; color: #0f172a; font-size: 12.5px; font-weight: 700; text-align: center; transition: border-color 0.15s, background 0.15s; }
    a.doc-link:hover { border-color: #1a56db; background: #f0f4ff; }`)}
<body>
  <div class="card">
    ${langSelect(l, "support.html")}
    <div class="badge">${l.ui.support}</div>
    <h1>${APP}</h1>
    <p class="subtitle">${l.ui.supportIntro}</p>

    <div class="contact">
      <div class="contact-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="#1a56db" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>
          <path d="M22 6l-10 7L2 6"/>
        </svg>
      </div>
      <div>
        <div class="contact-label">${l.ui.emailSupport}</div>
        <a href="mailto:${EMAIL}">${EMAIL}</a>
      </div>
    </div>

    <h2>${l.ui.faqTitle}</h2>
    <div class="faq">
${l.faq.map(([q, a]) => `      <div class="faq-item">\n        <div class="faq-q">${esc(q)}</div>\n        <div class="faq-a">${a}</div>\n      </div>`).join("\n")}
    </div>

    <div class="links">
      <a href="privacy-policy.html" class="doc-link">${l.ui.privacyPolicy}</a>
      <a href="terms-of-service.html" class="doc-link">${l.ui.termsOfUse}</a>
    </div>

    <div class="footer">
      ${foot(l)}
    </div>
  </div>
</body>
</html>
`;

for (const l of LOCALES) {
  const out = join(ROOT, l.dir);
  mkdirSync(out, { recursive: true });
  writeFileSync(join(out, "index.html"), index(l));
  writeFileSync(join(out, "privacy-policy.html"), docPage(l, l.privacy, l.ui.privacyPolicy, "privacy-policy.html", l.ui.privacyDesc));
  writeFileSync(join(out, "terms-of-service.html"), docPage(l, l.terms, l.ui.termsOfUse, "terms-of-service.html", l.ui.termsDesc));
  writeFileSync(join(out, "support.html"), support(l));
}
writeFileSync(join(ROOT, ".nojekyll"), "");
console.log(`généré : ${LOCALES.map((l) => l.code).join(", ")}`);

// Copie pour l'écran natif de l'app : node tools/generate.ts --app <dossier legal/content de l'app>
const appDir = process.argv[process.argv.indexOf("--app") + 1];
if (process.argv.includes("--app") && appDir) {
  mkdirSync(appDir, { recursive: true });
  for (const l of LOCALES) {
    const data = { lastUpdated: `${l.ui.lastUpdated}: ${l.updated}`, note: l.ui.translationNote, privacy: l.privacy.sections, terms: l.terms.sections };
    writeFileSync(join(appDir, `${l.code}.json`), JSON.stringify(data, null, 1) + "\n");
  }
  console.log("copie app :", appDir);
}
