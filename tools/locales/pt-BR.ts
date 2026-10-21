import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_PHONE, IDS, LICENSES, MEDIATOR, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "pt-br/";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI — empresário individual francês), com o nome comercial Primisia";

export const ptBR: Locale = {
  code: "pt-BR",
  dir,
  name: "Português (Brasil)",
  updated: "21 de outubro de 2026",
  ui: {
    legalDocuments: "Documentos legais",
    privacyPolicy: "Política de Privacidade",
    termsOfUse: "Termos de Uso",
    support: "Suporte",
    privacySub: "Dados, publicidade, consentimento e seus direitos",
    termsSub: "Licença, anúncios, compra Remover anúncios e responsabilidade",
    supportSub: "Contato, perguntas frequentes e ajuda com compras",
    lastUpdated: "Última atualização",
    footer: "Publicado por Marc SAMSON EI, com o nome comercial Primisia",
    indexDesc: "Política de Privacidade, Termos de Uso e Suporte do jogo de raciocínio Match the Digits.",
    privacyDesc: "Política de Privacidade do jogo Match the Digits: sem conta, dados do jogo no seu dispositivo, anúncios do Google AdMob com consentimento.",
    termsDesc: "Termos de Uso do jogo Match the Digits: licença, publicidade, compra única Remover anúncios, responsabilidade e lei aplicável.",
    supportDesc: "Suporte, contato e perguntas frequentes do jogo de raciocínio Match the Digits.",
    supportIntro: "Precisa de ajuda? Escreva para nós e, se puder, informe o modelo do seu dispositivo.",
    emailSupport: "Suporte por e-mail",
    faqTitle: "Perguntas frequentes",
    language: "Idioma",
    translationNote: "Esta tradução é fornecida apenas para fins informativos. Em caso de divergência, prevalece a versão em francês.",
  },
  faq: [
    ["Preciso criar uma conta?", "Não. O Match the Digits não exige conta, cadastro nem login. Você pode jogar logo após instalar."],
    ["Comprei \"Remover anúncios\", mas ainda vejo anúncios", "Abra as configurações do app e toque em <strong>Restaurar compras</strong>. Verifique se você está conectado com a mesma conta da App Store ou do Google Play usada na compra."],
    ["\"Remover anúncios\" é uma assinatura?", "Não. É uma compra única: é cobrada uma só vez e nunca é renovada. Ela remove todos os anúncios, inclusive o anúncio premiado opcional das dicas. Não dá nenhuma vantagem no jogo: todo jogador tem 4 dicas por partida."],
    ["Como funcionam as dicas?", "Cada partida dá 4 dicas. Sem a compra \"Remover anúncios\", você pode optar por assistir a um anúncio curto para revelar uma dica. É opcional: você sempre pode continuar jogando sem assistir."],
    ["Como altero minhas escolhas de publicidade?", "Abra as configurações do app para consultar ou alterar o consentimento dado para publicidade. No Android, você também pode redefinir ou excluir seu ID de publicidade nas configurações do dispositivo."],
    ["Meu lembrete não aparece", "Verifique se as notificações do Match the Digits estão permitidas nas configurações do dispositivo e se os lembretes estão ativados nas configurações do app."],
    ["Vou perder meu progresso?", "Sua partida, pontuações, resultados diários e configurações ficam salvos apenas no seu dispositivo. Desinstalar o app, apagar os dados dele ou trocar de dispositivo os exclui definitivamente: não guardamos nenhuma cópia e não podemos restaurá-los."],
    ["Como peço um reembolso?", `As compras são processadas pela Apple ou pelo Google. Peça o reembolso à Apple em <a href="${APPLE_REFUND}">reportaproblem.apple.com</a>, ou ao Google seguindo <a href="${GOOGLE_REFUND}">este procedimento</a>. Você também pode nos escrever.`],
  ],
  privacy: {
    sections: [
      {
        id: "0",
        title: "Resumo",
        content:
          "Data de vigência: 21 de outubro de 2026.\n\nEsta política explica quais dados são tratados quando você usa o aplicativo móvel Match the Digits (o \"Aplicativo\") no iOS e no Android, por quê, por quem, por quanto tempo e como exercer seus direitos.\n\n• O Aplicativo não pede que você crie uma conta e não pede seu nome, e-mail ou data de nascimento para jogar.\n• Seu progresso e suas configurações ficam salvos apenas no seu dispositivo. Nós não os recebemos.\n• O Aplicativo exibe anúncios fornecidos pelo Google (AdMob). Para isso, o Google trata alguns dados do seu dispositivo, descritos na seção 5. No Espaço Econômico Europeu, no Reino Unido e na Suíça, seu consentimento é solicitado antes de qualquer anúncio personalizado.\n• Só recebemos dados sobre você se você nos escrever (suporte).",
      },
      {
        id: "1",
        title: "1. Controlador dos dados",
        content: `O Aplicativo é publicado por:\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nContato para qualquer dúvida sobre seus dados: ${EMAIL}\n\nPara os dados publicitários tratados pelo Google, o Google atua como controlador independente, segundo suas próprias regras (seção 5).`,
      },
      {
        id: "2",
        title: "2. Dados salvos apenas no seu dispositivo",
        content:
          "Os seguintes dados são salvos no armazenamento local do Aplicativo, no seu dispositivo. Eles não são enviados para nós nem para nenhum servidor do editor:\n\n• Partida em andamento (tabuleiro, pontuação, dicas e adições restantes) — para retomar sua partida\n• Melhor pontuação — para exibi-la na tela inicial e nos troféus\n• Resultados diários (tabuleiros concluídos, pontos, pares, desafios diários) — calendário, estatísticas, troféus\n• Preferências: idioma, resposta tátil, efeitos sonoros, lembretes — para respeitar suas configurações\n• Datas dos pedidos de avaliação já exibidos — para não pedir com muita frequência que você avalie o Aplicativo\n\nEsses dados são mantidos enquanto o Aplicativo estiver instalado. Você pode excluí-los a qualquer momento apagando os dados do Aplicativo (Android) ou desinstalando-o (iOS e Android). Depois disso, não podem ser recuperados: o editor não faz nenhum backup.",
      },
      {
        id: "3",
        title: "3. Lembretes (notificações)",
        content:
          "Se você ativar os lembretes nas configurações, o Aplicativo pede permissão para exibir notificações. Os lembretes são programados localmente no seu dispositivo: nenhum token de notificação é criado ou enviado a um servidor. Você pode desativá-los a qualquer momento nas configurações do Aplicativo ou do dispositivo. Os lembretes não contêm publicidade.",
      },
      {
        id: "4",
        title: "4. Suporte (quando você nos escreve)",
        content: `O botão \"Falar com o suporte\" abre seu aplicativo de e-mail com uma mensagem pré-preenchida para ${EMAIL}. Se você a enviar, recebemos:\n\n• seu endereço de e-mail e o conteúdo da sua mensagem;\n• a versão do Aplicativo, o sistema operacional (iOS ou Android) e sua versão, adicionados automaticamente ao final da mensagem para nos ajudar a resolver o problema. Você pode removê-los antes de enviar.\n\nEsses dados são usados apenas para responder a você. São excluídos assim que sua solicitação é atendida.`,
      },
      {
        id: "5",
        title: "5. Publicidade (Google AdMob)",
        subsections: [
          {
            subtitle: "Dados tratados pelo Google",
            content:
              "O Aplicativo exibe anúncios fornecidos pelo Google AdMob, por meio do SDK Google Mobile Ads integrado ao Aplicativo. Segundo a documentação que o Google publica para desenvolvedores, o Google trata:\n\n• Endereço IP, que pode ser usado para estimar a localização aproximada do dispositivo — publicidade, medição, prevenção de fraudes\n• Interações com o Aplicativo (aberturas, toques, vídeos assistidos) — publicidade, medição, prevenção de fraudes\n• Dados de diagnóstico e desempenho (tempo de abertura, travamentos, consumo de energia); no iOS, registros de falhas não vinculados ao usuário — diagnóstico, melhoria, publicidade, medição\n• Identificadores do dispositivo: ID de publicidade (Android), App Set ID, outros identificadores do aplicativo ou do desenvolvedor — publicidade e medição\n• Dados de publicidade (anúncios vistos) — publicidade e medição\n\nO Google informa que esses dados são criptografados durante a transferência (TLS). O editor não tem acesso a esses dados individuais: recebe apenas estatísticas agregadas (número de impressões, receita).",
          },
          {
            subtitle: "Anúncios exibidos no Aplicativo",
            content:
              "• um banner na tela de jogo;\n• um anúncio premiado opcional: você pode optar por assistir a um vídeo para ganhar uma dica. Recusar não impede você de jogar.\n\nSe você comprou \"Remover anúncios\" (seção 6), nenhum anúncio é exibido.",
          },
          {
            subtitle: "Seu consentimento (EEE, Reino Unido, Suíça)",
            content:
              "Na primeira abertura, uma janela de consentimento gerenciada pela ferramenta de consentimento do Google permite aceitar ou recusar o uso dos seus dados para fins publicitários, finalidade por finalidade. Se você recusar, o Aplicativo continua totalmente jogável; nesse caso, podem ser exibidos anúncios não personalizados ou limitados. Você pode alterar sua escolha a qualquer momento nas configurações do Aplicativo.",
          },
          {
            subtitle: "iOS — rastreamento",
            content:
              "O Aplicativo não pede permissão para rastrear sua atividade (App Tracking Transparency): o identificador de publicidade do seu dispositivo (IDFA) não é usado. O Aplicativo nunca exige que você aceite o rastreamento para jogar.",
          },
          {
            subtitle: "Android — ID de publicidade",
            content: "Você pode redefinir ou excluir seu ID de publicidade nas configurações do dispositivo.",
          },
          {
            subtitle: "Estados Unidos",
            content:
              "Dependendo do Estado onde você mora, a lei pode lhe dar o direito de recusar a \"venda\" ou o \"compartilhamento\" dos seus dados para publicidade direcionada. Você pode exercer essa escolha nas configurações de privacidade do Aplicativo ou escrevendo para nós.",
          },
          {
            subtitle: "Saiba mais",
            content: `Política de Privacidade do Google: ${GOOGLE_PRIVACY}\nComo o Google usa informações de sites ou apps que utilizam seus serviços: ${GOOGLE_PARTNERS}`,
          },
        ],
      },
      {
        id: "6",
        title: "6. Compra \"Remover anúncios\"",
        content:
          "A compra única que remove os anúncios é processada exclusivamente pela App Store (Apple) ou pelo Google Play (Google). Nunca recebemos seus dados de pagamento (cartão, nome, endereço de cobrança). O Aplicativo recebe da loja apenas a confirmação de que a compra foi feita, para remover os anúncios e permitir sua restauração. O processamento do pagamento é regido pelas políticas de privacidade da Apple ou do Google.",
      },
      {
        id: "7",
        title: "7. Avaliações e comentários",
        content:
          "Quando o Aplicativo convida você a avaliá-lo, ele usa a janela oficial da Apple ou do Google. Sua nota e seu comentário são tratados pela loja correspondente, segundo suas próprias regras; o Aplicativo não tem acesso a eles.",
      },
      {
        id: "8",
        title: "8. Bases legais (RGPD)",
        content:
          "• Funcionamento do jogo e armazenamento local do seu progresso e das suas configurações — execução do serviço que você solicita (contrato)\n• Acesso aos identificadores do dispositivo e publicidade, personalizada ou não, quando a lei exige consentimento — consentimento, que pode ser retirado a qualquer momento (seção 5)\n• Exibição de lembretes — consentimento (permissão de notificações), que pode ser retirado a qualquer momento\n• Resposta às suas solicitações de suporte — interesse legítimo em responder; ou procedimentos preliminares / contrato se a solicitação disser respeito a uma compra\n• Cumprimento de obrigações legais (por exemplo, contábeis em relação às compras) — obrigação legal",
      },
      {
        id: "9",
        title: "9. Destinatários e transferências para fora da União Europeia",
        content:
          "Os dados tratados pelo Aplicativo não são vendidos nem alugados pelo editor. Os únicos destinatários são:\n\n• o Google, para publicidade (seção 5);\n• a Apple ou o Google, para compras, avaliações e notificações do sistema, conforme seu dispositivo;\n• as autoridades, somente quando exigido por lei.\n\nO Google pode tratar dados fora da União Europeia, em especial nos Estados Unidos, com as garantias descritas em sua política de privacidade.",
      },
      {
        id: "10",
        title: "10. Crianças",
        content: `O Aplicativo é destinado a pessoas com pelo menos 16 anos. Ele não é direcionado a crianças, e não coletamos intencionalmente dados sobre elas.\n\nNa França, um menor de 15 anos não pode consentir sozinho com o tratamento de seus dados baseado em consentimento: também é necessária a concordância de um titular da autoridade parental (artigo 45 da Lei francesa de proteção de dados — Loi Informatique et Libertés). Se você é pai ou mãe e acredita que seu filho deu consentimento, escreva para ${EMAIL}: diremos como retirá-lo.`,
      },
      {
        id: "11",
        title: "11. Seus direitos",
        content: `De acordo com a lei aplicável (em especial o RGPD), você tem os direitos de acesso, retificação, exclusão, limitação, oposição e portabilidade, e o direito de retirar seu consentimento a qualquer momento, sem afetar o tratamento já realizado.\n\n• Dados no seu dispositivo: você os controla diretamente (seção 2).\n• Consentimento para publicidade: pode ser alterado a qualquer momento nas configurações do Aplicativo (seção 5).\n• Dados de publicidade mantidos pelo Google: ferramentas e contatos descritos na política de privacidade do Google.\n• Dados de suporte: escreva para ${EMAIL}. Respondemos em até um mês, prazo que pode ser prorrogado nas condições previstas pelo RGPD.\n\nSe você considerar que seus direitos não foram respeitados, pode apresentar uma reclamação à ${CNIL}, ou on-line em ${CNIL_URL}, ou à autoridade de proteção de dados do seu país de residência.`,
      },
      {
        id: "12",
        title: "12. Segurança",
        content:
          "Os dados do jogo ficam no seu dispositivo e contam com as proteções dele. As trocas com o Google são criptografadas (TLS). Nenhum dado do jogo é armazenado em um servidor do editor.",
      },
      {
        id: "13",
        title: "13. Alterações",
        content:
          "Podemos alterar esta política, em especial se o Aplicativo evoluir. A data da última atualização aparece no topo desta página. Em caso de alteração importante, você será informado no Aplicativo antes que ela se aplique.",
      },
      { id: "14", title: "14. Contato", content: `Marc SAMSON EI — Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Editor",
        content: `O aplicativo móvel Match the Digits (o \"Aplicativo\") é publicado por:\n\n${PUBLISHER}\n• Endereço: ${ADDRESS}\n• Telefone: ${PHONE}\n• E-mail: ${EMAIL}\n• ${IDS} — ${REG}\n• Número de IVA intracomunitário: ${VAT} — IVA não aplicável, artigo 293 B do Código Geral de Impostos francês\n• Diretor de publicação: Marc SAMSON\n• Hospedagem das páginas da política de privacidade e destes Termos: ${HOST} — ${HOST_PHONE}`,
      },
      {
        id: "2",
        title: "2. Objeto e aceitação",
        content: `Estes termos (os \"Termos\") regem o uso do Aplicativo. Ao baixar ou usar o Aplicativo, você os aceita. Se não os aceitar, não use o Aplicativo.\n\nO Aplicativo é destinado a pessoas com pelo menos 16 anos.\n\nO uso dos seus dados pessoais é descrito na Política de Privacidade, disponível em ${privacyUrl(dir)} e nas configurações do Aplicativo.`,
      },
      {
        id: "3",
        title: "3. Licença",
        content: `O editor concede a você uma licença pessoal, não exclusiva, intransferível e revogável para instalar e usar o Aplicativo nos dispositivos que você possui ou controla, para fins privados e não comerciais.\n\n• No iOS, o Aplicativo é licenciado a você nos termos do contrato de licença de usuário final padrão da Apple (Licensed Application End User License Agreement): ${APPLE_EULA}\nEstes Termos o complementam; em caso de conflito, o contrato da Apple prevalece para o uso do Aplicativo no iOS.\n• No Android, o uso do Aplicativo também está sujeito aos Termos de Serviço do Google Play.\n\nO Aplicativo é licenciado, não vendido.`,
      },
      {
        id: "4",
        title: "4. Uso do Aplicativo",
        content:
          "Você se compromete a não:\n\n• copiar, modificar, descompilar, desmontar ou tentar extrair o código-fonte do Aplicativo, salvo quando expressamente permitido por lei;\n• contornar ou perturbar seus mecanismos técnicos, incluindo a exibição de anúncios e as compras no app;\n• gerar artificialmente impressões ou cliques em anúncios;\n• usar o Aplicativo de forma ilegal ou que viole direitos de terceiros.",
      },
      {
        id: "5",
        title: "5. O jogo e seu progresso",
        content:
          "O Aplicativo não exige conta. Seu progresso (partida em andamento, pontuações, resultados diários, troféus) e suas configurações ficam salvos apenas no seu dispositivo.\n\nEles não são copiados pelo editor: são perdidos se você desinstalar o Aplicativo, apagar seus dados ou trocar de dispositivo. O editor não pode restaurá-los.\n\nAs regras do jogo, o número de dicas e adições disponíveis e os tabuleiros oferecidos podem mudar de uma versão para outra.",
      },
      {
        id: "6",
        title: "6. Publicidade",
        content:
          "O Aplicativo é gratuito e financiado por publicidade fornecida pelo Google AdMob:\n\n• um banner na tela de jogo;\n• um anúncio premiado opcional: você pode optar por assistir a um vídeo para ganhar uma dica. A recompensa é informada antes do vídeo e concedida depois que o vídeo é assistido. Se você recusar, ou se nenhum anúncio estiver disponível, pode continuar jogando.\n\nOs anúncios são selecionados pelo Google. O editor não controla seu conteúdo e não é responsável pelos produtos ou serviços apresentados. Suas escolhas sobre o uso dos seus dados para publicidade estão descritas na Política de Privacidade.",
      },
      {
        id: "7",
        title: "7. Compra \"Remover anúncios\"",
        subsections: [
          {
            subtitle: "O que você recebe",
            content:
              "O Aplicativo oferece uma compra única e permanente (\"Remover anúncios\"):\n\n• ela remove todos os anúncios do Aplicativo, inclusive o anúncio premiado: a dica passa a ser concedida diretamente;\n• ela não dá nenhuma vantagem no jogo: todo jogador tem 4 dicas por partida, com ou sem a compra; o número de adições e as regras são iguais para todos;\n• não é uma assinatura: é cobrada uma só vez e não é renovada.",
          },
          {
            subtitle: "Preço e pagamento",
            content:
              "O preço é exibido na App Store ou no Google Play antes da compra, com os impostos aplicáveis no seu país. O pagamento é processado exclusivamente pela Apple ou pelo Google, segundo seus termos. O editor nunca recebe seus dados de pagamento.",
          },
          {
            subtitle: "Restaurar sua compra",
            content:
              "A compra fica vinculada à conta Apple ou Google usada para fazê-la. Você pode recuperá-la gratuitamente em um novo dispositivo ou após reinstalar, com a mesma conta, usando o botão \"Restaurar compras\" nas configurações.",
          },
          {
            subtitle: "Arrependimento e reembolso",
            content: `A compra se refere a conteúdo digital fornecido imediatamente após o pagamento. O direito de arrependimento e os pedidos de reembolso são exercidos nas condições previstas pela lei aplicável e pelas regras da loja correspondente:\n\n• App Store: pedido à Apple, em ${APPLE_REFUND}\n• Google Play: pedido ao Google, seguindo o procedimento em ${GOOGLE_REFUND}\n\nVocê também pode nos escrever em ${EMAIL}.`,
          },
        ],
      },
      {
        id: "8",
        title: "8. Lembretes",
        content:
          "Se você os ativar, o Aplicativo pode enviar lembretes locais. Você pode desativá-los a qualquer momento nas configurações do Aplicativo ou do dispositivo. Eles não contêm publicidade.",
      },
      {
        id: "9",
        title: "9. Propriedade intelectual",
        content: `O Aplicativo, seu nome, elementos visuais, textos, sons, código e apresentação são protegidos pela legislação de propriedade intelectual e pertencem ao editor ou a seus licenciantes. Alguns elementos de terceiros são usados sob sua própria licença:\n\n${LICENSES}\n\nQualquer reprodução ou reutilização não autorizada é proibida.`,
      },
      {
        id: "10",
        title: "10. Disponibilidade e atualizações",
        content:
          "O editor pode alterar o Aplicativo, corrigir erros, modificar ou remover recursos ou deixar de distribuí-lo. Algumas atualizações podem ser necessárias para continuar usando o Aplicativo. O editor se esforça para garantir seu bom funcionamento, mas não garante que ele estará disponível sem interrupção, em especial quanto à exibição de anúncios, que depende do Google.",
      },
      {
        id: "11",
        title: "11. Garantias e responsabilidade",
        content:
          "O Aplicativo é fornecido \"no estado em que se encontra\". Nada nestes Termos limita os direitos que a lei lhe garante como consumidor, em especial a garantia legal de conformidade dos conteúdos e serviços digitais.\n\nNa medida permitida por lei, o editor não é responsável por:\n\n• perda do seu progresso salvo no dispositivo (seção 5);\n• danos indiretos;\n• conteúdos publicitários fornecidos por terceiros;\n• indisponibilidade causada pelo seu dispositivo, sistema operacional, conexão ou pelos serviços da Apple e do Google.\n\nEssas limitações não se aplicam em caso de culpa grave ou dolo, a danos pessoais nem quando a lei as proíbe.",
      },
      {
        id: "12",
        title: "12. Fim do uso",
        content:
          "Você pode deixar de usar o Aplicativo a qualquer momento desinstalando-o. O editor pode encerrar sua licença se você não cumprir estes Termos. As seções 9, 11 e 14 continuam a se aplicar após o fim da licença.",
      },
      {
        id: "13",
        title: "13. Alterações destes Termos",
        content:
          "O editor pode alterar estes Termos, em especial para acompanhar mudanças no Aplicativo ou na lei. A data da última atualização aparece no topo desta página. Em caso de alteração importante, você será informado no Aplicativo antes que ela entre em vigor. Se não aceitar os novos Termos, você pode deixar de usar o Aplicativo.",
      },
      {
        id: "14",
        title: "14. Lei aplicável, mediação e litígios",
        content: `Estes Termos são regidos pela lei francesa. Se você é um consumidor residente em outro país, mantém a proteção das normas obrigatórias da lei do seu país.\n\nEm caso de dificuldade, escreva primeiro para ${EMAIL}: buscaremos uma solução amigável.\n\nMediação de consumo: se você é consumidor e sua reclamação por escrito não foi resolvida, pode recorrer gratuitamente ao seguinte mediador de consumo: ${MEDIATOR}.\n\nNa falta de acordo, o litígio será levado aos tribunais competentes; se você é consumidor, pode recorrer em especial ao tribunal do seu local de residência.`,
      },
      { id: "15", title: "15. Contato", content: `Marc SAMSON EI — Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
};
