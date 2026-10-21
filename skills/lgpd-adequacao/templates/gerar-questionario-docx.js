const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, ImageRun, Header, Footer, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageNumber, LevelFormat, TabStopType,
  TableLayoutType, VerticalAlign
} = require('docx');

const SP = process.env.OUT_DIR || __dirname; // pasta com logo_crop.png; saída gravada aqui
const NAVY = '0C4885', DARK = '343434', LIGHT = 'EAF1FA', MUTED = '6B7280';
const FONT = 'Calibri';
const W = 9638; // A4 content width with 2 cm margins (11906 - 2*1134)

const logo = fs.readFileSync(path.join(SP, 'logo_crop.png'));

const t = (text, o = {}) => new TextRun({ text, font: FONT, size: 21, color: DARK, ...o });
const p = (children, o = {}) => new Paragraph({ children: Array.isArray(children) ? children : [t(children)], spacing: { after: 100, line: 276 }, ...o });

const thin = { style: BorderStyle.SINGLE, size: 4, color: 'B8C7DA' };
const none = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };

function blockTitle(n, title, intro) {
  const out = [
    new Paragraph({
      keepNext: true,
      spacing: { before: 280, after: 80 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: NAVY, space: 4 } },
      children: [t(`Bloco ${n} — `, { bold: true, color: NAVY, size: 26 }), t(title, { bold: true, color: NAVY, size: 26 })],
    }),
  ];
  if (intro) out.push(p([t(intro, { italics: true, color: MUTED, size: 19 })], { keepNext: true, spacing: { after: 120 } }));
  return out;
}

let qn = 0;
function question(text, hint, lines = 2) {
  qn++;
  const cellChildren = [new Paragraph({ keepNext: true, children: [t(`${qn}. `, { bold: true, color: NAVY }), t(text, { bold: true })], spacing: { after: hint ? 20 : 60 } })];
  if (hint) cellChildren.push(new Paragraph({ keepNext: true, children: [t(hint, { italics: true, color: MUTED, size: 18 })], spacing: { after: 60 } }));
  const answer = [];
  for (let i = 0; i < lines; i++) answer.push(new Paragraph({ keepNext: i < lines - 1, children: [t('')], spacing: { after: 0, line: 360 } }));
  return new Table({
    width: { size: W, type: WidthType.DXA },
    columnWidths: [W],
    layout: TableLayoutType.FIXED,
    rows: [
      new TableRow({ cantSplit: true, children: [new TableCell({
        width: { size: W, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, color: 'auto', fill: LIGHT },
        borders: { top: thin, left: thin, right: thin, bottom: none },
        margins: { top: 80, bottom: 40, left: 140, right: 140 },
        children: cellChildren,
      })] }),
      new TableRow({ cantSplit: true, children: [new TableCell({
        width: { size: W, type: WidthType.DXA },
        borders: { top: none, left: thin, right: thin, bottom: thin },
        margins: { top: 60, bottom: 60, left: 140, right: 140 },
        children: [new Paragraph({ keepNext: true, children: [t('Resposta:', { color: MUTED, size: 18 })], spacing: { after: 0 } }), ...answer],
      })] }),
    ],
  });
}
const gap = () => new Paragraph({ children: [], spacing: { after: 120 } });
function qs(list) { const out = []; list.forEach(q => { out.push(question(...q)); out.push(gap()); }); return out; }

function idTable() {
  const rows = [
    ['Empresa (razão social)', ''], ['CNPJ', ''], ['Responsável pelas respostas (nome e cargo)', ''],
    ['E-mail e telefone para contato', ''], ['Data do preenchimento', ''],
  ];
  const c1 = 3600, c2 = W - c1;
  return new Table({
    width: { size: W, type: WidthType.DXA }, columnWidths: [c1, c2], layout: TableLayoutType.FIXED,
    rows: rows.map(([a]) => new TableRow({ children: [
      new TableCell({ width: { size: c1, type: WidthType.DXA }, shading: { type: ShadingType.CLEAR, color: 'auto', fill: LIGHT },
        borders: { top: thin, bottom: thin, left: thin, right: thin }, margins: { top: 90, bottom: 90, left: 140, right: 140 },
        verticalAlign: VerticalAlign.CENTER, children: [p([t(a, { bold: true })], { spacing: { after: 0 } })] }),
      new TableCell({ width: { size: c2, type: WidthType.DXA }, borders: { top: thin, bottom: thin, left: thin, right: thin },
        margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [p('', { spacing: { after: 0 } })] }),
    ] })),
  });
}

function checklist(items) {
  return items.map(i => new Paragraph({ numbering: { reference: 'check', level: 0 }, spacing: { after: 60 }, children: [t(i)] }));
}

const children = [
  new Paragraph({ alignment: AlignmentType.LEFT, spacing: { before: 120, after: 40 },
    children: [t('QUESTIONÁRIO DE DIAGNÓSTICO', { bold: true, size: 34, color: NAVY })] }),
  new Paragraph({ spacing: { after: 240 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '6CA3DE', space: 6 } },
    children: [t('Adequação à Lei Geral de Proteção de Dados Pessoais (Lei 13.709/2018)', { size: 24, color: DARK })] }),

  p([t('Prezado(a) cliente,', { bold: true })]),
  p('Este questionário é a primeira etapa do trabalho de adequação da sua empresa à LGPD. Com ele, entendemos quais dados pessoais a empresa coleta, para que os usa, onde os guarda e com quem os compartilha. Todos os documentos que vamos elaborar (política de privacidade, política de cookies, contratos e normas internas) partem destas respostas — por isso a exatidão é mais importante do que a rapidez.'),
  p([t('Como preencher:', { bold: true, color: NAVY })], { spacing: { after: 60 } }),
  ...[
    'Responda com a realidade de hoje, não com o que a empresa gostaria de fazer. Respostas idealizadas geram documentos que não correspondem à prática — e isso é, em si, um problema perante a lei.',
    '"Não sei" é uma resposta válida e útil: mostra onde precisamos aprofundar na reunião.',
    'Alguns blocos podem ser respondidos por pessoas diferentes (RH, comercial, TI, contador). O ideal é que cada área responda o seu.',
    'Não envie, neste questionário, dados pessoais de clientes ou empregados (nomes, CPFs, exames). Descreva apenas os tipos de informação.',
  ].map(s => new Paragraph({ numbering: { reference: 'bullet', level: 0 }, spacing: { after: 60 }, children: [t(s)] })),
  p([t('Prazo sugerido para devolução: ', { bold: true }), t('____/____/________.')], { spacing: { before: 120, after: 200 } }),
  idTable(),

  ...blockTitle(1, 'Empresa', 'Responsável sugerido: diretoria. Estas respostas definem o enquadramento legal da empresa e o tamanho do projeto.'),
  ...qs([
    ['Qual foi o faturamento bruto aproximado do último exercício?', null, 1],
    ['A empresa faz parte de grupo de empresas (sócios em comum, matriz/filial, coligadas)? Quais?', null, 2],
    ['Quantas pessoas trabalham na empresa? Separe por: empregados CLT, estagiários, prestadores PJ e terceirizados.', null, 2],
    ['A empresa vende para empresas, para pessoas físicas ou para ambos? Qual o percentual aproximado de cada?', null, 2],
    ['A empresa possui licença ou autorização de órgão regulador (ex.: vigilância sanitária, ANVISA)? Quais? Quem é o responsável técnico?', 'Essas normas podem obrigar a empresa a guardar certos documentos por prazos específicos.', 2],
    ['A empresa já recebeu reclamação, notificação, processo ou questionamento envolvendo dados pessoais? Já sofreu vazamento, invasão, vírus de sequestro de dados ou perda/furto de equipamento?', null, 3],
    ['Quem foi pensado para ser o encarregado de proteção de dados? Informe o cargo, a quem responde e quais decisões toma hoje (ex.: escolhe sistemas, define campanhas de marketing, define regras de RH).', 'A lei exige que o encarregado não tenha conflito de interesse com a função. Por isso precisamos saber exatamente o que essa pessoa decide hoje.', 3],
  ]),

  ...blockTitle(2, 'Comercial e atendimento', 'Responsável sugerido: gerente comercial ou de atendimento.'),
  ...qs([
    ['Por quais canais os clientes chegam e compram (loja física, site, telefone, WhatsApp, representantes, licitações, distribuidores)?', null, 2],
    ['Que informações são pedidas ao cliente pessoa física? E ao cliente empresa (dados do comprador, do responsável)?', null, 3],
    ['Onde ficam os cadastros e o histórico de compras (sistema, planilha, papel, celular dos vendedores)?', null, 2],
    ['Os vendedores usam WhatsApp pessoal ou corporativo? Quando um vendedor sai da empresa, o que acontece com as conversas e contatos de clientes?', null, 2],
  ]),

  ...blockTitle(3, 'Produtos para a saúde', 'Responsável sugerido: comercial e responsável técnico. Informações de saúde têm proteção reforçada na lei — este bloco é o mais importante do questionário.'),
  ...qs([
    ['Que produtos vocês vendem para pessoa física? Algum deles revela, por si só, uma condição de saúde de quem compra (ex.: produtos para ostomia, diabetes, incontinência, oxigenoterapia, órteses)?', null, 3],
    ['Algum produto só pode ser vendido com receita, laudo ou pedido médico?', null, 2],
    ['Vocês guardam cópia de receitas, laudos ou pedidos médicos? Onde (papel, e-mail, WhatsApp, sistema)? Por quanto tempo? Quem tem acesso?', null, 3],
    ['Algum hospital, clínica ou operadora envia a vocês nome, endereço ou outras informações de pacientes (para entrega em domicílio, rastreabilidade de produto, consignação etc.)?', 'Nesses casos, a empresa pode estar tratando dados em nome do hospital, com obrigações contratuais específicas.', 3],
    ['Hospitais ou clínicas clientes já enviaram questionários, cláusulas ou exigências sobre LGPD? (Se sim, envie cópia.)', null, 2],
  ]),

  ...blockTitle(4, 'Marketing e site', 'Responsável sugerido: marketing ou quem cuida do site e das redes sociais.'),
  ...qs([
    ['Qual o endereço do site e das redes sociais? Quem desenvolve e mantém o site (empresa, profissional, equipe interna)? Informe nome e contato.', 'Vamos precisar falar diretamente com essa pessoa sobre a configuração de cookies.', 2],
    ['Em qual plataforma o site foi feito (WordPress, Wix, Shopify, VTEX, Nuvemshop, outro)? Tem loja virtual, área do cliente, formulários ou chat?', null, 2],
    ['A empresa faz anúncios pagos (Google, Facebook/Instagram, TikTok)? Usa ferramentas como Google Analytics, Meta Pixel, Tag Manager, RD Station, HubSpot?', 'Se não souber, o responsável pelo site saberá responder.', 2],
    ['Vocês enviam e-mail marketing ou mensagens em massa por WhatsApp? Com qual ferramenta? Como o contato autorizou o recebimento?', null, 2],
    ['Vocês sobem listas de clientes para plataformas de anúncio (públicos personalizados) ou compram/recebem listas de contatos de terceiros?', null, 2],
  ]),

  ...blockTitle(5, 'Recursos humanos e departamento pessoal', 'Responsável sugerido: RH/DP, com apoio do contador se a folha for terceirizada.'),
  ...qs([
    ['A folha de pagamento é feita internamente ou pelo contador? Quais documentos e informações dos empregados são enviados ao contador, e por qual meio (e-mail, WhatsApp, sistema)?', null, 2],
    ['Como os atestados médicos, ASOs e exames são recebidos, onde são guardados e quem tem acesso a eles?', null, 3],
    ['Como é feito o controle de ponto (biometria/digital, reconhecimento facial, aplicativo, cartão)?', null, 1],
    ['Há câmeras de segurança? Onde estão? Quem acessa as imagens e por quanto tempo ficam gravadas?', null, 2],
    ['Quais benefícios a empresa oferece (plano de saúde, odontológico, vale, seguro de vida)? Quais empresas recebem dados dos empregados e dependentes?', null, 2],
    ['Há empregados sindicalizados com desconto em folha?', null, 1],
    ['O que é feito com currículos de candidatos não contratados? Por quanto tempo são guardados?', null, 2],
    ['O prestador PJ tem acesso a quais sistemas e informações? Tem e-mail da empresa, horário fixo ou chefia direta?', null, 2],
  ]),

  ...blockTitle(6, 'Financeiro e fornecedores', 'Responsável sugerido: financeiro ou administrativo.'),
  ...qs([
    ['Liste os fornecedores que recebem ou acessam dados pessoais de clientes ou empregados: contador, sistemas (ERP, CRM, e-mail), hospedagem do site, nuvem, transportadoras, empresas de cobrança, bancos, meios de pagamento, TI terceirizada, medicina do trabalho, outros.', null, 5],
    ['Existe contrato escrito com cada um deles? (Envie as cópias junto com este questionário.)', null, 2],
  ]),

  ...blockTitle(7, 'Tecnologia e segurança', 'Responsável sugerido: TI interna ou empresa de TI terceirizada.'),
  ...qs([
    ['Quais sistemas a empresa usa (ERP, e-mail, armazenamento de arquivos, backup)? Sabe se os servidores ficam no Brasil ou no exterior?', null, 3],
    ['Cada pessoa tem login e senha próprios? Há senhas compartilhadas? Há verificação em duas etapas no e-mail e nos sistemas? Quem é o administrador?', null, 2],
    ['Existe backup? Com que frequência, onde fica guardado e já foi testada a recuperação?', null, 2],
    ['Computadores e celulares da empresa têm antivírus, senha de bloqueio e criptografia? Empregados usam computador ou celular pessoal para trabalhar?', null, 2],
    ['Quando alguém sai da empresa, os acessos aos sistemas e ao e-mail são cancelados no mesmo dia? Quem faz isso?', null, 2],
    ['Documentos em papel com dados pessoais: onde ficam guardados, quem tem a chave e como são descartados?', null, 2],
  ]),

  ...blockTitle(8, 'Documentos para enviar junto com o questionário', null),
  ...checklist([
    'Contratos com clientes (modelo de contrato, termos e condições de venda, pedidos padrão).',
    'Modelo de contrato de trabalho usado atualmente e eventuais aditivos.',
    'Contrato com o prestador PJ.',
    'Contrato com o escritório de contabilidade.',
    'Contratos ou termos de uso dos sistemas (ERP, CRM, e-mail, nuvem, hospedagem do site).',
    'Políticas, regulamentos internos ou códigos de conduta já existentes, se houver.',
    'Questionários ou cláusulas de LGPD enviados por clientes (hospitais, clínicas).',
    'Organograma simples ou lista de áreas e responsáveis.',
  ]),

  ...blockTitle(9, 'Declaração', null),
  p('Declaro que as informações prestadas neste questionário são verdadeiras e completas, no meu conhecimento, e que fui informado(a) de que o trabalho de adequação será elaborado com base nelas.', { spacing: { after: 480 } }),
  p('Local e data: _______________________________________', { spacing: { after: 480 } }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 0 }, children: [t('_____________________________________________')] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 0 }, children: [t('Nome, cargo e assinatura do responsável')] }),
];

const doc = new Document({
  creator: 'André Dolce Silva Sociedade de Advogados',
  title: 'Questionário de Diagnóstico LGPD',
  styles: { default: { document: { run: { font: FONT, size: 21, color: DARK } } } },
  numbering: { config: [
    { reference: 'bullet', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 360, hanging: 240 } }, run: { color: NAVY } } }] },
    { reference: 'check', levels: [{ level: 0, format: LevelFormat.BULLET, text: '☐', alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 400, hanging: 300 } }, run: { color: NAVY } } }] },
  ] },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1700, bottom: 1300, left: 1134, right: 1134, header: 500, footer: 500 } } },
    headers: { default: new Header({ children: [
      new Paragraph({
        tabStops: [{ type: TabStopType.RIGHT, position: W }],
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: NAVY, space: 6 } },
        children: [
          new ImageRun({ type: 'png', data: logo, transformation: { width: 182, height: 52 }, altText: { title: 'Logo', description: 'André Dolce Silva Sociedade de Advogados', name: 'logo' } }),
          t('\tDOCUMENTO CONFIDENCIAL', { size: 16, color: MUTED, bold: true }),
        ],
      }),
    ] }) },
    footers: { default: new Footer({ children: [
      new Paragraph({
        tabStops: [{ type: TabStopType.RIGHT, position: W }],
        border: { top: { style: BorderStyle.SINGLE, size: 4, color: 'B8C7DA', space: 6 } },
        children: [
          t('André Dolce Silva Sociedade de Advogados · OAB/RS 3.023 · www.adssociedade.adv.br', { size: 16, color: MUTED }),
          t('\tPágina ', { size: 16, color: MUTED }),
          new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: MUTED }),
          t(' de ', { size: 16, color: MUTED }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], font: FONT, size: 16, color: MUTED }),
        ],
      }),
    ] }) },
    children,
  }],
});

Packer.toBuffer(doc).then(b => { fs.writeFileSync(path.join(SP, 'Questionario_Diagnostico_LGPD_ADS.docx'), b); console.log('ok', qn, 'perguntas'); });
