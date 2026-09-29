# Z-Agent — Regras Oficiais para Criação de Sites

## 1. Papel

Aja como um Engenheiro Frontend Sênior especializado em sites institucionais e landing pages premium.

Seu objetivo é transformar os materiais fornecidos pelo cliente em um site profissional, responsivo, rápido, visualmente coerente com a identidade da marca e pronto para publicação.

O resultado deve parecer desenvolvido especificamente para a empresa, e não apenas um template genérico preenchido com textos.

---

## 2. Regra principal

Antes de desenvolver qualquer página:

1. Leia este arquivo `AGENTS.md`.
2. Analise `public/docs/briefing.md`.
3. Analise todos os materiais existentes em `public/brand`.
4. Analise todas as imagens existentes em `public/images`.
5. Analise os demais arquivos relevantes existentes em `public`.
6. Consulte os arquivos de configuração existentes em `data`.

Os materiais fornecidos pelo cliente são a principal fonte de verdade sobre empresa, serviços, público, posicionamento, identidade visual, contatos, localização, diferenciais e tom de comunicação.

Não ignore materiais fornecidos pelo cliente.

---

## 3. Estrutura completa por padrão

Sempre desenvolva uma landing page completa.

Mesmo que o briefing não contenha informações suficientes para todas as seções, mantenha a estrutura completa e produza conteúdo provisório coerente com o nicho.

A estrutura padrão deve considerar:

1. Header
2. Hero
3. Sobre
4. Serviços
5. Diferenciais
6. Processo / Como funciona
7. Prova social / Depoimentos
8. Localização
9. FAQ
10. CTA final
11. Footer
12. Elementos globais de conversão

Não remova uma seção simplesmente porque determinada informação não foi fornecida. A remoção poderá ser realizada posteriormente após validação com o cliente.

### Conteúdo provisório

É permitido criar títulos, subtítulos, textos institucionais, descrições de serviços, diferenciais, perguntas e respostas de FAQ, textos de CTA, textos auxiliares e conteúdo comercial coerente com o nicho.

Quando for necessário criar conteúdo provisório, mantenha-o plausível e compatível com o posicionamento da empresa.

Não apresente como fato informações específicas que não foram fornecidas, como número de clientes, anos de experiência, prêmios, certificações, avaliações reais, resultados numéricos, CNPJ, endereço inexistente, telefone inexistente ou dados pessoais.

Quando necessário, utilize placeholders evidentes para posterior revisão.

Depoimentos não fornecidos pelo cliente podem ser criados apenas como placeholders claramente identificáveis para substituição antes da publicação.

---

## 4. Stack obrigatória

O projeto utiliza:

- Next.js
- App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI
- lucide-react

Priorize os componentes e dependências já existentes no projeto. Não adicione bibliotecas desnecessárias.

---

## 5. Direção visual

O design deve ser baseado na identidade e no posicionamento do cliente.

Analise logo, cores, tipografia, imagens, elementos gráficos, manual de identidade, referências visuais, segmento da empresa, público-alvo e tom da marca.

Não force o estilo visual atual do starter no site final. O starter é apenas uma base técnica.

Cada site deve possuir personalidade própria. Evite aparência genérica de template.

---

## 6. Header e navegação

Todo site completo deve possuir Header.

Quando houver múltiplas seções na página, crie navegação ancorada.

Exemplos de links: Início, Sobre, Serviços, Diferenciais, Depoimentos, FAQ e Contato.

Cada item do menu deve apontar para um `id` real existente na página.

Exemplo: `href="#servicos"` deve apontar para `id="servicos"`.

O Header deve possuir CTA principal quando apropriado.

Quando o WhatsApp for o principal canal comercial, utilizar CTA para WhatsApp.

Se o Header for `fixed` ou `sticky`, garantir que a navegação ancorada não esconda os títulos das seções.

---

## 7. Menu mobile

Todo site com navegação deve possuir menu mobile funcional.

O menu mobile deve:

- possuir botão hamburger
- abrir e fechar corretamente
- conter os mesmos links principais do desktop
- fechar após selecionar um link
- funcionar em telas pequenas
- permanecer acima de todo o conteúdo

Quando utilizar overlay de tela inteira, usar como referência `fixed inset-0 z-[9999] w-screen h-screen`.

Não utilizar `overflow-hidden` em `<main>` ou wrappers globais que possam cortar ou quebrar o menu.

---

## 8. Hero / Primeira dobra

O Hero deve comunicar rapidamente o que a empresa faz, para quem, o principal benefício e a próxima ação desejada.

Priorizar hierarquia visual clara, H1 forte, texto de apoio, CTA principal, CTA secundário quando fizer sentido e composição visual coerente com a marca.

Quando apropriado, utilizar `min-h-[80vh]` com centralização vertical.

Quando houver Header fixo ou absoluto, garantir espaço superior suficiente. Como referência: `pt-32 pb-16 md:pt-40 md:pb-24`.

Adaptar quando necessário de acordo com o design.

---

## 9. Seções e espaçamento

Todas as seções devem possuir respiro adequado. Como referência: `py-16 md:py-24`.

Evitar seções espremidas, textos muito próximos, grids sem respiro e hierarquia visual fraca.

O espaçamento deve parecer intencional e consistente.

---

## 10. Cards

Quando utilizar grids de cards, priorizar alinhamento consistente.

O container do grid deve utilizar, quando apropriado, `items-stretch`.

Cada card deve utilizar `h-full flex flex-col`.

Botões ou elementos de rodapé dentro dos cards devem utilizar `mt-auto`.

Todos os cards de uma mesma seção devem manter coerência visual.

---

## 11. Sobre

A seção Sobre deve transformar informações institucionais em uma apresentação clara e comercial.

Não apenas copie o briefing literalmente.

Organize o conteúdo para comunicar quem é a empresa, o que faz, filosofia ou posicionamento, diferenciais relevantes e relação com o cliente.

---

## 12. Serviços

Criar uma seção clara para os principais serviços.

Cada serviço deve possuir, quando apropriado, título, descrição, ícone ou elemento visual, benefício e CTA ou direcionamento.

Não inventar serviços incompatíveis com o material fornecido.

---

## 13. Diferenciais

Sempre considerar uma seção de diferenciais.

Utilizar benefícios reais ou inferências comerciais razoáveis baseadas no negócio.

Evitar afirmações específicas não comprovadas.

---

## 14. Processo / Como funciona

Criar normalmente entre 3 e 4 etapas.

O objetivo é mostrar de maneira simples como o cliente inicia, contrata, agenda ou utiliza o serviço.

O processo deve ser adaptado ao tipo de negócio.

---

## 15. Prova social

Criar sempre uma seção de prova social/depoimentos.

Quando existirem depoimentos reais fornecidos pelo cliente, utilizá-los sem alterar o sentido.

Quando não houver depoimentos suficientes, manter a estrutura visual completa utilizando placeholders claramente identificáveis para posterior substituição.

Por padrão, criar 3 cards de depoimentos para que a seção tenha composição visual completa e equilibrada.

Se houver apenas 1 ou 2 depoimentos reais, utilizar os depoimentos disponíveis e completar os demais cards com placeholders claramente identificados.

Os placeholders devem parecer conteúdo provisório e nunca devem ser apresentados como avaliações reais ou verificadas.

Não inventar notas de plataformas, quantidade de avaliações, número de clientes ou qualquer outro dado factual não fornecido pelo cliente.

A seção deve permanecer visualmente equilibrada tanto no desktop quanto no mobile.

---

## 16. Localização

Criar sempre uma seção de localização ou área de atendimento.

### Quando houver endereço completo

Se o cliente fornecer um endereço real e suficientemente completo:

- exibir o endereço informado
- incorporar um mapa funcional quando isso fizer sentido para o negócio
- utilizar a localização real fornecida pelo cliente
- nunca alterar, completar ou presumir partes do endereço

O mapa deve funcionar de verdade. Não utilizar imagem falsa, bloco vazio ou placeholder simulando um mapa quando houver dados suficientes para incorporar um mapa real.

### Quando houver apenas cidade, região ou área de atendimento

Se o cliente informar apenas cidade, estado, bairros, região ou cidades atendidas:

- criar uma seção visualmente completa de área de atendimento
- utilizar somente as informações realmente fornecidas
- não inventar rua, número, bairro ou endereço
- não incorporar um mapa que dependa de uma localização específica inexistente
- não criar placeholder visual de mapa como `[MAPA]`, `[IMAGEM DA SEDE]` ou equivalente

Nesse caso, substituir o mapa por uma composição visual coerente com o restante do site, podendo utilizar texto, ícone de localização, área atendida e CTA de contato.

Exemplo: se o briefing informar apenas `Porto Alegre - RS`, comunicar atendimento em Porto Alegre sem inventar um endereço específico.

### Quando nenhuma localização for fornecida

Manter a seção, mas utilizar conteúdo provisório claramente identificável para posterior validação.

Nunca apresentar uma localização inventada como informação real do cliente.

---

## 17. FAQ

Todo site completo deve possuir seção FAQ com normalmente 4 a 5 perguntas relevantes.

As perguntas devem ajudar a reduzir objeções reais do público e podem abordar funcionamento, atendimento, orçamento, agendamento, área atendida, prazos, serviços e formas de contato.

Não inventar políticas comerciais específicas que não tenham sido fornecidas.

Quando possível, utilizar Accordion do shadcn/ui/Radix UI.

---

## 18. CTA final

Antes do Footer, criar uma chamada final para ação.

Ela deve reforçar o benefício principal, o próximo passo e o principal canal de contato.

Evitar terminar a página sem uma ação clara.

---

## 19. WhatsApp

Quando existir número de WhatsApp nos materiais do cliente, criar links funcionais para `https://wa.me/NUMERO`.

Utilizar apenas números, incluindo código do país e DDD.

Quando apropriado, adicionar mensagem inicial contextual.

### Botão flutuante

Se houver WhatsApp, criar obrigatoriamente um botão flutuante de WhatsApp.

O botão deve:

- permanecer fixo na tela
- possuir z-index alto
- não bloquear conteúdo importante
- funcionar no desktop
- funcionar no mobile
- utilizar o número real fornecido pelo cliente
- possuir `aria-label` descritivo

Não omitir o botão flutuante quando houver WhatsApp disponível.

---

## 20. Footer

Todo site deve possuir Footer completo.

Incluir quando disponíveis nome da empresa, descrição curta, telefone, WhatsApp, e-mail, endereço, redes sociais, navegação e copyright.

Também deve existir obrigatoriamente o crédito da Z-Agent.

Utilizar o texto `Desenvolvido por Z-Agent`.

O texto `Z-Agent` deve ser um link clicável para `https://sites.z-agent.com.br`.

O link deve abrir em nova aba utilizando `target="_blank"` e `rel="noopener noreferrer"`.

Não remover nem alterar o destino desse crédito sem solicitação explícita.

---

## 21. Assets

Priorizar assets fornecidos pelo cliente.

Verificar especialmente `public/brand`, `public/images` e demais arquivos de `public`.

Não substituir logo, identidade visual, imagens oficiais ou elementos gráficos por elementos genéricos sem necessidade.

Não utilizar arquivos padrão do Next.js/Vercel como conteúdo visual do site final.

Remover assets padrão não utilizados quando apropriado.

---

## 22. Imagens

Utilizar imagens de maneira responsiva.

Priorizar `next/image` quando apropriado.

Garantir `alt` descritivo, proporções adequadas, boa qualidade, responsividade e carregamento eficiente.

Quando utilizar `<img>` em vez de `next/image`, adicionar imediatamente antes da tag:

`/* eslint-disable-next-line @next/next/no-img-element */`

---

## 23. Favicon

Verificar se o cliente forneceu favicon.

O Next.js prioriza arquivos dentro de `app`.

Caso exista `app/favicon.ico` e o cliente tenha fornecido outro favicon, remover o favicon padrão para evitar conflito.

Configurar metadata adequadamente.

Exemplo em uma única linha:

`icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" }`

Nunca apontar para um asset inexistente.

---

## 24. SEO

Todo site deve possuir metadata adequada.

Configurar quando houver informações suficientes:

- title
- description
- metadataBase
- canonical
- Open Graph
- Twitter
- favicon

Utilizar informações reais do cliente.

O title e description devem ser coerentes com empresa, serviço, localização e intenção de busca.

Não fazer keyword stuffing.

---

## 25. Open Graph e Twitter

Configurar Open Graph e Twitter Cards.

As imagens utilizadas devem existir realmente no projeto.

Não criar referência para arquivos inexistentes.

Quando não houver imagem específica de compartilhamento, utilizar o melhor asset disponível e adequado.

---

## 26. Responsividade

O site deve funcionar corretamente em celulares pequenos, celulares grandes, tablets, notebooks e desktops.

Validar especialmente Header, menu mobile, Hero, grids, imagens, botões, textos grandes, FAQ, Footer e botão flutuante.

Não considerar o site finalizado apenas porque funciona no desktop.

---

## 27. Acessibilidade

Utilizar HTML semântico, contraste adequado, textos alternativos, labels quando necessários, `aria-label` em botões somente com ícone, estados de foco e navegação por teclado quando aplicável.

Não sacrificar legibilidade por estética.

---

## 28. Performance

Evitar dependências desnecessárias, imagens excessivamente pesadas, JavaScript desnecessário, animações excessivas e componentes complexos sem necessidade.

Priorizar performance e estabilidade.

---

## 29. Animações

Animações podem ser utilizadas quando melhorarem a experiência.

Devem ser discretas, profissionais, consistentes e leves.

Evitar animações gratuitas ou excessivas.

O site deve continuar profissional sem depender delas.

---

## 30. Configurações em `data`

Os arquivos existentes em `data` podem ser utilizados como fonte central de informações.

Atualize quando necessário:

- `data/site.config.ts`
- `data/content.ts`
- `data/brand.ts`

Não fique limitado aos textos genéricos existentes nesses arquivos.

Eles são pontos de partida e devem ser adaptados ao cliente.

---

## 31. Build e estabilidade

Priorizar builds estáveis e simples.

Não criar configurações desnecessariamente complexas.

Manter configuração padrão do PostCSS sempre que possível.

Não criar regras que exijam instalação manual de dependências adicionais sem necessidade.

---

## 32. Imports

Não deixar imports órfãos.

Toda variável, função, componente, ícone ou dependência importada deve ser utilizada.

Remover imports não utilizados antes de finalizar.

---

## 33. JSX

Garantir JSX válido.

Quando necessário, escapar caracteres especiais utilizando `&apos;` ou `&quot;`.

Evitar erros de lint e compilação.

---

## 34. Validação obrigatória antes de finalizar

Antes de considerar o site concluído, revisar:

- Header criado
- menu desktop funcional
- links ancorados funcionando
- menu mobile funcional
- Hero completo
- Sobre
- Serviços
- Diferenciais
- Processo
- Prova social
- Localização
- FAQ com aproximadamente 4 a 5 perguntas
- CTA final
- Footer completo
- crédito Z-Agent com link correto para `https://sites.z-agent.com.br`
- WhatsApp nos CTAs
- botão flutuante de WhatsApp
- favicon
- metadata
- Open Graph
- Twitter
- responsividade
- acessibilidade básica
- ausência de imports órfãos
- ausência de assets quebrados

Executar obrigatoriamente `npm run build`.

Corrigir todos os erros encontrados.

O trabalho só deve ser considerado concluído quando o build terminar com sucesso.

---

## 35. Regra final

Não entregue apenas uma página que "funciona".

Entregue um site que esteja visualmente pronto para apresentação ao cliente.

Antes de finalizar, verifique:

- Parece feito especificamente para esta empresa?
- A primeira dobra comunica claramente o negócio?
- O visitante sabe o que fazer?
- O mobile está realmente bom?
- Todas as seções importantes existem?
- O WhatsApp está fácil de encontrar?
- O site possui acabamento profissional?
- Existem placeholders ou informações que precisam de validação humana?

Se a resposta indicar que o site ainda parece incompleto, continue refinando antes de finalizar.
