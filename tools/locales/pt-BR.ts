import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_SUPPORT, IDS, LICENSES, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "pt-br/";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI, empresário individual francês), com o nome comercial Primisia";

export const ptBR: Locale = {
  code: "pt-BR",
  dir,
  name: "Português (Brasil)",
  updated: "21 de novembro de 2026",
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
    privacyDesc: "Privacidade do Match the Digits: progresso local, classificação, segurança, anúncios, Premium e exclusão de conta.",
    termsDesc: "Termos de Uso do jogo Match the Digits: licença, publicidade, compra única Remover anúncios, responsabilidade e lei aplicável.",
    supportDesc: "Suporte, contato e perguntas frequentes do jogo de raciocínio Match the Digits.",
    supportIntro: "Precisa de ajuda? Escreva para nós e, se puder, informe o modelo do seu dispositivo.",
    emailSupport: "Suporte por e-mail",
    faqTitle: "Perguntas frequentes",
    language: "Idioma",
    translationNote: "Esta tradução é fornecida apenas para fins informativos. Em caso de divergência, prevalece a versão em francês.",
  },
  faq: [
    ["Preciso de conta?", "Não é preciso e-mail ou senha para jogar. A classificação cria identidade anônima com apelido atribuído."],
    ["Quantas dicas e adições?", "Até 4 dicas e 5 adições por tabuleiro. As 2 primeiras adições são grátis; sem Premium, as outras 3 e dicas oferecem anúncios recompensados."],
    ["E se o anúncio não funcionar?", "Se indisponível após o pedido, a ação pode ser concedida sem vídeo dentro do saldo restante. Recusar ou fechar voluntariamente antes da recompensa não a concede."],
    ["Premium é assinatura?", "Não, é compra única sem anúncios, inclusive em dicas e adições. Os limites são iguais."],
    ["Como restauro Premium?", "Em Configurações, Restaurar compras com conta e loja originais. Não há transferência automática entre Apple e Google."],
    ["Como excluo minha conta de classificação?", "Solicite e acompanhe na seção de conta das Configurações. Sem acesso ao app, envie e-mail ao suporte com Match the Digits e apelido/identificador de classificação, nunca token ou senha. Pode haver verificação."],
    ["Posso voltar após excluir?", "Após concluir, pode solicitar nova identidade e apelido, sujeito a restrições contra abuso. Progresso preservado pode permitir republicar o recorde. Premium segue as regras da loja."],
    ["O que faz Apagar também meu progresso?", "Zera partida, recorde e resultados locais relacionados, sem apagar Premium ou preferências. Sem a opção o progresso fica."],
    ["Desinstalar apaga tudo?", "Pode perder o progresso local, mas não solicita exclusão do servidor. A classificação não é um backup completo."],
    ["Onde gerencio consentimento publicitário?","Em Configurações, abra Privacidade dos anúncios quando disponível para revisar ou alterar suas escolhas, incluindo recusas aplicáveis nos EUA. A disponibilidade depende da versão e do Google UMP. No iOS, gerencie também o rastreamento nos ajustes do aparelho. Versões antigas podem exigir atualização; o suporte continua disponível."],
    ["Por que meu lembrete não aparece?", "Verifique lembretes no app e permissão de notificações no telefone."],
    ["Como solicito reembolso?", "Procure Apple ou Google conforme a loja. Os procedimentos estão nos termos; também pode contatar o suporte."]
  ],
  privacy: {
    sections: [
      { id: "0", title: "Resumo", content: "Atualização: 21 de novembro de 2026.\n\nVocê pode jogar sem informar nome, e-mail ou senha. A classificação usa uma conta anônima; um identificador técnico não anonimiza os dados associados. Partida e configurações ficam no dispositivo; apelido e recorde da classificação ficam em nosso servidor e são visíveis na classificação. Terceiros fornecem segurança, anúncios e compras. Você pode excluir a conta de classificação com ou sem apagar o progresso local." },
      {
        id: "1",
        title: "1. Controlador dos dados",
        content: `O Aplicativo é publicado por:\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nContato para qualquer dúvida sobre seus dados: ${EMAIL}\n\nPara os dados publicitários tratados pelo Google, o Google atua como controlador independente, segundo suas próprias regras (seção 5).`,
      },
      { id: "2", title: "2. Progresso e preferências locais", content: "O dispositivo armazena a partida, recorde local, resultados dos desafios diários, estatísticas de troféus, preferências e datas dos pedidos de avaliação. O recorde destinado à classificação é enviado separadamente.\n\nNão oferecemos backup no servidor capaz de restaurar todo o progresso em outro dispositivo. Limpar dados ou desinstalar pode causar sua perda. Backups do sistema dependem das configurações do aparelho." },
      { id: "2a", title: "2a. Conta e classificação", content: "Uma conta técnica anônima é criada no primeiro acesso à classificação. Nosso Supabase auto-hospedado guarda identidade de acesso, sessões, apelido atribuído, recorde publicado, datas e estado da conta. Credenciais de sessão também ficam no dispositivo.\n\nApelido, pontuação e posição são visíveis; credenciais e comprovantes de exclusão não são públicos. Um recorde elegível de uma partida encerrada ou abandonada pode ser enviado ou reenviado após falha de rede. A classificação não é backup da partida." },
      { id: "2b", title: "2b. Segurança e prevenção de abuso", content: "Tratamos dados técnicos de requisições, incluindo IP na entrada do serviço, hashes de instalação/rede, datas e contadores, para proteger a classificação, limitar cadastros repetidos e gerenciar exclusões e restrições. Esses hashes continuam sendo dados pseudônimos.\n\nFirebase App Check e mecanismos de atestação Apple/Google verificam requisições com dados técnicos e tokens de atestação. Firebase não fornece mais autenticação nem armazenamento da classificação. Informações: https://firebase.google.com/support/privacy" },
      {
        id: "3",
        title: "3. Lembretes (notificações)",
        content:
          "Se você ativar os lembretes nas configurações, o Aplicativo pede permissão para exibir notificações. Os lembretes são programados localmente no seu dispositivo: nenhum token de notificação é criado ou enviado a um servidor. Você pode desativá-los a qualquer momento nas configurações do Aplicativo ou do dispositivo. Os lembretes não contêm publicidade.",
      },
      { id: "4", title: "4. Suporte", content: `Ao escrever para ${EMAIL}, recebemos seu e-mail, mensagem e anexos escolhidos. A mensagem preparada pode incluir versões do app e do sistema; você pode removê-las.\n\nOs dados servem para responder, verificar solicitações de conta e resolver problemas. São mantidos durante o atendimento e depois somente quando necessários para acompanhamento, defesa de direitos ou obrigação legal. Nunca envie senhas, tokens de acesso ou dados bancários.` },
      { id: "5", title: "5. Anúncios e escolhas de privacidade", content: `Google AdMob fornece banner e vídeos recompensados opcionais. Conforme sistema e permissões, seu SDK trata IP, identificadores de publicidade ou do app, interações e diagnósticos para exibir e medir anúncios e prevenir fraude. Premium remove inclusive vídeos recompensados.\n\nAceitar assistir a um vídeo é diferente de consentir com o tratamento de dados publicitários. As versões com Google UMP exibem um formulário quando o serviço exige, antes de solicitar anúncios; ele está configurado para exibição mundial. Você pode aceitar, recusar ou gerenciar as opções oferecidas. Em Configurações, Privacidade dos anúncios reabre as opções disponíveis, incluindo as recusas aplicáveis nos EUA à venda/ao compartilhamento ou à publicidade direcionada. Recusar o rastreamento não impede jogar. O Google escolhe o idioma conforme o aparelho e as traduções disponíveis; o inglês pode ser usado como alternativa. Versões antigas podem não ter essa opção: atualize o app ou contate o suporte para exercer seus direitos. O suporte não substitui o consentimento exigido antes do tratamento.\n\nAndroid permite redefinir ou excluir o identificador de publicidade. No iOS, acesso ao IDFA e rastreamento sujeito a ATT exigem a autorização Apple correspondente. Essas configurações não apagam, sozinhas, dados já mantidos pelos fornecedores. Direitos locais, inclusive de oposição a certas formas de publicidade direcionada, continuam aplicáveis.\n\nGoogle: ${GOOGLE_PRIVACY}\nServiços parceiros: ${GOOGLE_PARTNERS}` },
      { id: "6", title: "6. Compra Premium e restauração", content: "Apple ou Google processa o pagamento e mantém dados de faturamento conforme suas regras. Não recebemos o número do cartão.\n\nRevenueCat verifica e restaura a compra única sem anúncios. Trata identificador pseudônimo, transação/recibo, produto, loja e direito Premium. O app também conserva o estado necessário ao acesso. Excluir a conta de classificação não exclui a compra; dados de restauração e obrigações aplicáveis são tratados separadamente.\n\nInformações: https://www.revenuecat.com/privacy" },
      {
        id: "7",
        title: "7. Avaliações e comentários",
        content:
          "Quando o Aplicativo convida você a avaliá-lo, ele usa a janela oficial da Apple ou do Google. Sua nota e seu comentário são tratados pela loja correspondente, segundo suas próprias regras; o Aplicativo não tem acesso a eles.",
      },
      { id: "8", title: "8. Finalidades e bases legais", content: "Jogo, conta de classificação solicitada e gestão/restauração do Premium se baseiam na prestação do serviço ou contrato. Segurança, limites contra abuso e suporte se baseiam em nosso interesse legítimo de proteger serviço e usuários, respeitados seus direitos. Lembretes são opcionais e dependem da permissão do dispositivo.\n\nPublicidade e acesso a identificadores dependem de consentimento quando exigido. Algumas retenções atendem obrigações legais ou à constituição, exercício ou defesa de direitos. Essas bases não autorizam reutilização indiscriminada." },
      { id: "9", title: "9. Fornecedores e transferências", content: `Destinatários necessários:\n• Contabo, servidor de Supabase e classificação;\n• Cloudflare, encaminhamento e proteção de requisições;\n• Backblaze, backups e diário de decisões criptografados;\n• Google/Firebase e Apple, atestação e serviços do sistema;\n• Google AdMob, publicidade;\n• RevenueCat e Apple/Google, compras;\n• GitHub Pages, estes documentos públicos; autoridades quando a lei exigir.\n\nSupabase é auto-hospedado, não significa hospedar jogadores no Supabase Cloud. Fornecedores internacionais podem tratar dados fora do EEE, inclusive nos Estados Unidos. As garantias dependem do serviço e contrato; peça detalhes a ${EMAIL}. Não garantimos tratamento exclusivamente europeu. Não vendemos dados da classificação.\n\nAvisos: https://contabo.com/en/legal/privacy/ ; https://www.cloudflare.com/privacypolicy/ ; https://www.backblaze.com/company/privacy ; https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement` },
      {
        id: "10",
        title: "10. Crianças",
        content: `O Aplicativo é destinado a pessoas com pelo menos 16 anos. Ele não é direcionado a crianças, e não coletamos intencionalmente dados sobre elas.\n\nNa França, um menor de 15 anos não pode consentir sozinho com o tratamento de seus dados baseado em consentimento: também é necessária a concordância de um titular da autoridade parental (artigo 45 da Lei francesa de proteção de dados, Loi Informatique et Libertés). Se você é pai ou mãe e acredita que seu filho deu consentimento, escreva para ${EMAIL}: diremos como retirá-lo.`,
      },
      { id: "11", title: "11. Exclusão da conta e direitos", content: `A seção da conta de classificação em Configurações permite solicitar e acompanhar a exclusão. Após aceitação pelo servidor, o perfil sai da classificação e a identidade e dados ativos relacionados são posteriormente excluídos. Uma solicitação offline precisa ser transmitida; desinstalar não exclui a conta do servidor.\n\n“Apagar também meu progresso” zera partida, recorde e resultados locais relacionados. Sem a opção, ficam no dispositivo. Premium e preferências são preservados. Após a exclusão, retornar voluntariamente cria nova identidade e apelido, sujeito a restrições contra abuso. O recorde local preservado pode ser republicado; a conta anterior não é restaurada e seu apelido pode ser reatribuído.\n\nSem acesso ao app, escreva a ${EMAIL} informando Match the Digits e apelido/identificador de classificação disponível, nunca token ou senha. Uma verificação proporcional pode evitar excluir contas de terceiros.\n\nConforme sua situação, há direitos de acesso, correção, exclusão, limitação, oposição, portabilidade e retirada de consentimento. Respondemos normalmente em um mês, prorrogável legalmente. Você pode reclamar à CNIL, ${CNIL_URL}, ou à autoridade competente do seu país.` },
      { id: "12", title: "12. Segurança", content: "As comunicações são criptografadas em trânsito. O acesso administrativo é restrito; backups e diário de decisões são criptografados. Isso reduz riscos sem garantir segurança absoluta. A classificação pública continua visível; não envie segredos pelos canais de suporte." },
      { id: "12a", title: "12a. Retenção e backups", content: `Dados locais ficam até serem apagados ou substituídos. Conta e recorde da classificação ficam até excluir a conta. Contadores temporários e restrições têm prazos próprios; certas informações são necessárias contra abuso e para contestação.\n\nA rotação mantém 7 pontos diários, 4 semanais e 2 mensais. Não garante apagar todas as cópias em uma data exata. O diário impede que uma restauração reintroduza contas excluídas.\n\nComprovantes de exclusão e diário são atualmente mantidos sem limpeza automática. Podem conter identificadores técnicos, hashes, datas e estados. Solicite revisão da retenção ou exclusão a ${EMAIL}. Dados de compra seguem separadamente necessidades de restauração e obrigações aplicáveis.` },
      { id: "13", title: "13. Alterações", content: "Esta política está nas configurações e no site. A data identifica a versão. Atualizações acompanham o serviço; continuam válidos os deveres de informar e obter novo consentimento quando exigido." },
      { id: "14", title: "14. Contato", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Editor",
        content: `O aplicativo móvel Match the Digits (o \"Aplicativo\") é publicado por:\n\n${PUBLISHER}\n• Endereço: ${ADDRESS}\n• Telefone: ${PHONE}\n• E-mail: ${EMAIL}\n• ${IDS}, ${REG}\n• Número de IVA intracomunitário: ${VAT}, IVA não aplicável, artigo 293 B do Código Geral de Impostos francês\n• Diretor de publicação: Marc SAMSON\n• Hospedagem das páginas da política de privacidade e destes Termos: ${HOST}, ${HOST_SUPPORT}`,
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
      { id: "5", title: "5. Jogo, progresso e classificação", content: "Não é necessária conta com e-mail/senha para jogar. A classificação usa identidade técnica anônima e apelido atribuído. Perfis virtuais identificados não representam jogadores reais. Não há prêmios em dinheiro.\n\nPartidas, desafios, troféus e configurações são principalmente locais. O servidor guarda o recorde publicado, não backup completo. Encerrar ou abandonar uma partida para iniciar outra pode enviar o recorde elegível, com novas tentativas após falha de rede.\n\nPor tabuleiro: até cinco adições, sendo duas gratuitas, e quatro dicas. Sem Premium, as três adições seguintes e dicas oferecem anúncios recompensados. Premium mantém os limites.\n\nTrapaças, pontuações falsas ou cadastros repetidos abusivos podem levar a restrições ou exclusão. É possível contestar pelo suporte." },
      { id: "6", title: "6. Anúncios e recompensas", content: "Um banner pode aparecer no jogo. Antes de uma dica ou recarga correspondente, um vídeo recompensado é oferecido com sua aceitação. Confirmada a recompensa, a ação é concedida dentro do saldo restante.\n\nSe o anúncio estiver tecnicamente indisponível após o pedido, o app pode conceder a ação sem vídeo e exibir aviso discreto. Recusar ou fechar antes da recompensa não concede a ação. Premium não adiciona recargas acima do limite esgotado.\n\nAnúncios e destinos são de terceiros. A política explica os dados envolvidos; aceitar o vídeo não equivale a consentimento de privacidade." },
      { id: "7", title: "7. Compra \"Remover anúncios\"", subsections: [{ subtitle: "O que você recebe", content: "Premium é compra única sem renovação automática. Remove banner e anúncios recompensados: dicas e adições são diretas, com os mesmos limites de quatro dicas e cinco adições por tabuleiro. A grade pode usar o espaço liberado pelo banner." },
{ subtitle: "Preço e pagamento", content: "Quando disponível, a oferta mostra o preço localizado da loja. Confira preço e condições na confirmação Apple ou Google. Compras canceladas, pendentes ou falhas não são consideradas adquiridas. RevenueCat verifica Premium; não recebemos dados do cartão." },
{ subtitle: "Restauração", content: "Use Restaurar compras em Configurações com conta e loja originais. Pode ser necessária conexão. Compras Apple não passam automaticamente ao Google Play ou vice-versa. Apagar classificação ou progresso não cancela a compra." },
{
            subtitle: "Arrependimento e reembolso",
            content: `A compra se refere a conteúdo digital fornecido imediatamente após o pagamento. O direito de arrependimento e os pedidos de reembolso são exercidos nas condições previstas pela lei aplicável e pelas regras da loja correspondente:\n\n• App Store: pedido à Apple, em ${APPLE_REFUND}\n• Google Play: pedido ao Google, seguindo o procedimento em ${GOOGLE_REFUND}\n\nVocê também pode nos escrever em ${EMAIL}.`,
          }] },
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
      { id: "10", title: "10. Disponibilidade e atualizações", content: "Classificação, compras e algumas verificações exigem conexão e fornecedores. Falhas, manutenção, restrições de segurança ou anúncios indisponíveis podem afetá-los. O jogo local pode continuar conforme o estado da partida.\n\nPodemos corrigir ou desenvolver o app. Permanecem direitos obrigatórios do consumidor e deveres sobre serviços digitais. A compra sem anúncios não garante disponibilidade perpétua do serviço online." },
      {
        id: "11",
        title: "11. Garantias e responsabilidade",
        content:
          "O Aplicativo é fornecido \"no estado em que se encontra\". Nada nestes Termos limita os direitos que a lei lhe garante como consumidor, em especial a garantia legal de conformidade dos conteúdos e serviços digitais.\n\nNa medida permitida por lei, o editor não é responsável por:\n\n• perda do seu progresso salvo no dispositivo (seção 5);\n• danos indiretos;\n• conteúdos publicitários fornecidos por terceiros;\n• indisponibilidade causada pelo seu dispositivo, sistema operacional, conexão ou pelos serviços da Apple e do Google.\n\nEssas limitações não se aplicam em caso de culpa grave ou dolo, a danos pessoais nem quando a lei as proíbe.",
      },
      { id: "12", title: "12. Exclusão e fim do uso", content: `Você pode parar quando quiser. Para excluir a conta do servidor, use a classificação em Configurações ou ${EMAIL}; desinstalar não basta. Tratamento e backups são descritos na política.\n\nApagar progresso local é opcional. A conta excluída não pode ser recuperada; um retorno permitido cria identidade e apelido novos. O recorde local preservado pode ser reutilizado. Premium permanece vinculado à compra independentemente da classificação.\n\nAbusos podem restringir a classificação sem retirar direitos legais. Propriedade intelectual, responsabilidade e resolução de disputas continuam aplicáveis.` },
      { id: "13", title: "13. Alterações dos termos", content: "A versão vigente, datada, está no app e site. Evoluções legais ou do serviço podem exigir revisões. Deveres de informação e direitos adquiridos do consumidor permanecem." },
      { id: "14", title: "14. Lei, mediação e disputas", content: `Aplica-se a lei francesa sem retirar proteções obrigatórias do consumidor em seu país de residência.\n\nEnvie reclamações a ${EMAIL}. Após reclamação escrita prévia, permanece o direito à mediação gratuita de consumo nas condições legais. A adesão do editor a um sistema de mediação ainda precisa ser concluída; os contatos serão publicados após adesão. Estes termos não designam um mediador.\n\nSem acordo, podem ser acionados os tribunais competentes, preservados os recursos do consumidor relacionados à sua residência.` },
      { id: "15", title: "15. Contato", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
};
