import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_SUPPORT, IDS, LICENSES, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "ro/";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI, întreprindere individuală franceză), sub denumirea comercială Primisia";

export const ro: Locale = {
  code: "ro",
  dir,
  name: "Română",
  updated: "21 noiembrie 2026",
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
    privacyDesc: "Confidențialitate Match the Digits: progres local, clasament, securitate, reclame, Premium și ștergerea contului.",
    termsDesc: "Condițiile de utilizare ale jocului Match the Digits: licență, publicitate, achiziția unică Elimină reclamele, răspundere și legea aplicabilă.",
    supportDesc: "Asistență, contact și întrebări frecvente pentru jocul de logică Match the Digits.",
    supportIntro: "Ai nevoie de ajutor? Scrie-ne și, dacă poți, precizează modelul dispozitivului tău.",
    emailSupport: "Asistență prin e-mail",
    faqTitle: "Întrebări frecvente",
    language: "Limbă",
    translationNote: "Această traducere este oferită doar cu titlu informativ. În caz de neconcordanță, prevalează versiunea în limba franceză.",
  },
  faq: [
    ["Am nevoie de cont?", "Nu sunt necesare e-mail sau parolă pentru joc. Clasamentul creează identitate anonimă cu pseudonim atribuit."],
    ["Câte indicii și adăugări?", "Cel mult 4 indicii și 5 adăugări per tablă. Primele 2 adăugări sunt gratuite; fără Premium, celelalte 3 și indiciile propun reclame recompensate."],
    ["Dacă reclama nu funcționează?", "Dacă e indisponibilă după cerere, acțiunea poate fi acordată fără videoclip în limita rămasă. Refuzul sau închiderea voluntară înaintea recompensei nu o acordă."],
    ["Premium este abonament?", "Nu, este achiziție unică fără reclame, inclusiv pentru indicii și adăugări. Limitele rămân aceleași."],
    ["Cum restaurez Premium?", "Din Setări, Restaurează achizițiile cu magazinul și contul originale. Nu există transfer automat între Apple și Google."],
    ["Cum șterg contul de clasament?", "Solicită și urmărește ștergerea în secțiunea contului din Setări. Fără acces la aplicație, scrie asistenței cu Match the Digits și pseudonim/identificator, niciodată token sau parolă. Poate fi necesară verificarea."],
    ["Pot reveni după ștergere?", "După finalizare poți cere identitate și pseudonim noi, sub rezerva restricțiilor antiabuz. Progresul păstrat poate permite republicarea recordului. Premium rămâne conform magazinului."],
    ["Ce face Șterge și progresul meu?", "Resetează partida, recordul și rezultatele locale vizate, nu Premium sau preferințele. Fără opțiune progresul rămâne."],
    ["Dezinstalarea șterge tot?", "Poate pierde progresul local, dar nu solicită ștergerea contului serverului. Clasamentul nu este backup complet."],
    ["Unde gestionez consimțământul publicitar?","În Setări, deschideți Confidențialitatea reclamelor când este disponibilă pentru a revizui sau modifica alegerile, inclusiv opozițiile aplicabile în SUA. Disponibilitatea depinde de versiune și de Google UMP. Pe iOS, gestionați și urmărirea din setările telefonului. Versiunile vechi pot necesita actualizare; asistența rămâne disponibilă."],
    ["De ce nu apare mementoul?", "Verifică mementourile aplicației și permisiunea pentru notificări a telefonului."],
    ["Cum cer rambursare?", "Contactează Apple sau Google conform magazinului. Procedurile sunt legate în condiții; poți contacta și asistența."]
  ],
  privacy: {
    sections: [
      { id: "0", title: "Pe scurt", content: "Actualizare: 21 noiembrie 2026.\n\nPoți juca fără nume, e-mail sau parolă. Clasamentul folosește un cont anonim; un identificator tehnic nu anonimizează datele asociate. Partida și setările rămân pe dispozitiv; pseudonimul și recordul din clasament sunt stocate pe serverul nostru și vizibile în clasament. Terții furnizează securitate, reclame și achiziții. Poți șterge contul de clasament cu sau fără ștergerea progresului local." },
      {
        id: "1",
        title: "1. Operatorul de date",
        content: `Aplicația este publicată de:\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nContact pentru orice întrebare privind datele tale: ${EMAIL}\n\nPentru datele publicitare prelucrate de Google, Google acționează ca operator independent, conform propriilor reguli (secțiunea 5).`,
      },
      { id: "2", title: "2. Progres și preferințe locale", content: "Dispozitivul păstrează partida, recordul local, rezultatele provocărilor zilnice, statisticile trofeelor, preferințele și datele solicitărilor de evaluare. Recordul destinat clasamentului este transmis separat.\n\nNu oferim o copie pe server care să restaureze întregul progres pe alt dispozitiv. Ștergerea datelor sau dezinstalarea poate duce la pierderea lui. Copiile sistemului depind de setările dispozitivului." },
      { id: "2a", title: "2a. Cont și clasament", content: "La primul acces la clasament se creează un cont tehnic anonim. Serviciul nostru Supabase găzduit pe serverul propriu păstrează identitatea de autentificare, sesiunile, pseudonimul atribuit, recordul publicat, datele și starea contului. Datele de acces ale sesiunii sunt păstrate și pe dispozitiv.\n\nPseudonimul, scorul și poziția sunt vizibile; datele de acces și dovezile ștergerii nu sunt publice. Recordul eligibil al unei partide terminate sau abandonate poate fi trimis ori retrimis după o eroare de rețea. Clasamentul nu este o copie de siguranță a partidei." },
      { id: "2b", title: "2b. Securitate și prevenirea abuzurilor", content: "Prelucrăm informații tehnice ale cererilor, inclusiv IP la intrarea în serviciu, amprente ale instalării/rețelei, date și contoare, pentru a proteja clasamentul, limita înregistrările repetate și gestiona ștergeri și restricții. Amprentele rămân date pseudonime.\n\nFirebase App Check și atestarea Apple/Google verifică cererile prin date tehnice și tokenuri de atestare. Firebase nu mai furnizează autentificarea sau stocarea clasamentului. Informații: https://firebase.google.com/support/privacy" },
      {
        id: "3",
        title: "3. Mementouri (notificări)",
        content:
          "Dacă activezi mementourile în setări, Aplicația îți cere permisiunea de a afișa notificări. Mementourile sunt programate local pe dispozitivul tău: niciun token de notificare nu este creat sau trimis către un server. Le poți dezactiva oricând din setările Aplicației sau ale dispozitivului. Mementourile nu conțin publicitate.",
      },
      { id: "4", title: "4. Asistență", content: `Când scrii la ${EMAIL}, primim adresa, mesajul și anexele alese. Mesajul pregătit poate include versiunile aplicației și sistemului; le poți elimina.\n\nDatele servesc răspunsului, verificării cererilor privind contul și rezolvării problemelor. Sunt păstrate pe durata soluționării, apoi doar dacă sunt necesare urmăririi, apărării unui drept sau unei obligații legale. Nu trimite parole, tokenuri de acces sau date bancare.` },
      { id: "5", title: "5. Reclame și opțiuni de confidențialitate", content: `Google AdMob furnizează un banner și videoclipuri opționale cu recompensă. În funcție de sistem și permisiuni, SDK-ul prelucrează IP, identificatori publicitari sau ai aplicației, interacțiuni și diagnostic pentru reclame, măsurare și prevenirea fraudei. Premium elimină inclusiv videoclipurile cu recompensă.\n\nAcceptarea vizionării unui videoclip este distinctă de consimțământul pentru prelucrarea datelor publicitare. Versiunile cu Google UMP afișează un formular când serviciul îl solicită, înainte de solicitarea reclamelor; formularul este configurat pentru afișare la nivel mondial. Puteți accepta, refuza sau gestiona opțiunile oferite. În Setări, Confidențialitatea reclamelor redeschide opțiunile disponibile, inclusiv opozițiile aplicabile în SUA privind vânzarea/partajarea ori publicitatea direcționată. Refuzul urmăririi nu împiedică jocul. Google alege limba după setările telefonului și traducerile disponibile; engleza poate fi folosită ca alternativă. Versiunile vechi pot să nu ofere această opțiune: actualizați aplicația sau contactați asistența pentru exercitarea drepturilor. Asistența nu înlocuiește consimțământul necesar înainte de prelucrare.\n\nAndroid permite resetarea sau ștergerea identificatorului publicitar. Pe iOS, accesul la IDFA și urmărirea supusă ATT necesită autorizarea Apple. Aceste setări nu șterg singure datele deja deținute de furnizori. Rămân valabile drepturile locale, inclusiv opoziția față de anumite reclame țintite.\n\nGoogle: ${GOOGLE_PRIVACY}\nServicii partenere: ${GOOGLE_PARTNERS}` },
      { id: "6", title: "6. Premium și restaurarea achiziției", content: "Apple sau Google procesează plata și păstrează datele de facturare conform regulilor proprii. Nu primim numărul cardului.\n\nRevenueCat verifică și restaurează achiziția unică fără reclame. Prelucrează un identificator pseudonim, tranzacția/chitanța, produsul, magazinul și dreptul Premium. Aplicația păstrează și starea necesară accesului. Ștergerea clasamentului nu șterge achiziția; datele necesare restaurării și obligațiilor aplicabile sunt distincte.\n\nInformații: https://www.revenuecat.com/privacy" },
      {
        id: "7",
        title: "7. Evaluări și recenzii",
        content:
          "Când Aplicația te invită să o evaluezi, folosește fereastra oficială Apple sau Google. Nota și recenzia ta sunt prelucrate de magazinul respectiv, conform propriilor reguli; Aplicația nu are acces la ele.",
      },
      { id: "8", title: "8. Scopuri și temeiuri legale", content: "Jocul, contul de clasament solicitat și gestionarea/restaurarea Premium se bazează pe serviciu sau contract. Securitatea, limitele antiabuz și asistența se bazează pe interesul nostru legitim de a proteja serviciul și utilizatorii, cu respectarea drepturilor tale. Mementourile sunt opționale și cer permisiunea dispozitivului.\n\nReclamele și accesul la identificatori se bazează pe consimțământ când este necesar. Unele păstrări sunt impuse legal sau necesare constatării, exercitării ori apărării unor drepturi. Aceste temeiuri nu permit reutilizare nelimitată." },
      { id: "9", title: "9. Furnizori și transferuri", content: `Destinatari necesari:\n• Contabo, serverul Supabase și clasament;\n• Cloudflare, rutarea și protejarea cererilor;\n• Backblaze, copii și jurnal de decizii criptate;\n• Google/Firebase și Apple, atestare și servicii de sistem;\n• Google AdMob, reclame;\n• RevenueCat și Apple/Google, achiziții;\n• GitHub Pages, aceste documente publice; autorități când legea o cere.\n\nSupabase este găzduit pe serverul propriu, nu implică Supabase Cloud. Furnizorii internaționali pot prelucra date în afara SEE, inclusiv SUA. Garanțiile depind de serviciu și contract; cere detalii la ${EMAIL}. Nu garantăm prelucrare exclusiv europeană. Nu vindem datele clasamentului.\n\nInformări: https://contabo.com/en/legal/privacy/ ; https://www.cloudflare.com/privacypolicy/ ; https://www.backblaze.com/company/privacy ; https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement` },
      {
        id: "10",
        title: "10. Copii",
        content: `Aplicația este destinată persoanelor de cel puțin 16 ani. Nu se adresează copiilor și nu colectăm în mod intenționat date despre aceștia.\n\nÎn Franța, un minor sub 15 ani nu își poate da singur consimțământul pentru prelucrarea datelor sale bazată pe consimțământ: este necesar și acordul unui titular al autorității părintești (articolul 45 din legea franceză privind protecția datelor, Loi Informatique et Libertés). Dacă ești părinte și crezi că copilul tău și-a dat consimțământul, scrie-ne la ${EMAIL}: îți vom spune cum îl poți retrage.`,
      },
      { id: "11", title: "11. Ștergerea contului și drepturi", content: `Secțiunea contului de clasament din Setări permite solicitarea și urmărirea ștergerii. După acceptarea serverului, profilul dispare din clasament, apoi identitatea și datele active asociate sunt șterse. O cerere offline trebuie întâi transmisă; dezinstalarea nu șterge contul serverului.\n\n„Șterge și progresul meu” resetează partida, recordul și rezultatele locale vizate. Fără opțiune rămân pe dispozitiv. Premium și preferințele se păstrează. După finalizare, revenirea voluntară creează identitate și pseudonim noi, sub rezerva restricțiilor antiabuz. Recordul local păstrat poate fi republicat; vechiul cont nu este restaurat, iar pseudonimul poate fi reatribuit.\n\nFără acces la aplicație, scrie la ${EMAIL}, indicând Match the Digits și pseudonimul/identificatorul de clasament disponibil, niciodată token sau parolă. Poate fi necesară o verificare proporțională pentru protejarea conturilor altora.\n\nDupă caz, ai drepturi de acces, rectificare, ștergere, restricționare, opoziție, portabilitate și retragere a consimțământului. Răspundem în principiu într-o lună, cu prelungire legală posibilă. Poți sesiza CNIL, ${CNIL_URL}, sau autoritatea competentă din țara ta.` },
      { id: "12", title: "12. Securitate", content: "Comunicațiile sunt criptate în tranzit. Accesul administrativ este restrâns, iar copiile și jurnalul sunt criptate. Măsurile reduc riscurile fără a garanta securitate absolută. Clasamentul public rămâne vizibil; nu trimite secrete prin asistență." },
      { id: "12a", title: "12a. Păstrare și copii de siguranță", content: `Datele locale rămân până la ștergere sau înlocuire. Contul și recordul rămân până la ștergerea contului. Contoarele temporare și restricțiile au expirări proprii; anumite urme sunt necesare contra abuzurilor și pentru contestații.\n\nRotația păstrează 7 puncte zilnice, 4 săptămânale și 2 lunare. Nu garantează ștergerea tuturor copiilor la o dată exactă. Jurnalul împiedică reintroducerea conturilor șterse după restaurare.\n\nDovezile ștergerii și jurnalul sunt păstrate în prezent fără eliminare automată. Pot conține identificatori tehnici, amprente, date și stări. Poți cere examinarea păstrării ori ștergerii la ${EMAIL}. Datele de achiziție urmează separat nevoile de restaurare și obligațiile aplicabile.` },
      { id: "13", title: "13. Modificări", content: "Politica este în Setări și pe site. Data identifică versiunea textului. Actualizările reflectă serviciul; obligațiile de informare și de obținere a unui nou consimțământ, când este necesar, rămân valabile." },
      { id: "14", title: "14. Contact", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Editor",
        content: `Aplicația mobilă Match the Digits („Aplicația”) este publicată de:\n\n${PUBLISHER}\n• Adresă: ${ADDRESS}\n• Telefon: ${PHONE}\n• E-mail: ${EMAIL}\n• ${IDS}, ${REG}\n• Cod de TVA intracomunitar: ${VAT}, TVA neaplicabil, articolul 293 B din Codul general fiscal francez\n• Director de publicație: Marc SAMSON\n• Găzduirea paginilor politicii de confidențialitate și ale prezentelor Condiții: ${HOST}, ${HOST_SUPPORT}`,
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
      { id: "5", title: "5. Joc, progres și clasament", content: "Nu ai nevoie de cont cu e-mail/parolă pentru a juca. Clasamentul folosește identitate tehnică anonimă și pseudonim atribuit. Profilurile virtuale marcate nu sunt jucători reali. Nu există premii în bani.\n\nPartidele, provocările, trofeele și setările sunt în principal locale. Serverul păstrează recordul publicat, nu o copie completă a progresului. Terminarea sau abandonarea unei partide pentru una nouă poate transmite recordul eligibil, cu reîncercări după erori de rețea.\n\nPer tablă: maximum cinci adăugări, primele două gratuite, și patru indicii. Fără Premium, celelalte trei adăugări și indiciile propun reclame recompensate. Limitele Premium sunt identice.\n\nTrișarea, scorurile false sau înregistrările repetate abuzive pot duce la restricții ori excludere. Le poți contesta la asistență." },
      { id: "6", title: "6. Reclame și recompense", content: "Poate apărea un banner în joc. Înaintea unui indiciu sau unei reîncărcări vizate se propune, cu acordul tău, un videoclip recompensat. După confirmarea recompensei, acțiunea se acordă în limita disponibilă.\n\nDacă reclama este tehnic indisponibilă după cerere, aplicația poate acorda acțiunea fără videoclip, cu un mesaj discret. Refuzul sau închiderea înaintea recompensei nu acordă acțiunea. Premium nu adaugă reîncărcări peste limita epuizată.\n\nReclamele și destinațiile aparțin terților. Politica explică prelucrările; acceptarea videoclipului nu este consimțământ de confidențialitate." },
      { id: "7", title: "7. Achiziția „Elimină reclamele”", subsections: [{ subtitle: "Ce primești", content: "Premium este o achiziție unică fără reînnoire automată. Elimină bannerul și reclamele recompensate: indiciile și adăugările sunt directe, cu aceleași limite de patru indicii și cinci adăugări per tablă. Grila poate folosi spațiul eliberat." },
{ subtitle: "Preț și plată", content: "Când este disponibilă, oferta afișează prețul localizat al magazinului. Verifică prețul și condițiile în confirmarea Apple sau Google. Achizițiile anulate, în așteptare ori eșuate nu sunt considerate finalizate. RevenueCat verifică Premium; nu primim datele cardului." },
{ subtitle: "Restaurare", content: "Folosește Restaurează achizițiile din Setări cu contul și magazinul originale. Poate fi necesară conexiunea. Achizițiile Apple nu se transferă automat în Google Play sau invers. Ștergerea clasamentului ori progresului nu anulează achiziția." },
{
            subtitle: "Retragere și rambursare",
            content: `Achiziția privește conținut digital furnizat imediat după plată. Dreptul de retragere și cererile de rambursare se exercită în condițiile prevăzute de legea aplicabilă și de regulile magazinului respectiv:\n\n• App Store: cerere către Apple, la ${APPLE_REFUND}\n• Google Play: cerere către Google, urmând procedura de la ${GOOGLE_REFUND}\n\nNe poți scrie și la ${EMAIL}.`,
          }] },
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
      { id: "10", title: "10. Disponibilitate și actualizări", content: "Clasamentul, achizițiile și unele verificări necesită conexiune și furnizori. Defecțiuni, mentenanță, restricții de securitate ori reclame indisponibile pot afecta serviciile. Jocul local poate rămâne disponibil în funcție de partidă.\n\nPutem corecta sau dezvolta aplicația. Drepturile imperative ale consumatorilor și obligațiile serviciilor digitale rămân aplicabile. Achiziția fără reclame nu garantează disponibilitate perpetuă online." },
      {
        id: "11",
        title: "11. Garanții și răspundere",
        content:
          "Aplicația este furnizată „ca atare”. Nimic din prezentele Condiții nu limitează drepturile pe care le ai prin lege în calitate de consumator, în special garanția legală de conformitate a conținutului și serviciilor digitale.\n\nÎn limitele permise de lege, editorul nu răspunde pentru:\n\n• pierderea progresului tău salvat pe dispozitiv (secțiunea 5);\n• prejudicii indirecte;\n• conținutul publicitar furnizat de terți;\n• indisponibilitatea cauzată de dispozitivul tău, sistemul de operare, conexiunea ta sau serviciile Apple și Google.\n\nAceste limitări nu se aplică în caz de culpă gravă sau intenție, vătămări corporale ori atunci când legea le interzice.",
      },
      { id: "12", title: "12. Ștergere și încetarea utilizării", content: `Poți opri jocul oricând. Pentru contul serverului folosește secțiunea de clasament din Setări sau ${EMAIL}; dezinstalarea nu ajunge. Politica descrie prelucrarea și copiile.\n\nȘtergerea progresului local este opțională. Contul șters nu se recuperează; revenirea permisă creează identitate și pseudonim noi. Recordul local păstrat poate fi reutilizat. Premium rămâne legat de achiziție, independent de clasament.\n\nAbuzurile pot restricționa clasamentul fără a anula drepturi legale. Proprietatea intelectuală, răspunderea și soluționarea litigiilor rămân aplicabile.` },
      { id: "13", title: "13. Modificarea condițiilor", content: "Versiunea actuală, datată, este în aplicație și pe site. Evoluțiile serviciului ori legii pot cere revizuiri. Rămân obligațiile de informare și drepturile dobândite ale consumatorilor." },
      { id: "14", title: "14. Lege, mediere și litigii", content: `Se aplică legea franceză fără a lipsi consumatorul de protecțiile imperative ale țării de reședință.\n\nTrimite reclamații la ${EMAIL}. După o reclamație scrisă prealabilă, păstrezi dreptul la mediere gratuită pentru consumatori în condițiile legii. Aderarea editorului la un sistem de mediere rămâne de finalizat; datele mediatorului vor fi publicate după aderare. Aceste condiții nu desemnează un mediator.\n\nFără acord se pot sesiza instanțele competente; consumatorul păstrează căile de atac legate de reședința sa.` },
      { id: "15", title: "15. Contact", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
};
