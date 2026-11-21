import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_SUPPORT, IDS, LICENSES, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "it/";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI, impresa individuale francese), con l'insegna Primisia";

export const it: Locale = {
  code: "it",
  dir,
  name: "Italiano",
  updated: "21 novembre 2026",
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
    privacyDesc: "Privacy di Match the Digits: progressi locali, classifica, sicurezza, pubblicità, acquisti Premium ed eliminazione dell’account.",
    termsDesc: "Condizioni d'uso del gioco Match the Digits: licenza, pubblicità, acquisto unico Rimuovi pubblicità, responsabilità e legge applicabile.",
    supportDesc: "Assistenza, contatti e domande frequenti del gioco di logica Match the Digits.",
    supportIntro: "Hai bisogno di aiuto? Scrivici indicando, se possibile, il modello del tuo dispositivo.",
    emailSupport: "Assistenza via e-mail",
    faqTitle: "Domande frequenti",
    language: "Lingua",
    translationNote: "Questa traduzione è fornita solo a titolo informativo. In caso di discordanza, prevale la versione francese.",
  },
  faq: [
    ["Serve un account?", "Non servono e-mail o password per giocare. La classifica crea un’identità anonima con nickname assegnato."],
    ["Quanti suggerimenti e aggiunte?", "Massimo 4 suggerimenti e 5 aggiunte per tabellone. Le prime 2 aggiunte sono gratuite; senza Premium le altre 3 e i suggerimenti propongono annunci con ricompensa."],
    ["Se l’annuncio non funziona?", "Se indisponibile dopo la richiesta, l’azione può essere concessa senza video entro il saldo restante. Rifiutare o chiudere volontariamente prima della ricompensa non la concede."],
    ["Premium è un abbonamento?", "No: acquisto unico senza pubblicità, anche per suggerimenti e aggiunte. I limiti restano uguali."],
    ["Come ripristino Premium?", "Nelle Impostazioni, Ripristina acquisti con account e store originali. Nessun trasferimento automatico fra Apple e Google."],
    ["Come elimino l’account di classifica?", "Richiedilo e seguilo nella sezione account delle Impostazioni. Senza accesso all’app, scrivi al supporto con Match the Digits e nickname/identificativo di classifica, mai token o password. Può servire una verifica."],
    ["Posso tornare dopo l’eliminazione?", "Al termine puoi richiedere nuova identità e nickname, salvo restrizioni antiabuso. I progressi conservati possono consentire di ripubblicare il record. Premium resta secondo le regole dello store."],
    ["Cosa fa Cancella anche i miei progressi?", "Azzera partita, record e risultati locali interessati, non Premium o preferenze. Senza l’opzione i progressi locali rimangono."],
    ["Disinstallare cancella tutto?", "Può far perdere i progressi locali, ma non richiede l’eliminazione del server. La classifica non è un backup completo."],
    ["Dove gestisco il consenso pubblicitario?", "Questa versione non ha ancora un centro delle scelte pubblicitarie nelle Impostazioni. I controlli del telefono e il supporto non sostituiscono un modulo necessario prima del trattamento."],
    ["Perché il promemoria non appare?", "Controlla i promemoria nell’app e il permesso notifiche sul telefono."],
    ["Come chiedo un rimborso?", "Rivolgiti ad Apple o Google secondo lo store d’acquisto. Le procedure sono collegate nelle condizioni; puoi anche contattare l’assistenza."]
  ],
  privacy: {
    sections: [
      { id: "0", title: "In breve", content: "Aggiornamento: 21 novembre 2026.\n\nPuoi giocare senza fornire nome, e-mail o password. La classifica usa un account anonimo; un identificativo tecnico non rende anonimi i dati associati. Partita e impostazioni restano sul dispositivo, mentre nickname e record della classifica sono conservati sul nostro server e visibili in classifica. Terzi forniscono sicurezza, pubblicità e acquisti. Puoi eliminare l’account di classifica con o senza cancellare i progressi locali." },
      {
        id: "1",
        title: "1. Titolare del trattamento",
        content: `L'App è pubblicata da:\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nContatto per qualsiasi domanda sui tuoi dati: ${EMAIL}\n\nPer i dati pubblicitari trattati da Google, Google agisce come titolare autonomo del trattamento, secondo le proprie regole (sezione 5).`,
      },
      { id: "2", title: "2. Progressi e preferenze locali", content: "Il dispositivo conserva partita, record locale, risultati delle sfide giornaliere, statistiche dei trofei, preferenze e date delle richieste di valutazione. Il record destinato alla classifica viene trasmesso separatamente.\n\nNon offriamo un backup sul server che ripristini tutti i progressi su un altro dispositivo. Cancellare i dati o disinstallare può farli perdere. Gli eventuali backup del sistema dipendono dalle impostazioni del dispositivo." },
      { id: "2a", title: "2 bis. Account e classifica", content: "Al primo accesso alla classifica viene creato un account tecnico anonimo. Il nostro servizio Supabase ospitato autonomamente conserva identità di accesso, sessioni, nickname assegnato, record pubblicato, date e stato dell’account. Le credenziali di sessione restano anche sul dispositivo.\n\nNickname, punteggio e posizione sono visibili; credenziali e ricevute di eliminazione non sono pubbliche. Il record idoneo di una partita finita o abbandonata può essere inviato o ritentato dopo un errore di rete. La classifica non è un backup della partita." },
      { id: "2b", title: "2 ter. Sicurezza e prevenzione degli abusi", content: "Trattiamo informazioni tecniche delle richieste, tra cui IP all’ingresso del servizio, impronte di installazione/rete, date e contatori, per proteggere la classifica, limitare registrazioni ripetute e gestire eliminazioni e restrizioni. Le impronte restano dati pseudonimi.\n\nFirebase App Check e l’attestazione Apple/Google verificano le richieste tramite dati tecnici e token di attestazione. Firebase non gestisce più autenticazione o archiviazione della classifica. Informazioni: https://firebase.google.com/support/privacy" },
      {
        id: "3",
        title: "3. Promemoria (notifiche)",
        content:
          "Se attivi i promemoria nelle impostazioni, l'App ti chiede l'autorizzazione a mostrare notifiche. I promemoria sono programmati localmente sul tuo dispositivo: nessun identificativo di notifica viene creato o inviato a un server. Puoi disattivarli in qualsiasi momento nelle impostazioni dell'App o del dispositivo. I promemoria non contengono pubblicità.",
      },
      { id: "4", title: "4. Assistenza", content: `Scrivendo a ${EMAIL} ci invii il tuo indirizzo, il messaggio e gli allegati scelti. Il messaggio predisposto può includere versioni dell’app e del sistema; puoi rimuoverle.\n\nUsiamo i dati per rispondere, verificare richieste sull’account e risolvere problemi. Li conserviamo durante la gestione, poi solo se necessari per seguito, tutela di diritti o obblighi legali. Non inviare password, token di accesso o dati bancari.` },
      { id: "5", title: "5. Pubblicità e scelte sulla privacy", content: `Google AdMob fornisce banner e video con ricompensa facoltativi. Secondo sistema e autorizzazioni, l’SDK tratta IP, identificativi pubblicitari o dell’app, interazioni e diagnostica per mostrare e misurare annunci e prevenire frodi. Premium elimina anche i video con ricompensa.\n\nAccettare un video non equivale a consentire il trattamento pubblicitario. Il consenso richiesto deve poter essere rifiutato o revocato. Questa versione non dispone ancora di un centro delle scelte pubblicitarie nelle impostazioni. Puoi contattarci per esercitare i diritti; ciò non sostituisce un modulo richiesto prima del trattamento.\n\nAndroid permette di reimpostare o eliminare l’identificativo pubblicitario. Su iOS, accesso a IDFA e tracciamento soggetto ad ATT richiedono l’autorizzazione Apple. Queste impostazioni non cancellano da sole i dati già detenuti dai fornitori. Restano validi i diritti locali, inclusa l’opposizione a determinate pubblicità mirate.\n\nGoogle: ${GOOGLE_PRIVACY}\nServizi partner: ${GOOGLE_PARTNERS}` },
      { id: "6", title: "6. Acquisto Premium e ripristino", content: "Apple o Google gestisce pagamento e dati di fatturazione secondo le proprie regole. Non riceviamo il numero della tua carta.\n\nRevenueCat verifica e ripristina l’acquisto unico senza pubblicità. Tratta identificativo pseudonimo, transazione/ricevuta, prodotto, store e stato Premium. Anche l’app conserva lo stato necessario all’accesso. Eliminare la classifica non elimina l’acquisto; dati di ripristino e obblighi applicabili sono distinti.\n\nInformazioni: https://www.revenuecat.com/privacy" },
      {
        id: "7",
        title: "7. Valutazioni e recensioni",
        content:
          "Quando l'App ti invita a valutarla, usa la finestra ufficiale di Apple o di Google. La tua valutazione e la tua recensione sono trattate dallo store interessato, secondo le sue regole; l'App non vi ha accesso.",
      },
      { id: "8", title: "8. Finalità e basi giuridiche", content: "Gioco, account di classifica richiesto e gestione/ripristino Premium si basano sul servizio o contratto. Sicurezza, limiti antiabuso e assistenza si basano sul nostro interesse legittimo a proteggere servizio e utenti, fatti salvi i tuoi diritti. I promemoria sono facoltativi e richiedono l’autorizzazione del dispositivo.\n\nPubblicità e accesso agli identificativi si basano sul consenso quando richiesto. Alcune conservazioni rispondono a obblighi legali o all’accertamento, esercizio o difesa di diritti. Queste basi non autorizzano riutilizzi indiscriminati." },
      { id: "9", title: "9. Fornitori e trasferimenti", content: `Destinatari necessari:\n• Contabo per il server Supabase e classifica;\n• Cloudflare per instradare e proteggere le richieste;\n• Backblaze per backup e registro delle decisioni cifrati;\n• Google/Firebase e Apple per attestazione e servizi di sistema;\n• Google AdMob per pubblicità;\n• RevenueCat e Apple/Google per acquisti;\n• GitHub Pages per questi documenti pubblici; autorità se richiesto dalla legge.\n\nSupabase è ospitato autonomamente, non implica Supabase Cloud. Fornitori internazionali possono trattare dati fuori dal SEE, inclusi gli Stati Uniti. Le garanzie dipendono da servizio e contratto; puoi chiedere dettagli a ${EMAIL}. Non garantiamo un trattamento esclusivamente europeo. Non vendiamo dati della classifica.\n\nInformative: https://contabo.com/en/legal/privacy/ ; https://www.cloudflare.com/privacypolicy/ ; https://www.backblaze.com/company/privacy ; https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement` },
      {
        id: "10",
        title: "10. Minori",
        content: `L'App è destinata a persone di almeno 16 anni. Non è rivolta ai minori e non raccogliamo consapevolmente dati che li riguardano.\n\nIn Francia, un minore di 15 anni non può acconsentire da solo al trattamento dei propri dati basato sul consenso: è necessario anche il consenso di un titolare della responsabilità genitoriale (articolo 45 della legge francese sulla protezione dei dati, Loi Informatique et Libertés). Se sei un genitore e ritieni che tuo figlio abbia dato il consenso, scrivici a ${EMAIL}: ti indicheremo come revocarlo.`,
      },
      { id: "11", title: "11. Eliminazione e diritti", content: `La sezione account della classifica nelle Impostazioni permette di richiedere e seguire l’eliminazione. Dopo l’accettazione del server, il profilo viene tolto dalla classifica, poi identità e dati attivi associati vengono eliminati. Una richiesta offline deve prima essere trasmessa; disinstallare non elimina l’account server.\n\n«Cancella anche i miei progressi» azzera partita, record e risultati locali interessati. Senza l’opzione rimangono sul dispositivo. Premium e preferenze restano. Dopo l’eliminazione, rientrare volontariamente crea una nuova identità e nickname, salvo restrizioni antiabuso. Il record locale conservato può essere ripubblicato; il vecchio account non viene ripristinato e il nickname può essere riassegnato.\n\nSenza accesso all’app, scrivi a ${EMAIL} indicando Match the Digits e nickname/identificativo di classifica disponibile, mai token o password. Può essere necessaria una verifica proporzionata per non eliminare account altrui.\n\nSecondo i casi hai diritti di accesso, rettifica, cancellazione, limitazione, opposizione, portabilità e revoca del consenso. Rispondiamo normalmente entro un mese, prorogabile per legge. Puoi rivolgerti alla CNIL, ${CNIL_URL}, o all’autorità competente del tuo paese.` },
      { id: "12", title: "12. Sicurezza", content: "Le comunicazioni sono cifrate in transito. L’accesso amministrativo è limitato; backup e registro delle decisioni sono cifrati. Le misure riducono i rischi senza garantire sicurezza assoluta. La classifica pubblica resta visibile; non inviare segreti tramite assistenza." },
      { id: "12a", title: "12 bis. Conservazione e backup", content: `I dati locali restano fino a cancellazione o sostituzione. Account e record di classifica restano fino all’eliminazione dell’account. Contatori temporanei e restrizioni hanno scadenze proprie; alcune tracce servono contro gli abusi e per le contestazioni.\n\nLa rotazione mantiene 7 punti giornalieri, 4 settimanali e 2 mensili. Non garantisce la cancellazione di ogni copia a una data precisa. Il registro impedisce che un ripristino reintroduca account eliminati.\n\nRicevute di eliminazione e registro sono attualmente conservati senza cancellazione automatica. Possono contenere identificativi tecnici, impronte, date e stati. Puoi chiedere una verifica della conservazione o cancellazione a ${EMAIL}. I dati d’acquisto seguono separatamente le esigenze di ripristino e gli obblighi applicabili.` },
      { id: "13", title: "13. Modifiche", content: "L’informativa è disponibile nelle impostazioni e sul sito. La data identifica la versione. Gli aggiornamenti riflettono l’evoluzione del servizio; restano gli obblighi di informazione e di nuovo consenso, quando richiesto." },
      { id: "14", title: "14. Contatti", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Editore",
        content: `L'applicazione mobile Match the Digits (l'«App») è pubblicata da:\n\n${PUBLISHER}\n• Indirizzo: ${ADDRESS}\n• Telefono: ${PHONE}\n• E-mail: ${EMAIL}\n• ${IDS}, ${REG}\n• Partita IVA intracomunitaria: ${VAT}, IVA non applicabile, articolo 293 B del Codice generale delle imposte francese\n• Direttore della pubblicazione: Marc SAMSON\n• Hosting delle pagine dell'informativa sulla privacy e delle presenti Condizioni: ${HOST}, ${HOST_SUPPORT}`,
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
      { id: "5", title: "5. Gioco, progressi e classifica", content: "Non serve un account con e-mail/password per giocare. La classifica usa identità tecnica anonima e nickname assegnato. I profili virtuali segnalati non sono giocatori reali. Non vengono assegnati premi in denaro.\n\nPartite, sfide, trofei e impostazioni sono principalmente locali. Il server conserva il record pubblicato, non tutti i progressi. Finire o abbandonare una partita per iniziarne un’altra può inviare il record idoneo, con nuovi tentativi se la rete fallisce.\n\nPer tabellone: massimo cinque aggiunte, le prime due gratuite, e quattro suggerimenti. Senza Premium, le altre tre aggiunte e i suggerimenti propongono annunci con ricompensa. I limiti Premium sono uguali.\n\nTrucchi, punteggi falsi o registrazioni ripetute abusive possono comportare restrizioni o esclusione. Puoi contestarle all’assistenza." },
      { id: "6", title: "6. Pubblicità e ricompense", content: "Può apparire un banner durante il gioco. Prima di un suggerimento o ricarica interessati viene proposto un video con la tua accettazione. Confermata la ricompensa, l’azione viene concessa entro il saldo disponibile.\n\nSe dopo la richiesta l’annuncio è tecnicamente indisponibile, l’app può concedere l’azione senza video e mostrare un avviso discreto. Rifiutare o chiudere prima della ricompensa non concede l’azione. Premium non aumenta le ricariche oltre il limite esaurito.\n\nAnnunci e destinazioni sono di terzi. L’informativa descrive i trattamenti; accettare il video non è consenso alla privacy." },
      { id: "7", title: "7. Acquisto «Rimuovi pubblicità»", subsections: [{ subtitle: "Cosa ottieni", content: "Premium è un acquisto unico senza rinnovo automatico. Elimina banner e video con ricompensa: suggerimenti e aggiunte sono diretti, con gli stessi limiti di quattro suggerimenti e cinque aggiunte per tabellone. La griglia può usare lo spazio liberato dal banner." },
{ subtitle: "Prezzo e pagamento", content: "Quando disponibile, l’offerta mostra il prezzo localizzato dello store. Controlla prezzo e condizioni nella conferma Apple o Google. Acquisti annullati, in attesa o falliti non sono acquisiti. RevenueCat verifica Premium; non riceviamo dati della carta." },
{ subtitle: "Ripristino", content: "Usa Ripristina acquisti nelle Impostazioni con account e store originali. Può servire una connessione. Gli acquisti Apple non passano automaticamente a Google Play o viceversa. Cancellare classifica o progressi non annulla l’acquisto." },
{
            subtitle: "Recesso e rimborsi",
            content: `L'acquisto riguarda contenuti digitali forniti immediatamente dopo il pagamento. Il diritto di recesso e le richieste di rimborso si esercitano alle condizioni previste dalla legge applicabile e dalle regole dello store interessato:\n\n• App Store: richiesta ad Apple, su ${APPLE_REFUND}\n• Google Play: richiesta a Google, seguendo la procedura su ${GOOGLE_REFUND}\n\nPuoi anche scriverci a ${EMAIL}.`,
          }] },
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
      { id: "10", title: "10. Disponibilità e aggiornamenti", content: "Classifica, acquisti e alcune verifiche richiedono connessione e fornitori. Guasti, manutenzione, restrizioni di sicurezza o annunci indisponibili possono influire sui servizi. Il gioco locale può restare disponibile secondo lo stato della partita.\n\nPossiamo correggere o sviluppare l’app. Restano i diritti inderogabili del consumatore e gli obblighi sui servizi digitali. L’acquisto senza pubblicità non garantisce disponibilità perpetua del servizio online." },
      {
        id: "11",
        title: "11. Garanzie e responsabilità",
        content:
          "L'App è fornita «così com'è». Nulla nelle presenti Condizioni limita i diritti che la legge ti riconosce in quanto consumatore, in particolare la garanzia legale di conformità dei contenuti e servizi digitali.\n\nNei limiti consentiti dalla legge, l'editore non è responsabile:\n\n• della perdita dei tuoi progressi salvati sul dispositivo (sezione 5);\n• dei danni indiretti;\n• dei contenuti pubblicitari forniti da terzi;\n• dell'indisponibilità causata dal tuo dispositivo, dal sistema operativo, dalla connessione o dai servizi di Apple e Google.\n\nQueste limitazioni non si applicano in caso di colpa grave o dolo, ai danni alla persona né nei casi in cui la legge le vieta.",
      },
      { id: "12", title: "12. Eliminazione e fine dell’utilizzo", content: `Puoi smettere quando vuoi. Per eliminare l’account server usa la classifica nelle Impostazioni o ${EMAIL}; disinstallare non basta. L’informativa descrive trattamento e backup.\n\nCancellare i progressi locali è facoltativo. L’account eliminato non si recupera; un rientro consentito crea nuova identità e nickname. Il record locale conservato può essere riutilizzato. Premium resta collegato all’acquisto indipendentemente dalla classifica.\n\nGli abusi possono limitare la classifica senza annullare diritti legali. Proprietà intellettuale, responsabilità e gestione delle controversie restano applicabili.` },
      { id: "13", title: "13. Modifiche delle condizioni", content: "La versione corrente, datata, è disponibile nell’app e sul sito. Evoluzioni del servizio o della legge possono richiedere revisioni. Restano gli obblighi informativi e i diritti acquisiti del consumatore." },
      { id: "14", title: "14. Legge, mediazione e controversie", content: `Si applica la legge francese, senza privare il consumatore delle tutele imperative del paese di residenza.\n\nInvia reclami a ${EMAIL}. Dopo un previo reclamo scritto conservi il diritto alla mediazione gratuita del consumo alle condizioni legali. L’adesione dell’editore a un organismo resta da finalizzare; i recapiti saranno pubblicati dopo l’adesione. Queste condizioni non designano un mediatore.\n\nIn assenza di accordo sono competenti i tribunali previsti dalla legge; restano i rimedi legati alla residenza del consumatore.` },
      { id: "15", title: "15. Contatti", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
};
