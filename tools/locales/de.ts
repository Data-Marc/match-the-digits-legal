import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_SUPPORT, IDS, LICENSES, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "de/";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI, französisches Einzelunternehmen), unter der Geschäftsbezeichnung Primisia";

export const de: Locale = {
  code: "de",
  dir,
  name: "Deutsch",
  updated: "21. November 2026",
  ui: {
    legalDocuments: "Rechtliche Dokumente",
    privacyPolicy: "Datenschutzerklärung",
    termsOfUse: "Nutzungsbedingungen",
    support: "Support",
    privacySub: "Daten, Werbung, Einwilligung &amp; Ihre Rechte",
    termsSub: "Lizenz, Werbung, Kauf „Werbung entfernen“ &amp; Haftung",
    supportSub: "Kontakt, FAQ &amp; Hilfe zu Käufen",
    lastUpdated: "Zuletzt aktualisiert",
    footer: "Herausgegeben von Marc SAMSON EI, unter der Bezeichnung Primisia",
    indexDesc: "Datenschutzerklärung, Nutzungsbedingungen und Support für das Denkspiel Match the Digits.",
    privacyDesc: "Datenschutz bei Match the Digits: lokaler Fortschritt, Rangliste, Sicherheit, Werbung, Premium und Kontolöschung.",
    termsDesc: "Nutzungsbedingungen des Spiels Match the Digits: Lizenz, Werbung, einmaliger Kauf „Werbung entfernen“, Haftung und anwendbares Recht.",
    supportDesc: "Support, Kontakt und häufige Fragen zum Denkspiel Match the Digits.",
    supportIntro: "Brauchen Sie Hilfe? Schreiben Sie uns und nennen Sie nach Möglichkeit Ihr Gerätemodell.",
    emailSupport: "Support per E-Mail",
    faqTitle: "Häufige Fragen",
    language: "Sprache",
    translationNote: "Diese Übersetzung dient nur der Information. Bei Abweichungen ist die französische Fassung maßgeblich.",
  },
  faq: [
    ["Benötige ich ein Konto?", "Zum Spielen sind weder E-Mail noch Passwort nötig. Die Rangliste erstellt eine anonyme Identität mit zugeteiltem Namen."],
    ["Wie viele Hinweise und Ergänzungen gibt es?", "Pro Spielfeld maximal 4 Hinweise und 5 Ergänzungen. Die ersten 2 Ergänzungen sind kostenlos; ohne Premium werden für die nächsten 3 und Hinweise Belohnungsanzeigen angeboten."],
    ["Was passiert bei einer nicht verfügbaren Anzeige?", "Nach Ihrer Anfrage kann die Aktion innerhalb des Restkontingents ohne Video gewährt werden. Ablehnung oder freiwilliges Schließen vor der Belohnung gewährt sie nicht."],
    ["Ist Premium ein Abonnement?", "Nein, ein einmaliger werbefreier Kauf, auch für Hinweise und Ergänzungen. Die Spielgrenzen bleiben gleich."],
    ["Wie stelle ich Premium wieder her?", "Über „Käufe wiederherstellen“ in den Einstellungen mit ursprünglichem Storekonto. Kein automatischer Transfer zwischen Apple und Google."],
    ["Wie lösche ich das Ranglistenkonto?", "Nutzen Sie den Kontobereich in den Einstellungen und verfolgen Sie den Vorgang. Ohne App-Zugriff schreiben Sie dem Support mit Match the Digits und Ranglistenname/Kennung, niemals Token oder Passwort. Eine Prüfung kann nötig sein."],
    ["Kann ich nach der Löschung zurückkehren?", "Nach Abschluss können Sie vorbehaltlich Missbrauchsbeschränkungen eine neue Identität und einen neuen Namen anfordern. Erhaltener Fortschritt kann erneut veröffentlicht werden. Premium bleibt nach den Storeregeln bestehen."],
    ["Was bewirkt das zusätzliche Löschen des Fortschritts?", "Partie, Rekord und betroffene lokale Ergebnisse werden zurückgesetzt; Premium und Einstellungen bleiben. Ohne diese Option bleibt der lokale Fortschritt."],
    ["Löscht eine Deinstallation alles?", "Lokaler Fortschritt kann verloren gehen; das Serverkonto wird dadurch nicht zur Löschung angemeldet. Die Rangliste ist keine vollständige Sicherung."],
    ["Wo verwalte ich die Werbeeinwilligung?","Öffnen Sie in den Einstellungen Datenschutz bei Werbung, sofern verfügbar, um Ihre Auswahl einschließlich anwendbarer US-Widersprüche zu prüfen oder zu ändern. Die Verfügbarkeit hängt von der App-Version und Google UMP ab. Verwalten Sie unter iOS auch die Tracking-Erlaubnis in den Geräteeinstellungen. Ältere Versionen benötigen eventuell ein Update; der Support bleibt erreichbar."],
    ["Warum erscheint meine Erinnerung nicht?", "Prüfen Sie App-Erinnerungen und die Benachrichtigungsberechtigung des Telefons."],
    ["Wie beantrage ich eine Erstattung?", "Wenden Sie sich an den jeweiligen Store Apple oder Google. Die Verfahren sind in den Bedingungen verlinkt; unser Support hilft ebenfalls."]
  ],
  privacy: {
    sections: [
      { id: "0", title: "Zusammenfassung", content: "Stand: 21. November 2026.\n\nZum Spielen sind weder Name noch E-Mail oder Passwort erforderlich. Die Rangliste verwendet ein anonymes Konto; eine technische Kennung macht zugehörige Daten nicht anonym. Spielstand und Einstellungen bleiben auf dem Gerät, während Ranglistenname und Rekord auf unserem Server gespeichert und in der Rangliste sichtbar sind. Dritte erbringen Sicherheits-, Werbe- und Kaufdienste. Das Ranglistenkonto kann mit oder ohne Löschung des lokalen Fortschritts gelöscht werden." },
      {
        id: "1",
        title: "1. Verantwortlicher",
        content: `Die App wird herausgegeben von:\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nKontakt für alle Fragen zu Ihren Daten: ${EMAIL}\n\nFür die von Google verarbeiteten Werbedaten handelt Google als eigenständiger Verantwortlicher nach seinen eigenen Regeln (Abschnitt 5).`,
      },
      { id: "2", title: "2. Lokaler Fortschritt und Einstellungen", content: "Das Gerät speichert die aktuelle Partie, den lokalen Bestwert, tägliche Herausforderungsergebnisse, Trophäenstatistiken, Einstellungen und Zeitpunkte von Bewertungsanfragen. Der Ranglistenrekord wird gesondert übertragen.\n\nWir bieten keine Serversicherung zur Wiederherstellung des gesamten Fortschritts auf einem anderen Gerät. Das Löschen von App-Daten oder die Deinstallation kann zum Verlust führen. Betriebssystemsicherungen hängen von Ihren Geräteeinstellungen ab." },
      { id: "2a", title: "2a. Konto und Rangliste", content: "Beim ersten Ranglistenzugriff wird ein technisches anonymes Konto erstellt. Unser selbst gehosteter Supabase-Dienst speichert Anmeldeidentität, Sitzungen, zugeteilten Namen, veröffentlichten Rekord, zugehörige Zeitangaben und Kontostatus. Sitzungszugangsdaten werden auch auf dem Gerät gespeichert.\n\nName, Punktzahl und Platzierung sind sichtbar, Anmeldezugangsdaten und Löschbelege nicht. Ein geeigneter Rekord einer beendeten oder abgebrochenen Partie kann nach einem Netzwerkfehler später übertragen werden. Die Rangliste ist keine Spielstandsicherung." },
      { id: "2b", title: "2b. Sicherheit und Missbrauchsschutz", content: "Wir verarbeiten technische Anfragedaten, darunter die IP-Adresse am Diensteingang, Installations- oder Netzwerk-Hashes sowie Zeitangaben und Zähler. Dies schützt die Rangliste, begrenzt wiederholte Registrierungen und ermöglicht Löschungen und Beschränkungen. Hashes bleiben pseudonyme Daten.\n\nFirebase App Check und Apple-/Google-Attestierungsverfahren prüfen App-Anfragen anhand technischer Daten und Attestierungstoken. Firebase stellt nicht mehr die Authentifizierung oder Speicherung der Rangliste bereit. Informationen: https://firebase.google.com/support/privacy" },
      {
        id: "3",
        title: "3. Erinnerungen (Mitteilungen)",
        content:
          "Wenn Sie Erinnerungen in den Einstellungen aktivieren, bittet die App um die Erlaubnis, Mitteilungen anzuzeigen. Erinnerungen werden lokal auf Ihrem Gerät geplant: Es wird kein Mitteilungs-Token erstellt oder an einen Server gesendet. Sie können sie jederzeit in den Einstellungen der App oder Ihres Geräts deaktivieren. Erinnerungen enthalten keine Werbung.",
      },
      { id: "4", title: "4. Support", content: `Bei einer Nachricht an ${EMAIL} erhalten wir Ihre E-Mail-Adresse, Nachricht und freiwillig gesendete Anhänge. Die vorbereitete Nachricht kann App- und Systemversion enthalten; diese können Sie entfernen.\n\nDie Angaben dienen der Antwort, Prüfung von Kontoanfragen und Problemlösung. Sie werden während der Bearbeitung aufbewahrt, danach nur soweit für Nachfragen, Rechtsansprüche oder gesetzliche Pflichten erforderlich. Senden Sie niemals Passwörter, Anmeldetoken oder Bankdaten.` },
      { id: "5", title: "5. Werbung und Datenschutzentscheidungen", content: `Google AdMob liefert Banner und freiwillige Belohnungsvideos. Abhängig von System und Berechtigungen verarbeitet das SDK IP-Adressen, Werbe- oder App-Kennungen, App-/Werbeinteraktionen und Diagnosedaten zur Werbeauslieferung, Messung und Betrugsabwehr. Premium entfernt auch Belohnungsvideos.\n\nDie Zustimmung zum Ansehen eines Videos ist von der Einwilligung in die Verarbeitung von Werbedaten getrennt. Versionen mit Google UMP zeigen vor Anzeigenanfragen ein Datenschutzformular, wenn der Dienst dies verlangt; es ist für die weltweite Auslieferung eingerichtet. Sie können die angebotenen Optionen annehmen, ablehnen oder verwalten. In den Einstellungen öffnet Datenschutz bei Werbung die verfügbaren Optionen erneut, einschließlich anwendbarer US-Widerspruchsrechte gegen Verkauf/Weitergabe oder gezielte Werbung. Die Ablehnung von Tracking verhindert das Spielen nicht. Google wählt die Formularsprache anhand der Geräteeinstellungen und der verfügbaren Übersetzungen; Englisch kann als Ersatz dienen. Ältere Versionen bieten diesen Eintrag möglicherweise nicht: Aktualisieren Sie die App oder wenden Sie sich zur Ausübung Ihrer Rechte an den Support. Der Support ersetzt keine vor der Verarbeitung erforderliche Einwilligung.\n\nUnter Android lässt sich die Werbekennung in den Geräteeinstellungen zurücksetzen oder löschen. Unter iOS erfordern IDFA-Zugriff und ATT-pflichtiges Tracking die entsprechende Apple-Freigabe. Damit werden bereits bei Anbietern vorhandene Daten nicht automatisch gelöscht. Lokale Rechte, einschließlich bestimmter Widerspruchsrechte gegen zielgerichtete Werbung, bleiben bestehen.\n\nGoogle: ${GOOGLE_PRIVACY}\nPartnerdienste: ${GOOGLE_PARTNERS}` },
      { id: "6", title: "6. Premium und Wiederherstellung", content: "Apple oder Google wickelt die Zahlung ab und verwahrt Rechnungsdaten nach eigenen Regeln. Wir erhalten keine Zahlungskartennummer.\n\nRevenueCat prüft und restauriert den einmaligen werbefreien Kauf. Verarbeitet werden eine pseudonyme Kennung, Transaktions-/Belegdaten, Produkt, Store und Premium-Berechtigung. Die App speichert ebenfalls den benötigten Zugriffsstatus. Die Löschung des Ranglistenkontos löscht den Kauf nicht; Wiederherstellungsdaten und gesetzlich erforderliche Daten werden getrennt behandelt.\n\nInformationen: https://www.revenuecat.com/privacy" },
      {
        id: "7",
        title: "7. Bewertungen und Rezensionen",
        content:
          "Wenn die App Sie um eine Bewertung bittet, verwendet sie das offizielle Fenster von Apple oder Google. Ihre Bewertung und Rezension werden vom jeweiligen Store nach seinen eigenen Regeln verarbeitet; die App hat keinen Zugriff darauf.",
      },
      { id: "8", title: "8. Zwecke und Rechtsgrundlagen", content: "Spiel, angefordertes Ranglistenkonto und Premium-Verwaltung/-Wiederherstellung beruhen auf der Erfüllung der angeforderten Leistung oder des Vertrags. Sicherheit, Missbrauchslimits und Support beruhen auf unserem berechtigten Interesse am Schutz des Dienstes und seiner Nutzer, vorbehaltlich Ihrer Rechte. Erinnerungen sind freiwillig und benötigen eine Geräteberechtigung.\n\nWerbeverarbeitung und Kennungszugriff beruhen auf Einwilligung, soweit erforderlich. Manche Aufbewahrung dient gesetzlichen Pflichten oder der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. Dies erlaubt keine uneingeschränkte Nutzung für andere Zwecke." },
      { id: "9", title: "9. Dienstleister und Übermittlungen", content: `Erforderliche Empfänger sind:\n• Contabo für den Supabase- und Ranglistenserver;\n• Cloudflare für Weiterleitung und Schutz der Anfragen;\n• Backblaze für verschlüsselte Sicherungen und das Entscheidungsjournal;\n• Google/Firebase und Apple für Attestierung und Systemdienste;\n• Google AdMob für Werbung;\n• RevenueCat und Apple/Google für Käufe;\n• GitHub Pages für diese öffentlichen Dokumente; Behörden bei gesetzlicher Verpflichtung.\n\nSupabase wird selbst gehostet, nicht automatisch in Supabase Cloud. Internationale Anbieter können Daten außerhalb des EWR, insbesondere in den USA, verarbeiten. Übermittlungsgarantien hängen vom Dienst und Vertrag ab; Informationen erhalten Sie unter ${EMAIL}. Eine ausschließlich europäische Verarbeitung wird nicht zugesichert. Wir verkaufen keine Ranglistendaten.\n\nHinweise: https://contabo.com/en/legal/privacy/ ; https://www.cloudflare.com/privacypolicy/ ; https://www.backblaze.com/company/privacy ; https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement` },
      {
        id: "10",
        title: "10. Kinder",
        content: `Die App richtet sich an Personen ab 16 Jahren. Sie richtet sich nicht an Kinder, und wir erheben nicht wissentlich Daten über sie.\n\nIn Frankreich kann ein Minderjähriger unter 15 Jahren der auf Einwilligung beruhenden Verarbeitung seiner Daten nicht allein zustimmen: Die Zustimmung eines Inhabers der elterlichen Sorge ist ebenfalls erforderlich (Artikel 45 des französischen Datenschutzgesetzes, Loi Informatique et Libertés). Wenn Sie ein Elternteil sind und glauben, dass Ihr Kind eine Einwilligung erteilt hat, schreiben Sie uns an ${EMAIL}: Wir erklären Ihnen, wie Sie sie widerrufen.`,
      },
      { id: "11", title: "11. Kontolöschung und Ihre Rechte", content: `Im Ranglistenkontobereich der Einstellungen können Sie die Löschung beantragen und verfolgen. Nach Annahme durch den Server verschwindet das Profil aus der Rangliste; Identität und zugehörige aktive Daten werden anschließend gelöscht. Eine Offline-Anfrage muss zunächst übertragen werden. Deinstallation allein löscht das Serverkonto nicht.\n\n„Auch meinen Fortschritt löschen“ setzt Partie, Rekord und betroffene lokale Ergebnisse zurück. Ohne diese Option bleiben sie auf dem Gerät. Premium und Einstellungen bleiben erhalten. Nach Abschluss kann ein freiwilliger Wiedereintritt eine neue Identität und einen neuen Namen erstellen, vorbehaltlich Missbrauchsbeschränkungen. Ein erhaltener lokaler Rekord kann erneut eingereicht werden; das alte Konto wird nicht wiederhergestellt und sein Name kann neu vergeben werden.\n\nOhne App-Zugriff schreiben Sie an ${EMAIL} und nennen Match the Digits sowie den verfügbaren Ranglistennamen/die Kennung, niemals Token oder Passwort. Zum Schutz fremder Konten kann eine angemessene Prüfung notwendig sein.\n\nJe nach Voraussetzungen haben Sie Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Übertragbarkeit und Einwilligungswiderruf. Die Antwort erfolgt grundsätzlich innerhalb eines Monats, mit gesetzlich erlaubter Verlängerung. Beschwerden sind bei der CNIL unter ${CNIL_URL} oder Ihrer zuständigen Behörde möglich.` },
      { id: "12", title: "12. Sicherheit", content: "Netzwerkübertragungen sind verschlüsselt. Administrationszugriffe sind beschränkt; Sicherungen und Entscheidungsjournal werden verschlüsselt. Dies senkt Risiken, garantiert aber keine absolute Sicherheit. Die öffentliche Rangliste bleibt sichtbar; senden Sie keine Geheimnisse über Supportkanäle." },
      { id: "12a", title: "12a. Aufbewahrung und Sicherungen", content: `Lokale Daten bleiben bis zur Löschung oder Ersetzung. Ranglistenkonto und Rekord bleiben bis zur Kontolöschung. Temporäre Zähler und Sicherheitsbeschränkungen haben eigene Ablaufzeiten; bestimmte Spuren werden zur Missbrauchsabwehr und Klärung von Streitfällen benötigt.\n\nDie Sicherungsrotation umfasst 7 tägliche, 4 wöchentliche und 2 monatliche Wiederherstellungspunkte. Dies garantiert keine Löschung aller Kopien an einem bestimmten Tag. Das Entscheidungsjournal verhindert, dass eine Wiederherstellung gelöschte Konten erneut aktiviert.\n\nLöschbelege und dieses Journal werden derzeit ohne automatische Bereinigung aufbewahrt. Sie können technische Kennungen, Hashes, Daten und Statusangaben enthalten. Eine Prüfung der Aufbewahrung oder Löschung können Sie unter ${EMAIL} verlangen. Kaufdaten richten sich gesondert nach Wiederherstellungsbedarf und geltenden Pflichten.` },
      { id: "13", title: "13. Änderungen", content: "Diese Erklärung ist in den Einstellungen und auf unserer Website zugänglich. Das Datum kennzeichnet die Textversion. Änderungen berücksichtigen die Entwicklung des Dienstes. Gesetzliche Informationspflichten und erforderliche erneute Einwilligungen bleiben maßgeblich." },
      { id: "14", title: "14. Kontakt", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Herausgeber",
        content: `Die mobile Anwendung Match the Digits (die „App“) wird herausgegeben von:\n\n${PUBLISHER}\n• Adresse: ${ADDRESS}\n• Telefon: ${PHONE}\n• E-Mail: ${EMAIL}\n• ${IDS}, ${REG}\n• USt-IdNr.: ${VAT}, keine Umsatzsteuer ausgewiesen, Artikel 293 B des französischen Steuergesetzbuchs (Code général des impôts)\n• Verantwortlich für den Inhalt: Marc SAMSON\n• Hosting der Seiten der Datenschutzerklärung und dieser Bedingungen: ${HOST}, ${HOST_SUPPORT}`,
      },
      {
        id: "2",
        title: "2. Gegenstand und Annahme",
        content: `Diese Bedingungen (die „Bedingungen“) regeln die Nutzung der App. Mit dem Herunterladen oder der Nutzung der App akzeptieren Sie sie. Wenn Sie sie nicht akzeptieren, nutzen Sie die App nicht.\n\nDie App richtet sich an Personen ab 16 Jahren.\n\nDie Verwendung Ihrer personenbezogenen Daten ist in der Datenschutzerklärung beschrieben, abrufbar unter ${privacyUrl(dir)} und in den Einstellungen der App.`,
      },
      {
        id: "3",
        title: "3. Lizenz",
        content: `Der Herausgeber gewährt Ihnen eine persönliche, nicht ausschließliche, nicht übertragbare und widerrufliche Lizenz zur Installation und Nutzung der App auf Geräten, die Sie besitzen oder kontrollieren, für private und nicht kommerzielle Zwecke.\n\n• Unter iOS wird Ihnen die App gemäß Apples Standard-Endbenutzer-Lizenzvertrag (Licensed Application End User License Agreement) lizenziert: ${APPLE_EULA}\nDiese Bedingungen ergänzen ihn; im Fall eines Widerspruchs hat der Vertrag von Apple für die Nutzung der App unter iOS Vorrang.\n• Unter Android unterliegt die Nutzung der App zusätzlich den Nutzungsbedingungen von Google Play.\n\nDie App wird lizenziert, nicht verkauft.`,
      },
      {
        id: "4",
        title: "4. Nutzung der App",
        content:
          "Sie verpflichten sich, Folgendes zu unterlassen:\n\n• die App zu kopieren, zu verändern, zu dekompilieren, zu disassemblieren oder zu versuchen, ihren Quellcode zu extrahieren, sofern dies nicht ausdrücklich gesetzlich erlaubt ist;\n• ihre technischen Mechanismen zu umgehen oder zu stören, einschließlich der Anzeige von Werbung und In-App-Käufen;\n• künstlich Werbeeinblendungen oder Klicks zu erzeugen;\n• die App rechtswidrig oder unter Verletzung von Rechten Dritter zu nutzen.",
      },
      { id: "5", title: "5. Spiel, Fortschritt und Rangliste", content: "Zum Spielen ist kein E-Mail-/Passwortkonto erforderlich. Die Rangliste nutzt eine technische anonyme Identität mit zugeteiltem Namen. Gekennzeichnete virtuelle Profile sind keine echten Spieler. Es gibt keine Geldpreise.\n\nPartien, Herausforderungen, Trophäen und Einstellungen sind überwiegend lokal. Der Server speichert den veröffentlichten Rekord, keine vollständige Fortschrittssicherung. Beim Beenden oder Abbrechen zugunsten einer neuen Partie kann der geeignete Rekord übertragen werden, bei Netzwerkfehlern später erneut.\n\nPro Spielfeld gelten maximal fünf Ergänzungen, davon die ersten zwei kostenlos, und vier Hinweise. Ohne Premium werden für die weiteren drei Ergänzungen und Hinweise Belohnungsanzeigen angeboten. Für Premium gelten dieselben Grenzen.\n\nBetrug, gefälschte Punktzahlen oder missbräuchliche Mehrfachregistrierungen können zur Beschränkung oder zum Ausschluss führen. Einwände können Sie an den Support richten." },
      { id: "6", title: "6. Werbung und Belohnungen", content: "Während des Spiels kann ein Banner erscheinen. Vor einem betroffenen Hinweis oder einer Aufladung wird mit Ihrer Zustimmung ein Belohnungsvideo angeboten. Nach Bestätigung der Belohnung wird die Aktion innerhalb des verbleibenden Kontingents gewährt.\n\nIst die Anzeige nach Ihrer Anfrage technisch nicht verfügbar, kann die App die Aktion ohne Video gewähren und einen dezenten Hinweis anzeigen. Ablehnung oder Schließen vor Erhalt der Belohnung gewährt diese Aktion nicht. Premium erhöht erschöpfte Kontingente nicht über das Limit.\n\nAnzeigen und Zielseiten stammen von Dritten. Die Datenschutzerklärung erläutert die Datenverarbeitung; die Videozustimmung ist keine Datenschutzeinwilligung." },
      { id: "7", title: "7. Kauf „Werbung entfernen“", subsections: [{ subtitle: "Leistungsumfang", content: "Premium ist ein Einmalkauf ohne automatische Verlängerung. Banner und Belohnungsanzeigen entfallen; Hinweise und Ergänzungen sind direkt verfügbar, bei denselben Grenzen von vier Hinweisen und fünf Ergänzungen pro Spielfeld. Das Spielfeld kann den frei gewordenen Bannerplatz nutzen." },
{ subtitle: "Preis und Zahlung", content: "Soweit verfügbar zeigt das Angebot den lokalisierten Storepreis. Prüfen Sie Preis und Bedingungen in der Apple-/Google-Bestätigung. Abgebrochene, ausstehende oder fehlgeschlagene Käufe gelten nicht als abgeschlossen. RevenueCat prüft Premium; wir erhalten keine Kartendaten." },
{ subtitle: "Wiederherstellung", content: "Wählen Sie in den Einstellungen „Käufe wiederherstellen“ mit ursprünglichem Konto und Store. Eine Verbindung kann nötig sein. Apple-Käufe werden nicht automatisch zu Google Play übertragen oder umgekehrt. Konto- oder Fortschrittslöschung hebt den Kauf nicht auf." },
{
            subtitle: "Widerruf und Erstattung",
            content: `Der Kauf betrifft digitale Inhalte, die unmittelbar nach der Zahlung bereitgestellt werden. Das Widerrufsrecht und Erstattungsanträge werden zu den Bedingungen des geltenden Rechts und der Regeln des jeweiligen Stores ausgeübt:\n\n• App Store: Antrag bei Apple unter ${APPLE_REFUND}\n• Google Play: Antrag bei Google nach dem Verfahren unter ${GOOGLE_REFUND}\n\nSie können uns auch an ${EMAIL} schreiben.`,
          }] },
      {
        id: "8",
        title: "8. Erinnerungen",
        content:
          "Wenn Sie sie aktivieren, kann Ihnen die App lokale Erinnerungen senden. Sie können sie jederzeit in den Einstellungen der App oder Ihres Geräts deaktivieren. Sie enthalten keine Werbung.",
      },
      {
        id: "9",
        title: "9. Geistiges Eigentum",
        content: `Die App, ihr Name, ihre Grafiken, Texte, Töne, ihr Code und ihre Gestaltung sind durch das Recht des geistigen Eigentums geschützt und gehören dem Herausgeber oder seinen Lizenzgebern. Bestimmte Elemente Dritter werden unter ihrer eigenen Lizenz verwendet:\n\n${LICENSES}\n\nJede nicht genehmigte Vervielfältigung oder Wiederverwendung ist untersagt.`,
      },
      { id: "10", title: "10. Verfügbarkeit und Updates", content: "Rangliste, Käufe und einige Prüfungen benötigen eine Verbindung und hängen von Dienstleistern ab. Ausfälle, Wartung, Sicherheitsbeschränkungen oder fehlende Anzeigen können sie beeinträchtigen. Lokales Spielen kann je nach Spielzustand möglich bleiben.\n\nWir können die App korrigieren oder weiterentwickeln. Zwingende Verbraucherrechte und Pflichten für digitale Dienste bleiben bestehen. Ein werbefreier Kauf garantiert keine zeitlich unbegrenzte Verfügbarkeit des Onlinedienstes." },
      {
        id: "11",
        title: "11. Gewährleistung und Haftung",
        content:
          "Die App wird „wie besehen“ bereitgestellt. Nichts in diesen Bedingungen schränkt die Rechte ein, die Ihnen als Verbraucher gesetzlich zustehen, insbesondere die gesetzliche Gewährleistung für digitale Inhalte und Dienstleistungen.\n\nSoweit gesetzlich zulässig, haftet der Herausgeber nicht für:\n\n• den Verlust Ihres auf Ihrem Gerät gespeicherten Fortschritts (Abschnitt 5);\n• mittelbare Schäden;\n• von Dritten bereitgestellte Werbeinhalte;\n• Nichtverfügbarkeit, die durch Ihr Gerät, Ihr Betriebssystem, Ihre Verbindung oder die Dienste von Apple und Google verursacht wird.\n\nDiese Beschränkungen gelten nicht bei grober Fahrlässigkeit oder Vorsatz, bei Personenschäden oder wenn das Gesetz sie untersagt.",
      },
      { id: "12", title: "12. Löschung und Nutzungsende", content: `Sie können jederzeit aufhören. Das Serverkonto löschen Sie über den Ranglistenbereich der Einstellungen oder ${EMAIL}; Deinstallation genügt nicht. Verarbeitung und Sicherungen beschreibt die Datenschutzerklärung.\n\nDas Löschen lokalen Fortschritts ist optional. Das gelöschte Konto ist nicht wiederherstellbar; ein zulässiger Wiedereintritt erstellt eine neue Identität und einen neuen Namen. Ein erhaltener lokaler Rekord kann erneut genutzt werden. Premium bleibt unabhängig davon an den Kauf gebunden.\n\nMissbrauch kann Ranglistenbeschränkungen auslösen, ohne gesetzliche Rechte aufzuheben. Bestimmungen zu geistigem Eigentum, Haftung und Streitbeilegung gelten weiter.` },
      { id: "13", title: "13. Änderungen der Bedingungen", content: "Die aktuelle Fassung steht mit Aktualisierungsdatum in App und Website. Entwicklungen des Dienstes oder Rechts können Änderungen erfordern. Gesetzliche Informationspflichten und erworbene Verbraucherrechte bleiben bestehen." },
      { id: "14", title: "14. Recht, Mediation und Streitigkeiten", content: `Es gilt französisches Recht, ohne Verbrauchern zwingende Schutzrechte ihres Wohnsitzlandes zu entziehen.\n\nBeschwerden richten Sie an ${EMAIL}. Nach vorheriger schriftlicher Beschwerde bleibt Ihr Recht auf kostenlose Verbrauchermediation unter den gesetzlichen Voraussetzungen bestehen. Der Beitritt des Herausgebers zu einer Mediationsstelle ist noch abzuschließen; deren Kontaktdaten werden anschließend veröffentlicht. Diese Bedingungen benennen noch keinen Mediator.\n\nOhne Einigung können die zuständigen Gerichte angerufen werden; insbesondere bleiben Verbrauchern die Rechtsbehelfe ihres Wohnsitzes erhalten.` },
      { id: "15", title: "15. Kontakt", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
};
