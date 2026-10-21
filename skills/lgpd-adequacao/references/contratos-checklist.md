# Revisão de contratos — checklist (módulo 5)

## Método

1. Identificar o **papel de cada parte** na operação de dados (controlador / operador / controladores independentes / conjuntos). O contrato que erra o papel erra todas as cláusulas.
2. Cruzar com o inventário: que dados fluem, para quê, onde ficam, por quanto tempo.
3. Aplicar o checklist do tipo de contrato.
4. Saída: tabela `Cláusula | Problema | Risco (A/M/B) | Redação sugerida` + minuta de aditivo (`templates/clausulas-contratuais.md`).
5. Contrato de adesão de grande fornecedor (Microsoft, Google, ERP SaaS) não se negocia: verificar o **DPA/termo de tratamento** publicado pelo fornecedor, se cobre os itens abaixo e se adota as cláusulas-padrão da Res. 19/2024 para TID. Registrar o resultado; se não cobrir, levar ao cliente como risco aceito ou troca de fornecedor.

## A. Contrato com operador (sistemas, nuvem, contador na parte operacional, transportadora, marketing)

- [ ] Objeto, finalidade e **instruções documentadas** do controlador (art. 39).
- [ ] Categorias de dados e de titulares; dados sensíveis identificados.
- [ ] Vedação de uso para finalidade própria do operador.
- [ ] Confidencialidade dos empregados/prepostos do operador.
- [ ] Medidas de segurança mínimas (art. 46) — anexo técnico ou referência a padrão.
- [ ] Suboperadores: autorização prévia, mesma obrigação, responsabilidade do operador por eles.
- [ ] Comunicação de incidente ao controlador em prazo **compatível com os 3 dias úteis** da Res. 15/2024 (sugerir 24–48h da ciência), com conteúdo mínimo.
- [ ] Auxílio no atendimento a titulares (art. 18) e à ANPD.
- [ ] Transferência internacional: local dos dados; cláusulas-padrão do Anexo II da Res. 19/2024, **sem alteração**, se houver TID.
- [ ] Devolução e eliminação ao fim do contrato, com certificado; exceção só para obrigação legal do operador.
- [ ] Registro das operações pelo operador (art. 37).
- [ ] Auditoria/evidências de conformidade.
- [ ] Responsabilidade e direito de regresso (art. 42, §1º, I — operador responde solidariamente quando descumpre a lei ou instruções); limitação de responsabilidade que exclua dados pessoais = risco alto para o controlador.

## B. Contador / escritório contábil

- Em regra **operador** para folha e escrituração feitas em nome do cliente, mas com **obrigações legais próprias** (guarda, Coaf etc.) em que age como controlador. Redigir com essa dupla natureza.
- Atenção: troca de dados por e-mail/WhatsApp sem criptografia — recomendação técnica.

## C. Contrato de trabalho (CLT) — aditivo ou cláusula

- Não usar **consentimento genérico** em contrato de trabalho (vício de vontade presumível pela subordinação; art. 8º, §4º — genérico é nulo).
- Cláusula **informativa** (não consentimento): finalidades, bases legais, compartilhamentos (contador, plano de saúde, benefícios, eSocial), retenção, direitos e canal do encarregado → `templates/aviso-privacidade-colaboradores.md`.
- **Dever de confidencialidade** do empregado sobre dados de clientes e de colegas; uso aceitável de sistemas; consequência disciplinar (art. 482 CLT — avaliar alínea aplicável caso a caso).
- Monitoramento de equipamentos/e-mail corporativo: política prévia e ciência.
- Consentimentos **separados** e opcionais: uso de imagem, divulgação de aniversário etc.
- Empregados já contratados: aditivo com ciência; recusa em assinar **não** impede tratamento por obrigação legal — registrar entrega.

## D. Prestador PJ

- Se acessa dados do cliente → operador (checklist A) + confidencialidade.
- **Alerta extra-LGPD (trabalhista):** se o PJ tem subordinação, habitualidade, pessoalidade e onerosidade, o risco maior é o reconhecimento de vínculo. Cláusulas de LGPD que tratam o PJ como "colaborador integrado" (crachá, e-mail corporativo, jornada, treinamento obrigatório idêntico ao dos empregados) **reforçam a prova de vínculo**. Redigir como relação entre empresas.

## E. Contratos com clientes

### E1. B2B (hospitais, clínicas, distribuidores)
- Normalmente controladores independentes trocando dados de contato de representantes → cláusula enxuta de controladores independentes.
- Se o cliente do meu cliente repassa dados de **pacientes** (entrega domiciliar, consignação com identificação de paciente, rastreabilidade de implante) → avaliar se o meu cliente é **operador** do hospital → aplicar checklist A **em sentido inverso** (o meu cliente é quem assume as obrigações). Dado de paciente = sensível.
- Questionários de due diligence de LGPD enviados por hospitais: responder com base no inventário, nunca "sim" genérico.

### E2. B2C (consumidor)
- Termos e condições de venda + política de privacidade linkada (não incorporar a política ao contrato como cláusula aceita).
- Consentimento de marketing **separado** do aceite da compra, desmarcado por padrão.
- Dado de saúde do consumidor (receita, prescrição, laudo, produto que revela condição) → ver `setores/produtos-saude.md`.

## Red flags que sempre viram achado

- Cláusula "o contratante consente com o tratamento de seus dados para quaisquer fins".
- Cláusula de limitação de responsabilidade que exclui incidentes de dados.
- Ausência de prazo para comunicação de incidente.
- Fornecedor com dados fora do Brasil sem mecanismo do art. 33.
- Retenção "indeterminada".
- Operador autorizado a usar dados "para melhoria de seus serviços" sem limite (uso para finalidade própria).
