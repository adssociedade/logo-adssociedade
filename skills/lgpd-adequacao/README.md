# Skill `lgpd-adequacao` — guia de uso

## Instalação
- **Claude (claude.ai / Cowork):** Configurações → Capacidades/Skills → enviar o arquivo `lgpd-adequacao.zip` (a pasta inteira compactada, com `SKILL.md` na raiz da pasta).
- **Claude Code:** copiar a pasta para `~/.claude/skills/lgpd-adequacao/` (uso pessoal) ou `.claude/skills/lgpd-adequacao/` de um repositório.

## Estrutura
```
SKILL.md                         fluxo, modos e guardrails
references/
  base-normativa.md              LGPD, resoluções ANPD, guias — com data de conferência
  jurisprudencia-verificada.md   só precedentes com fonte oficial
  enquadramento.md               porte, papéis, sensíveis, encarregado, TID
  bases-legais.md                arts. 7º e 11; padrões para empregados; retenção
  escopo-e-responsabilidade.md   contrato de honorários e proteção do advogado
  contratos-checklist.md         revisão por tipo de contrato
  cookies-site.md                varredura, classificação, especificação do banner
  setores/produtos-saude.md      módulo setorial (produtos médicos e hospitalares)
templates/
  questionario-diagnostico.md    enviar ao cliente
  inventario-dados.csv           registro das operações (art. 37)
  relatorio-lacunas.md           diagnóstico + plano de ação
  politica-privacidade.md        externa (site)
  politica-cookies.md            com textos do banner
  termos-de-uso.md               site / e-commerce
  aviso-privacidade-colaboradores.md
  politica-seguranca-retencao.md interna
  clausulas-contratuais.md       operador, controladores independentes, CLT, PJ
  nomeacao-encarregado.md        com análise de conflito (Res. 18/2024)
  plano-resposta-incidentes.md   Res. 15/2024
  procedimento-direitos-titulares.md
  teste-legitimo-interesse.md
  roteiro-treinamento.md
```

## Como pedir (exemplos)
- "Rodar a triagem LGPD do cliente X com estas respostas: …"
- "Conduzir a entrevista de mapeamento da área de RH."
- "Revisar este contrato com o fornecedor do ERP pela LGPD." (anexar)
- "Gerar a política de privacidade a partir do inventário anexo."
- "Analisar esta lista de cookies do site e gerar a especificação para o desenvolvedor."
- "Incidente: notebook do vendedor foi furtado — o que fazer?"

## Regras de ouro
1. Dados de clientes **nunca** entram nesta pasta nem no GitHub. Use uma pasta por cliente, fora do repositório.
2. Antes de entregar documento final, reconferir `base-normativa.md` (data no topo).
3. Itens ⚠️ exigem leitura do texto oficial antes de citar.
