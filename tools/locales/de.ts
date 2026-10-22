import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_PHONE, IDS, LICENSES, MEDIATOR, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "de/";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI, französisches Einzelunternehmen), unter der Geschäftsbezeichnung Primisia";

export const de: Locale = {
  code: "de",
  dir,
  name: "Deutsch",
  updated: "21. Oktober 2026",
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
    privacyDesc: "Datenschutzerklärung des Spiels Match the Digits: kein Konto, Spieldaten auf Ihrem Gerät, Google-AdMob-Werbung mit Einwilligung.",
    termsDesc: "Nutzungsbedingungen des Spiels Match the Digits: Lizenz, Werbung, einmaliger Kauf „Werbung entfernen“, Haftung und anwendbares Recht.",
    supportDesc: "Support, Kontakt und häufige Fragen zum Denkspiel Match the Digits.",
    supportIntro: "Brauchen Sie Hilfe? Schreiben Sie uns und nennen Sie nach Möglichkeit Ihr Gerätemodell.",
    emailSupport: "Support per E-Mail",
    faqTitle: "Häufige Fragen",
    language: "Sprache",
    translationNote: "Diese Übersetzung dient nur der Information. Bei Abweichungen ist die französische Fassung maßgeblich.",
  },
  faq: [
    ["Muss ich ein Konto erstellen?", "Nein. Match the Digits erfordert weder Konto noch Registrierung noch Anmeldung. Sie können direkt nach der Installation spielen."],
    ["Ich habe „Werbung entfernen“ gekauft, sehe aber noch Werbung", "Öffnen Sie die Einstellungen der App und tippen Sie auf <strong>Käufe wiederherstellen</strong>. Achten Sie darauf, mit demselben App-Store- oder Google-Play-Konto wie beim Kauf angemeldet zu sein."],
    ["Ist „Werbung entfernen“ ein Abonnement?", "Nein. Es ist ein einmaliger Kauf: Er wird nur einmal berechnet und verlängert sich nie. Er entfernt jegliche Werbung, auch die freiwillige Werbung mit Belohnung für Hinweise und Ergänzungen. Er verschafft keinen Spielvorteil: Jeder Spieler hat 4 Hinweise pro Spiel."],
    ["Wie funktionieren Hinweise?", "Jedes Spiel gibt Ihnen 4 Hinweise. Ohne den Kauf „Werbung entfernen“ können Sie sich eine kurze Werbung ansehen, um einen Hinweis aufzudecken. Das ist freiwillig: Sie können jederzeit auch ohne weiterspielen."],
    ["Wie funktioniert die Schaltfläche „+“?", "Die Schaltfläche „+“ fügt dem Spielfeld eine Kopie der verbleibenden Zahlen hinzu, bis zu 5-mal pro Spielfeld. Das erste Mal ist kostenlos. Für die nächsten vier können Sie sich eine kurze Werbung ansehen. Das ist freiwillig."],
    ["Wie ändere ich meine Werbeeinstellungen?", "Öffnen Sie die Einstellungen der App, um die für Werbung erteilte Einwilligung einzusehen oder zu ändern. Unter Android können Sie Ihre Werbe-ID auch in den Geräteeinstellungen zurücksetzen oder löschen."],
    ["Meine Erinnerung wird nicht angezeigt", "Prüfen Sie, ob Mitteilungen für Match the Digits in den Geräteeinstellungen erlaubt sind und ob die Erinnerungen in den Einstellungen der App aktiviert sind."],
    ["Verliere ich meinen Fortschritt?", "Ihr Spiel, Ihre Punktzahlen, Tagesergebnisse und Einstellungen werden nur auf Ihrem Gerät gespeichert. Wenn Sie die App deinstallieren, ihre Daten löschen oder das Gerät wechseln, werden sie endgültig gelöscht: Wir haben keine Kopie und können sie nicht wiederherstellen."],
    ["Wie erhalte ich eine Erstattung?", `Käufe werden von Apple oder Google abgewickelt. Beantragen Sie eine Erstattung bei Apple unter <a href="${APPLE_REFUND}">reportaproblem.apple.com</a> oder bei Google nach <a href="${GOOGLE_REFUND}">diesem Verfahren</a>. Sie können uns auch schreiben.`],
  ],
  privacy: {
    sections: [
      {
        id: "0",
        title: "Zusammenfassung",
        content:
          "Gültig ab: 21. Oktober 2026.\n\nDiese Erklärung beschreibt, welche Daten bei der Nutzung der mobilen Anwendung Match the Digits (die „App“) unter iOS und Android verarbeitet werden, warum, durch wen, wie lange und wie Sie Ihre Rechte ausüben können.\n\n• Die App verlangt kein Konto und fragt zum Spielen weder nach Ihrem Namen noch nach Ihrer E-Mail-Adresse oder Ihrem Geburtsdatum.\n• Ihr Fortschritt und Ihre Einstellungen werden nur auf Ihrem Gerät gespeichert. Wir erhalten sie nicht.\n• Die App zeigt Werbung von Google (AdMob). Dafür verarbeitet Google bestimmte Daten Ihres Geräts, die in Abschnitt 5 beschrieben sind. Im Europäischen Wirtschaftsraum, im Vereinigten Königreich und in der Schweiz wird vor jeder personalisierten Werbung Ihre Einwilligung eingeholt.\n• Wir erhalten nur dann Daten über Sie, wenn Sie uns schreiben (Support).",
      },
      {
        id: "1",
        title: "1. Verantwortlicher",
        content: `Die App wird herausgegeben von:\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nKontakt für alle Fragen zu Ihren Daten: ${EMAIL}\n\nFür die von Google verarbeiteten Werbedaten handelt Google als eigenständiger Verantwortlicher nach seinen eigenen Regeln (Abschnitt 5).`,
      },
      {
        id: "2",
        title: "2. Nur auf Ihrem Gerät gespeicherte Daten",
        content:
          "Die folgenden Daten werden im lokalen Speicher der App auf Ihrem Gerät gespeichert. Sie werden nicht an uns und an keinen Server des Herausgebers übermittelt:\n\n• Laufendes Spiel (Spielfeld, Punktzahl, verbleibende Hinweise und Ergänzungen): um Ihr Spiel fortzusetzen\n• Bestpunktzahl: Anzeige auf dem Startbildschirm und bei den Trophäen\n• Tagesergebnisse (abgeschlossene Spielfelder, Punkte, Paare, Tagesherausforderungen): Kalender, Statistiken, Trophäen\n• Einstellungen: Sprache, haptisches Feedback, Soundeffekte, Erinnerungen: um Ihre Einstellungen zu berücksichtigen\n• Daten bereits angezeigter Bewertungsanfragen: damit Sie nicht zu oft um eine Bewertung gebeten werden\n\nDiese Daten werden gespeichert, solange die App installiert ist. Sie können sie jederzeit löschen, indem Sie die Daten der App löschen (Android) oder die App deinstallieren (iOS und Android). Danach können sie nicht wiederhergestellt werden: Der Herausgeber erstellt keine Sicherung.",
      },
      {
        id: "3",
        title: "3. Erinnerungen (Mitteilungen)",
        content:
          "Wenn Sie Erinnerungen in den Einstellungen aktivieren, bittet die App um die Erlaubnis, Mitteilungen anzuzeigen. Erinnerungen werden lokal auf Ihrem Gerät geplant: Es wird kein Mitteilungs-Token erstellt oder an einen Server gesendet. Sie können sie jederzeit in den Einstellungen der App oder Ihres Geräts deaktivieren. Erinnerungen enthalten keine Werbung.",
      },
      {
        id: "4",
        title: "4. Support (wenn Sie uns schreiben)",
        content: `Die Schaltfläche „Support kontaktieren“ öffnet Ihre E-Mail-App mit einer vorausgefüllten E-Mail an ${EMAIL}. Wenn Sie sie senden, erhalten wir:\n\n• Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht;\n• die App-Version, das Betriebssystem (iOS oder Android) und dessen Version, die automatisch am Ende der Nachricht eingefügt werden, um uns bei der Problemlösung zu helfen. Sie können sie vor dem Senden entfernen.\n\nDiese Daten werden nur zur Beantwortung Ihrer Anfrage verwendet. Sie werden gelöscht, sobald Ihre Anfrage bearbeitet ist.`,
      },
      {
        id: "5",
        title: "5. Werbung (Google AdMob)",
        subsections: [
          {
            subtitle: "Von Google verarbeitete Daten",
            content:
              "Die App zeigt Werbung von Google AdMob über das in die App integrierte Google Mobile Ads SDK. Laut der von Google für Entwickler veröffentlichten Dokumentation verarbeitet Google:\n\n• IP-Adresse, die zur Schätzung des ungefähren Standorts des Geräts dienen kann: Werbung, Messung, Betrugsprävention\n• Interaktionen mit der App (Starts, Tippen, angesehene Videos): Werbung, Messung, Betrugsprävention\n• Diagnose- und Leistungsdaten (Startzeit, Hänger, Energieverbrauch); unter iOS nicht mit dem Nutzer verknüpfte Absturzprotokolle: Diagnose, Verbesserung, Werbung, Messung\n• Gerätekennungen: Werbe-ID (Android), App Set ID, weitere app- oder entwicklerbezogene Kennungen: Werbung und Messung\n• Werbedaten (angesehene Anzeigen): Werbung und Messung\n\nGoogle gibt an, dass diese Daten bei der Übertragung verschlüsselt werden (TLS). Der Herausgeber hat keinen Zugriff auf diese Einzeldaten: Er erhält nur zusammengefasste Statistiken (Anzahl der Einblendungen, Einnahmen).",
          },
          {
            subtitle: "In der App gezeigte Werbung",
            content:
              "• ein Banner auf dem Spielbildschirm;\n• eine freiwillige Werbung mit Belohnung: Sie können ein Video ansehen, um einen Hinweis zu erhalten oder die Schaltfläche „+“ erneut zu nutzen (das erste „+“ jedes Spielfelds ist kostenlos). Eine Ablehnung hindert Sie nicht am Spielen.\n\nWenn Sie „Werbung entfernen“ gekauft haben (Abschnitt 6), wird keine Werbung angezeigt.",
          },
          {
            subtitle: "Ihre Einwilligung (EWR, Vereinigtes Königreich, Schweiz)",
            content:
              "Beim ersten Start können Sie in einem Einwilligungsfenster, das vom Einwilligungstool von Google verwaltet wird, die Nutzung Ihrer Daten zu Werbezwecken für jeden Zweck einzeln annehmen oder ablehnen. Wenn Sie ablehnen, bleibt die App vollständig spielbar; es kann dann nicht personalisierte oder eingeschränkte Werbung angezeigt werden. Sie können Ihre Wahl jederzeit in den Einstellungen der App ändern.",
          },
          {
            subtitle: "iOS: Tracking",
            content:
              "Die App fragt nicht um Erlaubnis, Ihre Aktivitäten zu verfolgen (App Tracking Transparency): Die Werbekennung Ihres Geräts (IDFA) wird nicht verwendet. Die App verlangt nie, dass Sie Tracking akzeptieren, um zu spielen.",
          },
          {
            subtitle: "Android: Werbe-ID",
            content: "Sie können Ihre Werbe-ID in den Einstellungen Ihres Geräts zurücksetzen oder löschen.",
          },
          {
            subtitle: "Vereinigte Staaten",
            content:
              "Je nach Bundesstaat, in dem Sie leben, kann Ihnen das Gesetz das Recht geben, dem „Verkauf“ oder der „Weitergabe“ Ihrer Daten für gezielte Werbung zu widersprechen. Sie können diese Wahl in den Datenschutzeinstellungen der App treffen oder uns schreiben.",
          },
          {
            subtitle: "Weitere Informationen",
            content: `Datenschutzerklärung von Google: ${GOOGLE_PRIVACY}\nWie Google Daten von Websites und Apps nutzt, die seine Dienste verwenden: ${GOOGLE_PARTNERS}`,
          },
        ],
      },
      {
        id: "6",
        title: "6. Kauf „Werbung entfernen“",
        content:
          "Der einmalige Kauf, der die Werbung entfernt, wird ausschließlich über den App Store (Apple) oder Google Play (Google) abgewickelt. Wir erhalten nie Ihre Zahlungsdaten (Bankkarte, Name, Rechnungsadresse). Die App erhält vom Store nur die Bestätigung, dass der Kauf erfolgt ist, um die Werbung zu entfernen und die Wiederherstellung zu ermöglichen. Für die Zahlungsabwicklung gelten die Datenschutzrichtlinien von Apple oder Google.",
      },
      {
        id: "7",
        title: "7. Bewertungen und Rezensionen",
        content:
          "Wenn die App Sie um eine Bewertung bittet, verwendet sie das offizielle Fenster von Apple oder Google. Ihre Bewertung und Rezension werden vom jeweiligen Store nach seinen eigenen Regeln verarbeitet; die App hat keinen Zugriff darauf.",
      },
      {
        id: "8",
        title: "8. Rechtsgrundlagen (DSGVO)",
        content:
          "• Betrieb des Spiels und lokale Speicherung Ihres Fortschritts und Ihrer Einstellungen: Erbringung des von Ihnen angeforderten Dienstes (Vertrag)\n• Zugriff auf Gerätekennungen und Werbung, personalisiert oder nicht, wenn das Gesetz eine Einwilligung verlangt: Einwilligung, jederzeit widerrufbar (Abschnitt 5)\n• Anzeige von Erinnerungen: Einwilligung (Mitteilungserlaubnis), jederzeit widerrufbar\n• Beantwortung Ihrer Support-Anfragen: berechtigtes Interesse an der Beantwortung; oder vorvertragliche Maßnahmen / Vertrag, wenn die Anfrage einen Kauf betrifft\n• Erfüllung gesetzlicher Pflichten (z. B. Buchführungspflichten bei Käufen): rechtliche Verpflichtung",
      },
      {
        id: "9",
        title: "9. Empfänger und Übermittlungen außerhalb der Europäischen Union",
        content:
          "Die von der App verarbeiteten Daten werden vom Herausgeber weder verkauft noch vermietet. Die einzigen Empfänger sind:\n\n• Google, für Werbung (Abschnitt 5);\n• Apple oder Google, für Käufe, Bewertungen und Systemmitteilungen, je nach Ihrem Gerät;\n• Behörden, nur wenn das Gesetz es verlangt.\n\nGoogle kann Daten außerhalb der Europäischen Union verarbeiten, insbesondere in den Vereinigten Staaten, unter den in seiner Datenschutzerklärung beschriebenen Garantien.",
      },
      {
        id: "10",
        title: "10. Kinder",
        content: `Die App richtet sich an Personen ab 16 Jahren. Sie richtet sich nicht an Kinder, und wir erheben nicht wissentlich Daten über sie.\n\nIn Frankreich kann ein Minderjähriger unter 15 Jahren der auf Einwilligung beruhenden Verarbeitung seiner Daten nicht allein zustimmen: Die Zustimmung eines Inhabers der elterlichen Sorge ist ebenfalls erforderlich (Artikel 45 des französischen Datenschutzgesetzes, Loi Informatique et Libertés). Wenn Sie ein Elternteil sind und glauben, dass Ihr Kind eine Einwilligung erteilt hat, schreiben Sie uns an ${EMAIL}: Wir erklären Ihnen, wie Sie sie widerrufen.`,
      },
      {
        id: "11",
        title: "11. Ihre Rechte",
        content: `Nach geltendem Recht (insbesondere der DSGVO) haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit sowie das Recht, Ihre Einwilligung jederzeit zu widerrufen, ohne dass die Rechtmäßigkeit der bisherigen Verarbeitung berührt wird.\n\n• Daten auf Ihrem Gerät: Sie kontrollieren sie direkt (Abschnitt 2).\n• Werbeeinwilligung: jederzeit in den Einstellungen der App änderbar (Abschnitt 5).\n• Bei Google gespeicherte Werbedaten: Werkzeuge und Kontakte laut der Datenschutzerklärung von Google.\n• Support-Daten: schreiben Sie an ${EMAIL}. Wir antworten innerhalb eines Monats; diese Frist kann unter den Bedingungen der DSGVO verlängert werden.\n\nWenn Sie der Ansicht sind, dass Ihre Rechte nicht gewahrt wurden, können Sie Beschwerde einlegen bei der ${CNIL}, online unter ${CNIL_URL}, oder bei der Datenschutzbehörde Ihres Wohnsitzlandes.`,
      },
      {
        id: "12",
        title: "12. Sicherheit",
        content:
          "Spieldaten bleiben auf Ihrem Gerät und profitieren von dessen Schutzmaßnahmen. Der Austausch mit Google ist verschlüsselt (TLS). Es werden keine Spieldaten auf einem Server des Herausgebers gespeichert.",
      },
      {
        id: "13",
        title: "13. Änderungen",
        content:
          "Wir können diese Erklärung ändern, insbesondere wenn sich die App weiterentwickelt. Das Datum der letzten Aktualisierung steht oben auf dieser Seite. Bei einer wesentlichen Änderung werden Sie in der App informiert, bevor sie wirksam wird.",
      },
      { id: "14", title: "14. Kontakt", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Herausgeber",
        content: `Die mobile Anwendung Match the Digits (die „App“) wird herausgegeben von:\n\n${PUBLISHER}\n• Adresse: ${ADDRESS}\n• Telefon: ${PHONE}\n• E-Mail: ${EMAIL}\n• ${IDS}, ${REG}\n• USt-IdNr.: ${VAT}, keine Umsatzsteuer ausgewiesen, Artikel 293 B des französischen Steuergesetzbuchs (Code général des impôts)\n• Verantwortlich für den Inhalt: Marc SAMSON\n• Hosting der Seiten der Datenschutzerklärung und dieser Bedingungen: ${HOST}, ${HOST_PHONE}`,
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
      {
        id: "5",
        title: "5. Das Spiel und Ihr Fortschritt",
        content:
          "Die App erfordert kein Konto. Ihr Fortschritt (laufendes Spiel, Punktzahlen, Tagesergebnisse, Trophäen) und Ihre Einstellungen werden nur auf Ihrem Gerät gespeichert.\n\nSie werden vom Herausgeber nicht gesichert: Sie gehen verloren, wenn Sie die App deinstallieren, ihre Daten löschen oder das Gerät wechseln. Der Herausgeber kann sie nicht wiederherstellen.\n\nDie Spielregeln, die Anzahl der verfügbaren Hinweise und Ergänzungen sowie die angebotenen Spielfelder können sich von Version zu Version ändern.",
      },
      {
        id: "6",
        title: "6. Werbung",
        content:
          "Die App ist kostenlos und wird durch Werbung von Google AdMob finanziert:\n\n• ein Banner auf dem Spielbildschirm;\n• eine freiwillige Werbung mit Belohnung: Sie können ein Video ansehen, um einen Hinweis zu erhalten oder die Schaltfläche „+“ erneut zu nutzen (das erste „+“ jedes Spielfelds ist kostenlos). Die Belohnung wird vor dem Video angegeben und nach dem Ansehen gewährt. Wenn Sie ablehnen oder keine Werbung verfügbar ist, können Sie weiterspielen.\n\nDie Werbung wird von Google ausgewählt. Der Herausgeber kontrolliert ihren Inhalt nicht und ist nicht für die darin vorgestellten Produkte oder Dienstleistungen verantwortlich. Ihre Wahlmöglichkeiten zur Nutzung Ihrer Daten für Werbung sind in der Datenschutzerklärung beschrieben.",
      },
      {
        id: "7",
        title: "7. Kauf „Werbung entfernen“",
        subsections: [
          {
            subtitle: "Was Sie erhalten",
            content:
              "Die App bietet einen einmaligen, dauerhaften Kauf („Werbung entfernen“):\n\n• er entfernt jegliche Werbung aus der App, einschließlich der Werbung mit Belohnung: Hinweise und Ergänzungen werden dann direkt gewährt;\n• er verschafft keinen Spielvorteil: Jeder Spieler hat 4 Hinweise pro Spiel, mit oder ohne Kauf; die Anzahl der Ergänzungen und die Regeln sind für alle gleich;\n• er ist kein Abonnement: Er wird nur einmal berechnet und verlängert sich nicht.",
          },
          {
            subtitle: "Preis und Zahlung",
            content:
              "Der Preis wird vor dem Kauf im App Store oder bei Google Play angezeigt, einschließlich der in Ihrem Land geltenden Steuern. Die Zahlung wird ausschließlich von Apple oder Google nach deren Bedingungen abgewickelt. Der Herausgeber erhält nie Ihre Zahlungsdaten.",
          },
          {
            subtitle: "Wiederherstellung Ihres Kaufs",
            content:
              "Der Kauf ist mit dem Apple- oder Google-Konto verknüpft, mit dem er getätigt wurde. Sie können ihn auf einem neuen Gerät oder nach einer Neuinstallation mit demselben Konto kostenlos über die Schaltfläche „Käufe wiederherstellen“ in den Einstellungen wiederherstellen.",
          },
          {
            subtitle: "Widerruf und Erstattung",
            content: `Der Kauf betrifft digitale Inhalte, die unmittelbar nach der Zahlung bereitgestellt werden. Das Widerrufsrecht und Erstattungsanträge werden zu den Bedingungen des geltenden Rechts und der Regeln des jeweiligen Stores ausgeübt:\n\n• App Store: Antrag bei Apple unter ${APPLE_REFUND}\n• Google Play: Antrag bei Google nach dem Verfahren unter ${GOOGLE_REFUND}\n\nSie können uns auch an ${EMAIL} schreiben.`,
          },
        ],
      },
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
      {
        id: "10",
        title: "10. Verfügbarkeit und Updates",
        content:
          "Der Herausgeber kann die App ändern, Fehler beheben, Funktionen ändern oder entfernen oder ihren Vertrieb einstellen. Einige Updates können erforderlich sein, um die App weiter zu nutzen. Der Herausgeber bemüht sich um ihr ordnungsgemäßes Funktionieren, garantiert jedoch keine unterbrechungsfreie Verfügbarkeit, insbesondere bei der Anzeige von Werbung, die von Google abhängt.",
      },
      {
        id: "11",
        title: "11. Gewährleistung und Haftung",
        content:
          "Die App wird „wie besehen“ bereitgestellt. Nichts in diesen Bedingungen schränkt die Rechte ein, die Ihnen als Verbraucher gesetzlich zustehen, insbesondere die gesetzliche Gewährleistung für digitale Inhalte und Dienstleistungen.\n\nSoweit gesetzlich zulässig, haftet der Herausgeber nicht für:\n\n• den Verlust Ihres auf Ihrem Gerät gespeicherten Fortschritts (Abschnitt 5);\n• mittelbare Schäden;\n• von Dritten bereitgestellte Werbeinhalte;\n• Nichtverfügbarkeit, die durch Ihr Gerät, Ihr Betriebssystem, Ihre Verbindung oder die Dienste von Apple und Google verursacht wird.\n\nDiese Beschränkungen gelten nicht bei grober Fahrlässigkeit oder Vorsatz, bei Personenschäden oder wenn das Gesetz sie untersagt.",
      },
      {
        id: "12",
        title: "12. Ende der Nutzung",
        content:
          "Sie können die Nutzung der App jederzeit beenden, indem Sie sie deinstallieren. Der Herausgeber kann Ihre Lizenz kündigen, wenn Sie diese Bedingungen nicht einhalten. Die Abschnitte 9, 11 und 14 gelten nach dem Ende der Lizenz fort.",
      },
      {
        id: "13",
        title: "13. Änderungen dieser Bedingungen",
        content:
          "Der Herausgeber kann diese Bedingungen ändern, insbesondere um Änderungen der App oder des Rechts zu berücksichtigen. Das Datum der letzten Aktualisierung steht oben auf dieser Seite. Bei einer wesentlichen Änderung werden Sie in der App informiert, bevor sie wirksam wird. Wenn Sie die neuen Bedingungen nicht akzeptieren, können Sie die Nutzung der App beenden.",
      },
      {
        id: "14",
        title: "14. Anwendbares Recht, Schlichtung und Streitigkeiten",
        content: `Diese Bedingungen unterliegen französischem Recht. Wenn Sie Verbraucher mit Wohnsitz in einem anderen Land sind, behalten Sie den Schutz der zwingenden Vorschriften des Rechts Ihres Landes.\n\nSchreiben Sie bei Schwierigkeiten zuerst an ${EMAIL}: Wir suchen nach einer gütlichen Lösung.\n\nVerbraucherschlichtung: Wenn Sie Verbraucher sind und Ihre schriftliche Beschwerde nicht gelöst wurde, können Sie kostenlos die folgende Verbraucherschlichtungsstelle anrufen: ${MEDIATOR}.\n\nKommt keine Einigung zustande, wird die Streitigkeit vor die zuständigen Gerichte gebracht; als Verbraucher können Sie insbesondere das Gericht Ihres Wohnorts anrufen.`,
      },
      { id: "15", title: "15. Kontakt", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
};
