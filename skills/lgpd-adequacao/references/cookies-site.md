# Site, cookies e banner (módulo 6)

Fonte principal: ANPD, *Guia orientativo — Cookies e proteção de dados pessoais* (v1.0, out/2022). Guia não vincula, mas é o parâmetro da fiscalização.

## Passo 1 — Levantamento (quem faz: advogado + desenvolvedor)

Pedir ao cliente/desenvolvedor:
- URL, plataforma (WordPress, Wix, Shopify, VTEX, Nuvemshop, próprio), hospedagem e país do servidor.
- Lista de plugins/integrações: Google Analytics/Tag Manager, Meta Pixel, Google Ads, TikTok, Hotjar/Clarity, RD Station/HubSpot, chat, WhatsApp, reCAPTCHA, YouTube embutido, gateway de pagamento, antifraude.
- Formulários (contato, orçamento, cadastro, "trabalhe conosco" — **currículo = dados de candidatos**), área logada, e-commerce.

**Varredura técnica:** abrir o site em navegação anônima, **sem clicar em nada** no banner, e registrar cookies e requisições a terceiros (DevTools → Application/Network, ou ferramenta de varredura). Tudo que dispara antes do consentimento e não é estritamente necessário = **achado alto**. Repetir após "rejeitar".

## Passo 2 — Classificação

| Categoria | Exemplos | Base | Banner |
|---|---|---|---|
| Estritamente necessários | sessão, carrinho, segurança, balanceamento, registro da própria escolha de cookies | Legítimo interesse (guia ANPD admite) / execução de contrato | Sempre ativos; informar |
| Funcionais/preferências | idioma, região | Consentimento (ou legítimo interesse, com teste) | Opcional |
| Desempenho/analíticos | GA4, Clarity, Hotjar | Consentimento | Desativado por padrão |
| Publicidade/marketing | Meta Pixel, Google Ads, TikTok, remarketing | Consentimento | Desativado por padrão |

Para cada cookie: nome, provedor (próprio/terceiro), finalidade, duração, categoria, país do terceiro (TID).

## Passo 3 — Especificação do banner (entregar ao desenvolvedor por escrito)

**Primeiro nível:**
- Botões "Aceitar todos", **"Rejeitar não necessários"** e "Configurar", com **mesmo destaque visual**.
- Texto curto: o que são, para que, link para a política de cookies.
- Nada pré-marcado; continuar navegando ≠ consentir; fechar no "X" = rejeitar.
- Não bloquear o acesso ao conteúdo como condição de aceite (*cookie wall*).

**Segundo nível:**
- Categorias com chave individual, desligadas por padrão (exceto necessários).
- Descrição de cada categoria e lista de cookies.
- Botão de rejeitar repetido.

**Técnico (não negociável):**
- Scripts de categorias não necessárias **bloqueados até o consentimento** (ex.: Consent Mode/Tag Manager condicionado, ou ferramenta de gestão de consentimento com bloqueio prévio).
- **Registro do consentimento** (data/hora, versão do banner, escolhas) — ônus da prova é do controlador (art. 8º, §2º).
- Link permanente ("Preferências de cookies") no rodapé para revogar/alterar com a mesma facilidade.
- Renovar o pedido quando mudarem finalidades/cookies; definir validade da escolha (sugestão de mercado: 6–12 meses — não há prazo legal).

## Passo 4 — Documentos

- `templates/politica-cookies.md` — com a tabela real de cookies.
- `templates/politica-privacidade.md` — seção do site/formulários.
- `templates/termos-de-uso.md` — se houver cadastro, área logada ou e-commerce.
- Formulários: aviso curto junto ao formulário (finalidade + link), checkbox de marketing **separado e desmarcado**.

## Passo 5 — Validação final

Repetir a varredura após a implementação. Guardar prints/relatório com data (evidência). Só então publicar a política.

## Responsabilidade

Se o desenvolvedor não implementar o bloqueio, **não** publicar política dizendo que os cookies só são usados com consentimento. Comunicar ao cliente por escrito que o site permanece irregular até a correção.
