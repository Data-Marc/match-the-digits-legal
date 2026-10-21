import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_PHONE, IDS, LICENSES, MEDIATOR, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "it/";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI — impresa individuale francese), con l'insegna Primisia";

export const it: Locale = {
  code: "it",
  dir,
  name: "Italiano",
  updated: "21 ottobre 2026",
  ui: {
    legalDocuments: "Documenti legali",
    privacyPolicy: "Informativa sulla privacy",
    termsOfUse: "Condizioni d'uso",
    support: "Assistenza",
    privacySub: "Dati, pubblicità, consenso e i tuoi diritti",
    termsSub: "Licenza, pubblicità, acquisto Rimuovi pubblicità e responsabilità",
    supportSub: "Contatti, FAQ e aiuto sugli acquisti",
    lastUpdated: "Ultimo aggiornamento",
    footer: "Pubblicato da Marc SAMSON EI, con l'insegna Primisia",
    indexDesc: "Informativa sulla privacy, condizioni d'uso e assistenza del gioco di logica Match the Digits.",
    privacyDesc: "Informativa sulla privacy del gioco Match the Digits: nessun account, dati di gioco sul tuo dispositivo, pubblicità Google AdMob con consenso.",
    termsDesc: "Condizioni d'uso del gioco Match the Digits: licenza, pubblicità, acquisto unico Rimuovi pubblicità, responsabilità e legge applicabile.",
    supportDesc: "Assistenza, contatti e domande frequenti del gioco di logica Match the Digits.",
    supportIntro: "Hai bisogno di aiuto? Scrivici indicando, se possibile, il modello del tuo dispositivo.",
    emailSupport: "Assistenza via e-mail",
    faqTitle: "Domande frequenti",
    language: "Lingua",
    translationNote: "Questa traduzione è fornita solo a titolo informativo. In caso di discordanza, prevale la versione francese.",
  },
  faq: [
    ["Devo creare un account?", "No. Match the Digits non richiede account, registrazione né accesso. Puoi giocare subito dopo l'installazione."],
    ["Ho acquistato «Rimuovi pubblicità» ma vedo ancora annunci", "Apri le impostazioni dell'app e tocca <strong>Ripristina acquisti</strong>. Verifica di aver effettuato l'accesso con lo stesso account App Store o Google Play usato per l'acquisto."],
    ["«Rimuovi pubblicità» è un abbonamento?", "No. È un acquisto unico: viene addebitato una sola volta e non si rinnova mai. Rimuove tutti gli annunci, compreso l'annuncio con premio facoltativo per gli indizi. Non dà alcun vantaggio di gioco: ogni giocatore ha 4 indizi per partita."],
    ["Come funzionano gli indizi?", "Ogni partita ti dà 4 indizi. Senza l'acquisto «Rimuovi pubblicità», puoi scegliere di guardare un breve annuncio per scoprire un indizio. È facoltativo: puoi sempre continuare a giocare senza."],
    ["Come modifico le mie scelte pubblicitarie?", "Apri le impostazioni dell'app per consultare o modificare il consenso dato per la pubblicità. Su Android puoi anche reimpostare o eliminare il tuo ID pubblicità nelle impostazioni del dispositivo."],
    ["Il mio promemoria non compare", "Verifica che le notifiche di Match the Digits siano consentite nelle impostazioni del dispositivo e che i promemoria siano attivati nelle impostazioni dell'app."],
    ["Perderò i miei progressi?", "La tua partita, i punteggi, i risultati giornalieri e le impostazioni sono salvati solo sul tuo dispositivo. Disinstallare l'app, cancellarne i dati o cambiare dispositivo li elimina definitivamente: non ne conserviamo copia e non possiamo ripristinarli."],
    ["Come ottengo un rimborso?", `Gli acquisti sono gestiti da Apple o Google. Chiedi un rimborso ad Apple su <a href="${APPLE_REFUND}">reportaproblem.apple.com</a>, o a Google seguendo <a href="${GOOGLE_REFUND}">questa procedura</a>. Puoi anche scriverci.`],
  ],
  privacy: {
    sections: [
      {
        id: "0",
        title: "In sintesi",
        content:
          "Data di entrata in vigore: 21 ottobre 2026.\n\nLa presente informativa spiega quali dati vengono trattati quando usi l'applicazione mobile Match the Digits (l'«App») su iOS e Android, perché, da chi, per quanto tempo e come esercitare i tuoi diritti.\n\n• L'App non ti chiede di creare un account e non ti chiede nome, indirizzo e-mail o data di nascita per giocare.\n• I tuoi progressi e le tue impostazioni sono salvati solo sul tuo dispositivo. Noi non li riceviamo.\n• L'App mostra pubblicità fornita da Google (AdMob). A tal fine, Google tratta alcuni dati del tuo dispositivo, descritti nella sezione 5. Nello Spazio economico europeo, nel Regno Unito e in Svizzera, il tuo consenso viene richiesto prima di qualsiasi pubblicità personalizzata.\n• Riceviamo dati che ti riguardano solo se ci scrivi (assistenza).",
      },
      {
        id: "1",
        title: "1. Titolare del trattamento",
        content: `L'App è pubblicata da:\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nContatto per qualsiasi domanda sui tuoi dati: ${EMAIL}\n\nPer i dati pubblicitari trattati da Google, Google agisce come titolare autonomo del trattamento, secondo le proprie regole (sezione 5).`,
      },
      {
        id: "2",
        title: "2. Dati salvati solo sul tuo dispositivo",
        content:
          "I seguenti dati sono salvati nella memoria locale dell'App, sul tuo dispositivo. Non ci vengono trasmessi e non vengono inviati ad alcun server dell'editore:\n\n• Partita in corso (tabellone, punteggio, indizi e aggiunte rimanenti) — per riprendere la partita\n• Punteggio migliore — per mostrarlo nella schermata iniziale e nei trofei\n• Risultati giornalieri (tabelloni completati, punti, coppie, sfide giornaliere) — calendario, statistiche, trofei\n• Preferenze: lingua, feedback aptico, effetti sonori, promemoria — per rispettare le tue impostazioni\n• Date delle richieste di valutazione già mostrate — per non chiederti troppo spesso di valutare l'App\n\nQuesti dati sono conservati finché l'App è installata. Puoi eliminarli in qualsiasi momento cancellando i dati dell'App (Android) o disinstallandola (iOS e Android). Successivamente non possono essere recuperati: l'editore non effettua alcun backup.",
      },
      {
        id: "3",
        title: "3. Promemoria (notifiche)",
        content:
          "Se attivi i promemoria nelle impostazioni, l'App ti chiede l'autorizzazione a mostrare notifiche. I promemoria sono programmati localmente sul tuo dispositivo: nessun identificativo di notifica viene creato o inviato a un server. Puoi disattivarli in qualsiasi momento nelle impostazioni dell'App o del dispositivo. I promemoria non contengono pubblicità.",
      },
      {
        id: "4",
        title: "4. Assistenza (quando ci scrivi)",
        content: `Il pulsante «Contatta l'assistenza» apre la tua app di posta con un'e-mail precompilata indirizzata a ${EMAIL}. Se la invii, riceviamo:\n\n• il tuo indirizzo e-mail e il contenuto del messaggio;\n• la versione dell'App, il sistema operativo (iOS o Android) e la sua versione, aggiunti automaticamente in fondo al messaggio per aiutarci a risolvere il problema. Puoi eliminarli prima dell'invio.\n\nQuesti dati servono solo a risponderti. Vengono eliminati non appena la tua richiesta è stata gestita.`,
      },
      {
        id: "5",
        title: "5. Pubblicità (Google AdMob)",
        subsections: [
          {
            subtitle: "Dati trattati da Google",
            content:
              "L'App mostra pubblicità fornita da Google AdMob, tramite l'SDK Google Mobile Ads integrato nell'App. Secondo la documentazione che Google pubblica per gli sviluppatori, Google tratta:\n\n• Indirizzo IP, che può servire a stimare la posizione approssimativa del dispositivo — pubblicità, misurazione, prevenzione delle frodi\n• Interazioni con l'App (avvii, tocchi, video visti) — pubblicità, misurazione, prevenzione delle frodi\n• Dati diagnostici e di prestazione (tempo di avvio, blocchi, consumo energetico); su iOS, log degli arresti anomali non collegati all'utente — diagnostica, miglioramento, pubblicità, misurazione\n• Identificativi del dispositivo: ID pubblicità (Android), App Set ID, altri identificativi propri dell'app o dello sviluppatore — pubblicità e misurazione\n• Dati pubblicitari (annunci visti) — pubblicità e misurazione\n\nGoogle indica che questi dati sono crittografati durante il trasferimento (TLS). L'editore non ha accesso a questi dati individuali: riceve solo statistiche aggregate (numero di impressioni, ricavi).",
          },
          {
            subtitle: "Annunci mostrati nell'App",
            content:
              "• un banner nella schermata di gioco;\n• un annuncio con premio facoltativo: puoi scegliere di guardare un video per ottenere un indizio. Rifiutare non ti impedisce di giocare.\n\nSe hai acquistato «Rimuovi pubblicità» (sezione 6), non viene mostrato alcun annuncio.",
          },
          {
            subtitle: "Il tuo consenso (SEE, Regno Unito, Svizzera)",
            content:
              "Al primo avvio, una finestra di consenso gestita dallo strumento di consenso di Google ti permette di accettare o rifiutare l'uso dei tuoi dati a fini pubblicitari, finalità per finalità. Se rifiuti, l'App resta pienamente giocabile; possono allora essere mostrati annunci non personalizzati o limitati. Puoi modificare la tua scelta in qualsiasi momento nelle impostazioni dell'App.",
          },
          {
            subtitle: "iOS — tracciamento",
            content:
              "L'App non ti chiede l'autorizzazione a tracciare la tua attività (App Tracking Transparency): l'identificativo pubblicitario del tuo dispositivo (IDFA) non viene utilizzato. L'App non ti obbliga mai ad accettare il tracciamento per giocare.",
          },
          {
            subtitle: "Android — ID pubblicità",
            content: "Puoi reimpostare o eliminare il tuo ID pubblicità nelle impostazioni del dispositivo.",
          },
          {
            subtitle: "Stati Uniti",
            content:
              "A seconda dello Stato in cui vivi, la legge può darti il diritto di opporti alla «vendita» o alla «condivisione» dei tuoi dati per la pubblicità mirata. Puoi esercitare questa scelta dalle impostazioni sulla privacy dell'App o scrivendoci.",
          },
          {
            subtitle: "Per saperne di più",
            content: `Norme sulla privacy di Google: ${GOOGLE_PRIVACY}\nCome Google utilizza le informazioni di siti o app che utilizzano i suoi servizi: ${GOOGLE_PARTNERS}`,
          },
        ],
      },
      {
        id: "6",
        title: "6. Acquisto «Rimuovi pubblicità»",
        content:
          "L'acquisto unico che rimuove la pubblicità è gestito esclusivamente dall'App Store (Apple) o da Google Play (Google). Non riceviamo mai i tuoi dati di pagamento (carta di pagamento, nome, indirizzo di fatturazione). L'App riceve dallo store solo la conferma che l'acquisto è stato effettuato, per rimuovere gli annunci e consentirne il ripristino. Il trattamento del pagamento è disciplinato dalle informative sulla privacy di Apple o di Google.",
      },
      {
        id: "7",
        title: "7. Valutazioni e recensioni",
        content:
          "Quando l'App ti invita a valutarla, usa la finestra ufficiale di Apple o di Google. La tua valutazione e la tua recensione sono trattate dallo store interessato, secondo le sue regole; l'App non vi ha accesso.",
      },
      {
        id: "8",
        title: "8. Basi giuridiche (GDPR)",
        content:
          "• Funzionamento del gioco e salvataggio locale dei tuoi progressi e delle tue impostazioni — esecuzione del servizio che richiedi (contratto)\n• Accesso agli identificativi del dispositivo e pubblicità, personalizzata o meno, quando la legge richiede il consenso — consenso, revocabile in qualsiasi momento (sezione 5)\n• Visualizzazione dei promemoria — consenso (autorizzazione alle notifiche), revocabile in qualsiasi momento\n• Risposta alle tue richieste di assistenza — legittimo interesse a risponderti; oppure misure precontrattuali / contratto se la richiesta riguarda un acquisto\n• Adempimento di obblighi di legge (ad esempio contabili per gli acquisti) — obbligo legale",
      },
      {
        id: "9",
        title: "9. Destinatari e trasferimenti al di fuori dell'Unione europea",
        content:
          "I dati trattati dall'App non sono né venduti né noleggiati dall'editore. Gli unici destinatari sono:\n\n• Google, per la pubblicità (sezione 5);\n• Apple o Google, per acquisti, valutazioni e notifiche di sistema, a seconda del dispositivo;\n• le autorità, solo se richiesto dalla legge.\n\nGoogle può trattare dati al di fuori dell'Unione europea, in particolare negli Stati Uniti, con le garanzie descritte nelle sue norme sulla privacy.",
      },
      {
        id: "10",
        title: "10. Minori",
        content: `L'App è destinata a persone di almeno 16 anni. Non è rivolta ai minori e non raccogliamo consapevolmente dati che li riguardano.\n\nIn Francia, un minore di 15 anni non può acconsentire da solo al trattamento dei propri dati basato sul consenso: è necessario anche il consenso di un titolare della responsabilità genitoriale (articolo 45 della legge francese sulla protezione dei dati — Loi Informatique et Libertés). Se sei un genitore e ritieni che tuo figlio abbia dato il consenso, scrivici a ${EMAIL}: ti indicheremo come revocarlo.`,
      },
      {
        id: "11",
        title: "11. I tuoi diritti",
        content: `In base alla legge applicabile (in particolare il GDPR), hai diritto di accesso, rettifica, cancellazione, limitazione, opposizione e portabilità, nonché il diritto di revocare il consenso in qualsiasi momento, senza pregiudicare i trattamenti già effettuati.\n\n• Dati sul tuo dispositivo: li controlli direttamente (sezione 2).\n• Consenso pubblicitario: modificabile in qualsiasi momento dalle impostazioni dell'App (sezione 5).\n• Dati pubblicitari detenuti da Google: strumenti e contatti descritti nelle norme sulla privacy di Google.\n• Dati di assistenza: scrivi a ${EMAIL}. Rispondiamo entro un mese, termine prorogabile alle condizioni previste dal GDPR.\n\nSe ritieni che i tuoi diritti non siano stati rispettati, puoi presentare reclamo alla ${CNIL}, o online su ${CNIL_URL}, oppure all'autorità di protezione dei dati del tuo paese di residenza.`,
      },
      {
        id: "12",
        title: "12. Sicurezza",
        content:
          "I dati di gioco restano sul tuo dispositivo e beneficiano delle sue protezioni. Gli scambi con Google sono crittografati (TLS). Nessun dato di gioco è memorizzato su un server dell'editore.",
      },
      {
        id: "13",
        title: "13. Modifiche",
        content:
          "Possiamo modificare la presente informativa, in particolare se l'App evolve. La data dell'ultimo aggiornamento è indicata in cima a questa pagina. In caso di modifica importante, ne sarai informato nell'App prima che si applichi.",
      },
      { id: "14", title: "14. Contatti", content: `Marc SAMSON EI — Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Editore",
        content: `L'applicazione mobile Match the Digits (l'«App») è pubblicata da:\n\n${PUBLISHER}\n• Indirizzo: ${ADDRESS}\n• Telefono: ${PHONE}\n• E-mail: ${EMAIL}\n• ${IDS} — ${REG}\n• Partita IVA intracomunitaria: ${VAT} — IVA non applicabile, articolo 293 B del Codice generale delle imposte francese\n• Direttore della pubblicazione: Marc SAMSON\n• Hosting delle pagine dell'informativa sulla privacy e delle presenti Condizioni: ${HOST} — ${HOST_PHONE}`,
      },
      {
        id: "2",
        title: "2. Oggetto e accettazione",
        content: `Le presenti condizioni (le «Condizioni») disciplinano l'uso dell'App. Scaricando o usando l'App, le accetti. Se non le accetti, non usare l'App.\n\nL'App è destinata a persone di almeno 16 anni.\n\nL'uso dei tuoi dati personali è descritto nell'Informativa sulla privacy, disponibile su ${privacyUrl(dir)} e dalle impostazioni dell'App.`,
      },
      {
        id: "3",
        title: "3. Licenza",
        content: `L'editore ti concede una licenza personale, non esclusiva, non trasferibile e revocabile per installare e usare l'App sui dispositivi che possiedi o controlli, per scopi privati e non commerciali.\n\n• Su iOS, l'App ti è concessa in licenza secondo il contratto di licenza per l'utente finale standard di Apple (Licensed Application End User License Agreement): ${APPLE_EULA}\nLe presenti Condizioni lo integrano; in caso di contrasto, prevale il contratto di Apple per l'uso dell'App su iOS.\n• Su Android, l'uso dell'App è inoltre soggetto ai Termini di servizio di Google Play.\n\nL'App è concessa in licenza, non venduta.`,
      },
      {
        id: "4",
        title: "4. Uso dell'App",
        content:
          "Ti impegni a non:\n\n• copiare, modificare, decompilare, disassemblare o tentare di estrarre il codice sorgente dell'App, salvo nei casi espressamente consentiti dalla legge;\n• aggirare o alterare i suoi meccanismi tecnici, inclusa la visualizzazione degli annunci e gli acquisti in-app;\n• generare artificialmente impressioni o clic sugli annunci;\n• usare l'App in modo illecito o lesivo dei diritti di terzi.",
      },
      {
        id: "5",
        title: "5. Il gioco e i tuoi progressi",
        content:
          "L'App non richiede un account. I tuoi progressi (partita in corso, punteggi, risultati giornalieri, trofei) e le tue impostazioni sono salvati solo sul tuo dispositivo.\n\nNon sono salvati dall'editore: vanno persi se disinstalli l'App, ne cancelli i dati o cambi dispositivo. L'editore non può ripristinarli.\n\nLe regole del gioco, il numero di indizi e aggiunte disponibili e i tabelloni proposti possono cambiare da una versione all'altra.",
      },
      {
        id: "6",
        title: "6. Pubblicità",
        content:
          "L'App è gratuita e finanziata dalla pubblicità fornita da Google AdMob:\n\n• un banner nella schermata di gioco;\n• un annuncio con premio facoltativo: puoi scegliere di guardare un video per ottenere un indizio. Il premio è indicato prima del video e concesso una volta guardato il video. Se rifiuti, o se nessun annuncio è disponibile, puoi continuare a giocare.\n\nGli annunci sono selezionati da Google. L'editore non ne controlla il contenuto e non è responsabile dei prodotti o servizi presentati. Le tue scelte sull'uso dei tuoi dati a fini pubblicitari sono descritte nell'Informativa sulla privacy.",
      },
      {
        id: "7",
        title: "7. Acquisto «Rimuovi pubblicità»",
        subsections: [
          {
            subtitle: "Cosa ottieni",
            content:
              "L'App offre un acquisto unico e permanente («Rimuovi pubblicità»):\n\n• rimuove tutti gli annunci dall'App, compreso l'annuncio con premio: l'indizio viene allora concesso direttamente;\n• non dà alcun vantaggio di gioco: ogni giocatore ha 4 indizi per partita, con o senza acquisto; il numero di aggiunte e le regole sono uguali per tutti;\n• non è un abbonamento: viene addebitato una sola volta e non si rinnova.",
          },
          {
            subtitle: "Prezzo e pagamento",
            content:
              "Il prezzo è indicato nell'App Store o su Google Play prima dell'acquisto, comprese le imposte applicabili nel tuo paese. Il pagamento è gestito esclusivamente da Apple o Google, secondo le loro condizioni. L'editore non riceve mai i tuoi dati di pagamento.",
          },
          {
            subtitle: "Ripristino dell'acquisto",
            content:
              "L'acquisto è collegato all'account Apple o Google con cui è stato effettuato. Puoi recuperarlo gratuitamente su un nuovo dispositivo o dopo una reinstallazione, con lo stesso account, tramite il pulsante «Ripristina acquisti» nelle impostazioni.",
          },
          {
            subtitle: "Recesso e rimborsi",
            content: `L'acquisto riguarda contenuti digitali forniti immediatamente dopo il pagamento. Il diritto di recesso e le richieste di rimborso si esercitano alle condizioni previste dalla legge applicabile e dalle regole dello store interessato:\n\n• App Store: richiesta ad Apple, su ${APPLE_REFUND}\n• Google Play: richiesta a Google, seguendo la procedura su ${GOOGLE_REFUND}\n\nPuoi anche scriverci a ${EMAIL}.`,
          },
        ],
      },
      {
        id: "8",
        title: "8. Promemoria",
        content:
          "Se li attivi, l'App può inviarti promemoria locali. Puoi disattivarli in qualsiasi momento nelle impostazioni dell'App o del dispositivo. Non contengono pubblicità.",
      },
      {
        id: "9",
        title: "9. Proprietà intellettuale",
        content: `L'App, il suo nome, la grafica, i testi, i suoni, il codice e la presentazione sono protetti dal diritto della proprietà intellettuale e appartengono all'editore o ai suoi licenzianti. Alcuni elementi di terzi sono usati secondo la propria licenza:\n\n${LICENSES}\n\nÈ vietata qualsiasi riproduzione o riutilizzo non autorizzato.`,
      },
      {
        id: "10",
        title: "10. Disponibilità e aggiornamenti",
        content:
          "L'editore può modificare l'App, correggerne gli errori, modificarne o rimuoverne funzionalità o interromperne la distribuzione. Alcuni aggiornamenti possono essere necessari per continuare a usare l'App. L'editore si impegna a garantirne il corretto funzionamento ma non garantisce che sarà disponibile senza interruzioni, in particolare per la visualizzazione degli annunci, che dipende da Google.",
      },
      {
        id: "11",
        title: "11. Garanzie e responsabilità",
        content:
          "L'App è fornita «così com'è». Nulla nelle presenti Condizioni limita i diritti che la legge ti riconosce in quanto consumatore, in particolare la garanzia legale di conformità dei contenuti e servizi digitali.\n\nNei limiti consentiti dalla legge, l'editore non è responsabile:\n\n• della perdita dei tuoi progressi salvati sul dispositivo (sezione 5);\n• dei danni indiretti;\n• dei contenuti pubblicitari forniti da terzi;\n• dell'indisponibilità causata dal tuo dispositivo, dal sistema operativo, dalla connessione o dai servizi di Apple e Google.\n\nQueste limitazioni non si applicano in caso di colpa grave o dolo, ai danni alla persona né nei casi in cui la legge le vieta.",
      },
      {
        id: "12",
        title: "12. Fine dell'uso",
        content:
          "Puoi smettere di usare l'App in qualsiasi momento disinstallandola. L'editore può revocare la tua licenza se non rispetti le presenti Condizioni. Le sezioni 9, 11 e 14 continuano ad applicarsi dopo la fine della licenza.",
      },
      {
        id: "13",
        title: "13. Modifiche alle Condizioni",
        content:
          "L'editore può modificare le presenti Condizioni, in particolare per seguire l'evoluzione dell'App o della legge. La data dell'ultimo aggiornamento è indicata in cima a questa pagina. In caso di modifica importante, ne sarai informato nell'App prima della sua entrata in vigore. Se non accetti le nuove Condizioni, puoi smettere di usare l'App.",
      },
      {
        id: "14",
        title: "14. Legge applicabile, mediazione e controversie",
        content: `Le presenti Condizioni sono regolate dalla legge francese. Se sei un consumatore residente in un altro paese, conservi la tutela delle norme imperative della legge del tuo paese.\n\nIn caso di difficoltà, scrivi prima a ${EMAIL}: cercheremo una soluzione amichevole.\n\nMediazione dei consumatori: se sei un consumatore e il tuo reclamo scritto non è stato risolto, puoi rivolgerti gratuitamente al seguente mediatore dei consumatori: ${MEDIATOR}.\n\nIn mancanza di accordo, la controversia sarà sottoposta ai tribunali competenti; se sei un consumatore, puoi rivolgerti in particolare al tribunale del tuo luogo di residenza.`,
      },
      { id: "15", title: "15. Contatti", content: `Marc SAMSON EI — Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
};
