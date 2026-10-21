# Módulo setorial — Comércio de produtos médicos e hospitalares

> Aplica-se a distribuidores e varejistas de produtos para saúde (B2B e/ou B2C). Itens ⚠️ dependem de verificação de norma sanitária específica a cada projeto — **não presumir obrigação da ANVISA sem localizar a norma**.

## 1. Pontos críticos do setor

1. **Dado de compra pode ser dado de saúde.** Bolsa de colostomia, fralda geriátrica, insumo para diabetes, órtese, equipamento de oxigenoterapia: o histórico de compra de pessoa identificada **revela condição de saúde**. Posição recomendada (conservadora): tratar como **dado sensível** no B2C quando o produto for indicativo de condição de saúde. Há quem sustente o contrário (dado de compra não é dado de saúde por natureza) — registrar a divergência no parecer, mas desenhar controles como sensível.
2. **Consequência na base legal:** para dado sensível não há "execução de contrato" genérica nem legítimo interesse (art. 11). Venda → art. 11, II, "d" (exercício regular de direitos em contrato), fundamentado; **marketing segmentado por produto de saúde → só com consentimento específico e destacado**, e ainda assim com cautela.
3. **Art. 11, §4º:** restringe a comunicação ou uso compartilhado de dados de saúde entre controladores para obter vantagem econômica (com exceções ligadas a serviços de saúde, assistência farmacêutica e à saúde, em benefício do titular). ⚠️ Ler a redação literal antes de aplicar. Impacto prático: **vedar** venda/cessão de base de clientes, *co-marketing* com terceiros e envio de público de compradores para plataformas de anúncio (ex.: listas personalizadas no Meta/Google) sem análise específica.
4. **Pixel de anúncios em página de produto de saúde** transmite a terceiros (em geral no exterior) a informação "pessoa X viu/comprou produto Y". Achado **alto** se disparar sem consentimento — e mesmo com consentimento, avaliar §4º.
5. **Receitas/prescrições/laudos** recebidos para venda de produto controlado ou personalizado → dado sensível; definir quem acessa, onde fica, por quanto tempo. ⚠️ Verificar se há norma sanitária exigindo guarda (obrigação regulatória).
6. **Rastreabilidade** (lote/série de implantes, equipamentos) pode envolver dado de paciente vindo do hospital → o comerciante pode ser **operador** do hospital. ⚠️ Verificar exigência sanitária de rastreabilidade aplicável ao produto.
7. **Licitações e contratos públicos** (venda a hospitais públicos): dados de representantes e documentos de habilitação; observar regras da Lei 14.133/2021 sobre publicidade, mas sem expor dado desnecessário.
8. **Dano moral por vazamento:** STJ distingue dado comum (sem dano presumido — AREsp 2.130.619/SP) de dado sensível (dano presumido em caso de seguro de vida — REsp 2.121.904/SP). Ver `jurisprudencia-verificada.md`. Risco por titular × número de consumidores = argumento para priorizar segurança.

## 2. Mapa de operações típicas (ponto de partida do inventário)

| Área | Operação | Titulares | Dados | Sensível? | Base provável |
|---|---|---|---|---|---|
| Comercial B2B | Cadastro de clientes institucionais e contatos | Representantes de hospitais/clínicas | Nome, cargo, e-mail, telefone | Não | 7º, V / IX |
| Comercial B2C | Venda online/loja | Consumidores | Identificação, CPF, endereço, pagamento, **produtos comprados** | **Possível** | 7º, V e II; 11, II, "d" |
| Comercial B2C | Receita/prescrição | Consumidores/pacientes | Dado de saúde | **Sim** | 11, II, "a" ou "d" ⚠️ |
| Logística | Entrega | Consumidores, pacientes indicados por hospital | Nome, endereço, telefone | Possível | 7º, V / operador do hospital |
| Pós-venda | Garantia, assistência técnica, recall | Consumidores | Contato, produto, lote | Possível | 7º, II (CDC) / V |
| Marketing | E-mail, WhatsApp, anúncios | Consumidores/leads | Contato, navegação, compras | Possível | 7º, I (consentimento) |
| Financeiro | Faturamento, cobrança, NF-e | Clientes | Fiscais | Não | 7º, II / V / X |
| RH/DP | Admissão a desligamento | Empregados, dependentes | Inclusive saúde, biometria, sindical | **Sim** | 7º, II; 11, II, "a" |
| RH | Recrutamento | Candidatos | Currículo (às vezes saúde/PcD) | Possível | 7º, V / I |
| TI | Logs, backup, e-mail | Todos | Todos | — | 7º, IX / II |
| Jurídico | Guarda para defesa | Todos | Conforme caso | — | 7º, VI / 11, II, "d" |

## 3. Perguntas setoriais para o cliente (encaminhar em linguagem leiga)

1. Que produtos vocês vendem para pessoa física? Algum deles só se vende com receita ou laudo?
2. Vocês guardam cópia de receita, laudo ou pedido médico? Onde (papel, e-mail, WhatsApp, sistema)?
3. Algum hospital ou clínica envia nome/endereço de paciente para vocês entregarem produto ou fazerem rastreio?
4. O site ou as redes usam anúncios (Meta, Google)? Vocês sobem listas de clientes para essas plataformas?
5. Vocês têm autorização/licença da vigilância sanitária (AFE/licença)? Quem é o responsável técnico? (para localizar obrigações regulatórias de guarda)
6. O ponto dos empregados é biométrico?
7. Como vocês recebem atestados médicos dos empregados e quem os vê?
