# Base normativa — LGPD (setor privado)

> **Última conferência: 21/10/2026.** Status obtido em fontes oficiais (gov.br/anpd, planalto.gov.br, Senado, Câmara, Biblioteca Digital MJSP). Antes de usar em documento final, reconferir. Item marcado ⚠️ = conferido só parcialmente; ler o texto oficial antes de citar artigo específico.

## 1. Leis

| Norma | Conteúdo relevante | Status |
|---|---|---|
| **Lei 13.709/2018 (LGPD)** | Lei-base. Artigos-chave abaixo. | Vigente. Alterada pela Lei 13.853/2019 e pela Lei 15.352/2026. |
| **Lei 15.352, de 25/02/2026** | Conversão da MP 1.317/2025. Transforma a ANPD em **Agência Nacional de Proteção de Dados** (autarquia especial, rol da Lei 13.848/2019), mantida a sigla. Cria carreira de regulação e fiscalização. | Vigente. ⚠️ Ler o texto no Planalto (`/ccivil_03/_ato2023-2026/2026/lei/L15352.htm`) para eventuais alterações materiais na LGPD além da estrutura. |
| **Decreto 12.881/2026** + **Resolução ANPD 33/2026** | Nova estrutura regimental da ANPD (vigência a partir de abr/2026). | ⚠️ Irrelevante para documentos de cliente; citar só se necessário. |
| **Lei 8.078/1990 (CDC)** | Art. 45 da LGPD remete ao CDC nas relações de consumo. Art. 43 CDC (bancos de dados de consumidores). | Vigente. |
| **Lei 15.211/2025 (ECA Digital)** | Aplicação fiscalizada pela ANPD. Relevante só se houver crianças/adolescentes. | ⚠️ Conferir data de início de vigência (alterada pela Lei 15.352/2026). |
| **CLT / NRs** | Base para obrigação legal no tratamento de dados de empregados. | Verificar dispositivo específico em cada linha do inventário. |

## 2. Artigos-chave da LGPD (uso diário)

- **Art. 5º** — definições: II (dado sensível), VI (controlador), VII (operador), VIII (encarregado), X (tratamento), XII (consentimento), XVII (RIPD).
- **Art. 6º** — princípios (finalidade, adequação, necessidade, livre acesso, qualidade, transparência, segurança, prevenção, não discriminação, responsabilização e prestação de contas).
- **Art. 7º** — bases legais para dados pessoais (10 incisos).
- **Art. 8º** — requisitos do consentimento (destaque, finalidade determinada, ônus da prova do controlador, revogabilidade; genérico = nulo).
- **Art. 9º** — informações obrigatórias ao titular (base da política de privacidade).
- **Art. 10** — legítimo interesse; §3º ANPD pode solicitar RIPD.
- **Art. 11** — dados sensíveis: consentimento específico e destacado (I) ou hipóteses do inciso II (a–g). **Não há "execução de contrato" nem "legítimo interesse" para dado sensível.** §4º — vedação de uso compartilhado de dados de saúde para vantagem econômica, salvo exceções legais (⚠️ ler redação literal antes de aplicar).
- **Arts. 15–16** — término do tratamento e hipóteses de conservação.
- **Arts. 17–22** — direitos do titular; art. 19 (confirmação/acesso: formato simplificado imediato ou declaração completa em até 15 dias); art. 20 (decisões automatizadas).
- **Arts. 33–36** — transferência internacional.
- **Art. 37** — registro das operações (controlador **e** operador).
- **Art. 38** — RIPD.
- **Art. 39** — operador segue instruções do controlador.
- **Art. 41** — encarregado; identidade e contato divulgados publicamente.
- **Arts. 42–45** — responsabilidade; art. 42, §1º, I (operador solidário quando descumpre a lei ou instruções lícitas); art. 43 (excludentes); art. 44 (tratamento irregular).
- **Arts. 46–49** — segurança e incidentes.
- **Art. 50** — boas práticas e governança (atenuante na dosimetria).
- **Art. 52** — sanções (advertência; multa simples até 2% do faturamento no Brasil no último exercício, excluídos tributos, limitada a R$ 50 milhões por infração; multa diária; publicização; bloqueio; eliminação; suspensões; proibição).

## 3. Resoluções do Conselho Diretor da ANPD

| Resolução | Assunto | Pontos práticos | Status |
|---|---|---|---|
| **CD/ANPD 1/2021** | Regulamento de fiscalização e processo sancionador | Base do processo sancionador. | Vigente. ⚠️ Em revisão pela ANPD em 2026 (consulta pública) — conferir. |
| **CD/ANPD 2/2022** | Agentes de tratamento de **pequeno porte** | Regime simplificado (inclusive dispensa de encarregado e registro simplificado). **Não se aplica** a quem: (i) faz tratamento de alto risco; (ii) tem receita bruta acima do limite do art. 3º, II, da LC 123/2006 (**R$ 4,8 milhões/ano**) ou, se startup, do art. 4º, §1º, I, da LC 182/2021. Alto risco = ao menos 1 critério geral (larga escala; afetar significativamente direitos) + 1 específico (ex.: tecnologias emergentes, vigilância, decisões automatizadas, **dados sensíveis**, crianças/idosos) — ⚠️ conferir rol literal do art. 4º. | Vigente. |
| **CD/ANPD 4/2023** | Dosimetria e aplicação de sanções | Classificação leve/média/grave; agravantes e atenuantes (programa de governança e cessação da infração reduzem). Útil para justificar ao cliente o investimento. | Vigente. ⚠️ Há versões alteradas; conferir texto consolidado. |
| **CD/ANPD 15/2024** | Comunicação de incidente de segurança | Comunicar ANPD **e** titulares em **3 dias úteis** da ciência de que o incidente afetou dados pessoais (arts. 6º e 9º), quando puder acarretar risco ou dano relevante. Complementação fundamentada em até 20 dias úteis. Atraso exige motivação. Manter registro de **todos** os incidentes, inclusive não comunicados. | Vigente. |
| **CD/ANPD 18/2024** | Atuação do encarregado | Ato formal de designação; divulgação de identidade e contato; **conflito de interesse** (art. 18: autonomia técnica; art. 19, §1º: conflito pode decorrer de acumular funções com decisões estratégicas sobre tratamento; art. 20: encarregado declara potencial conflito; art. 21: controlador deve não designar, mitigar ou substituir). | Vigente. |
| **CD/ANPD 19/2024** | Transferência internacional de dados | **Cláusulas-padrão contratuais** (Anexo II) — adotar **integralmente e sem alteração**; prazo para incorporar aos contratos existentes: 12 meses da publicação → **já encerrado em 2025**. Hoje, contrato com TID sem cláusula-padrão (ou outro mecanismo do art. 33) é irregular. | Vigente. |
| **ANPD 32/2026** | Reconhecimento de adequação da União Europeia para TID | ⚠️ Conferir texto e alcance antes de usar — encontrado só por referência secundária. | ⚠️ |
| **CD/ANPD 23/2024, 30/2025, 31/2025** | Agenda regulatória e mapa de temas prioritários | **Fiscalização de direitos dos titulares é tema prioritário 2026–2027.** Regulamento de direitos dos titulares em elaboração (não aprovado até 21/10/2026). | Vigentes. |

## 4. Guias orientativos da ANPD (não vinculantes, mas usados na fiscalização)

| Guia | Uso |
|---|---|
| **Cookies e proteção de dados pessoais** (v1.0, out/2022) | Banner em dois níveis; botão "rejeitar" no primeiro nível, com mesma facilidade do "aceitar"; nada pré-marcado; sem consentimento por navegação continuada; cookies de consentimento desativados por padrão; revogação simples; estritamente necessários podem usar legítimo interesse. |
| **Hipóteses legais — Legítimo interesse** | Teste de balanceamento em 3 fases (finalidade; necessidade; balanceamento e salvaguardas), por finalidade, documentado (art. 6º, X e art. 37). ANPD sustenta que o registro do teste é exigível. |
| **Atuação do encarregado** | Conflito típico: cargo de gestão/diretoria que define finalidades e meios do tratamento. |
| **Agentes de tratamento e encarregado** | Distinção controlador × operador; operador não é empregado do controlador. |
| **Segurança da informação para agentes de pequeno porte** | Checklist mínimo de segurança — útil mesmo para empresa que não se enquadra. |
| **Tratamento de dados pessoais de alto risco** | ⚠️ Em elaboração/tomada de subsídios — não citar como norma. |

## 5. Pendências regulatórias (NÃO tratar como norma vigente)

- Regulamento de **direitos dos titulares** — em elaboração.
- Regulamento de **RIPD** (art. 38 / art. 55-J, XIII) — não editado; usar FAQ da ANPD e metodologia própria.
- Regulamento de dados de **alto risco** — em elaboração.

## 6. Protocolo de verificação

1. Abrir `gov.br/anpd → Acesso à informação → Atos normativos → Regulamentações`.
2. Conferir número, data, alterações e revogações.
3. Atualizar esta tabela com a data.
4. Se a rede bloquear o site oficial, usar busca restrita a `gov.br`, `in.gov.br`, `planalto.gov.br`, `bibliotecadigital.mj.gov.br` e marcar ⚠️ até leitura do texto integral.
