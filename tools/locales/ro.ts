import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_PHONE, IDS, LICENSES, MEDIATOR, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "ro/";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI — întreprindere individuală franceză), sub denumirea comercială Primisia";

export const ro: Locale = {
  code: "ro",
  dir,
  name: "Română",
  updated: "21 octombrie 2026",
  ui: {
    legalDocuments: "Documente juridice",
    privacyPolicy: "Politica de confidențialitate",
    termsOfUse: "Condiții de utilizare",
    support: "Asistență",
    privacySub: "Date, publicitate, consimțământ și drepturile tale",
    termsSub: "Licență, reclame, achiziția Elimină reclamele și răspundere",
    supportSub: "Contact, întrebări frecvente și ajutor pentru achiziții",
    lastUpdated: "Ultima actualizare",
    footer: "Publicat de Marc SAMSON EI, sub denumirea Primisia",
    indexDesc: "Politica de confidențialitate, condițiile de utilizare și asistența pentru jocul de logică Match the Digits.",
    privacyDesc: "Politica de confidențialitate a jocului Match the Digits: fără cont, datele jocului pe dispozitivul tău, reclame Google AdMob cu consimțământ.",
    termsDesc: "Condițiile de utilizare ale jocului Match the Digits: licență, publicitate, achiziția unică Elimină reclamele, răspundere și legea aplicabilă.",
    supportDesc: "Asistență, contact și întrebări frecvente pentru jocul de logică Match the Digits.",
    supportIntro: "Ai nevoie de ajutor? Scrie-ne și, dacă poți, precizează modelul dispozitivului tău.",
    emailSupport: "Asistență prin e-mail",
    faqTitle: "Întrebări frecvente",
    language: "Limbă",
    translationNote: "Această traducere este oferită doar cu titlu informativ. În caz de neconcordanță, prevalează versiunea în limba franceză.",
  },
  faq: [
    ["Trebuie să îmi creez un cont?", "Nu. Match the Digits nu necesită cont, înregistrare sau autentificare. Poți juca imediat după instalare."],
    ["Am cumpărat „Elimină reclamele”, dar încă văd reclame", "Deschide setările aplicației și atinge <strong>Restabilește achizițiile</strong>. Verifică dacă ești conectat cu același cont App Store sau Google Play folosit la achiziție."],
    ["„Elimină reclamele” este un abonament?", "Nu. Este o achiziție unică: se plătește o singură dată și nu se reînnoiește niciodată. Elimină toate reclamele, inclusiv reclama opțională cu recompensă pentru indicii. Nu oferă niciun avantaj în joc: fiecare jucător are 4 indicii pe joc."],
    ["Cum funcționează indiciile?", "Fiecare joc îți oferă 4 indicii. Fără achiziția „Elimină reclamele”, poți alege să urmărești o reclamă scurtă pentru a afla un indiciu. Este opțional: poți oricând să continui să joci fără ea."],
    ["Cum îmi schimb opțiunile privind publicitatea?", "Deschide setările aplicației pentru a vedea sau modifica consimțământul dat pentru publicitate. Pe Android, poți și să resetezi sau să ștergi ID-ul de publicitate din setările dispozitivului."],
    ["Mementoul meu nu apare", "Verifică dacă notificările pentru Match the Digits sunt permise în setările dispozitivului și dacă mementourile sunt activate în setările aplicației."],
    ["Îmi voi pierde progresul?", "Jocul, scorurile, rezultatele zilnice și setările tale sunt salvate doar pe dispozitivul tău. Dezinstalarea aplicației, ștergerea datelor ei sau schimbarea dispozitivului le șterge definitiv: nu păstrăm nicio copie și nu le putem restabili."],
    ["Cum obțin o rambursare?", `Achizițiile sunt procesate de Apple sau Google. Solicită rambursarea de la Apple pe <a href="${APPLE_REFUND}">reportaproblem.apple.com</a> sau de la Google urmând <a href="${GOOGLE_REFUND}">această procedură</a>. Ne poți și scrie.`],
  ],
  privacy: {
    sections: [
      {
        id: "0",
        title: "Pe scurt",
        content:
          "Data intrării în vigoare: 21 octombrie 2026.\n\nAceastă politică explică ce date sunt prelucrate atunci când folosești aplicația mobilă Match the Digits („Aplicația”) pe iOS și Android, de ce, de către cine, pentru cât timp și cum îți poți exercita drepturile.\n\n• Aplicația nu îți cere să creezi un cont și nu îți cere numele, adresa de e-mail sau data nașterii pentru a juca.\n• Progresul și setările tale sunt salvate doar pe dispozitivul tău. Noi nu le primim.\n• Aplicația afișează reclame furnizate de Google (AdMob). În acest scop, Google prelucrează anumite date ale dispozitivului tău, descrise în secțiunea 5. În Spațiul Economic European, Regatul Unit și Elveția, consimțământul tău este solicitat înainte de orice reclamă personalizată.\n• Primim date despre tine doar dacă ne scrii (asistență).",
      },
      {
        id: "1",
        title: "1. Operatorul de date",
        content: `Aplicația este publicată de:\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nContact pentru orice întrebare privind datele tale: ${EMAIL}\n\nPentru datele publicitare prelucrate de Google, Google acționează ca operator independent, conform propriilor reguli (secțiunea 5).`,
      },
      {
        id: "2",
        title: "2. Date salvate doar pe dispozitivul tău",
        content:
          "Următoarele date sunt salvate în spațiul de stocare local al Aplicației, pe dispozitivul tău. Nu ne sunt transmise și nu sunt trimise către niciun server al editorului:\n\n• Jocul în desfășurare (tabla, scorul, indiciile și adăugările rămase) — pentru a relua jocul\n• Cel mai bun scor — pentru a-l afișa pe ecranul principal și la trofee\n• Rezultate zilnice (table finalizate, puncte, perechi, provocări zilnice) — calendar, statistici, trofee\n• Preferințe: limbă, feedback haptic, efecte sonore, mementouri — pentru a respecta setările tale\n• Datele solicitărilor de evaluare deja afișate — pentru a nu-ți cere prea des să evaluezi Aplicația\n\nAceste date sunt păstrate cât timp Aplicația este instalată. Le poți șterge oricând ștergând datele Aplicației (Android) sau dezinstalând-o (iOS și Android). Ulterior nu mai pot fi recuperate: editorul nu face nicio copie de rezervă.",
      },
      {
        id: "3",
        title: "3. Mementouri (notificări)",
        content:
          "Dacă activezi mementourile în setări, Aplicația îți cere permisiunea de a afișa notificări. Mementourile sunt programate local pe dispozitivul tău: niciun token de notificare nu este creat sau trimis către un server. Le poți dezactiva oricând din setările Aplicației sau ale dispozitivului. Mementourile nu conțin publicitate.",
      },
      {
        id: "4",
        title: "4. Asistență (când ne scrii)",
        content: `Butonul „Contactează asistența” deschide aplicația ta de e-mail cu un mesaj precompletat adresat către ${EMAIL}. Dacă îl trimiți, primim:\n\n• adresa ta de e-mail și conținutul mesajului;\n• versiunea Aplicației, sistemul de operare (iOS sau Android) și versiunea acestuia, adăugate automat la sfârșitul mesajului pentru a ne ajuta să rezolvăm problema. Le poți șterge înainte de trimitere.\n\nAceste date sunt folosite doar pentru a-ți răspunde. Sunt șterse imediat ce solicitarea ta a fost soluționată.`,
      },
      {
        id: "5",
        title: "5. Publicitate (Google AdMob)",
        subsections: [
          {
            subtitle: "Date prelucrate de Google",
            content:
              "Aplicația afișează reclame furnizate de Google AdMob, prin SDK-ul Google Mobile Ads integrat în Aplicație. Conform documentației publicate de Google pentru dezvoltatori, Google prelucrează:\n\n• Adresa IP, care poate fi folosită pentru a estima locația aproximativă a dispozitivului — publicitate, măsurare, prevenirea fraudei\n• Interacțiuni cu Aplicația (lansări, atingeri, videoclipuri vizionate) — publicitate, măsurare, prevenirea fraudei\n• Date de diagnosticare și performanță (timp de lansare, blocaje, consum de energie); pe iOS, jurnale de erori neasociate utilizatorului — diagnosticare, îmbunătățire, publicitate, măsurare\n• Identificatori ai dispozitivului: ID de publicitate (Android), App Set ID, alți identificatori specifici aplicației sau dezvoltatorului — publicitate și măsurare\n• Date publicitare (reclame vizualizate) — publicitate și măsurare\n\nGoogle precizează că aceste date sunt criptate în timpul transferului (TLS). Editorul nu are acces la aceste date individuale: primește doar statistici agregate (număr de afișări, venituri).",
          },
          {
            subtitle: "Reclame afișate în Aplicație",
            content:
              "• un banner pe ecranul de joc;\n• o reclamă opțională cu recompensă: poți alege să urmărești un videoclip pentru a obține un indiciu. Refuzul nu te împiedică să joci.\n\nDacă ai cumpărat „Elimină reclamele” (secțiunea 6), nu se afișează nicio reclamă.",
          },
          {
            subtitle: "Consimțământul tău (SEE, Regatul Unit, Elveția)",
            content:
              "La prima lansare, o fereastră de consimțământ gestionată de instrumentul de consimțământ al Google îți permite să accepți sau să refuzi utilizarea datelor tale în scopuri publicitare, scop cu scop. Dacă refuzi, Aplicația rămâne complet jucabilă; pot fi afișate atunci reclame nepersonalizate sau limitate. Îți poți schimba alegerea oricând din setările Aplicației.",
          },
          {
            subtitle: "iOS — urmărire",
            content:
              "Aplicația nu îți cere permisiunea de a-ți urmări activitatea (App Tracking Transparency): identificatorul de publicitate al dispozitivului tău (IDFA) nu este folosit. Aplicația nu te obligă niciodată să accepți urmărirea pentru a juca.",
          },
          {
            subtitle: "Android — ID de publicitate",
            content: "Poți reseta sau șterge ID-ul de publicitate din setările dispozitivului.",
          },
          {
            subtitle: "Statele Unite",
            content:
              "În funcție de statul în care locuiești, legea îți poate da dreptul de a refuza „vânzarea” sau „partajarea” datelor tale pentru publicitate țintită. Poți exercita această opțiune din setările de confidențialitate ale Aplicației sau scriindu-ne.",
          },
          {
            subtitle: "Află mai multe",
            content: `Politica de confidențialitate Google: ${GOOGLE_PRIVACY}\nCum folosește Google informațiile de pe site-urile sau aplicațiile care îi utilizează serviciile: ${GOOGLE_PARTNERS}`,
          },
        ],
      },
      {
        id: "6",
        title: "6. Achiziția „Elimină reclamele”",
        content:
          "Achiziția unică ce elimină reclamele este procesată exclusiv de App Store (Apple) sau Google Play (Google). Nu primim niciodată datele tale de plată (card bancar, nume, adresă de facturare). Aplicația primește de la magazin doar confirmarea că achiziția a fost efectuată, pentru a elimina reclamele și a permite restabilirea ei. Procesarea plății este guvernată de politicile de confidențialitate ale Apple sau Google.",
      },
      {
        id: "7",
        title: "7. Evaluări și recenzii",
        content:
          "Când Aplicația te invită să o evaluezi, folosește fereastra oficială Apple sau Google. Nota și recenzia ta sunt prelucrate de magazinul respectiv, conform propriilor reguli; Aplicația nu are acces la ele.",
      },
      {
        id: "8",
        title: "8. Temeiuri juridice (GDPR)",
        content:
          "• Funcționarea jocului și salvarea locală a progresului și setărilor tale — executarea serviciului pe care îl soliciți (contract)\n• Accesul la identificatorii dispozitivului și publicitatea, personalizată sau nu, atunci când legea impune consimțământul — consimțământ, care poate fi retras oricând (secțiunea 5)\n• Afișarea mementourilor — consimțământ (permisiunea pentru notificări), care poate fi retras oricând\n• Răspunsul la solicitările tale de asistență — interesul legitim de a-ți răspunde; sau demersuri precontractuale / contract dacă solicitarea privește o achiziție\n• Respectarea obligațiilor legale (de exemplu, cele contabile pentru achiziții) — obligație legală",
      },
      {
        id: "9",
        title: "9. Destinatari și transferuri în afara Uniunii Europene",
        content:
          "Datele prelucrate de Aplicație nu sunt nici vândute, nici închiriate de editor. Singurii destinatari sunt:\n\n• Google, pentru publicitate (secțiunea 5);\n• Apple sau Google, pentru achiziții, evaluări și notificări de sistem, în funcție de dispozitivul tău;\n• autoritățile, doar dacă legea o impune.\n\nGoogle poate prelucra date în afara Uniunii Europene, în special în Statele Unite, cu garanțiile descrise în politica sa de confidențialitate.",
      },
      {
        id: "10",
        title: "10. Copii",
        content: `Aplicația este destinată persoanelor de cel puțin 16 ani. Nu se adresează copiilor și nu colectăm în mod intenționat date despre aceștia.\n\nÎn Franța, un minor sub 15 ani nu își poate da singur consimțământul pentru prelucrarea datelor sale bazată pe consimțământ: este necesar și acordul unui titular al autorității părintești (articolul 45 din legea franceză privind protecția datelor — Loi Informatique et Libertés). Dacă ești părinte și crezi că copilul tău și-a dat consimțământul, scrie-ne la ${EMAIL}: îți vom spune cum îl poți retrage.`,
      },
      {
        id: "11",
        title: "11. Drepturile tale",
        content: `Potrivit legii aplicabile (în special GDPR), ai dreptul de acces, rectificare, ștergere, restricționare, opoziție și portabilitate, precum și dreptul de a-ți retrage consimțământul oricând, fără a afecta prelucrările deja efectuate.\n\n• Datele de pe dispozitivul tău: le controlezi direct (secțiunea 2).\n• Consimțământul pentru publicitate: poate fi modificat oricând din setările Aplicației (secțiunea 5).\n• Datele publicitare deținute de Google: instrumentele și contactele descrise în politica de confidențialitate Google.\n• Datele de asistență: scrie la ${EMAIL}. Răspundem în termen de o lună, termen care poate fi prelungit în condițiile prevăzute de GDPR.\n\nDacă consideri că drepturile tale nu au fost respectate, poți depune o plângere la ${CNIL}, online la ${CNIL_URL}, sau la autoritatea de protecție a datelor din țara ta de reședință.`,
      },
      {
        id: "12",
        title: "12. Securitate",
        content:
          "Datele jocului rămân pe dispozitivul tău și beneficiază de protecțiile acestuia. Schimburile cu Google sunt criptate (TLS). Nicio dată de joc nu este stocată pe un server al editorului.",
      },
      {
        id: "13",
        title: "13. Modificări",
        content:
          "Putem modifica această politică, în special dacă Aplicația evoluează. Data ultimei actualizări este afișată în partea de sus a acestei pagini. În cazul unei modificări importante, vei fi informat în Aplicație înainte ca aceasta să se aplice.",
      },
      { id: "14", title: "14. Contact", content: `Marc SAMSON EI — Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Editor",
        content: `Aplicația mobilă Match the Digits („Aplicația”) este publicată de:\n\n${PUBLISHER}\n• Adresă: ${ADDRESS}\n• Telefon: ${PHONE}\n• E-mail: ${EMAIL}\n• ${IDS} — ${REG}\n• Cod de TVA intracomunitar: ${VAT} — TVA neaplicabil, articolul 293 B din Codul general fiscal francez\n• Director de publicație: Marc SAMSON\n• Găzduirea paginilor politicii de confidențialitate și ale prezentelor Condiții: ${HOST} — ${HOST_PHONE}`,
      },
      {
        id: "2",
        title: "2. Obiect și acceptare",
        content: `Prezentele condiții („Condițiile”) reglementează utilizarea Aplicației. Prin descărcarea sau utilizarea Aplicației, le accepți. Dacă nu le accepți, nu folosi Aplicația.\n\nAplicația este destinată persoanelor de cel puțin 16 ani.\n\nUtilizarea datelor tale personale este descrisă în Politica de confidențialitate, disponibilă la ${privacyUrl(dir)} și din setările Aplicației.`,
      },
      {
        id: "3",
        title: "3. Licență",
        content: `Editorul îți acordă o licență personală, neexclusivă, netransferabilă și revocabilă de a instala și utiliza Aplicația pe dispozitivele pe care le deții sau le controlezi, în scopuri private și necomerciale.\n\n• Pe iOS, Aplicația îți este licențiată conform acordului standard de licență pentru utilizatorul final al Apple (Licensed Application End User License Agreement): ${APPLE_EULA}\nPrezentele Condiții îl completează; în caz de contradicție, acordul Apple prevalează pentru utilizarea Aplicației pe iOS.\n• Pe Android, utilizarea Aplicației este supusă și Termenilor și condițiilor Google Play.\n\nAplicația este licențiată, nu vândută.`,
      },
      {
        id: "4",
        title: "4. Utilizarea Aplicației",
        content:
          "Te angajezi să nu:\n\n• copiezi, modifici, decompilezi, dezasamblezi sau să încerci să extragi codul sursă al Aplicației, cu excepția cazurilor permise expres de lege;\n• ocolești sau perturbi mecanismele sale tehnice, inclusiv afișarea reclamelor și achizițiile din aplicație;\n• generezi artificial afișări sau clicuri pe reclame;\n• folosești Aplicația într-un mod ilegal sau care încalcă drepturile terților.",
      },
      {
        id: "5",
        title: "5. Jocul și progresul tău",
        content:
          "Aplicația nu necesită cont. Progresul tău (jocul în desfășurare, scoruri, rezultate zilnice, trofee) și setările tale sunt salvate doar pe dispozitivul tău.\n\nEle nu sunt salvate de editor: se pierd dacă dezinstalezi Aplicația, îi ștergi datele sau schimbi dispozitivul. Editorul nu le poate restabili.\n\nRegulile jocului, numărul de indicii și adăugări disponibile și tablele oferite se pot schimba de la o versiune la alta.",
      },
      {
        id: "6",
        title: "6. Publicitate",
        content:
          "Aplicația este gratuită și finanțată prin publicitate furnizată de Google AdMob:\n\n• un banner pe ecranul de joc;\n• o reclamă opțională cu recompensă: poți alege să urmărești un videoclip pentru a obține un indiciu. Recompensa este indicată înainte de videoclip și acordată după vizionarea acestuia. Dacă refuzi sau dacă nu este disponibilă nicio reclamă, poți continua să joci.\n\nReclamele sunt selectate de Google. Editorul nu controlează conținutul lor și nu răspunde pentru produsele sau serviciile prezentate. Opțiunile tale privind utilizarea datelor în scopuri publicitare sunt descrise în Politica de confidențialitate.",
      },
      {
        id: "7",
        title: "7. Achiziția „Elimină reclamele”",
        subsections: [
          {
            subtitle: "Ce primești",
            content:
              "Aplicația oferă o achiziție unică și permanentă („Elimină reclamele”):\n\n• elimină toate reclamele din Aplicație, inclusiv reclama cu recompensă: indiciul este atunci acordat direct;\n• nu oferă niciun avantaj în joc: fiecare jucător are 4 indicii pe joc, cu sau fără achiziție; numărul de adăugări și regulile sunt aceleași pentru toți;\n• nu este un abonament: se plătește o singură dată și nu se reînnoiește.",
          },
          {
            subtitle: "Preț și plată",
            content:
              "Prețul este afișat în App Store sau Google Play înainte de achiziție, cu taxele aplicabile în țara ta. Plata este procesată exclusiv de Apple sau Google, conform condițiilor acestora. Editorul nu primește niciodată datele tale de plată.",
          },
          {
            subtitle: "Restabilirea achiziției",
            content:
              "Achiziția este legată de contul Apple sau Google cu care a fost efectuată. O poți recupera gratuit pe un dispozitiv nou sau după reinstalare, cu același cont, folosind butonul „Restabilește achizițiile” din setări.",
          },
          {
            subtitle: "Retragere și rambursare",
            content: `Achiziția privește conținut digital furnizat imediat după plată. Dreptul de retragere și cererile de rambursare se exercită în condițiile prevăzute de legea aplicabilă și de regulile magazinului respectiv:\n\n• App Store: cerere către Apple, la ${APPLE_REFUND}\n• Google Play: cerere către Google, urmând procedura de la ${GOOGLE_REFUND}\n\nNe poți scrie și la ${EMAIL}.`,
          },
        ],
      },
      {
        id: "8",
        title: "8. Mementouri",
        content:
          "Dacă le activezi, Aplicația îți poate trimite mementouri locale. Le poți dezactiva oricând din setările Aplicației sau ale dispozitivului. Nu conțin publicitate.",
      },
      {
        id: "9",
        title: "9. Proprietate intelectuală",
        content: `Aplicația, numele, elementele vizuale, textele, sunetele, codul și prezentarea sa sunt protejate de dreptul proprietății intelectuale și aparțin editorului sau licențiatorilor săi. Anumite elemente ale terților sunt folosite sub propria lor licență:\n\n${LICENSES}\n\nOrice reproducere sau reutilizare neautorizată este interzisă.`,
      },
      {
        id: "10",
        title: "10. Disponibilitate și actualizări",
        content:
          "Editorul poate modifica Aplicația, corecta erori, modifica sau elimina funcții ori opri distribuirea ei. Unele actualizări pot fi necesare pentru a continua să folosești Aplicația. Editorul depune eforturi pentru buna ei funcționare, dar nu garantează că va fi disponibilă fără întreruperi, în special în ce privește afișarea reclamelor, care depinde de Google.",
      },
      {
        id: "11",
        title: "11. Garanții și răspundere",
        content:
          "Aplicația este furnizată „ca atare”. Nimic din prezentele Condiții nu limitează drepturile pe care le ai prin lege în calitate de consumator, în special garanția legală de conformitate a conținutului și serviciilor digitale.\n\nÎn limitele permise de lege, editorul nu răspunde pentru:\n\n• pierderea progresului tău salvat pe dispozitiv (secțiunea 5);\n• prejudicii indirecte;\n• conținutul publicitar furnizat de terți;\n• indisponibilitatea cauzată de dispozitivul tău, sistemul de operare, conexiunea ta sau serviciile Apple și Google.\n\nAceste limitări nu se aplică în caz de culpă gravă sau intenție, vătămări corporale ori atunci când legea le interzice.",
      },
      {
        id: "12",
        title: "12. Încetarea utilizării",
        content:
          "Poți înceta oricând să folosești Aplicația dezinstalând-o. Editorul îți poate retrage licența dacă nu respecți prezentele Condiții. Secțiunile 9, 11 și 14 continuă să se aplice după încetarea licenței.",
      },
      {
        id: "13",
        title: "13. Modificarea Condițiilor",
        content:
          "Editorul poate modifica prezentele Condiții, în special pentru a urma evoluția Aplicației sau a legii. Data ultimei actualizări este afișată în partea de sus a acestei pagini. În cazul unei modificări importante, vei fi informat în Aplicație înainte de intrarea ei în vigoare. Dacă nu accepți noile Condiții, poți înceta să folosești Aplicația.",
      },
      {
        id: "14",
        title: "14. Legea aplicabilă, mediere și litigii",
        content: `Prezentele Condiții sunt guvernate de legea franceză. Dacă ești consumator cu reședința în altă țară, păstrezi protecția normelor imperative ale legii țării tale.\n\nÎn caz de dificultate, scrie mai întâi la ${EMAIL}: vom căuta o soluție amiabilă.\n\nMedierea în domeniul consumului: dacă ești consumator și reclamația ta scrisă nu a fost soluționată, poți apela gratuit la următorul mediator pentru consumatori: ${MEDIATOR}.\n\nÎn lipsa unui acord, litigiul va fi supus instanțelor competente; dacă ești consumator, te poți adresa în special instanței de la locul tău de reședință.`,
      },
      { id: "15", title: "15. Contact", content: `Marc SAMSON EI — Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
};
