---
name: lgpd-adequacao
description: Sistema de adequação de empresas privadas à LGPD (Lei 13.709/2018), do diagnóstico à governança contínua, com foco em revisão e adequação de contratos (clientes, empregados, fornecedores/operadores, contador, sistemas, PJ), inventário de dados (registro das operações, art. 37), política de privacidade, política de cookies e banner, termos de uso, nomeação do encarregado, plano de resposta a incidentes e atendimento a titulares. Opera em módulos (triagem, mapeamento, lacunas, documentos, contratos, site/cookies, governança, revisão). USE SEMPRE que o pedido envolver adequação à LGPD, "política de privacidade", "aviso de privacidade", "cookies", "banner de cookies", "DPA", "cláusula de proteção de dados", "encarregado/DPO", "mapeamento de dados", "inventário de dados", "ROPA", "incidente de dados", "vazamento", "direitos do titular" — mesmo em pedidos curtos como "faz a política de privacidade do cliente X". NÃO usar para: contencioso indenizatório por vazamento (usar skill de ação indenizatória), setor público (regras próprias do Capítulo IV da LGPD), GDPR como norma principal.
---

# LGPD — Adequação de ponta a ponta (padrão ADS Sociedade de Advogados)

## Premissa que governa tudo

**Documento nenhum é redigido antes do fato estar mapeado.** Política de privacidade que descreve tratamento diferente do real não protege o cliente: vira prova contra ele (art. 6º, VI e art. 9º da LGPD; art. 45 remete ao CDC nas relações de consumo). Se o usuário pedir "só a política" sem inventário, a skill **avisa o risco por escrito** e, se ele insistir, entrega a minuta com marcação `[[A CONFIRMAR NO MAPEAMENTO]]` em toda afirmação de fato não verificada.

## Guardrails (inegociáveis)

1. **Anti-alucinação normativa.** Só citar norma constante de `references/base-normativa.md`. Antes de usar em peça ou documento final, reconferir vigência na fonte oficial (gov.br/anpd, planalto.gov.br, in.gov.br). Norma nova encontrada → registrar no arquivo com data da verificação e link.
2. **Jurisprudência só verificada.** Usar exclusivamente `references/jurisprudencia-verificada.md` ou pesquisa feita na hora em repositório oficial (stj.jus.br, stf.jus.br, portais dos TJs/TRTs). Nunca citar número de processo de memória. Sem fonte → não cita.
3. **Incerteza declarada.** Se não houver certeza, dizer "não tenho certeza" e verificar. Divergência doutrinária (ex.: dado de compra que revela condição de saúde é sensível?) é apresentada como divergência, com a posição conservadora recomendada.
4. **Fronteira jurídico × técnico.** A skill entrega adequação jurídica. Implementação técnica (bloqueio de scripts, controles de acesso, criptografia, backup, logs) é especificada como **requisito para a TI do cliente**, nunca afirmada como feita. Isso protege o advogado (ver `references/escopo-e-responsabilidade.md`).
5. **Sigilo.** Dados do cliente (inventário, contratos, nomes) **nunca** entram no repositório da skill. Ficam na pasta do cliente. A skill só guarda método e modelos.
6. **Crítica antes de concordância.** Se o pedido do usuário criar risco ao cliente ou ao advogado, apontar antes de executar.

## Fluxo — 8 módulos

Cada módulo tem entrada, saída e critério de "pronto". Não pular módulo sem registrar o motivo.

| # | Módulo | Entrada | Saída | Referências / modelos |
|---|---|---|---|---|
| 0 | **Escopo e honorários** | Proposta comercial | Escopo fechado com exclusões técnicas e responsabilidade da TI | `references/escopo-e-responsabilidade.md` |
| 1 | **Triagem e enquadramento** | Questionário respondido | Ficha de enquadramento: porte (Res. 2/2022), papel (controlador/operador), dados sensíveis, alto risco, encarregado, setor regulado | `templates/questionario-diagnostico.md`, `references/enquadramento.md` |
| 2 | **Mapeamento (inventário / art. 37)** | Entrevistas por área + sistemas | Inventário com finalidade, base legal, categorias, compartilhamento, TID, retenção, segurança | `templates/inventario-dados.csv`, `references/bases-legais.md` |
| 3 | **Análise de lacunas e riscos** | Inventário | Relatório de lacunas + matriz de risco priorizada + plano de ação | `templates/relatorio-lacunas.md` |
| 4 | **Documentos** | Inventário validado | Política de privacidade, aviso a colaboradores, política interna de segurança, retenção, LIA, nomeação do encarregado, plano de incidentes, procedimento de titulares | `templates/*.md` |
| 5 | **Contratos** | Contratos vigentes + inventário | Parecer de revisão por contrato + cláusulas/aditivos | `references/contratos-checklist.md`, `templates/clausulas-contratuais.md` |
| 6 | **Site e cookies** | URL + acesso ao desenvolvedor | Auditoria de cookies, especificação do banner para o dev, política de cookies, termos de uso | `references/cookies-site.md`, `templates/politica-cookies.md`, `templates/termos-de-uso.md` |
| 7 | **Governança e treinamento** | Tudo acima | Calendário de revisão, treinamento, registro de evidências | `templates/roteiro-treinamento.md` |

### Ordem obrigatória
`0 → 1 → 2 → 3` em sequência. Depois `4`, `5` e `6` podem correr em paralelo. `7` fecha. Revisões pontuais (modo **revisão**) podem entrar a qualquer tempo.

## Modos de operação

- **triagem** — aplica o questionário, devolve ficha de enquadramento e lista do que falta.
- **mapeamento** — conduz entrevista por área (comercial, RH/DP, financeiro, logística, TI, marketing/site, atendimento) e preenche o inventário. Uma linha por *finalidade*, não por sistema.
- **lacunas** — compara inventário × exigências; classifica cada lacuna (alta/média/baixa) por probabilidade × impacto; sugere prazo.
- **minuta** — gera documento a partir de modelo, preenchendo só com dados do inventário. Placeholders `[[...]]` remanescentes são listados ao final.
- **contratos** — revisa contrato enviado contra `references/contratos-checklist.md`; devolve tabela (cláusula / problema / risco / redação sugerida) e minuta de aditivo.
- **cookies** — a partir de varredura (lista de cookies/scripts), classifica, aponta disparos pré-consentimento, gera especificação para o desenvolvedor e a política.
- **revisão** — lê documento existente (do cliente ou de terceiro) e aponta incoerências com o inventário e com a norma.
- **incidente** — aciona `templates/plano-resposta-incidentes.md`: classificação, prazos (3 dias úteis, Res. 15/2024), minuta de comunicação à ANPD e aos titulares.

## Como conduzir o usuário (o advogado)

- Pergunte em blocos de no máximo 5–7 perguntas, sempre dizendo **por que** a resposta muda o trabalho.
- Ao receber respostas, devolva primeiro os **achados críticos** (o que muda o projeto), depois o próximo passo.
- Quando a informação depender do cliente, gere a pergunta já redigida para o advogado encaminhar (linguagem leiga).
- Ao fim de cada módulo, entregue: (i) o produto, (ii) pendências, (iii) próximo passo.

## Formato de entrega

- Documentos finais: DOCX no padrão ADS Sociedade de Advogados (usar skill `docx` quando disponível), linguagem clara — política de privacidade é para leigo, não para juiz.
- Pareceres e relatórios: técnicos, com fundamento normativo explícito (artigo + diploma).
- Inventário: planilha (usar skill `xlsx` quando disponível) a partir de `templates/inventario-dados.csv`.
- Toda entrega traz rodapé interno: "Base normativa conferida em [data]".

## Módulos setoriais

Antes do módulo 2, verificar se há arquivo setorial em `references/setores/`. Existente: `produtos-saude.md` (comércio de produtos médicos e hospitalares). Para setor novo, criar arquivo seguindo a mesma estrutura e registrar fontes.

## Manutenção da skill

Após cada projeto, com aprovação do advogado: atualizar `references/base-normativa.md` (novas resoluções), `jurisprudencia-verificada.md` (só com fonte oficial) e o arquivo setorial. Nunca gravar dado de cliente.
