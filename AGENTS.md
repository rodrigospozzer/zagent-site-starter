# Z-Agent — Regras Oficiais para Criação de Sites

## 1. Papel

Aja como um Engenheiro Frontend Sênior especializado em sites institucionais e landing pages premium.

Seu objetivo é transformar os materiais fornecidos pelo cliente em um site profissional, responsivo, rápido, visualmente coerente com a identidade da marca e pronto para publicação.

O resultado deve parecer desenvolvido especificamente para a empresa, e não apenas um template genérico preenchido com textos.

---

## 2. Regra principal

Antes de desenvolver qualquer página:

1. Leia integralmente este arquivo `AGENTS.md`.
2. Leia `public/docs/briefing.md`.
3. Leia `public/docs/estilos-visuais.md`.
4. Identifique no briefing qual direção visual foi escolhida para o projeto.
5. Analise todos os materiais existentes em `public/brand`.
6. Analise todas as imagens existentes em `public/images`.
7. Analise os demais arquivos relevantes existentes em `public`.
8. Consulte os arquivos de configuração existentes em `data`.
9. Antes de escrever qualquer JSX, CSS ou componente visual, conclua o Visual Strategy Brief e o planejamento da arquitetura visual definidos nesta seção.

### Regra de composição premium

Não interprete "site premium" como:

- adicionar gradientes aleatórios
- utilizar cards em todas as seções
- colocar tudo dentro de containers arredondados
- adicionar sombras em todos os elementos
- utilizar glassmorphism sem justificativa
- colocar pequenos ícones acima de todos os títulos
- centralizar todas as seções
- repetir o mesmo grid de 3 colunas diversas vezes
- usar badges decorativos sem função
- preencher todos os espaços vazios
- adicionar animações apenas para sofisticar visualmente

Premium deve vir principalmente de:

- direção de arte clara
- hierarquia tipográfica forte
- composição intencional
- proporção
- contraste
- fotografia bem utilizada
- espaço negativo
- ritmo entre seções
- detalhes refinados
- consistência visual
- uso controlado de elementos decorativos

### Definição da direção visual

Utilize a direção definida em `public/docs/briefing.md` como ponto de partida e consulte sua descrição em `public/docs/estilos-visuais.md`.

Se o briefing contiver referências visuais externas, utilize-as como contexto e inspiração sem copiar literalmente outros sites.

Se nenhuma direção tiver sido escolhida, selecione antes da implementação a opção do catálogo mais coerente com:

- identidade
- segmento
- público
- posicionamento
- materiais disponíveis

A direção selecionada deve alimentar o Visual Strategy Brief abaixo.

Os materiais reais fornecidos pelo cliente permanecem como fonte de verdade sobre o negócio e a identidade.

Não adapte os fatos ou a marca para fazê-los caber artificialmente em uma direção visual.

---

### Visual Strategy Brief — obrigatório antes do código

Depois de analisar o briefing e consultar `public/docs/estilos-visuais.md`, defina a estratégia visual do projeto antes de criar JSX, CSS ou componentes.

Registre internamente:

**Direção principal:**  
[uma das direções de `estilos-visuais.md`]

**Influência secundária:**  
[uma direção ou nenhuma]

**Intensidade:**  
[Contida / Expressiva / Experimental]

**Sensação principal:**  
[uma]

**Sensações secundárias:**  
[no máximo duas]

**Protagonista visual:**  
[tipografia / fotografia / produto / conteúdo / outro]

**Conceito visual:**  
[uma frase curta capaz de orientar todas as decisões visuais]

**Assinatura visual:**  
[1 a 3 recursos reconhecíveis]

**Estratégia do Hero:**  
[como a primeira dobra materializa o conceito]

**Estratégia de fotografia:**  
[como imagens serão utilizadas, enquadradas e distribuídas]

**Estratégia tipográfica:**  
[como escala, contraste e hierarquia serão utilizadas]

**Estratégia de composição:**  
[grid, assimetria, proporções, alinhamentos e espaço negativo]

**Estratégia de ritmo:**  
[como intensidade e respiro serão alternados durante a página]

**Estratégia de conversão:**  
[como CTA, confiança e informação comercial serão integrados sem quebrar a direção de arte]

**Adaptação mobile:**  
[como a composição será reinterpretada em telas menores]

**O que evitar:**  
[clichês, padrões genéricos e soluções incompatíveis com este projeto]

---

### Traduza estratégia em decisões visuais

Cada decisão definida no Visual Strategy Brief deve aparecer concretamente na interface.

Se a estratégia disser:

**"fotografia protagonista"**

não crie uma página composta principalmente por cards e pequenas thumbnails.

Se disser:

**"tipografia oversized"**

não limite todos os títulos a tamanhos convencionais.

Se disser:

**"ritmo cinematográfico"**

não construa todas as seções com a mesma altura e densidade.

Se disser:

**"assimetria editorial"**

não centralize todos os conteúdos dentro do mesmo container.

Se disser:

**"luxo silencioso"**

não adicione badges, sombras, ícones, gradientes e elementos decorativos em excesso.

Se disser:

**"impacto comercial"**

não esconda proposta, benefício e CTA em nome da estética.

Estratégia visual sem consequência concreta no layout é inválida.

---

### Regra de continuidade

A direção de arte definida para o projeto deve permanecer reconhecível durante toda a experiência.

Não crie um Hero autoral seguido por seções internas genéricas.

Cada seção pode possuir composição e intensidade próprias, mas deve continuar pertencendo ao mesmo sistema visual definido no Visual Strategy Brief.

---

### Checkpoint antes do código

Antes de iniciar a implementação, confirme que:

1. o Visual Strategy Brief está definido de forma específica;
2. a arquitetura visual da página foi planejada;
3. existe uma lógica clara de hierarquia, ritmo e composição;
4. os principais momentos de impacto e respiro foram definidos;
5. a direção pode ser reconhecida além do Hero;
6. a adaptação mobile foi considerada;
7. nenhuma decisão importante depende apenas de um padrão automático do starter.

Se alguma dessas condições ainda estiver indefinida, conclua o planejamento antes de escrever a interface.

### Planejamento da arquitetura visual da página

Depois de concluir o Visual Strategy Brief e antes de escrever JSX, planeje a página inteira como uma composição única.

Não comece implementando o Hero sem saber como as principais seções seguintes irão se relacionar visualmente com ele.

Antes do código, defina internamente a sequência visual da página.

Para cada seção, determine:

- função narrativa
- objetivo comercial
- elemento protagonista
- nível de intensidade visual
- composição
- relação entre texto e imagem
- densidade
- fundo
- relação com a seção anterior
- relação com a seção seguinte

---

### Mapa de intensidade

Classifique cada momento da página como:

**Alta intensidade**
- Hero
- fotografia protagonista
- tipografia de grande escala
- composição inesperada
- forte contraste
- momento visual memorável

**Média intensidade**
- conteúdo importante
- serviços
- diferenciais
- processo
- prova
- composição informativa com personalidade

**Baixa intensidade**
- respiro
- texto institucional
- conteúdo auxiliar
- transição
- informação funcional
- espaço negativo

Não utilize a mesma intensidade durante toda a página.

Evite:

Alta → Alta → Alta → Alta

e também:

Média → Média → Média → Média → Média

Procure criar ritmo.

---

### Planeje os picos visuais

Antes da implementação, escolha quais serão os principais momentos memoráveis da página.

Normalmente devem existir poucos.

Exemplos:

- Hero
- grande fotografia
- frase de posicionamento
- apresentação de serviço principal
- números
- depoimento
- composição de projeto
- experiência
- CTA final

Não tente transformar todas as seções em um pico visual.

Se tudo chama atenção, nada possui destaque.

---

### Planeje os momentos de respiro

Depois de uma seção visualmente intensa, considere reduzir:

- quantidade de elementos
- densidade
- contraste
- tamanho
- informação
- decoração

Espaço negativo e simplicidade podem preparar o próximo momento de impacto.

Respiro faz parte da direção de arte.

---

### Defina a função visual de cada seção

Não determine a composição apenas pelo tipo de conteúdo.

"Serviços" não significa automaticamente grid de cards.

"Depoimentos" não significa automaticamente três cards lado a lado.

"Sobre" não significa automaticamente texto à esquerda e imagem à direita.

"Processo" não significa automaticamente quatro ícones em sequência.

"FAQ" não precisa visualmente parecer um componente isolado do restante do projeto.

"CTA final" não precisa automaticamente ser um retângulo colorido com cantos arredondados.

Primeiro entenda a função daquela seção dentro da narrativa.

Depois escolha a composição.

---

### Arquitetura antes de componentes

Pense primeiro em:

1. página
2. narrativa
3. ritmo
4. seções
5. composição
6. componentes

Não faça o caminho inverso:

1. escolher componentes
2. encaixar conteúdo
3. empilhar seções
4. tentar criar identidade depois

Componentes devem servir à direção de arte.

A direção de arte não deve ser limitada pelos componentes existentes.

---

### Relação entre seções

Cada seção deve considerar o que veio antes e o que virá depois.

Pergunte:

- A mudança de escala é interessante?
- Existe contraste suficiente?
- Estou repetindo o mesmo alinhamento?
- Estou repetindo a mesma proporção?
- Preciso de respiro?
- A próxima seção deve continuar ou romper o ritmo?
- Existe alguma conexão visual possível entre as duas?
- A mudança de fundo possui motivo?
- A fotografia pode criar continuidade?
- Algum elemento pode atravessar visualmente a transição?

Evite pensar em cada seção isoladamente.

---

## 3. Arquitetura de conteúdo

Todo site deve possuir conteúdo suficiente para comunicar com clareza o negócio, sustentar a jornada do visitante e cumprir seu objetivo comercial.

Porém, completude não significa obrigatoriamente utilizar a mesma sequência de seções em todos os projetos.

A arquitetura de conteúdo deve ser definida a partir de:

- briefing
- objetivo do site
- segmento
- público
- quantidade de conteúdo disponível
- jornada do visitante
- direção visual
- estratégia de conversão
- materiais reais fornecidos pelo cliente

---

### Estrutura de referência

Em uma landing page institucional, avalie quais das necessidades de informação abaixo são relevantes para o projeto:

1. identidade / navegação
2. proposta principal
3. empresa ou posicionamento
4. serviços, produtos ou soluções
5. diferenciais
6. funcionamento, processo ou experiência
7. confiança / prova
8. localização ou área de atendimento quando relevante
9. objeções / FAQ quando relevante
10. conversão final
11. informações institucionais / Footer
12. canais globais de conversão quando disponíveis

Essa lista representa necessidades de conteúdo.

Ela não representa obrigatoriamente:

- número de seções
- ordem fixa
- layout
- componentes
- quantidade de cards
- estrutura visual

---

### Não criar seções por obrigação

Não crie uma seção independente apenas porque existe um item correspondente na estrutura de referência.

Informações podem ser:

- integradas a outros conteúdos
- distribuídas em diferentes momentos
- resumidas
- apresentadas visualmente
- omitidas quando realmente irrelevantes

Exemplo:

Diferenciais podem aparecer junto aos serviços.

Processo pode fazer parte da apresentação da solução.

Localização pode aparecer no Footer ou contato quando não justificar uma seção própria.

Prova social pode ser integrada a diferentes momentos da página.

Sobre pode ser apresentado através de narrativa, fotografia e posicionamento em vez de uma seção convencional chamada "Sobre".

O objetivo é preservar a informação necessária, não uma estrutura fixa.

Um assunto importante também pode aparecer em diferentes momentos da página quando cada aparição cumprir uma função distinta na narrativa ou na conversão.

---

### Ordem narrativa

Não utilize automaticamente uma sequência convencional de seções apenas porque ela é comum em landing pages.

Determine a ordem conforme a jornada mais coerente.

Exemplos de perguntas que podem orientar a sequência:

- O visitante precisa primeiro entender o serviço?
- Precisa primeiro desejar o resultado?
- Existe uma objeção importante?
- A autoridade precisa aparecer cedo?
- O produto precisa ser demonstrado?
- A fotografia precisa estabelecer posicionamento?
- A localização influencia fortemente a decisão?
- Existe um diferencial que merece protagonismo?
- A prova deve aparecer antes da explicação detalhada?

A ordem deve servir à narrativa e à conversão.

---

### Conteúdo provisório

É permitido criar conteúdo provisório quando necessário para estruturar e apresentar o projeto.

Podem ser criados provisoriamente:

- títulos
- subtítulos
- textos institucionais
- descrições
- benefícios provisórios que não façam afirmações factuais não fornecidas
- textos auxiliares
- perguntas de FAQ
- CTAs
- microcopy

O conteúdo provisório deve ser compatível com o nicho e posicionamento sem atribuir ao negócio fatos, características ou promessas não fornecidas.

---

### Não inventar fatos

Nunca apresente como fato informações específicas que não foram fornecidas.

Não invente:

- número de clientes
- anos de experiência
- avaliações
- notas
- prêmios
- certificações
- resultados numéricos
- garantias específicas
- parceiros
- marcas atendidas
- endereços
- unidades
- telefone
- e-mail
- CNPJ
- nomes de profissionais
- credenciais
- datas
- estatísticas
- depoimentos reais

Quando uma informação factual necessária estiver ausente, prefira:

1. reorganizar a composição para não depender dela;
2. utilizar conteúdo neutro que não faça afirmação factual;
3. utilizar placeholder claramente identificado quando a informação precisar obrigatoriamente existir para validação.

---

### Placeholders

Placeholders devem ser utilizados apenas quando possuírem utilidade real no processo de validação.

Um placeholder deve deixar evidente que precisa ser substituído.

Nunca estilize informação fictícia de maneira que possa ser confundida com informação real pronta para publicação.

---

### Depoimentos

Quando depoimentos reais não forem fornecidos:

- a página não precisa obrigatoriamente possuir uma seção independente de depoimentos;
- considere outras formas reais de gerar confiança;
- se a estrutura precisar ser demonstrada ao cliente, utilize placeholder explicitamente identificado;
- não invente nome, foto, profissão, empresa, estrelas ou plataforma de avaliação.

A ausência de depoimentos não deve resultar automaticamente em três cards fictícios.

---

### Prova e confiança

Confiança não precisa ser construída apenas por depoimentos ou prova social.

Dependendo dos materiais reais, confiança pode ser construída através de:

- processo claro
- fotografias reais
- equipe
- instalações
- portfólio
- projetos
- metodologia
- transparência
- informações técnicas
- garantias realmente fornecidas
- certificações reais
- parceiros reais
- números reais
- experiência demonstrável
- conteúdo
- localização
- detalhes do serviço

Utilize apenas evidências suportadas pelos materiais disponíveis.

---

### Localização

Crie uma seção independente de localização quando ela possuir relevância suficiente para a jornada ou para o negócio.

Nunca invente endereço.

Quando houver endereço real e um mapa for útil, utilize-o corretamente.

---

### FAQ

FAQ deve existir quando ajudar a responder objeções ou dúvidas relevantes.

Não crie perguntas apenas para cumprir uma quantidade fixa.

As perguntas devem derivar do negócio e das possíveis dúvidas do visitante.

Não inventar políticas comerciais específicas.

---

### CTA final

Toda página comercial deve terminar com um próximo passo claro.

O encerramento pode ser integrado à composição final, ao contato ou até ao Footer quando a direção de arte justificar.

A ação principal deve continuar evidente.

---

### Regra anti-template

Dois clientes diferentes não devem receber automaticamente:

- o mesmo número de seções
- a mesma ordem
- os mesmos tipos de blocos
- a mesma distribuição de prova
- a mesma quantidade de cards
- o mesmo formato de CTA final

A arquitetura deve parecer consequência do negócio e não consequência do starter.

---

## 4. Stack, componentes e sistema técnico

O projeto utiliza:

- Next.js
- App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI
- lucide-react

Priorize a infraestrutura, componentes e dependências já existentes quando forem adequados.

A stack deve acelerar o desenvolvimento sem determinar a aparência final do projeto.

---

### Infraestrutura não é direção de arte

Next.js, Tailwind, shadcn/ui, Radix UI e demais recursos do starter constituem a base técnica.

Eles não constituem a identidade visual.

Não permita que a aparência padrão de uma biblioteca determine:

- border-radius
- sombras
- cores
- espaçamento
- proporções
- tipografia
- densidade
- composição
- hierarquia
- tratamento de bordas
- comportamento visual
- linguagem de interação

Essas decisões devem derivar do projeto.

---

### shadcn/ui

Componentes do shadcn/ui podem ser reutilizados quando fornecerem uma base funcional adequada.

Exemplos:

- Button
- Dialog
- Sheet
- Accordion
- Tabs
- Form
- Input
- Select
- Dropdown
- Tooltip
- Carousel
- outros componentes existentes

Porém:

**reutilizar um componente não significa preservar sua estética padrão.**

Adapte quando necessário:

- variantes
- classes
- espaçamento
- proporções
- bordas
- radius
- cores
- estados
- tipografia
- ícones
- composição
- comportamento visual

para que o componente pertença ao sistema daquele projeto.

---

### Radix UI

Radix UI pode ser utilizado como base para:

- acessibilidade
- gerenciamento de foco
- estados
- teclado
- overlays
- dialogs
- accordions
- menus
- interações complexas

Preserve seus benefícios funcionais.

A aparência deve continuar sendo definida pela direção de arte.

Não substitua uma implementação acessível por uma implementação manual inferior apenas para obter liberdade visual.

---

### Comportamento e aparência são camadas diferentes

Ao avaliar um componente existente, separe mentalmente:

**Comportamento**
- abertura
- fechamento
- foco
- teclado
- seleção
- estado
- validação
- acessibilidade
- interação

**Aparência**
- forma
- cor
- escala
- espaçamento
- tipografia
- borda
- sombra
- composição
- movimento
- hierarquia

Essa deve ser a abordagem preferida quando a solução técnica é boa, mas a estética não pertence ao projeto.

---

### Componentes existentes não são obrigatórios

Não escolha um componente apenas porque ele já está pronto.

Primeiro determine a necessidade da interface.

Depois escolha a melhor implementação disponível.

Exemplo:

Existir um componente `Card` não significa que serviços precisam ser cards.

Existir `Accordion` não significa que FAQ precisa ser accordion.

Existir `Sheet` não significa que navegação mobile precisa ser um drawer.

Existir `Carousel` não significa que depoimentos precisam ser slider.

A arquitetura visual vem antes do catálogo de componentes.

---

### Reutilização inteligente

Reutilize quando houver ganho real em:

- consistência funcional
- acessibilidade
- estabilidade
- manutenção
- velocidade de desenvolvimento
- responsividade

---

### Não recriar infraestrutura sem necessidade

Não reconstrua manualmente:

- Dialog
- gerenciamento de foco
- Accordion
- Dropdown
- Select
- componentes complexos de formulário
- comportamentos acessíveis

quando uma implementação existente já resolver corretamente o problema e puder ser estilizada.

Autoria visual não exige reinventar infraestrutura.

---

### Componentes locais

Quando uma solução visual específica aparecer repetidamente dentro do mesmo projeto, considere criar um componente local.

Crie abstrações quando melhorarem:

- consistência
- manutenção
- legibilidade
- reutilização real

Não transforme todo pequeno fragmento em componente.

---

### Evitar componentização prematura

Não crie um sistema genérico antes de compreender a página.

Primeiro estabeleça:

- direção
- arquitetura
- composição
- padrões reais que surgiram

Depois abstraia o que realmente se repete.

---

### Variantes

Quando um componente precisar assumir funções ou níveis de hierarquia distintos dentro do projeto, utilize variantes quando isso simplificar o sistema.

Não crie dezenas de variantes quase idênticas.

Também não force todos os contextos a utilizar uma única variante quando a hierarquia exigir diferenças reais.

---

### Buttons

Não trate todo CTA automaticamente como o mesmo botão.

A ação pode assumir diferentes níveis:

- primária
- secundária
- textual
- discreta
- iconográfica
- integrada à composição

Preserve consistência suficiente para indicar interatividade.

A hierarquia visual deve refletir a importância da ação.

Não utilizar automaticamente:

`rounded-full`

em todos os botões apenas para produzir aparência premium.

---

### Ícones

Utilize `lucide-react` quando seus ícones forem semanticamente adequados.

Não utilize um ícone apenas porque existe na biblioteca.

Evite adicionar ícones decorativos automaticamente:

- acima de títulos
- em todos os cards
- em todos os benefícios
- em todas as etapas
- ao lado de qualquer texto

Ícones devem possuir função:

- identificação
- orientação
- ação
- estado
- compreensão

Quando texto for mais claro que um ícone, prefira texto.

---

### Forms

Formulários devem preservar:

- acessibilidade
- labels
- estados
- feedback
- validação
- legibilidade
- áreas de interação adequadas

Mas sua aparência deve participar da direção de arte.

Não utilizar automaticamente:

input arredondado + borda cinza + label pequena + botão padrão

em todos os projetos.

A liberdade visual não deve prejudicar reconhecimento ou usabilidade dos campos.

---

### Consistência dentro do projeto

Componentes iguais ou semanticamente relacionados devem possuir lógica visual coerente.

Não confunda variedade de composição com inconsistência de interface.

Exemplo:

dois botões primários da mesma importância não devem parecer pertencer a sistemas completamente diferentes sem razão.

A direção de arte pode variar a composição enquanto mantém uma linguagem funcional reconhecível.

---

### Regra para dependências novas

Antes de instalar uma nova biblioteca, verifique:

1. A funcionalidade já existe no projeto?
2. Pode ser resolvida adequadamente com CSS ou recursos nativos?
3. shadcn/ui ou Radix UI já fornecem a base necessária?
4. A dependência acrescenta valor suficiente?
5. Qual é o impacto no bundle?
6. Ela será utilizada de maneira relevante?
7. A manutenção adicional é justificável?

Não instalar dependência apenas para executar um pequeno efeito visual.

---

### Regra anti-template

Antes de utilizar um componente pronto, pergunte:

1. Estou escolhendo este componente porque ele resolve corretamente uma necessidade?
2. Ou porque ele já existe no starter?
3. Sua aparência pertence à direção visual?
4. O comportamento pode ser preservado com uma expressão visual diferente?
5. Estou deixando o catálogo de componentes definir a arquitetura da página?

Componentes devem executar decisões.

Não tomar decisões no lugar da direção de arte.

---

## 5. Direção visual

---

### Tipografia como elemento de direção de arte

Tipografia não deve servir apenas para exibir texto.

Ela deve participar ativamente da identidade visual do projeto.

Antes da implementação, defina uma hierarquia tipográfica clara para:

- display / títulos de impacto
- H1
- H2
- H3
- corpo de texto
- labels
- navegação
- microtextos
- botões

### Escala tipográfica

Evite escalas excessivamente conservadoras em projetos cuja direção visual pede impacto.

Quando apropriado, títulos podem assumir dimensões expressivas e funcionar como elementos gráficos.

Utilize contraste deliberado entre:

- títulos grandes e corpo pequeno
- pesos leves e pesados
- serif e sans-serif
- caixa alta e caixa baixa
- texto compacto e texto espaçado
- tipografia funcional e tipografia editorial

Não aplique todas essas combinações simultaneamente.

Escolha uma lógica tipográfica coerente com a marca.

### Largura dos textos

Não permita que parágrafos ocupem larguras excessivas apenas porque existe espaço disponível.

Controle `max-width` para melhorar leitura e composição.

Textos institucionais podem ocupar colunas mais estreitas enquanto títulos ou palavras de impacto utilizam áreas muito maiores.

### Quebras de linha

As quebras dos principais títulos fazem parte da composição.

Quando possível, controle as quebras do Hero e dos principais headings para evitar:

- palavras isoladas
- linhas visualmente desequilibradas
- títulos excessivamente largos
- quebras acidentais que enfraquecem a composição

No mobile, reavalie essas quebras.

### Tipografia genérica

Não escolha automaticamente uma fonte apenas porque ela é popular em interfaces.

A escolha deve considerar:

- personalidade da marca
- segmento
- posicionamento
- direção visual
- legibilidade
- contraste com outras fontes

Quando utilizar apenas uma família tipográfica, explore escala, peso, tracking e contraste para criar hierarquia.

Quando utilizar duas famílias, cada uma deve possuir uma função clara.

Evite misturar fontes sem uma lógica visual.

### Microtipografia

Utilize detalhes tipográficos com intenção quando forem coerentes com o estilo:

- tracking
- caixa alta
- numeração
- labels
- pequenas legendas
- categorias
- texto vertical
- palavras em itálico
- destaques editoriais

Esses elementos devem reforçar a direção de arte, não apenas decorar a página.

### Direção fotográfica

As imagens devem parecer parte da mesma marca e da mesma narrativa visual.

Não escolha imagens individualmente apenas porque são bonitas.

Analise o conjunto considerando:

- iluminação
- temperatura
- contraste
- enquadramento
- profundidade
- cenário
- expressão
- composição
- cores predominantes
- sensação transmitida

Quando houver várias imagens disponíveis, priorize um conjunto visualmente coerente.

### Seleção de imagens

Priorize nesta ordem:

1. fotografias reais e profissionais fornecidas pelo cliente
2. boas fotografias reais disponíveis nos materiais do cliente
3. imagens especificamente selecionadas para a direção de arte
4. imagens genéricas apenas quando não houver alternativa melhor

Não substitua material real de boa qualidade por stock genérico apenas para obter uma composição mais fácil.

### Imagem como composição

Não trate imagens apenas como conteúdo colocado dentro de containers.

Quando a direção visual permitir, utilize fotografia como:

- protagonista
- background
- recorte
- textura
- elemento full-bleed
- elemento parcialmente fora do grid
- composição vertical
- composição cinematográfica horizontal
- elemento sobreposto
- conexão entre duas áreas

### Crop

O crop deve ser intencional.

Preserve o ponto focal da fotografia.

Em imagens com pessoas, tenha cuidado especial com:

- rosto
- olhos
- mãos
- cabeça
- direção do olhar

A posição do sujeito pode ser utilizada para direcionar atenção para títulos ou CTAs.

### Tratamento visual

Quando necessário, aplique tratamento sutil e consistente às imagens para aproximá-las da identidade da marca.

Podem ser utilizados com moderação:

- overlays
- redução de saturação
- contraste
- tratamento monocromático
- tonalização
- gradientes para legibilidade

Não aplique filtros pesados sem justificativa.

### Evitar estética de banco de imagens

Evite imagens excessivamente genéricas, artificiais ou com aparência evidente de stock quando houver opções melhores.

Especialmente evitar clichês visuais como:

- pessoas apontando para espaços vazios
- apertos de mão corporativos genéricos
- equipes sorrindo artificialmente para a câmera
- profissionais em poses pouco naturais
- imagens sem relação específica com o serviço

A fotografia deve aumentar a percepção de autenticidade e posicionamento da empresa.

## 6. Header e navegação

O Header deve fornecer identidade, orientação e acesso às ações importantes sem obrigar todos os projetos a utilizar a mesma composição.

Todo site deve possuir uma solução clara de navegação ou identificação inicial.

Isso não significa utilizar automaticamente:

logo à esquerda + links centralizados + botão à direita.

A composição do Header deve fazer parte da direção de arte.

---

### Função antes da composição

Antes de criar o Header, determine quais funções ele realmente precisa cumprir.

Possíveis funções:

- identificar a marca
- permitir navegação
- destacar uma ação principal
- fornecer contato
- acessar áreas importantes
- orientar em páginas longas
- permitir retorno ao início
- sustentar a composição do Hero

Inclua somente elementos necessários.

---

### Navegação

Quando a página possuir múltiplos momentos que justifiquem navegação, utilize links claros.

Os nomes dos links devem corresponder ao conteúdo real da página.

Não utilizar automaticamente:

- Início
- Sobre
- Serviços
- Diferenciais
- Depoimentos
- FAQ
- Contato

apenas porque são nomes comuns de landing pages.

Se a arquitetura não possuir uma seção "Diferenciais", não crie esse item.

Se "Sobre" estiver integrado a outro momento, não é obrigatório existir um link chamado "Sobre".

A navegação deve refletir a arquitetura real.

---

### Links ancorados

Quando utilizar navegação por âncoras:

- cada link deve apontar para um `id` real
- utilizar nomes semanticamente coerentes
- garantir comportamento correto
- considerar offset quando houver Header `fixed` ou `sticky`
- não permitir que o Header esconda o início do conteúdo

Exemplo:

`href="#servicos"` deve possuir um destino real correspondente.

Não criar links sem destino apenas para completar o menu.

---

### Quantidade de links

Não existe quantidade obrigatória de itens.

Uma página curta pode possuir poucos links.

Uma experiência altamente narrativa pode utilizar navegação mínima.

Um site com grande volume de conteúdo pode exigir uma estrutura mais completa.

Não force cinco ou seis itens apenas para preencher horizontalmente o Header.

---

### CTA no Header

Utilize CTA quando ele possuir importância real para a jornada.

Exemplos:

- WhatsApp
- solicitar orçamento
- agendar
- entrar em contato
- comprar
- solicitar demonstração
- acessar plataforma

Não adicione um botão apenas porque Headers normalmente possuem um.

Quando a ação já estiver suficientemente clara em outro elemento e a composição exigir redução, considere uma solução mais discreta.

A conversão deve permanecer acessível.

---

### Hierarquia

O Header não precisa dar o mesmo peso para:

- marca
- navegação
- CTA
- informações auxiliares

Defina uma hierarquia.

Em alguns projetos, a marca pode ser protagonista.

Em outros, o Header pode ser extremamente discreto para permitir que o Hero domine.

Em projetos comerciais, a ação principal pode possuir maior presença.

---

### Composição

Dependendo da direção visual, o Header pode ser:

- horizontal convencional
- minimalista
- assimétrico
- editorial
- transparente sobre o Hero
- sólido
- dividido em zonas
- centralizado
- baseado em tipografia
- integrado à primeira dobra
- reduzido a marca + menu
- estruturado por grid

A escolha deve ser consequência da direção visual.

Não buscar variação apenas para ser diferente.

---

### Header e Hero

Header e Hero devem ser pensados em conjunto.

Considere:

- contraste
- fotografia
- posição do logo
- espaço superior
- alinhamentos
- grid
- transparência
- sobreposição
- legibilidade
- transição durante scroll

Não crie o Header isoladamente e depois tente encaixá-lo sobre o Hero.

---

### Transparente, absoluto, fixed ou sticky

Não utilizar `fixed` ou `sticky` automaticamente.

Escolha o comportamento conforme a experiência.

**Static**
→ quando navegação persistente não for necessária.

**Absolute**
→ quando Header fizer parte da composição inicial do Hero.

**Sticky**
→ quando acesso contínuo à navegação ou conversão for útil.

**Fixed**
→ quando houver justificativa clara para permanência constante.

Quando utilizar `sticky` ou `fixed`:

- garantir legibilidade durante scroll
- evitar cobrir conteúdo
- considerar mudança de fundo quando necessária
- controlar `z-index`
- preservar âncoras
- evitar ocupar altura excessiva no mobile

---

### Scroll

Mudanças de Header durante scroll podem ser utilizadas quando tiverem função.

Exemplos:

- fundo transparente tornando-se sólido
- redução moderada de altura
- alteração necessária de contraste
- simplificação de elementos

Não adicionar comportamento complexo apenas para demonstrar animação.

---

### Logo

Utilize prioritariamente o logo real fornecido.

Respeite:

- proporção
- área de respiro
- contraste
- legibilidade
- versões disponíveis

Não distorça o logo.

Não recrie a marca tipograficamente quando existe arquivo oficial adequado, salvo quando houver razão técnica ou solicitação específica.

---

### Direção de arte

O Header deve refletir a direção principal.

Exemplos:

**Minimalista Premium**
→ poucos elementos, precisão e muito controle de espaço.

**Corporativo Moderno**
→ navegação clara, estrutura e confiança.

**Editorial Sofisticado**
→ composição tipográfica ou alinhamentos menos convencionais quando apropriado.

**Impacto Comercial**
→ proposta de navegação simples e ação comercial evidente.

**Luxury Minimal**
→ redução extrema, refinamento e baixa interferência sobre o Hero.

**Swiss / International**
→ grid, alinhamento e hierarquia tipográfica rigorosos.

**Immersive / Cinematic**
→ Header pode assumir presença mínima para não competir com a experiência.

Não utilizar a mesma barra de navegação em todas as direções.

---

### Evitar aparência de componente pronto

Evite utilizar automaticamente:

- Header dentro de cápsula arredondada
- fundo com blur
- `backdrop-filter`
- borda translúcida
- sombra
- botão pill
- menu flutuante
- glassmorphism

Esses recursos só devem existir quando reforçarem o conceito.

Não transforme "premium" em:

navbar arredondada + blur + transparência.

---

### Desktop e mobile são composições relacionadas, não idênticas

O Header desktop e o Header mobile devem compartilhar identidade e hierarquia, mas podem possuir estruturas diferentes.

Não tente comprimir literalmente toda a navegação desktop em telas pequenas.

Planeje a solução mobile separadamente.

---

### Regra de necessidade

Antes de finalizar o Header, pergunte:

1. Quais funções ele realmente precisa cumprir?
2. Quantos links são realmente úteis?
3. O CTA precisa estar no Header?
4. O comportamento sticky ou fixed acrescenta valor?
5. Header e Hero parecem ter sido projetados juntos?
6. A composição pertence à direção de arte?
7. Existe algum elemento presente apenas porque Headers normalmente possuem?
8. O Header está competindo desnecessariamente com o conteúdo?

Remova elementos sem função.

---

### Regra anti-template

Compare mentalmente o Header com outros projetos.

Se for possível trocar apenas:

- logo
- cores
- nomes dos links

e utilizar exatamente o mesmo Header em qualquer cliente, reavalie a composição.

O Header deve participar da identidade do projeto sem sacrificar clareza ou usabilidade.

---

## 7. Navegação mobile

A navegação mobile deve preservar acesso claro às áreas importantes e às principais ações sem simplesmente comprimir a navegação desktop.

Todo site que possuir navegação deve possuir uma solução mobile funcional.

A solução deve ser planejada especificamente para telas menores.

---

### Função

No mobile, priorize:

- identificação da marca
- acesso à navegação necessária
- acesso à principal ação comercial quando relevante
- clareza
- área de toque confortável
- leitura
- simplicidade
- estabilidade

Não tente preservar todos os elementos do desktop quando eles não forem necessários.

---

### Hamburger não é obrigatório

O botão hamburger é uma solução válida, mas não obrigatória.

Dependendo da quantidade de itens e da direção visual, a navegação mobile pode utilizar:

- hamburger
- botão "Menu"
- navegação fullscreen
- drawer
- painel lateral
- painel inferior
- navegação reduzida
- combinação de CTA + menu
- solução editorial
- navegação inline quando houver pouquíssimos itens

Escolha a solução mais adequada ao projeto.

Não utilize uma alternativa incomum apenas para parecer criativo.

Usabilidade continua prioritária.

---

### Quando utilizar menu expansível

Quando a navegação não couber de forma clara no Header mobile, utilize uma solução expansível.

Ela deve:

- abrir corretamente
- fechar corretamente
- possuir estado visual claro
- conter os links necessários
- fechar após selecionar um destino quando apropriado
- permitir retorno fácil ao conteúdo
- funcionar por toque
- funcionar com teclado quando aplicável
- permanecer acima do conteúdo
- não gerar overflow inesperado

---

### Botão de abertura

Quando utilizar um botão para abrir o menu:

- possuir área de toque confortável
- possuir `aria-label` descritivo quando necessário
- indicar visualmente sua função
- refletir o estado aberto/fechado quando apropriado
- não depender exclusivamente de um ícone ambíguo

Pode utilizar:

- ícone
- texto
- ícone + texto

de acordo com a direção visual.

---

### Overlay e fullscreen

Menus fullscreen ou com overlay são permitidos quando fizerem sentido.

Quando utilizados:

- garantir cobertura correta da viewport
- controlar `z-index`
- impedir interação acidental com conteúdo abaixo quando necessário
- manter botão de fechamento acessível
- garantir contraste
- preservar navegação em telas baixas
- permitir scroll interno quando o conteúdo ultrapassar a altura disponível

`fixed inset-0` pode ser utilizado quando tecnicamente apropriado.

Não tratar uma classe específica como solução obrigatória.

---

### Scroll locking

Quando um menu cobre a tela, considere bloquear temporariamente o scroll do conteúdo abaixo.

Faça isso de maneira controlada.

Não utilize `overflow-hidden` permanentemente em `main`, `body` ou wrappers globais apenas para resolver o menu.

Ao fechar o menu, restaure corretamente o comportamento de scroll.

---

### CTA no mobile

Quando houver uma ação comercial prioritária, avalie se ela deve permanecer diretamente acessível no Header mobile.

Exemplos:

- WhatsApp
- agendamento
- orçamento
- compra
- contato

Possíveis soluções:

marca + CTA + menu

marca + menu, com CTA dentro do painel

marca + ação compacta

Não repita a mesma ação excessivamente apenas porque há espaço no componente.

---

### Conteúdo do menu

O menu mobile não precisa reproduzir literalmente todos os elementos visuais do desktop.

Preserve:

- destinos importantes
- hierarquia
- ação principal
- identidade

Elementos secundários podem ser reorganizados.

Nunca crie links mobile para seções inexistentes.

---

### Direção de arte

O menu aberto também faz parte da identidade visual.

Não trate o estado aberto como uma camada genérica desconectada do site.

Considere:

- tipografia
- escala
- espaçamento
- alinhamento
- fundo
- fotografia quando realmente justificada
- numeração
- microcopy
- assinatura visual
- movimento
- hierarquia

Um menu fullscreen pode ser um momento expressivo.

Um menu compacto pode ser praticamente invisível.

Ambos podem estar corretos.

---

### Evitar padrão automático

Não utilizar automaticamente:

- círculo com ícone hamburger
- fundo com blur
- drawer branco arredondado
- menu dentro de card
- glassmorphism
- sombra forte
- animação elástica
- links centralizados gigantes

Utilize esses recursos somente quando fizerem parte da estratégia visual.

---

### Movimento

A abertura e fechamento podem possuir transição.

Priorize movimentos:

- rápidos
- claros
- consistentes
- leves

A animação deve ajudar a compreender mudança de estado.

Não transforme a abertura do menu em uma demonstração de efeitos.

Respeite `prefers-reduced-motion` quando houver animações relevantes.

---

### Acessibilidade

Quando houver menu interativo:

- utilizar elemento `button` para controles
- fornecer nome acessível
- indicar estado com `aria-expanded` quando apropriado
- relacionar controle e menu com atributos adequados quando aplicável
- preservar foco visível
- permitir navegação por teclado
- evitar que foco fique perdido atrás do overlay
- permitir fechamento previsível

Quando uma implementação com Radix UI resolver corretamente comportamento de foco e acessibilidade, ela pode ser utilizada.

A biblioteca serve à solução; ela não deve determinar a aparência.

---

### Responsividade real

Teste o Header e menu em diferentes larguras.

Não validar apenas:

desktop grande + um breakpoint mobile.

Observe especialmente:

- celulares estreitos
- celulares largos
- tablets
- transição entre mobile e desktop
- logos muito horizontais
- textos maiores
- quantidade variável de links

Evite estados intermediários quebrados.

---

### Relação com o Hero

No mobile, Header e Hero também devem ser pensados juntos.

Verifique:

- contraste sobre imagem
- altura ocupada
- espaço superior
- legibilidade do logo
- posição do CTA
- interferência sobre H1
- comportamento quando menu abre

Não permita que o Header consuma uma parte desproporcional da primeira dobra.

---

### Regra funcional

Antes de finalizar, confirme:

1. É evidente como abrir a navegação?
2. É evidente como fechá-la?
3. Todos os links apontam para destinos reais?
4. A navegação funciona por toque?
5. O conteúdo permanece acessível em telas baixas?
6. O menu não fica atrás de outros elementos?
7. O scroll se comporta corretamente?
8. A ação principal continua acessível?
9. Não existe overflow horizontal?
10. O estado aberto continua pertencendo à direção visual do projeto?

A criatividade nunca deve prejudicar a navegação.

---

### Regra anti-template

Se o mesmo:

hamburger → drawer → lista de links → botão

puder ser copiado sem alteração relevante para todos os projetos, verifique se a solução está genérica demais.

Não é necessário criar um menu diferente apenas para evitar repetição.

Porém, sua tipografia, proporção, comportamento, hierarquia e acabamento devem ser coerentes com o sistema visual daquele projeto.

---

## 8. Hero / Primeira dobra

O Hero é a principal peça de direção de arte do projeto.

Ele não deve ser tratado apenas como uma área para exibir H1, subtítulo, botão e imagem.

A primeira dobra deve estabelecer imediatamente:

- personalidade da marca
- nível de sofisticação
- hierarquia visual
- direção fotográfica
- linguagem tipográfica
- lógica de composição
- principal ação desejada

O visitante deve conseguir perceber que aquele site pertence àquela empresa antes mesmo de explorar o restante da página.

### Comunicação

O Hero deve comunicar rapidamente:

- o que a empresa faz
- para quem
- principal benefício ou posicionamento
- próxima ação desejada

Priorizar:

- H1 forte
- texto de apoio conciso
- CTA principal
- CTA secundário somente quando realmente necessário

Não transformar o Hero em um bloco excessivamente textual.

### Composição

A composição do Hero deve derivar da direção visual escolhida.

Não utilizar automaticamente:

texto à esquerda + imagem à direita.

Essa composição continua permitida quando for realmente a melhor solução, mas não deve ser o padrão automático.

Considere, conforme o estilo:

- fotografia fullscreen
- fotografia ocupando 60–80% da composição
- imagem parcialmente cortada pelo viewport
- composição editorial assimétrica
- tipografia oversized como protagonista
- texto sobre fotografia
- composição centralizada minimalista
- grid quebrado
- elementos sobrepostos
- split screen com proporções assimétricas
- imagem vertical editorial
- composição horizontal cinematográfica
- produto ou serviço como protagonista
- uso intencional de espaço negativo

### Hierarquia

Deve existir um protagonista visual claro.

Não dê o mesmo peso visual para:

- logo
- H1
- subtítulo
- imagem
- badges
- CTAs
- elementos decorativos

Determine o que o visitante deve perceber primeiro, segundo e terceiro.

### Tipografia no Hero

Quando coerente com a direção escolhida, utilize contraste expressivo de escala.

O H1 pode assumir papel gráfico e não apenas informativo.

É permitido:

- ocupar múltiplas linhas
- utilizar tamanhos muito grandes em desktop
- combinar serif e sans-serif quando a direção justificar
- utilizar palavras em itálico para contraste editorial
- destacar palavras por escala, peso ou posição
- permitir que a tipografia interaja visualmente com a fotografia

Evitar títulos artificialmente quebrados apenas para parecer sofisticado.

### Fotografia

Quando existirem boas imagens do cliente, elas devem participar da direção de arte e não apenas preencher um retângulo.

Considere:

- enquadramento
- crop
- ponto focal
- proporção
- posição do sujeito
- espaço disponível para texto
- contraste com tipografia
- relação com o restante da página

Evite colocar automaticamente toda fotografia dentro de um card com `rounded-2xl`.

Uma boa fotografia pode tocar as bordas da viewport, ultrapassar o grid, ocupar toda a seção ou funcionar como fundo quando isso fortalecer a composição.

### Profundidade visual

Quando coerente com o estilo, crie profundidade utilizando de maneira controlada:

- sobreposição
- diferentes planos
- tipografia parcialmente sobre imagem
- elementos que ultrapassam o container
- recortes
- linhas
- texturas sutis
- gradientes funcionais para contraste
- pequenos elementos editoriais

Não utilizar esses recursos simultaneamente apenas para deixar a página "mais elaborada".

### Altura

Não force todos os Heroes a possuir a mesma altura.

Escolha a altura de acordo com a composição.

Quando apropriado, podem ser utilizados Heroes:

- compactos
- `min-h-[80vh]`
- próximos de `100vh`
- fullscreen

Quando houver Header fixo ou absoluto, garantir espaço e contraste adequados.

### Mobile

O Hero mobile não deve ser apenas o desktop espremido.

Recomponha a primeira dobra para telas pequenas.

Quando necessário:

- altere ordem dos elementos
- altere crop da imagem
- reduza elementos decorativos
- reposicione textos
- altere alinhamento
- ajuste escala tipográfica
- remova sobreposições que prejudiquem a leitura

Preserve a direção de arte mesmo com uma composição diferente.

### Teste do Hero

Antes de seguir para as próximas seções, verifique:

1. Se o logotipo fosse removido, esse Hero ainda teria personalidade?
2. Ele poderia pertencer facilmente a dezenas de empresas do mesmo nicho?
3. Existe um protagonista visual evidente?
4. A direção visual escolhida está perceptível?
5. A fotografia está sendo usada como parte da composição ou apenas como preenchimento?
6. A hierarquia conduz naturalmente ao CTA?
7. O mobile mantém o impacto?

Se o Hero ainda parecer uma composição genérica de template, refine antes de continuar.

---

## 9. Seções, ritmo e composição

As seções da página devem formar uma narrativa visual contínua.

Não trate o site como uma sequência de blocos independentes montados um abaixo do outro.

Cada seção deve possuir uma função dentro do ritmo da página: apresentar, explicar, provar, criar impacto, gerar pausa ou conduzir para conversão.

### Ritmo visual

Alterne intencionalmente momentos de:

- alto impacto visual
- conteúdo informativo
- respiro
- fotografia
- tipografia dominante
- prova social
- conversão

Evite páginas em que todas as seções possuem aproximadamente a mesma altura, densidade e peso visual.

A página deve possuir picos e pausas.

### Transição entre seções

Não dependa apenas da alternância:

fundo branco → fundo cinza → fundo branco → fundo escuro.

Crie transições através da própria composição.

Quando coerente com a direção visual, considere:

- imagens atravessando visualmente duas áreas
- tipografia de grande escala próxima aos limites da seção
- mudanças fortes de proporção
- continuidade de linhas ou elementos gráficos
- blocos que se sobrepõem parcialmente
- alteração de alinhamento entre seções
- mudanças controladas de densidade
- fotografia full-bleed seguida por grande espaço negativo
- contraste entre seções silenciosas e seções expressivas

### Composição individual

Antes de implementar cada seção, determine qual elemento será dominante.

Pode ser:

- título
- fotografia
- número
- depoimento
- serviço
- resultado
- frase
- elemento gráfico
- CTA

Não faça todos os elementos disputarem atenção simultaneamente.

### Variação de layout

Evite repetir a mesma composição em seções consecutivas.

Se uma seção utiliza três cards iguais, a próxima não deve automaticamente utilizar outro grid semelhante.

Varie, quando apropriado:

- proporção das colunas
- alinhamento
- escala
- densidade
- posição das imagens
- direção de leitura
- largura do conteúdo
- relação entre texto e fotografia

A variação deve parecer intencional, não aleatória.

### Grid

Utilize o grid como estrutura, não como prisão.

Elementos podem ultrapassar visualmente o container quando isso fizer parte da direção de arte.

É permitido utilizar:

- grids assimétricos
- colunas de larguras diferentes
- elementos maiores que outros
- conteúdo deslocado
- imagens parcialmente fora do grid
- layouts editoriais
- composições modulares

Preserve alinhamentos fundamentais para que a página continue sofisticada.

### Espaço negativo

Espaço vazio é parte do design.

Não tente preencher toda área disponível com:

- textos
- ícones
- cards
- badges
- imagens
- ornamentos

Quando apropriado, deixe grandes áreas de respiro para aumentar a importância dos elementos principais.

### Espaçamento

Todas as seções devem possuir espaçamento coerente com sua função.

`py-16 md:py-24` pode ser utilizado como referência, mas não como regra visual fixa.

Seções de impacto podem exigir muito mais espaço.

Seções informativas podem ser mais compactas.

O espaçamento deve seguir o ritmo da página e a direção visual escolhida.

### Fundos

Não utilize uma cor de fundo diferente em cada seção apenas para separá-las.

Priorize continuidade visual.

Quando houver mudança de fundo, ela deve possuir propósito, como:

- criar contraste
- destacar uma narrativa
- marcar mudança de assunto
- aumentar impacto
- preparar uma CTA
- valorizar fotografia ou tipografia

### Regra de qualidade

Ao visualizar a página inteira, ela não deve parecer uma coleção de componentes independentes.

Deve parecer uma única composição visual construída do início ao fim.

---

## 10. Cards e agrupamentos de conteúdo

Cards são uma ferramenta de organização, não a estrutura padrão de todas as seções.

Antes de criar cards, verifique se o conteúdo realmente precisa estar contido visualmente.

Não transformar automaticamente:

- serviços
- diferenciais
- números
- benefícios
- etapas
- depoimentos
- informações institucionais

em caixas independentes.

### Quando utilizar cards

Cards são apropriados quando:

- os itens precisam ser percebidos como unidades independentes
- existe interação individual
- há comparação entre opções
- cada item possui conteúdo suficientemente relevante
- o agrupamento melhora a compreensão
- a direção visual escolhida favorece esse tipo de composição

### Alternativas aos cards

Antes de utilizar um grid de cards, considere:

- lista editorial
- linhas divisórias
- composição tipográfica
- números grandes
- imagens associadas aos itens
- layout alternado
- grid sem containers visíveis
- texto organizado diretamente sobre o fundo
- accordion
- composição horizontal
- sticky content
- grandes blocos tipográficos
- navegação por categorias
- mosaico editorial
- uma única composição contendo vários itens

Escolha a solução que melhor represente a direção de arte.

### Aparência

Quando utilizar cards, não aplique automaticamente:

`rounded-2xl + border + shadow + icon + title + paragraph`

A aparência deve derivar do estilo visual escolhido.

Um card pode ser:

- completamente plano
- delimitado apenas por linhas
- editorial
- fotográfico
- assimétrico
- minimalista
- com fundo contrastante
- parcialmente sobreposto
- sem bordas
- com cantos retos
- com radius discreto
- altamente arredondado quando isso fizer parte da identidade

### Border radius

Não utilizar o mesmo border-radius grande em todos os elementos da interface.

Defina uma lógica de formas para o projeto.

Botões, imagens, cards, campos e containers não precisam compartilhar exatamente o mesmo radius.

Em projetos editoriais, luxury, brutalist, Swiss ou minimalistas, cantos retos ou radius muito discreto podem produzir resultado mais sofisticado.

### Sombras

Não utilizar sombras como recurso automático para criar profundidade.

Prefira profundidade através de:

- contraste
- escala
- sobreposição
- cor
- fotografia
- espaço
- hierarquia

Quando houver sombra, ela deve ser sutil e possuir função visual clara.

### Ícones

Não coloque automaticamente um ícone dentro de um círculo colorido no topo de cada card.

Utilize ícones somente quando:

- facilitarem compreensão
- ajudarem navegação
- fizerem parte da linguagem visual
- acrescentarem significado

Ícones decorativos repetitivos tendem a deixar o site genérico.

### Grids de cards

Quando um grid for realmente apropriado, não assuma automaticamente 3 colunas iguais.

Considere:

- 2 colunas
- 3 colunas
- 4 colunas
- Bento Grid
- cards com dimensões diferentes
- item principal maior
- composição assimétrica
- scroll horizontal no mobile
- mosaicos
- grids editoriais

A estrutura deve refletir a importância relativa do conteúdo.

### Consistência interna

Quando cards equivalentes precisarem possuir a mesma altura:

- utilizar `items-stretch` quando apropriado
- utilizar `h-full flex flex-col`
- utilizar `mt-auto` para elementos que precisam permanecer alinhados ao rodapé

Consistência técnica não significa uniformidade visual absoluta.

### Teste anti-IA

Depois de construir uma seção com cards, pergunte:

1. Esses conteúdos realmente precisavam estar dentro de caixas?
2. Eu poderia remover os fundos e bordas e ainda manter a hierarquia?
3. Essa composição parece específica para esta marca?
4. Estou repetindo uma estrutura utilizada em outra seção?
5. Os ícones acrescentam informação ou são apenas decoração?
6. O border-radius foi escolhido ou apenas aplicado por hábito?
7. Essa seção parece um componente de dashboard ou uma peça de direção de arte?

Se a composição parecer um grid genérico produzido por template ou IA, redesenhe a seção.

---

## 11. Empresa, história e posicionamento

O conteúdo institucional deve ajudar o visitante a compreender quem está por trás da solução, qual é o posicionamento da empresa e por que ela existe ou merece consideração.

Não criar automaticamente uma seção convencional chamada "Sobre".

Primeiro determine qual função esse conteúdo possui dentro da narrativa.

---

### Possíveis funções

O conteúdo institucional pode servir para:

- apresentar a empresa
- explicar origem ou história
- comunicar filosofia
- demonstrar especialização
- humanizar a marca
- apresentar fundador ou equipe
- explicar metodologia
- reforçar posicionamento
- contextualizar experiência
- apresentar estrutura
- criar conexão emocional
- aumentar confiança

Utilize somente funções sustentadas pelos materiais disponíveis.

---

### Não copiar o briefing

Não transforme o briefing diretamente em parágrafos institucionais.

Extraia dele as informações relevantes e reorganize-as para comunicação com o público final.

Evite textos genéricos como:

- "Somos uma empresa comprometida com a excelência."
- "Nossa missão é superar expectativas."
- "Trabalhamos com qualidade e dedicação."
- "Oferecemos soluções personalizadas."
- "Contamos com profissionais qualificados."

quando essas frases não comunicarem algo específico sobre aquela empresa.

O texto deve possuir identidade e informação.

---

### Posicionamento antes de biografia

Nem todo visitante precisa conhecer primeiro a história cronológica da empresa.

Quando apropriado, priorize:

- visão
- filosofia
- maneira de trabalhar
- especialização
- diferencial de abordagem
- relação com o cliente
- contexto da marca

A história deve aparecer quando acrescentar significado.

---

### Composição

Não utilizar automaticamente:

texto à esquerda + fotografia à direita.

Dependendo da direção visual, o conteúdo institucional pode aparecer como:

- manifesto curto
- frase de posicionamento
- composição editorial
- fotografia protagonista
- texto estreito com grande espaço negativo
- história em sequência
- timeline
- bloco tipográfico
- apresentação do fundador
- equipe
- composição com imagens do ambiente
- números reais
- texto integrado a outras seções
- pequenos momentos distribuídos pela página

Escolha a forma que melhor serve à narrativa.

---

### Fotografia

Quando houver fotografias reais da empresa, equipe, fundador, ambiente ou processo, avalie seu potencial narrativo.

Não utilize automaticamente uma foto genérica apenas para acompanhar o texto.

Uma boa fotografia real pode ser mais importante que vários parágrafos.

Considere:

- retrato
- ambiente
- equipe em contexto
- processo
- detalhe
- bastidores
- arquitetura
- produto
- interação real

Preserve autenticidade.

---

### Fundador e equipe

Dê protagonismo a pessoas quando isso for relevante para a decisão do cliente.

Isso é especialmente importante em negócios nos quais confiança está associada diretamente ao profissional.

Não invente:

- nomes
- cargos
- formação
- especializações
- credenciais
- tempo de experiência
- biografias

Utilize apenas informações fornecidas.

---

### História

Quando existir uma história relevante, evite transformá-la automaticamente em uma longa cronologia.

Identifique os momentos que realmente ajudam a compreender:

- origem
- evolução
- propósito
- especialização
- mudança
- visão atual

Uma história curta e bem editada pode ser mais forte que uma timeline extensa.

---

### Integração com outras seções

O conteúdo institucional não precisa existir isoladamente.

Pode ser integrado a:

- Hero
- serviços
- processo
- prova
- fotografia
- posicionamento
- equipe
- CTA
- experiência

Exemplo:

uma empresa de arquitetura pode apresentar sua filosofia junto aos projetos.

Uma clínica pode apresentar a profissional junto à abordagem de atendimento.

Uma empresa técnica pode apresentar sua estrutura junto ao processo.

Não separe informações que funcionam melhor juntas apenas para criar mais seções.

---

### Hierarquia

Não dê o mesmo peso a todas as informações institucionais.

Determine o que é mais relevante para o visitante.

Uma frase forte de posicionamento pode possuir mais destaque que vários detalhes históricos.

Um retrato pode ser protagonista.

Uma informação técnica pode aparecer como microtexto.

A hierarquia deve refletir importância.

---

### Direção de arte

O conteúdo institucional deve materializar a direção escolhida.

Exemplos:

**Luxury Minimal**
→ poucos elementos, fotografia refinada, texto curto, espaço e posicionamento.

**Editorial Sofisticado**
→ narrativa, fotografia, títulos expressivos e composição editorial.

**Clean & Humanizado**
→ pessoas, proximidade, contexto e linguagem acolhedora.

**Corporativo Moderno**
→ estrutura, operação, equipe e autoridade.

**Swiss / International**
→ informação estruturada, tipografia, grid e precisão.

Não transformar todos esses casos na mesma seção de duas colunas.

---

### Mobile

No mobile:

- preserve a prioridade narrativa
- evite textos institucionais excessivamente longos
- mantenha fotografias relevantes
- reavalie ordem entre texto e imagem
- preserve respiro
- adapte timelines e composições complexas

Não simplesmente empilhe uma composição desktop sem revisar sua narrativa.

---

### Regra de relevância

Antes de criar um momento institucional, pergunte:

1. O que o visitante realmente precisa saber sobre a empresa?
2. Essa informação aumenta compreensão, confiança ou posicionamento?
3. Existe material real que torne esse conteúdo específico?
4. Precisa ser uma seção independente?
5. Poderia ser melhor integrado a outro momento da página?
6. A composição representa a personalidade da marca?

O objetivo não é preencher uma seção "Sobre".

O objetivo é fazer o visitante compreender a empresa.

---

## 12. Serviços, produtos e soluções

A apresentação da oferta deve ajudar o visitante a compreender rapidamente:

- o que está sendo oferecido
- para quem é
- qual problema resolve
- qual benefício entrega
- quais opções existem
- qual é a oferta principal
- como avançar quando houver uma ação associada

Não transformar automaticamente serviços, produtos ou soluções em uma grade de cards.

Primeiro entenda a natureza da oferta e sua importância dentro da jornada.

---

### Identifique a hierarquia da oferta

Nem todos os serviços possuem necessariamente o mesmo peso.

Antes de criar a composição, determine se existe:

- serviço principal
- serviço de entrada
- serviços complementares
- categorias
- planos
- soluções relacionadas
- produto protagonista
- oferta única
- múltiplas ofertas equivalentes

A hierarquia comercial deve influenciar a hierarquia visual.

Se existe um serviço claramente mais importante, ele pode receber mais espaço, fotografia, texto ou protagonismo.

Não force igualdade visual quando a oferta não é comercialmente igual.

---

### Quantidade não define layout

Não associe automaticamente:

3 serviços → 3 colunas

4 serviços → grid 2x2

6 serviços → grid 3x2

A quantidade de itens é apenas uma variável.

Considere também:

- importância
- complexidade
- quantidade de texto
- existência de imagens
- relação entre serviços
- direção visual
- jornada
- necessidade de comparação
- comportamento mobile

---

### Cards são uma possibilidade, não o padrão

Cards podem ser utilizados quando ajudam a:

- separar opções
- facilitar comparação
- organizar informações
- permitir escaneabilidade
- representar unidades realmente independentes

Não utilize cards apenas porque existem vários serviços.

Antes de criar um card, pergunte se a informação realmente precisa de um container próprio.

---

### Alternativas aos cards

Dependendo da direção e do conteúdo, serviços podem ser apresentados como:

- lista editorial numerada
- grandes blocos alternados
- composição tipográfica
- índice + conteúdo
- fotografia + descrição
- sequência narrativa
- sticky sections
- tabs
- accordion
- tabela quando comparação for necessária
- linhas estruturadas
- composição assimétrica
- mosaico
- serviço protagonista + serviços secundários
- capítulos
- grandes títulos com microdescrições
- conteúdo integrado a cases ou projetos
- navegação por categorias
- experiência baseada em produto

Escolha pela função, não pela variedade visual.

---

### Serviço protagonista

Quando houver uma oferta principal, considere dar a ela tratamento diferenciado.

Ela pode:

- ocupar maior área
- utilizar fotografia protagonista
- receber tipografia maior
- aparecer antes das demais
- possuir demonstração
- apresentar processo
- incorporar prova
- receber CTA próprio
- funcionar como momento de alta intensidade

Não transforme automaticamente todos os serviços em elementos equivalentes.

---

### Conteúdo de cada serviço

Apresente apenas as informações necessárias para entendimento e decisão.

Dependendo do projeto, um serviço pode precisar de:

- nome
- descrição
- problema resolvido
- benefício
- funcionamento
- público
- imagem
- detalhes técnicos
- diferenciais
- prova
- CTA

Isso não significa que todos os serviços precisam possuir todos esses elementos.

Evite repetir a mesma estrutura textual mecanicamente em cada item.

---

### Benefício e descrição

Não limite a apresentação a explicar "o que fazemos".

Quando houver informação suficiente, comunique também por que aquilo importa para o cliente.

Evite benefícios genéricos sem sustentação.

Exemplo fraco:

> Soluções personalizadas para atender às suas necessidades.

Prefira informações específicas ao contexto real do serviço.

---

### Ícones

Não adicionar automaticamente um ícone acima de cada serviço.

Ícones devem possuir função real de:

- identificação
- navegação
- diferenciação
- compreensão rápida

Se forem apenas decoração repetitiva, remova.

Não force uma família de ícones em uma direção de arte que funciona melhor através de:

- tipografia
- fotografia
- numeração
- composição
- linhas
- símbolos
- produto
- espaço

---

### Fotografia

Quando houver imagens relevantes, determine qual papel elas possuem.

Uma imagem pode:

- demonstrar o serviço
- contextualizar uso
- mostrar resultado
- apresentar ambiente
- mostrar processo
- gerar desejo
- estabelecer escala
- criar atmosfera

Não utilize fotografias genéricas apenas para preencher cada item.

Nem todo serviço precisa obrigatoriamente de uma imagem.

---

### Relação entre oferta e direção de arte

A forma de apresentar serviços deve mudar de acordo com a direção escolhida.

Exemplos:

**Minimalista Premium**
→ poucos elementos, hierarquia forte, grande respiro e serviços apresentados com precisão.

**Corporativo Moderno**
→ organização clara, estrutura, informação e leitura rápida.

**Editorial Sofisticado**
→ serviços como capítulos, títulos expressivos e composição narrativa.

**Impacto Comercial**
→ benefício, oferta, prova e CTA com hierarquia comercial evidente.

**Tech / Futurista**
→ produto, interface, funcionamento ou sistema podem assumir protagonismo.

**Luxury Minimal**
→ menos elementos simultâneos, fotografia e tipografia com grande presença.

**Swiss / International**
→ grid, numeração, tipografia e estrutura podem substituir cards.

**Immersive / Cinematic**
→ serviços podem aparecer como momentos narrativos com diferentes escalas e imagens.

A mesma lista de serviços não deve resultar na mesma composição em todas as direções.

---

### Integração com diferenciais

Não repetir o mesmo conteúdo em Serviços e Diferenciais.

Se determinado diferencial pertence diretamente a um serviço, considere apresentá-lo junto dele.

Exemplo:

Serviço
→ explicação
→ benefício
→ detalhe que diferencia
→ prova relacionada

Isso pode ser mais forte do que repetir depois:

"Nosso diferencial é qualidade."

---

### Integração com prova

Quando existir prova específica relacionada a uma oferta, ela pode aparecer próxima ao serviço correspondente.

Exemplos:

- case
- projeto
- fotografia real
- resultado documentado
- depoimento
- certificação
- detalhe técnico

Utilize somente evidências reais.

---

### Conversão

Nem todo serviço precisa possuir botão próprio.

Adicione CTA individual quando existir uma ação útil associada àquele serviço.

Evite repetir:

"Saiba mais"

em todos os itens apenas porque o componente possui espaço para botão.

A conversão pode acontecer:

- no serviço protagonista
- após o conjunto
- durante a narrativa
- em CTA global
- através de contato contextual

---

### Variação com coerência

Quando existirem vários serviços, não é necessário que todos sejam apresentados exatamente da mesma maneira.

Porém, variação não deve virar caos.

Mantenha coerência através de:

- grid
- tipografia
- proporções
- espaçamento
- fotografia
- numeração
- alinhamentos
- assinatura visual

A variedade deve existir dentro do sistema visual definido.

---

### Mobile

No mobile, não apenas empilhe os cards ou colunas do desktop.

Reavalie:

- ordem
- hierarquia
- quantidade de informação visível
- necessidade de interação
- tamanho de imagens
- relação entre serviço principal e secundários
- CTAs
- navegação entre ofertas

Uma composição editorial horizontal no desktop pode precisar virar sequência vertical.

Uma grade pode virar lista.

Uma comparação pode exigir outra solução.

Preserve a hierarquia comercial, não a geometria do desktop.

---

### Regra anti-template

Antes de finalizar a apresentação dos serviços, verifique:

1. O layout nasceu da natureza da oferta ou da quantidade de itens?
2. Existe hierarquia real entre as ofertas?
3. Cards estão sendo usados porque ajudam ou porque são o padrão?
4. Os ícones possuem função?
5. A fotografia possui papel definido?
6. Existe repetição desnecessária de título + texto + botão?
7. A composição materializa a direção visual escolhida?
8. O serviço mais importante recebe protagonismo adequado?
9. A apresentação continuaria reconhecível sem bordas e backgrounds de cards?
10. O mobile preserva a estratégia em vez de apenas empilhar componentes?

Se a seção puder ser trocada por uma grade genérica de cards sem perder identidade, a direção visual ainda está fraca.

---

## 13. Diferenciais, vantagens e razões para escolher

Diferenciais devem comunicar razões concretas pelas quais a oferta, empresa, produto ou experiência se distingue ou merece consideração.

Não criar automaticamente uma seção chamada "Diferenciais".

Antes de apresentar qualquer diferencial, determine se ele é realmente:

- uma característica distintiva
- uma vantagem relevante
- uma capacidade específica
- uma abordagem própria
- uma evidência de qualidade
- um benefício concreto
- uma redução de risco
- uma conveniência importante
- uma característica valorizada pelo público

Não transforme atributos genéricos em diferenciais apenas para preencher uma seção.

---

### Diferencial não é adjetivo

Evite apresentar isoladamente como diferenciais:

- qualidade
- excelência
- confiança
- inovação
- compromisso
- dedicação
- profissionalismo
- segurança
- agilidade
- atendimento personalizado
- experiência
- tecnologia
- equipe qualificada

Esses conceitos só devem receber destaque quando houver algo concreto que explique o que significam naquele negócio.

Exemplo fraco:

**Atendimento personalizado**  
Cada cliente recebe um atendimento único e pensado para suas necessidades.

Isso poderia pertencer a praticamente qualquer empresa.

Exemplo melhor:

**Um único especialista acompanha o projeto do briefing à entrega**  
O cliente não precisa repetir informações para diferentes setores durante o processo.

O segundo caso apresenta uma característica específica e sua consequência para o cliente.

---

### Característica → consequência → valor

Sempre que possível, compreenda o diferencial em três níveis:

**Característica**
→ o que existe de concreto.

**Consequência**
→ o que isso muda na experiência ou resultado.

**Valor**
→ por que isso importa para o cliente.

Exemplo:

**Característica**
Produção realizada internamente.

**Consequência**
Maior controle sobre etapas e acabamento.

**Valor**
Menor dependência de terceiros e maior consistência no processo.

Utilize somente relações sustentadas pelas informações disponíveis.

Não invente consequências ou resultados garantidos.

---

### Nem tudo precisa ser diferencial

Algumas informações são apenas características necessárias da oferta.

Não force importância artificial.

Se determinada informação funciona melhor como:

- detalhe do serviço
- especificação
- informação operacional
- etapa do processo
- benefício
- prova
- conteúdo institucional

apresente-a nesse contexto.

Não crie uma seção de diferenciais apenas para repetir informações já mostradas.

---

### Hierarquia

Nem todos os diferenciais possuem o mesmo peso.

Determine quais realmente influenciam a decisão.

Um diferencial forte pode receber:

- grande escala
- fotografia
- demonstração
- prova
- composição própria
- posição estratégica na narrativa

Diferenciais secundários podem aparecer com menor intensidade.

Não transforme automaticamente todos em blocos equivalentes.

---

### Quantidade não define composição

Não associe automaticamente:

3 diferenciais → 3 cards

4 diferenciais → 4 colunas

6 diferenciais → grid

A quantidade não deve determinar sozinha o layout.

Considere:

- força de cada argumento
- relação entre eles
- quantidade de texto
- necessidade de prova
- direção visual
- momento da jornada
- disponibilidade de imagens

---

### Composição

Diferenciais podem aparecer como:

- frases de grande escala
- lista numerada
- argumentos editoriais
- comparação
- dados reais
- fotografia + argumento
- detalhes técnicos
- sequência
- manifesto
- composição tipográfica
- linhas estruturadas
- elementos integrados aos serviços
- prova contextual
- momentos distribuídos pela página

Cards são apenas uma possibilidade.

Não utilize automaticamente:

ícone + título + duas linhas de texto.

---

### Ícones

Não use ícones para transformar argumentos fracos em elementos visualmente interessantes.

Um ícone não torna uma informação mais relevante.

Utilize ícones apenas quando ajudarem a:

- identificar
- explicar
- navegar
- diferenciar visualmente informações realmente distintas

Quando tipografia, fotografia, números ou composição comunicarem melhor, não utilize ícones.

---

### Diferenciais podem estar distribuídos

Os melhores diferenciais nem sempre precisam estar agrupados em uma seção.

Eles podem aparecer no momento em que se tornam mais relevantes.

Exemplo:

Serviço
→ diferencial relacionado à execução.

Processo
→ diferencial relacionado à metodologia.

Fotografia
→ diferencial relacionado à estrutura.

Produto
→ diferencial técnico.

Próximo ao CTA
→ diferencial que reduz risco.

Essa distribuição pode criar uma narrativa mais convincente do que uma seção isolada.

---

### Relação com serviços

Evite:

Serviços
→ apresentar características.

Diferenciais
→ repetir as mesmas características com outras palavras.

Quando um diferencial estiver diretamente ligado a determinado serviço, considere apresentá-lo junto dele.

A separação só é necessária quando melhora entendimento ou narrativa.

---

### Relação com prova

Sempre que houver evidência real que sustente um diferencial, considere aproximá-las.

Exemplos:

afirmação
→ fotografia real

capacidade técnica
→ certificação real

experiência
→ projeto ou case

qualidade de execução
→ detalhe real do trabalho

estrutura
→ imagem real das instalações

resultado
→ dado documentado

Não invente prova para sustentar uma afirmação.

---

### Comparações

Não ataque concorrentes e não invente comparações de mercado.

Quando uma comparação for útil, utilize apenas informações verificáveis ou diferenças objetivas fornecidas.

Evite afirmações como:

- "somos melhores que a concorrência"
- "a melhor empresa da região"
- "qualidade superior"
- "tecnologia mais avançada"

sem evidência correspondente.

---

### Direção de arte

A apresentação dos diferenciais deve mudar conforme a direção escolhida.

**Minimalista Premium**
→ poucos argumentos realmente fortes, muito espaço e precisão.

**Corporativo Moderno**
→ capacidades, estrutura, processo e evidências organizadas.

**Editorial Sofisticado**
→ argumentos transformados em narrativa e momentos tipográficos.

**Impacto Comercial**
→ benefícios e redução de objeções com hierarquia forte.

**Luxury Minimal**
→ extrema seleção; poucos argumentos com grande presença.

**Swiss / International**
→ estrutura, números, tipografia e relações claras.

**Immersive / Cinematic**
→ diferenciais podem ser demonstrados através de cenas, detalhes e sequência.

Não transforme todas as direções em quatro cards com ícones.

---

### Mobile

No mobile:

- preserve a hierarquia entre argumentos
- evite sequências longas de blocos idênticos
- reduza conteúdo redundante
- mantenha provas próximas às afirmações quando possível
- adapte composições horizontais
- preserve momentos de destaque

Não simplesmente transforme uma grade desktop em uma longa pilha de cards iguais.

---

### Regra de força

Antes de destacar algo como diferencial, pergunte:

1. Isso é específico desta empresa, oferta ou maneira de trabalhar?
2. O visitante realmente se importa com isso?
3. Existe algo concreto por trás da afirmação?
4. Consigo explicar por que isso gera valor?
5. Já comuniquei essa mesma informação em outro lugar?
6. Existe evidência real que possa reforçá-la?
7. Isso merece protagonismo ou é apenas informação complementar?

Se o argumento continuar funcionando igualmente bem ao trocar o nome da empresa pelo nome de qualquer concorrente, provavelmente ainda está genérico.

---

### Regra anti-template

Antes de finalizar, verifique:

1. Estou criando uma seção porque existem diferenciais reais ou porque o template espera essa seção?
2. A quantidade de argumentos determinou automaticamente o número de colunas?
3. Estou utilizando ícones apenas para decorar?
4. Todos os argumentos receberam o mesmo peso sem necessidade?
5. Algum diferencial deveria estar integrado ao serviço ou processo?
6. Algum argumento pode ser demonstrado em vez de apenas declarado?
7. A composição pertence à direção de arte escolhida?
8. Remover cards, bordas e ícones faria a seção perder toda a identidade?

Se a resposta à última pergunta for sim, a composição depende demais do componente e pouco da direção de arte.

---

## 14. Processo, método e funcionamento

Processo deve ser apresentado quando compreender como algo funciona ajuda o visitante a:

- reduzir incerteza
- entender a contratação
- perceber organização
- compreender metodologia
- visualizar a experiência
- avaliar complexidade
- entender etapas importantes
- perceber valor
- avançar com mais segurança

Não criar automaticamente uma seção "Como funciona".

Primeiro determine se o processo realmente possui importância narrativa ou comercial.

---

### Processo não é obrigatório

Nem todo negócio precisa explicar seu processo em uma seção independente.

Em alguns projetos, processo é central.

Em outros, basta uma frase.

Em outros, pode ser integrado aos serviços, produto, experiência, FAQ ou CTA.

Não invente etapas apenas porque landing pages normalmente possuem uma seção de processo.

---

### Diferencie processo de método

**Processo**
→ sequência prática de acontecimentos.

Exemplo conceitual:

contato → diagnóstico → execução → entrega

**Método**
→ maneira específica pela qual a empresa realiza o trabalho.

Exemplo conceitual:

pesquisa → análise → estratégia → implementação → acompanhamento

**Funcionamento**
→ explicação de como produto, serviço ou sistema opera.

Exemplo conceitual:

entrada → processamento → resultado

Essas estruturas possuem funções diferentes e não devem receber automaticamente a mesma composição visual.

---

### Não force etapas

Não transformar qualquer explicação em:

01  
02  
03  
04

antes de verificar se existe realmente uma sequência.

Algumas informações podem funcionar melhor como:

- fluxo
- ciclo
- comparação
- antes e depois
- entrada e saída
- demonstração
- narrativa
- diagrama
- lista
- timeline
- experiência
- conteúdo integrado
- explicação textual curta

Utilize etapas numeradas apenas quando ordem e progressão forem relevantes.

---

### Quantidade

Não existe quantidade ideal de etapas.

Um processo pode possuir:

- 2 grandes momentos
- 3 etapas
- 5 etapas
- várias fases
- uma estrutura não linear
- nenhum processo que mereça seção própria

Não reduza ou expanda artificialmente um processo apenas para encaixá-lo em determinado layout.

---

### Quando o processo não for fornecido

Não invente uma metodologia própria para a empresa.

É permitido explicar um fluxo genérico somente quando ele puder ser deduzido com segurança a partir do serviço e não criar alegações específicas.

Quando houver incerteza, prefira:

- explicação mais neutra
- estrutura provisória claramente identificada
- omitir detalhes não confirmados
- integrar apenas informações conhecidas

Não atribua à empresa etapas, controles, revisões, diagnósticos, acompanhamentos ou entregas que não foram informados.

---

### Processo como argumento de valor

Quando houver um processo real e relevante, não apresente apenas os nomes das etapas.

Quando possível, comunique:

**o que acontece**
→ ação.

**por que acontece**
→ função.

**o que isso significa para o cliente**
→ consequência.

Exemplo:

**Validação antes da produção**
→ o material é revisado antes de seguir para a etapa final
→ reduz a chance de alterações depois da execução.

Utilize somente consequências sustentadas pelo processo informado.

---

### Hierarquia

Nem todas as etapas precisam possuir o mesmo peso.

Uma fase crítica pode receber mais destaque.

Etapas simples podem ser condensadas.

Uma etapa visualmente importante pode utilizar fotografia ou demonstração.

Não force caixas idênticas para acontecimentos de importância diferente.

---

### Composição

Dependendo do conteúdo e da direção visual, processo pode aparecer como:

- sequência tipográfica
- timeline
- fluxo
- capítulos
- sticky storytelling
- composição horizontal
- composição vertical
- fotografia sequencial
- diagrama
- antes/depois
- lista estruturada
- etapas integradas a imagens
- texto editorial
- interface demonstrativa
- animação funcional
- conteúdo distribuído pela página

Cards numerados são apenas uma possibilidade.

---

### Linhas e conectores

Não utilize automaticamente linhas entre etapas apenas para comunicar "processo".

Conectores devem ajudar a compreender:

- sequência
- relação
- progressão
- dependência

Se forem apenas decoração, não são necessários.

---

### Ícones

Não associe automaticamente um ícone a cada etapa.

Em muitos casos:

- números
- tipografia
- fotografia
- texto
- diagramas
- movimento
- relações espaciais

comunicam o processo melhor.

Ícones devem existir quando melhorarem entendimento.

---

### Processo e fotografia

Quando houver material visual real, o processo pode ser demonstrado em vez de apenas descrito.

Exemplos:

- bastidores
- produção
- atendimento
- preparação
- execução
- acabamento
- instalação
- entrega
- uso do produto

Uma sequência fotográfica real pode comunicar método e cuidado com muito mais força que quatro cards.

---

### Processo e interação

Interação pode ser utilizada quando ajudar a compreender progressão ou funcionamento.

Exemplos:

- mudança de conteúdo durante scroll
- etapa ativa
- comparação interativa
- demonstração de produto
- timeline navegável

Não adicione interação apenas para impressionar.

O conteúdo deve continuar compreensível sem depender de efeitos frágeis.

---

### Direção de arte

O processo deve assumir a linguagem do projeto.

**Minimalista Premium**
→ sequência reduzida, clara e espaçada.

**Corporativo Moderno**
→ fluxo estruturado, organização e precisão.

**Editorial Sofisticado**
→ processo tratado como narrativa ou capítulos.

**Clean & Humanizado**
→ experiência explicada de forma simples e próxima.

**Impacto Comercial**
→ processo focado em reduzir atrito e mostrar facilidade.

**Tech / Futurista**
→ funcionamento, sistema, interface e relações podem assumir protagonismo.

**Swiss / International**
→ grid, numeração e relações estruturais.

**Immersive / Cinematic**
→ processo pode se transformar em sequência visual ou narrativa.

Não aplique o mesmo componente numerado em todas as direções.

---

### Integração

Processo pode ser integrado a:

- serviços
- produto
- diferenciais
- prova
- conteúdo institucional
- demonstração
- FAQ
- conversão

Se explicar o processo imediatamente após determinado serviço melhorar a compreensão, não espere uma seção específica apenas para manter a estrutura tradicional.

---

### Mobile

No mobile, processos complexos devem ser reinterpretados.

Evite:

- timelines horizontais comprimidas
- linhas difíceis de acompanhar
- textos minúsculos
- diagramas ilegíveis
- dependência de hover
- scroll horizontal sem necessidade

Considere transformar uma composição complexa em:

- sequência vertical
- capítulos
- etapas progressivas
- conteúdo expansível
- narrativa simplificada

Preserve a lógica, não necessariamente a geometria.

---

### Regra de necessidade

Antes de criar processo, pergunte:

1. O visitante precisa entender como isso funciona?
2. Existe um processo real suficientemente conhecido?
3. Explicá-lo reduz alguma objeção?
4. Existe algo distintivo na maneira de trabalhar?
5. A ordem das etapas realmente importa?
6. Precisa de uma seção própria?
7. Poderia ser demonstrado em vez de descrito?
8. Alguma etapa está sendo inventada apenas para completar o layout?

Se o processo não acrescentar compreensão, confiança ou valor, não force sua presença.

---

### Regra anti-template

Antes de finalizar, verifique:

1. Criei etapas porque elas existem ou porque queria usar um componente de processo?
2. A quantidade foi definida pelo conteúdo ou pelo layout?
3. Todas as etapas receberam o mesmo peso artificialmente?
4. Numeração possui função real?
5. Ícones possuem função real?
6. A composição expressa a direção visual escolhida?
7. O processo poderia ser integrado melhor a outro momento?
8. Existe informação inventada?
9. No mobile, a lógica continua clara?
10. Sem cards, círculos, números e linhas, ainda existe uma ideia visual?

Se a seção depender desses elementos para parecer interessante, reavalie a composição.

---

## 15. Prova social e construção de confiança

Todo site deve construir confiança, mas isso não exige obrigatoriamente uma seção convencional de depoimentos.

Antes de definir a composição, identifique quais evidências reais estão disponíveis nos materiais do cliente.

Podem funcionar como prova:

- depoimentos reais
- avaliações reais
- cases
- projetos
- portfólio
- fotografias reais
- equipe
- instalações
- clientes ou parceiros realmente fornecidos
- certificações reais
- números comprovados
- metodologia
- processo
- resultados documentados
- experiência demonstrável
- detalhes técnicos
- garantias realmente fornecidas
- transparência sobre funcionamento
- localização física
- demonstração do produto ou serviço

Escolha as formas de confiança mais adequadas ao negócio e aos materiais existentes.

### Depoimentos reais

Quando existirem depoimentos fornecidos pelo cliente:

- preservar o sentido original
- não alterar a declaração para torná-la mais impressionante
- não inventar informações sobre a pessoa
- não adicionar cargo, empresa, foto, estrelas ou plataforma sem fonte
- não transformar opinião em resultado mensurável
- não criar outros depoimentos apenas para completar o layout

A quantidade de depoimentos deve influenciar a composição.

Um único depoimento forte pode ocupar grande espaço e produzir uma seção mais sofisticada do que três cards.

Dois depoimentos não precisam virar três.

Quatro depoimentos não precisam obrigatoriamente aparecer em quatro cards iguais.

### Quando não houver depoimentos

Não inventar depoimentos.

Não criar automaticamente:

- nomes fictícios
- fotografias fictícias
- profissões fictícias
- empresas fictícias
- avaliações em estrelas
- notas
- plataformas
- comentários apresentados como reais

Considere outras formas legítimas de construir confiança.

Se for realmente necessário demonstrar ao cliente como um depoimento futuro aparecerá, utilize placeholder explicitamente identificado como provisório.

O placeholder deve existir para validação, não para simular prova social.

### Composição

Não utilizar automaticamente:

3 cards de depoimentos lado a lado.

A composição deve derivar da quantidade, qualidade e importância do material disponível e da direção visual.

Considere:

- depoimento único em grande escala
- citação editorial
- depoimento integrado à fotografia
- sequência vertical
- lista
- slider somente quando houver quantidade suficiente
- composição assimétrica
- depoimentos distribuídos ao longo da página
- case com resultado e contexto quando houver dados reais
- prova integrada ao serviço correspondente
- fotografia + citação
- números reais + contexto
- logos reais quando fornecidos

### Distribuição da confiança

A confiança não precisa ficar concentrada em uma única seção.

Ela pode aparecer ao longo da jornada.

Exemplo:

Hero
→ pequeno elemento de confiança real

Serviço
→ fotografia ou demonstração real

Processo
→ transparência sobre funcionamento

Momento intermediário
→ depoimento real

Próximo à conversão
→ garantia, certificação ou informação real relevante

Utilize essa distribuição somente quando os materiais sustentarem essas evidências.

### Hierarquia

Nem toda prova possui o mesmo valor.

Dê maior destaque às evidências mais fortes e relevantes.

Não dê o mesmo peso visual para:

- uma certificação importante
- uma informação auxiliar
- um depoimento detalhado
- um pequeno indicador

A composição deve refletir a força relativa da evidência.

### Regra de autenticidade

Prova social falsa prejudica mais o projeto do que a ausência de prova social.

Quando não houver evidência suficiente, prefira:

- clareza
- boa apresentação
- transparência
- fotografia real
- processo bem explicado
- conteúdo convincente sem alegações falsas

Nunca invente credibilidade.

---

## 16. Localização e área de atendimento

Localização deve receber destaque proporcional à importância que possui para o negócio e para a decisão do visitante.

Não criar automaticamente uma seção independente de localização em todos os projetos.

Antes de definir sua apresentação, determine se a localização é:

- essencial para a decisão
- comercialmente relevante
- informação complementar
- irrelevante para aquele modelo de negócio

---

### Quando localização for essencial

Considere uma seção própria quando o cliente depende fortemente de presença física ou deslocamento do visitante.

Exemplos:

- clínicas
- consultórios
- restaurantes
- lojas físicas
- academias
- salões
- escolas
- hotéis
- espaços de eventos
- negócios com atendimento presencial

Quando houver endereço real e completo, a seção pode incluir:

- endereço
- mapa funcional
- referências realmente fornecidas
- horários realmente fornecidos
- telefone
- CTA para contato
- CTA para rota quando implementável
- fotografia real do local quando disponível

A composição deve seguir a direção visual do projeto.

Não transformar automaticamente localização em:

texto à esquerda + mapa à direita.

---

### Quando houver apenas área de atendimento

Para empresas que atendem regiões, cidades ou bairros sem depender de visita a um endereço específico, priorize a área atendida.

Podem ser utilizadas:

- cidades
- bairros
- regiões
- estado
- raio ou distância somente quando fornecido
- mapa regional quando realmente útil
- lista
- composição tipográfica
- informação integrada ao contato
- CTA

Utilize somente áreas realmente informadas pelo cliente.

Não inventar cobertura geográfica.

---

### Quando localização for secundária

Se o endereço ou área de atendimento for útil, mas não justificar protagonismo, integre a informação a:

- Footer
- contato
- CTA final
- bloco institucional
- seção de atendimento
- informações auxiliares

Não crie uma seção grande apenas para cumprir estrutura.

---

### Quando o negócio for digital ou remoto

Negócios digitais não precisam de seção de localização apenas porque existe um endereço nos materiais.

Exemplos:

- SaaS
- consultorias remotas
- serviços digitais
- agências
- infoprodutos
- plataformas
- empresas com operação predominantemente online

Apresente localização somente quando ela acrescentar:

- confiança
- contexto
- relevância comercial
- informação necessária

---

### Quando houver endereço completo

Se o cliente fornecer endereço real e suficientemente completo:

- utilizar exatamente as informações fornecidas
- não completar partes ausentes por suposição
- não alterar endereço
- não inventar número, bairro, CEP ou referência
- verificar se o mapa corresponde à localização informada

Quando um mapa for utilizado, ele deve funcionar de verdade.

Não utilizar:

- imagem falsa de mapa
- bloco vazio simulando mapa
- placeholder visual apresentado como mapa funcional

---

### Quando houver apenas cidade ou região

Se o briefing informar apenas:

- cidade
- estado
- bairros
- região
- cidades atendidas

utilize somente essas informações.

Não transforme uma localização ampla em endereço específico.

Exemplo:

Se o briefing informar:

`Porto Alegre - RS`

é permitido comunicar atendimento em Porto Alegre.

Não é permitido inventar:

- rua
- número
- bairro
- CEP
- sede específica

---

### Quando nenhuma localização for fornecida

Não inventar localização.

Não criar automaticamente:

- endereço fictício
- mapa
- cidade
- área de atendimento
- bloco vazio
- `[MAPA]`
- `[ENDEREÇO]`
- `[IMAGEM DA SEDE]`

Se localização não for necessária para compreender ou converter naquele projeto, simplesmente não crie uma seção específica.

Se a informação for necessária para publicação e estiver ausente, utilize placeholder textual claramente identificado apenas quando a validação posterior realmente exigir isso.

---

### Mapas

Mapa é uma ferramenta funcional, não decoração.

Utilize quando ajudar o visitante a:

- encontrar o estabelecimento
- compreender onde ele está
- planejar deslocamento
- verificar área de atendimento

Não utilize mapa apenas para preencher espaço.

Quando houver mapa:

- garantir funcionamento
- garantir responsividade
- evitar problemas de overflow
- manter proporção adequada
- integrar visualmente ao projeto
- preservar acessibilidade quando possível

A aparência do mapa não deve determinar toda a composição da seção.

---

### Direção de arte

Localização deve participar da mesma linguagem visual do restante do site.

Dependendo da direção escolhida, ela pode aparecer como:

- mapa amplo
- informação tipográfica
- fotografia do ambiente
- composição editorial
- lista de cidades
- endereço minimalista
- bloco de contato
- seção imersiva com fotografia do local
- informação integrada ao Footer

Não utilizar automaticamente um card branco arredondado sobre um mapa.

---

### Mobile

No mobile, priorize:

- endereço legível
- área atendida clara
- CTA acessível
- mapa utilizável quando existir
- altura adequada do mapa
- ausência de overflow
- interação sem bloquear a navegação

Se um mapa prejudicar significativamente a experiência mobile e não for essencial, considere uma apresentação mais simples da informação.

---

### Regra de relevância

Antes de criar uma seção independente, pergunte:

1. A localização influencia a decisão do cliente?
2. O visitante precisa se deslocar até o estabelecimento?
3. A área de atendimento é um argumento comercial importante?
4. Existe informação real suficiente?
5. Uma seção própria acrescenta valor?
6. Essa informação poderia ser apresentada melhor em outro momento da página?

Se a localização não possuir relevância suficiente, não force uma seção independente.

---

## 17. FAQ e tratamento de objeções

FAQ é uma ferramenta para resolver dúvidas e objeções reais.

Não criar automaticamente uma seção de FAQ em todos os projetos.

Antes de utilizá-la, determine se existem perguntas relevantes que ajudam o visitante a:

- compreender o serviço
- reduzir insegurança
- entender funcionamento
- avaliar compatibilidade
- compreender contratação
- entender atendimento
- tomar uma decisão
- avançar para conversão

A quantidade de perguntas deve derivar das necessidades reais do projeto.

---

### Quando utilizar FAQ

FAQ é especialmente útil quando:

- o serviço gera dúvidas recorrentes
- existe processo de contratação que precisa ser explicado
- existem objeções importantes
- o visitante precisa entender etapas
- existem condições comerciais fornecidas
- existem diferentes formas de atendimento
- existe área de atendimento relevante
- o produto ou serviço possui funcionamento menos óbvio
- perguntas podem reduzir atrito antes do contato

Não criar FAQ apenas porque é comum em landing pages.

---

### Fonte das perguntas

Priorize perguntas derivadas de:

1. briefing
2. materiais fornecidos pelo cliente
3. dúvidas explicitamente informadas
4. características reais do serviço
5. objeções razoáveis que possam ser respondidas sem inventar fatos

As respostas devem utilizar apenas informações suportadas pelos materiais ou conteúdo genérico seguro que não crie alegações específicas.

---

### Não inventar políticas

Não invente:

- preços
- formas de pagamento
- parcelamento
- prazos
- garantias
- políticas de cancelamento
- horários
- cobertura geográfica
- disponibilidade
- condições comerciais
- resultados garantidos
- regras de atendimento
- políticas de reembolso

Quando a resposta depender de uma informação não fornecida, não invente uma resposta apenas para completar o FAQ.

---

### Quantidade

Não existe quantidade obrigatória.

Utilize somente perguntas que acrescentem valor.

Um projeto pode precisar de:

- 3 perguntas
- 5 perguntas
- 8 perguntas
- nenhuma seção de FAQ

Não crie perguntas artificiais para atingir uma quantidade.

---

### Objeções não precisam estar em FAQ

Uma dúvida importante pode ser respondida no momento em que surge.

Exemplos:

Preço ou orçamento
→ próximo à apresentação comercial quando houver informação real.

Área atendida
→ junto à localização ou contato.

Funcionamento
→ junto ao processo.

Prazo
→ junto ao serviço quando fornecido.

Garantia
→ próximo à decisão quando realmente existente.

Não concentre automaticamente todas as respostas no final da página.

Resolver objeções no contexto correto pode ser mais eficiente que criar uma grande seção de FAQ.

---

### Composição

Quando FAQ for utilizado, sua aparência deve seguir a direção de arte.

Accordion é uma possibilidade funcional, não uma obrigação visual.

Podem funcionar:

- Accordion
- lista aberta
- perguntas numeradas
- composição em duas colunas
- índice lateral
- layout editorial
- perguntas agrupadas por tema
- pergunta em destaque + questões secundárias

Quando Accordion for apropriado, componentes existentes do shadcn/ui ou Radix UI podem ser utilizados.

Não permita que o FAQ pareça um componente genérico importado de outro site.

---

### Hierarquia

Perguntas mais importantes podem receber maior destaque.

Não é necessário que todas possuam exatamente:

- mesmo tamanho
- mesmo peso visual
- mesma quantidade de texto
- mesma composição

A hierarquia pode refletir a importância das objeções.

---

### Direção de arte

Mesmo uma seção funcional deve participar da identidade visual.

Considere:

- tipografia
- numeração
- linhas
- espaçamento
- grid
- contraste
- microtipografia
- transições
- comportamento de abertura

Evite automaticamente:

card arredondado + borda + ícone `+` dentro de círculo para todas as perguntas.

---

### Mobile

No mobile:

- perguntas devem ser facilmente tocáveis
- respostas devem permanecer legíveis
- áreas clicáveis devem ser confortáveis
- conteúdo aberto não deve causar overflow
- animações devem ser leves
- hierarquia deve permanecer clara

---

### SEO

Não criar perguntas artificiais apenas para inserir palavras-chave.

Quando o FAQ possuir dúvidas reais relacionadas ao serviço, utilize linguagem natural e específica.

SEO deve ser consequência de conteúdo útil e semanticamente claro.

Não fazer keyword stuffing.

---

### Regra de necessidade

Antes de criar FAQ, pergunte:

1. Existem dúvidas reais que ainda não foram respondidas?
2. Essas dúvidas podem impedir contato ou conversão?
3. Temos informação suficiente para respondê-las corretamente?
4. Seria melhor responder alguma delas dentro de outra seção?
5. Uma seção de FAQ melhora de fato esta página?

Se não houver perguntas relevantes, não crie FAQ apenas para completar a estrutura.

---

## 18. Encerramento e CTA final

Toda página comercial deve terminar com um próximo passo claro.

Isso não significa criar obrigatoriamente uma seção convencional de CTA.

O encerramento deve funcionar como conclusão da narrativa construída durante a página e conduzir naturalmente para a principal ação desejada.

---

### Função

O encerramento deve responder:

- o que o visitante deve fazer agora?
- por que vale a pena avançar?
- qual é a ação principal?
- qual canal deve ser utilizado?

A ação deve ser evidente sem depender de excesso de elementos comerciais.

---

### Relação com a narrativa

O CTA final não deve parecer uma peça independente adicionada depois que o restante do site terminou.

Ele deve concluir a experiência.

Quando apropriado, recupere elementos apresentados anteriormente, como:

- conceito do Hero
- linguagem tipográfica
- fotografia
- assinatura visual
- frase de posicionamento
- benefício principal
- elemento gráfico
- cor
- composição
- escala

O início e o encerramento podem possuir relação visual entre si.

Essa relação não precisa ser literal.

---

### Composição

Não utilizar automaticamente:

container colorido + cantos arredondados + título centralizado + parágrafo + botão.

Dependendo da direção de arte, o encerramento pode ser:

- tipográfico
- fotográfico
- editorial
- minimalista
- fullscreen
- integrado ao Footer
- integrado ao contato
- dividido em colunas
- assimétrico
- baseado em grande espaço negativo
- baseado em uma frase de grande escala
- construído ao redor do formulário
- construído ao redor do WhatsApp
- integrado a uma imagem final
- continuação visual da seção anterior

Escolha a composição que conclua melhor a narrativa.

---

### Intensidade

O encerramento não precisa obrigatoriamente ser a seção mais chamativa da página.

Ele pode funcionar como:

**Clímax**
→ grande escala e forte presença.

**Conclusão**
→ síntese clara e elegante.

**Convite**
→ abordagem mais humana e próxima.

**Silêncio**
→ composição minimalista com poucos elementos.

**Continuidade**
→ transição natural entre conteúdo, contato e Footer.

Escolha de acordo com a direção visual e jornada.

---

### CTA principal

Deve existir uma ação principal claramente reconhecível.

Exemplos:

- solicitar orçamento
- falar no WhatsApp
- agendar
- entrar em contato
- conhecer o produto
- iniciar contratação
- solicitar demonstração
- visitar o estabelecimento

Utilize a ação real adequada ao negócio.

Não invente processos de conversão que não existam.

---

### CTA secundário

Utilize somente quando houver uma segunda ação realmente útil.

Não adicione um segundo botão apenas para equilibrar visualmente a composição.

A ação principal deve permanecer dominante.

---

### Texto

Evite frases genéricas como:

- "Pronto para começar?"
- "Vamos transformar seus resultados?"
- "Dê o próximo passo"
- "Comece hoje mesmo"

quando puder utilizar uma mensagem mais específica para a marca e para o momento da jornada.

O texto final deve parecer consequência da proposta apresentada durante a página.

---

### Confiança próxima à ação

Quando existirem evidências reais relevantes, elas podem aparecer próximas ao CTA.

Exemplos:

- informação de atendimento
- garantia real
- certificação real
- localização
- prazo realmente fornecido
- forma de contato
- pequena prova social
- informação operacional importante

Não invente elementos de confiança para aumentar conversão.

---

### Formulários

Quando o próximo passo depender de formulário:

- solicitar apenas informações necessárias
- utilizar labels claros
- manter boa hierarquia
- preservar acessibilidade
- indicar campos obrigatórios
- utilizar tipos de input adequados
- fornecer feedback de interação quando implementado
- não criar campos apenas para preencher composição

O formulário deve fazer parte da direção visual, não parecer um componente externo.

---

### WhatsApp

Quando WhatsApp for o principal canal comercial, o encerramento pode ser construído diretamente ao redor dessa ação.

Não é necessário criar:

CTA final → botão WhatsApp → Footer → novo botão WhatsApp

apenas para repetir a mesma conversão.

A repetição deve ser estratégica.

---

### Integração com o Footer

Quando a direção visual favorecer uma conclusão contínua, CTA e Footer podem formar uma única composição.

Ainda deve existir distinção funcional suficiente para:

- identificar a ação principal
- encontrar contatos
- navegar
- localizar informações institucionais

Não force separação visual apenas porque são componentes diferentes no código.

---

### Mobile

No mobile:

- ação principal deve ser imediatamente reconhecível
- botão deve possuir área de toque confortável
- textos devem ser concisos
- formulário deve permanecer simples
- elementos decorativos não devem afastar o CTA
- composição deve ser reinterpretada quando necessário

Não deixe o encerramento excessivamente longo antes da ação principal.

---

### Regra de fechamento

Antes de finalizar a página, verifique:

1. Existe um próximo passo claro?
2. A ação principal corresponde ao negócio?
3. O encerramento parece parte da mesma direção de arte?
4. Ele conclui a narrativa ou parece um componente adicionado no final?
5. Existe alguma repetição desnecessária de CTA?
6. O visitante entende imediatamente como avançar?
7. O mobile mantém essa clareza?

A página não deve terminar sem direção.

Também não deve terminar sempre com o mesmo componente de CTA.

---

## 19. WhatsApp e canais de conversão

Quando WhatsApp fizer parte dos canais reais de atendimento ou conversão do cliente, utilize-o de maneira funcional e estrategicamente integrada à experiência.

A existência de um número de WhatsApp não obriga automaticamente:

- botão flutuante
- CTA no Header
- CTA no Hero
- CTA em todas as seções
- CTA final específico
- repetição constante do ícone

Determine onde e como o WhatsApp deve aparecer conforme a jornada, prioridade comercial e direção visual.

---

### Dados reais

Utilize somente o número realmente fornecido pelo cliente.

Para links diretos, utilize o formato adequado para `wa.me`, contendo apenas números no destino, incluindo:

- código do país
- DDD
- número

Não invente número.

Não complete números incompletos por suposição.

Não utilize número de exemplo em uma versão destinada à publicação.

---

### Mensagem inicial

Quando fizer sentido, utilize mensagem inicial contextual.

A mensagem pode ajudar a identificar:

- serviço de interesse
- origem do contato
- intenção do visitante
- pedido de orçamento
- agendamento
- produto

Mantenha a mensagem:

- curta
- natural
- útil
- coerente com o contexto

Não crie mensagens excessivamente longas ou artificiais.

---

### Prioridade comercial

Antes de destacar WhatsApp, determine qual é a ação principal real do projeto.

WhatsApp pode ser:

**Conversão principal**
→ quando o negócio depende diretamente de conversa.

**Conversão secundária**
→ quando existe formulário, compra, agendamento ou outra ação prioritária.

**Canal de suporte**
→ quando não deve competir com a ação comercial principal.

**Informação de contato**
→ quando basta estar disponível sem protagonismo.

O destaque visual deve acompanhar essa prioridade.

---

### Distribuição

WhatsApp pode aparecer em diferentes momentos, como:

- Header
- Hero
- serviço
- contato
- localização
- prova
- CTA final
- Footer
- botão flutuante

Não precisa aparecer em todos eles.

Cada repetição deve possuir função.

Evite:

Header WhatsApp
→ Hero WhatsApp
→ botão flutuante
→ CTA intermediário WhatsApp
→ CTA final WhatsApp
→ Footer WhatsApp

quando todos executam exatamente a mesma função sem acrescentar contexto.

---

### Botão flutuante

Botão flutuante de WhatsApp é uma possibilidade, não uma obrigação.

Utilize quando o acesso permanente ao contato trouxer benefício real para a jornada.

É especialmente útil quando:

- WhatsApp é o principal canal comercial
- contato rápido é parte importante da decisão
- a página é longa
- visitantes podem querer converter em diferentes momentos
- o segmento possui forte expectativa de contato imediato

Não utilize automaticamente apenas porque existe um número disponível.

---

### Quando evitar botão flutuante

Considere não utilizar quando:

- WhatsApp não é a ação principal
- existe uma conversão mais importante
- a página já oferece acesso suficiente ao contato
- interfere significativamente na direção de arte
- compete com controles importantes
- prejudica experiência mobile
- cria redundância sem benefício
- o projeto depende de uma experiência mais imersiva ou editorial

A ausência de botão flutuante não significa esconder o contato.

O canal ainda deve estar acessível quando relevante.

---

### Aparência do botão flutuante

Quando utilizado, não assumir automaticamente:

círculo verde padrão + ícone branco + sombra forte.

A solução precisa continuar reconhecível e utilizável, mas pode ser integrada ao sistema visual.

Considere:

- proporção
- posição
- tipografia
- ícone
- contraste
- borda
- fundo
- relação com outros elementos fixos
- linguagem da marca

Não prejudique reconhecimento apenas para estilizar.

---

### Cor

Não é obrigatório transformar uma grande área da interface em verde apenas porque a ação utiliza WhatsApp.

Quando apropriado, a identidade do WhatsApp pode aparecer através do ícone ou de detalhes suficientes para reconhecimento.

A decisão de cor deve considerar:

- identidade da marca
- contraste
- prioridade
- reconhecimento
- acessibilidade

Não deixe a cor do canal dominar a identidade visual do cliente sem necessidade.

---

### Ícone

Utilize ícone reconhecível quando ele melhorar identificação da ação.

Não utilize um ícone incorreto apenas porque pertence à biblioteca disponível.

Se não houver ícone oficial adequado nas dependências existentes, utilize uma solução tecnicamente apropriada sem instalar bibliotecas pesadas apenas por isso.

Não desenhe um símbolo enganoso.

---

### Posição fixa

Quando houver elemento flutuante:

- utilizar `position: fixed` de forma apropriada
- manter `z-index` suficiente
- não bloquear conteúdo
- não cobrir botões
- não cobrir controles de formulário
- não interferir com banners ou cookies
- respeitar safe areas quando necessário
- verificar desktop e mobile

A posição deve considerar outros elementos persistentes da interface.

---

### Mobile

No mobile, avalie com atenção se o botão flutuante continua útil.

Verifique:

- área de toque
- proximidade das bordas
- safe area
- teclado virtual
- barras do navegador
- CTAs fixos
- conteúdo importante
- overlays
- menu aberto

Não permita que vários elementos fixos disputem a pequena área disponível.

---

### Acessibilidade

Links e botões de WhatsApp devem:

- possuir nome acessível
- ter contraste adequado
- apresentar foco visível quando aplicável
- possuir área de interação confortável
- deixar clara sua finalidade

Botões compostos apenas por ícone devem possuir `aria-label` descritivo.

---

### Nova aba

Quando o comportamento escolhido abrir nova aba ou contexto externo, utilize atributos adequados de segurança quando aplicável.

Não quebre a navegação atual desnecessariamente.

---

### Direção de arte

O WhatsApp é um canal funcional, não o responsável pela direção visual do projeto.

Em uma direção:

**Impacto Comercial**
→ pode receber forte destaque.

**Clean & Humanizado**
→ pode aparecer de forma próxima e acessível.

**Corporativo Moderno**
→ pode ser um contato organizado dentro do sistema.

**Luxury Minimal**
→ pode ser apresentado de maneira discreta e precisa.

**Editorial Sofisticado**
→ pode estar integrado à narrativa ou ao encerramento.

**Immersive / Cinematic**
→ um elemento flutuante pode ser reduzido ou evitado quando quebrar a experiência, desde que a conversão continue acessível.

Não utilize exatamente o mesmo botão flutuante em todos os projetos.

---

### Regra de conversão

Não sacrifique conversão apenas para preservar estética.

Também não sacrifique toda a direção de arte apenas porque existe WhatsApp.

Encontre o nível de presença adequado à importância real do canal.

---

### Regra de necessidade

Antes de adicionar WhatsApp a qualquer posição, pergunte:

1. WhatsApp é a ação principal, secundária ou apenas contato?
2. O visitante precisa ter acesso permanente a ele?
3. Já existe outro CTA para a mesma ação próximo?
4. Esta repetição melhora conversão ou apenas duplica elementos?
5. Um botão flutuante realmente ajuda neste projeto?
6. Ele interfere na direção visual?
7. No mobile, continua confortável?
8. O canal permanece fácil de encontrar sem excesso de repetição?

Cada aparição deve possuir uma razão.

---

### Regra funcional

Quando WhatsApp for utilizado, confirme:

1. O número é real e foi fornecido?
2. O link está corretamente formatado?
3. A mensagem inicial, se existir, está adequada ao contexto?
4. O elemento funciona no desktop?
5. Funciona no mobile?
6. Possui identificação acessível?
7. Não bloqueia conteúdo?
8. Não compete indevidamente com a ação principal?
9. A quantidade de aparições é justificável?

WhatsApp deve facilitar a conversão, não se transformar em decoração repetitiva.

---

## 20. Footer e encerramento institucional

Todo site deve possuir um encerramento funcional que permita identificar a empresa, acessar informações importantes e concluir a experiência de maneira coerente.

O Footer deve fazer parte da direção de arte.

Não utilizar automaticamente:

logo + descrição + três ou quatro colunas de links + redes sociais + copyright.

A quantidade e organização das informações devem derivar do projeto.

---

### Função

Antes de criar o Footer, determine quais funções ele precisa cumprir.

Possíveis funções:

- identificar a empresa
- disponibilizar contato
- repetir navegação importante
- apresentar endereço
- apresentar redes sociais
- fornecer informações legais
- reforçar a principal ação
- concluir a narrativa
- fornecer acesso a páginas auxiliares
- apresentar o crédito Z-Agent

Inclua apenas informações reais e úteis.

---

### Informações

Quando disponíveis e relevantes, podem aparecer:

- nome da empresa
- logo
- descrição curta
- telefone
- WhatsApp
- e-mail
- endereço
- área de atendimento
- redes sociais
- navegação
- horário
- informações legais
- copyright
- políticas
- CTA
- crédito Z-Agent

Não invente dados apenas para deixar o Footer visualmente completo.

---

### Quantidade não define qualidade

Um Footer completo não precisa possuir muitas informações.

Pode ser extremamente reduzido quando o projeto possui pouco conteúdo.

Também pode ser mais estruturado quando houver:

- muitas páginas
- múltiplos contatos
- unidades
- categorias
- informações legais
- navegação extensa
- diferentes canais

Completude significa disponibilizar o que é necessário, não preencher colunas.

---

### Navegação

Não repita automaticamente toda a navegação do Header.

No Footer, priorize links que realmente ajudem o visitante.

Podem existir:

- links principais
- links institucionais
- páginas legais
- contatos
- redes sociais
- categorias

Não criar links para páginas ou seções inexistentes.

---

### Relação com o CTA final

CTA final e Footer podem ser:

- claramente separados
- visualmente conectados
- integrados em uma única composição

A escolha deve seguir a arquitetura visual.

Não crie obrigatoriamente:

CTA em container
→ grande espaçamento
→ Footer escuro em quatro colunas.

Se a direção pedir continuidade, o encerramento pode funcionar como uma única sequência.

---

### Composição

Dependendo da direção visual, o Footer pode ser:

- minimalista
- editorial
- tipográfico
- monumental
- compacto
- assimétrico
- estruturado por grid
- integrado a fotografia
- dividido em zonas
- quase silencioso
- continuação visual do CTA
- baseado em grande escala tipográfica

Não buscar complexidade sem função.

---

### Assinatura visual

O Footer pode recuperar elementos utilizados anteriormente, como:

- tipografia
- grid
- linhas
- numeração
- fotografia
- formas
- cor
- textura
- assinatura gráfica
- proporções

Isso ajuda a encerrar a página como parte do mesmo sistema.

Não introduza uma nova linguagem visual apenas no Footer.

---

### Escala

O Footer não precisa ser visualmente pequeno.

Em alguns projetos, ele pode funcionar como um último momento de grande escala.

Exemplos:

- nome da marca em tipografia oversized
- frase final
- fotografia
- informação de contato dominante
- composição gráfica

Em outros projetos, deve ser discreto.

A intensidade deve ser definida pela narrativa.

---

### Contato

Quando contato for importante, torne-o fácil de encontrar.

Não esconda:

- telefone
- WhatsApp
- e-mail
- endereço

em textos minúsculos apenas para preservar estética.

Ao mesmo tempo, não repita todos os contatos várias vezes sem necessidade.

---

### Redes sociais

Utilize apenas redes realmente fornecidas.

Não criar ícones ou links fictícios para:

- Instagram
- Facebook
- LinkedIn
- YouTube
- TikTok
- outras plataformas

Se não houver rede fornecida, não crie placeholders apresentados como links reais.

---

### Copyright

Quando utilizado, mantenha-o discreto e legível.

Não invente informações empresariais para compor a linha de copyright.

Quando apropriado, o ano pode ser obtido programaticamente.

---

### Crédito Z-Agent

O crédito da Z-Agent é obrigatório.

Utilizar exatamente o texto:

`Desenvolvido por Z-Agent`

`Z-Agent` deve ser um link clicável para:

`https://sites.z-agent.com.br`

O link deve abrir em nova aba utilizando:

`target="_blank"`

e:

`rel="noopener noreferrer"`

Não remover o crédito.

Não alterar o destino.

Não esconder o crédito através de:

- opacidade extremamente baixa
- tamanho ilegível
- cor sem contraste
- posicionamento fora da viewport
- técnicas destinadas a torná-lo imperceptível

O crédito pode ser discreto, mas deve permanecer legível e acessível.

---

### Integração do crédito

O crédito Z-Agent não precisa determinar a composição do Footer.

Integre-o de maneira discreta ao sistema visual.

Pode aparecer próximo a:

- copyright
- informações legais
- linha inferior
- área institucional

Não transforme o crédito em protagonista.

---

### Direção de arte

A aparência do Footer deve variar conforme a direção.

**Minimalista Premium**
→ poucas informações, espaço, precisão e acabamento.

**Corporativo Moderno**
→ organização clara e informações institucionais acessíveis.

**Editorial Sofisticado**
→ tipografia, grid e composição podem criar um encerramento mais expressivo.

**Clean & Humanizado**
→ contato e proximidade podem receber maior presença.

**Impacto Comercial**
→ ação e contato podem permanecer evidentes até o final.

**Luxury Minimal**
→ extrema redução e controle de detalhes.

**Dark Luxury**
→ o Footer pode continuar a atmosfera sem simplesmente virar um retângulo preto genérico.

**Swiss / International**
→ estrutura tipográfica e grid rigoroso.

**Immersive / Cinematic**
→ pode funcionar como a última cena da experiência.

Não utilizar o mesmo Footer mudando apenas cores.

---

### Evitar padrão automático

Evite assumir que Footer precisa de:

- fundo escuro
- quatro colunas
- logo no canto superior esquerdo
- descrição abaixo do logo
- títulos pequenos em cada coluna
- fileiras de ícones sociais
- linha divisória
- copyright no canto inferior

Esses elementos continuam permitidos quando fizerem sentido.

Eles apenas não constituem uma fórmula obrigatória.

---

### Mobile

No mobile, reorganize o Footer de acordo com a prioridade das informações.

Não apenas transforme quatro colunas em quatro blocos empilhados.

Considere:

- ação principal primeiro
- contato
- navegação
- informações institucionais
- redes
- legal
- crédito

conforme a importância real.

Evite um Footer excessivamente longo devido à repetição de informações.

---

### Regra de encerramento

Antes de finalizar, verifique:

1. O visitante consegue identificar a empresa?
2. Os contatos importantes estão acessíveis?
3. Existem apenas informações reais?
4. A navegação necessária está disponível?
5. O Footer conclui visualmente a experiência?
6. CTA final e Footer possuem relação coerente?
7. A composição pertence à direção de arte?
8. Existe conteúdo repetido sem necessidade?
9. O crédito Z-Agent está correto, legível e funcional?
10. O mobile possui hierarquia adequada?

O Footer deve concluir o projeto, não apenas ocupar o espaço depois da última seção.

---

### Regra anti-template

Se for possível reutilizar exatamente o mesmo Footer em qualquer cliente alterando apenas:

- logo
- cores
- contatos
- nomes dos links

reavalie a composição.

A estrutura funcional pode ser semelhante entre projetos.

A expressão visual deve pertencer ao sistema daquele site.

---

## 21. Assets do projeto

Utilize os assets reais disponíveis para o cliente e preserve a integridade da identidade fornecida.

As decisões de seleção fotográfica e direção visual são tratadas nas seções de direção de arte.

Esta seção trata dos arquivos utilizados pelo projeto.

---

### Assets do cliente

Antes de utilizar ou substituir um asset, verifique os materiais existentes em:

- `public/brand`
- `public/images`
- demais diretórios relevantes de `public`

Priorize assets oficiais quando existirem.

Não substitua sem necessidade:

- logo
- símbolo
- identidade visual
- fotografias reais
- elementos gráficos
- materiais oficiais

por alternativas genéricas.

---

### Assets do starter

Arquivos pertencentes apenas ao starter não devem aparecer acidentalmente no projeto final.

Verifique especialmente:

- logos de exemplo
- imagens de demonstração
- placeholders
- ícones padrão
- assets do Next.js/Vercel
- arquivos pertencentes a projetos anteriores

Remova arquivos não utilizados quando isso puder ser feito com segurança.

Não remova um asset apenas porque seu uso não é imediatamente evidente sem verificar suas referências.

---

### Referências

Todo asset referenciado pela aplicação deve existir realmente.

Não crie caminhos fictícios apenas para completar uma implementação.

Antes de referenciar um arquivo, confirme:

- existência
- caminho
- nome
- extensão
- finalidade

Tenha atenção a diferenças entre maiúsculas e minúsculas que possam funcionar localmente e falhar em outros ambientes.

---

### Duplicação

Evite manter múltiplas cópias desnecessárias do mesmo asset.

Quando existir uma versão oficial adequada, prefira uma referência consistente em vez de duplicar o arquivo em diferentes diretórios sem necessidade.

Não consolide arquivos diferentes apenas porque possuem aparência semelhante.

---

### Alterações

Não sobrescreva ou modifique permanentemente um asset oficial sem necessidade.

Quando uma variação técnica ou visual for necessária, preserve o original quando isso for importante para reutilização ou identidade.

Não recrie logos, símbolos ou elementos oficiais aproximadamente quando o arquivo correto já estiver disponível.

---

### Organização

Mantenha nomes e localização de arquivos compreensíveis.

Ao adicionar novos assets necessários ao projeto:

- utilize nomes claros
- evite duplicatas
- coloque-os em diretório coerente
- atualize referências corretamente

Não reorganize toda a estrutura de assets apenas por preferência pessoal quando a organização existente já for funcional.

---

### Regra de integridade

Antes de finalizar, nenhum elemento visual deve depender de:

- arquivo inexistente
- placeholder acidental
- asset de demonstração
- material de outro cliente
- referência quebrada

A validação final confirma essa integridade.

Esta seção orienta como preservá-la durante a implementação.

---

## 22. Implementação técnica de imagens

As decisões de seleção, direção fotográfica, composição e tratamento visual são definidas pela direção de arte.

Esta seção trata da implementação técnica das imagens.

---

### Next.js

Priorize `next/image` quando ele for adequado à implementação.

Configure corretamente quando necessário:

- dimensões
- `fill`
- `sizes`
- prioridade de carregamento
- comportamento responsivo
- `object-fit`
- `object-position`

Não utilizar `priority` indiscriminadamente.

Priorize carregamento antecipado apenas para imagens realmente importantes para a primeira experiência quando isso for tecnicamente apropriado.

---

### Dimensões e estabilidade

Evite imagens que provoquem mudanças inesperadas de layout durante o carregamento.

Quando possível, preserve:

- proporção
- dimensões previsíveis
- espaço reservado
- estabilidade da composição

A implementação técnica não deve destruir o enquadramento definido pela direção de arte.

---

### Responsividade

Imagens devem funcionar corretamente nas diferentes composições responsivas.

Não assumir que a mesma proporção e o mesmo crop funcionarão em todas as telas.

Quando necessário, ajuste:

- proporção
- altura
- largura
- `object-position`
- enquadramento
- visibilidade
- relação com o conteúdo

Preserve o ponto focal importante.

---

### Texto alternativo

Utilize `alt` de acordo com a função real da imagem.

Quando a imagem comunicar informação relevante, forneça texto alternativo apropriado e contextual.

Quando for puramente decorativa e não acrescentar informação, utilize tratamento acessível adequado, incluindo `alt=""` quando aplicável.

Não escreva `alt` apenas para inserir palavras-chave.

Não descreva detalhes irrelevantes que não ajudam a compreender o conteúdo ou a função da imagem.

---

### Qualidade e peso

Utilize qualidade suficiente para preservar a direção visual sem transferir arquivos desnecessariamente pesados.

Considere:

- dimensão real de exibição
- resolução
- formato
- compressão
- quantidade de imagens
- importância visual
- contexto de carregamento

Uma fotografia protagonista pode justificar tratamento diferente de uma imagem pequena e secundária.

Não reduza tanto a qualidade a ponto de comprometer a percepção visual do projeto.

Também não entregue arquivos muito maiores do que a experiência necessita.

---

### Formatos

Utilize formatos adequados ao tipo de asset e à implementação.

Não converta arquivos indiscriminadamente apenas por regra.

Preserve quando relevante:

- transparência
- qualidade
- compatibilidade
- nitidez
- fidelidade visual

---

### Imagens acima da dobra

Imagens importantes na primeira dobra merecem atenção especial de carregamento.

Isso não significa marcar automaticamente todas as imagens do Hero como prioritárias.

Avalie qual recurso realmente influencia a renderização inicial e a percepção da página.

---

### Backgrounds

Quando imagens forem utilizadas como background, garanta que:

- mantenham qualidade adequada
- não prejudiquem legibilidade
- respondam corretamente às mudanças de viewport
- não carreguem arquivos desnecessariamente grandes
- o ponto focal permaneça adequado quando relevante

Quando a imagem possuir conteúdo semanticamente importante, não a transforme em background apenas por conveniência se isso prejudicar acessibilidade ou significado.

---

### `<img>`

Quando houver razão técnica para utilizar `<img>` em vez de `next/image`, isso é permitido.

Quando necessário para o lint do projeto, adicionar imediatamente antes da tag:

`/* eslint-disable-next-line @next/next/no-img-element */`

Não utilizar `<img>` apenas para evitar configurar corretamente `next/image`.

---

### Regra de separação

Não use esta seção para decidir:

- qual fotografia é mais bonita
- qual imagem combina com a marca
- qual estilo fotográfico utilizar
- onde a fotografia deve dominar a composição
- qual tratamento artístico aplicar

Essas decisões pertencem à direção de arte.

Aqui, o objetivo é implementar tecnicamente bem as imagens escolhidas.

---

## 23. Favicon

Verifique se o cliente forneceu favicon ou algum asset oficial adequado para essa função.

Priorize sempre o asset real da marca.

Não utilize automaticamente o favicon padrão do starter no projeto final.

---

### Next.js

Considere o comportamento do App Router e os arquivos existentes dentro de `app`.

Se existir um favicon padrão do starter e o projeto utilizar outro favicon, remova ou substitua o arquivo conflitante conforme a implementação escolhida.

Evite manter múltiplas configurações concorrentes sem necessidade.

---

### Assets

Antes de configurar favicon, confirme:

- qual arquivo realmente existe
- formato
- caminho
- qualidade
- adequação à marca

Não referencie arquivos inexistentes.

Não invente nomes como:

- `favicon.png`
- `icon.png`
- `apple-touch-icon.png`

sem confirmar que esses assets realmente existem ou serão criados de forma válida.

---

### Metadata

Quando a implementação utilizar metadata para definir ícones, configure apenas os recursos realmente disponíveis.

Não é obrigatório declarar simultaneamente:

- `icon`
- `shortcut`
- `apple`

se o projeto não possuir ou não necessitar dessas variações.

A configuração deve refletir os assets reais.

---

### Identidade

Não substitua automaticamente o favicon por um ícone genérico apenas porque o logo completo não funciona em dimensões pequenas.

Quando não houver favicon específico, avalie se existe algum elemento oficial da identidade adequado, como:

- símbolo
- monograma
- marca reduzida
- ícone oficial

Não invente uma nova assinatura de marca sem necessidade.

---

### Validação

Antes de finalizar, confirme:

1. O favicon exibido pertence ao cliente?
2. O arquivo referenciado existe?
3. Não restou favicon padrão do starter competindo com ele?
4. Não existem configurações conflitantes?
5. O asset continua reconhecível em tamanho pequeno?

Favicon deve ser uma implementação correta da identidade disponível, não um campo preenchido por convenção.

---

## 24. SEO e metadata

Todo site deve possuir uma base adequada de SEO técnico e metadata.

Configure de acordo com as informações reais disponíveis para o projeto.

### Metadata principal

Defina quando aplicável:

- `title`
- `description`
- `metadataBase`
- `canonical`

`title` e `description` devem representar de forma clara:

- empresa
- oferta
- contexto
- localização quando relevante
- intenção provável de busca

Não adicionar localização apenas para SEO quando ela não fizer parte da atuação real do negócio.

Não inventar:

- serviços
- cidades atendidas
- especialidades
- diferenciais
- credenciais
- informações comerciais

para preencher metadata.

---

### Title

O `title` deve ser específico e útil.

Evite títulos genéricos como:

`Home`

`Página Inicial`

`Bem-vindo`

Também evite transformar o título em uma sequência artificial de palavras-chave.

Quando apropriado, combine:

oferta ou posicionamento + marca

ou:

marca + contexto relevante

conforme a intenção da página.

---

### Description

A `description` deve resumir a proposta da página de maneira natural.

Não utilizar uma lista de palavras-chave separadas por vírgulas.

Não prometer benefícios ou características que não estejam sustentados pelas informações reais do cliente.

---

### Canonical

Configure canonical quando houver uma URL final conhecida e sua utilização for apropriada.

Não invente domínio, rota ou URL de produção.

Se a URL definitiva ainda não estiver disponível, não crie canonical fictício apenas para preencher metadata.

---

### Estrutura semântica

SEO também depende da estrutura do conteúdo.

Utilize headings de forma semanticamente coerente.

A hierarquia visual e a hierarquia HTML devem trabalhar juntas.

Não escolher tags de heading apenas pelo tamanho visual desejado.

Estilos tipográficos devem ser controlados pelo design, não pela escolha incorreta de elementos HTML.

---

### Conteúdo

Priorize conteúdo:

- claro
- específico
- útil
- coerente com a oferta
- semanticamente estruturado
- baseado nas informações reais disponíveis

Não fazer keyword stuffing.

Não repetir termos artificialmente para tentar aumentar relevância.

Não criar blocos de texto apenas para SEO quando eles prejudicarem:

- leitura
- clareza
- narrativa
- experiência
- conversão

SEO deve fortalecer a página, não deteriorar sua comunicação.

---

### Indexabilidade

Conteúdo importante para compreensão da página deve permanecer disponível como conteúdo real e indexável quando apropriado.

Não esconder informações essenciais exclusivamente dentro de:

- imagens
- efeitos visuais
- animações
- canvas
- elementos sem representação textual adequada

Direção de arte e conteúdo indexável devem coexistir.

---

### Dados reais

Toda otimização deve respeitar os materiais disponíveis.

Não inventar fatos para tornar a página aparentemente mais otimizada.

Quando uma informação importante para SEO não estiver disponível, prefira omiti-la ou trabalhar com o que é conhecido em vez de fabricar precisão.

---

### Separação de responsabilidades

Open Graph e Twitter/X Cards são tratados na seção seguinte.

Favicon é tratado na seção específica de favicon.

Não duplicar essas configurações nesta seção.

---

## 25. Social sharing

Configure metadata de compartilhamento social quando houver informações suficientes para fazê-lo corretamente.

Considere quando aplicável:

- Open Graph
- Twitter/X Cards

As informações devem ser coerentes com a metadata principal e com o conteúdo real da página.

---

### Título e descrição

Utilize título e descrição adequados ao compartilhamento.

Eles podem acompanhar a metadata principal quando isso funcionar bem.

Não crie uma promessa diferente ou mais agressiva apenas para redes sociais se ela não for sustentada pela página.

---

### Imagem de compartilhamento

Quando existir uma imagem específica para compartilhamento, utilize-a.

Ela deve:

- existir realmente no projeto
- possuir qualidade adequada
- representar corretamente a empresa ou oferta
- funcionar bem no formato de compartilhamento
- permanecer compreensível quando exibida em tamanho reduzido

Não referencie arquivos inexistentes.

---

### Quando não houver imagem específica

Não gere automaticamente uma imagem social artificial apenas para preencher a configuração.

Avalie os assets reais disponíveis.

Quando existir uma imagem adequada, ela pode ser utilizada.

Quando não existir nenhum asset apropriado, não escolha uma imagem ruim ou sem relação apenas para preencher o campo.

---

### Logo não é automaticamente imagem social

Não utilizar automaticamente apenas o logo como imagem de compartilhamento.

Ele pode ser adequado em alguns projetos, mas avalie:

- proporção
- área vazia
- legibilidade
- contexto
- reconhecimento
- qualidade da apresentação

A escolha deve funcionar como preview, não apenas existir tecnicamente.

---

### Consistência

O preview compartilhado deve representar a mesma página que o visitante encontrará ao abrir o link.

Evite inconsistências entre:

- título
- descrição
- imagem
- oferta
- marca
- conteúdo real da página

---

### Validação

Antes de finalizar, confirme:

1. Os assets referenciados existem?
2. Título e descrição representam corretamente a página?
3. A imagem escolhida funciona como preview?
4. Não existem URLs fictícias?
5. Open Graph e Twitter/X estão coerentes entre si?
6. Nenhuma informação foi inventada apenas para completar metadata?

Social sharing deve representar corretamente a página, não apenas preencher campos.

---

## 26. Responsividade

Responsividade não significa apenas impedir que o layout quebre em telas menores.

A experiência deve ser planejada e validada em diferentes tamanhos de viewport, preservando:

- hierarquia
- legibilidade
- identidade
- direção de arte
- conversão
- usabilidade
- ritmo
- protagonismo visual

Validar especialmente os elementos que realmente existirem no projeto, incluindo quando aplicável:

- Header
- navegação
- Hero
- tipografia de grande escala
- grids
- imagens
- cards
- formulários
- CTAs
- tabelas
- timelines
- accordions
- mapas
- elementos fixos
- Footer
- elementos decorativos
- composições assimétricas
- sobreposições

Não considerar o site finalizado apenas porque funciona em desktop e em um único breakpoint mobile.

Verifique diferentes contextos, incluindo:

- celulares estreitos
- celulares maiores
- tablets
- notebooks
- desktops
- larguras intermediárias

Não assumir que a solução responsiva será sempre:

desktop → reduzir colunas → empilhar tudo.

Quando necessário, reinterprete:

- ordem
- alinhamento
- proporção
- escala
- crop
- espaçamento
- densidade
- visibilidade de elementos secundários
- comportamento de navegação
- relação entre texto e imagem
- sobreposições
- direção de leitura

A geometria pode mudar entre desktop e mobile.

A ideia visual deve permanecer.

Não preserve uma composição desktop quando ela prejudicar clareza ou experiência em telas menores.

Também não simplifique tanto o mobile a ponto de remover toda a personalidade definida para o projeto.

### Breakpoints

Utilize breakpoints conforme a necessidade real da composição.

Não force todos os ajustes a acontecer apenas nos breakpoints padrão quando existir um estado intermediário visualmente quebrado.

A responsividade deve responder ao conteúdo e à composição, não apenas ao dispositivo.

### Overflow

Verifique cuidadosamente:

- overflow horizontal
- elementos oversized
- tipografia de grande escala
- imagens fora do grid
- elementos absolutos
- elementos fixed
- sliders
- menus
- tabelas
- elementos decorativos

Elementos que ultrapassam o grid intencionalmente não devem gerar scroll horizontal acidental.

### Teste final responsivo

Antes de finalizar, confirme:

1. A hierarquia continua clara em diferentes larguras?
2. A tipografia mantém proporção adequada?
3. As imagens preservam seus pontos focais?
4. Nenhum elemento importante fica cortado?
5. Não existe overflow horizontal acidental?
6. Navegação e ações continuam acessíveis?
7. Elementos fixos não bloqueiam conteúdo?
8. A ordem do conteúdo continua lógica?
9. Estados intermediários estão resolvidos?
10. O mobile continua parecendo parte da mesma direção de arte?

Responsividade deve preservar intenção, não necessariamente geometria.

---

## 27. Acessibilidade

Acessibilidade deve fazer parte da implementação desde o início.

Não trate acessibilidade apenas como uma correção realizada na validação final.

Direção de arte e acessibilidade devem coexistir.

---

### Semântica

Utilize elementos HTML de acordo com sua função sempre que apropriado.

Prefira elementos semânticos reais a elementos genéricos simulando comportamento.

Exemplos:

- `button` para ações
- `a` para navegação
- headings para títulos
- `label` associado a campos
- estruturas semânticas adequadas ao conteúdo

Não escolha elementos HTML apenas pela aparência padrão.

A aparência pode ser controlada pelo design.

---

### Teclado

Toda interação relevante deve continuar utilizável por teclado quando aplicável.

Verifique especialmente:

- navegação
- menus
- dialogs
- accordions
- tabs
- formulários
- dropdowns
- controles personalizados
- elementos interativos

Não crie elementos clicáveis utilizando estruturas que não oferecem comportamento de interação adequado sem implementar corretamente a acessibilidade necessária.

---

### Foco

Estados de foco devem permanecer perceptíveis.

Não remover `outline` ou outro indicador de foco sem fornecer uma alternativa visual adequada.

O tratamento de foco deve:

- ser visível
- possuir contraste suficiente
- combinar com o sistema visual
- não depender exclusivamente de mudanças quase imperceptíveis

Acessibilidade não exige aceitar o estilo padrão do navegador quando uma solução melhor e igualmente clara fizer parte da direção visual.

---

### Nomes acessíveis

Controles devem possuir nomes acessíveis compreensíveis.

Tenha atenção especial a:

- botões apenas com ícone
- controles de menu
- fechar
- anterior / próximo
- redes sociais
- ações representadas apenas visualmente

Utilize texto visível quando ele for a solução mais clara.

Utilize `aria-label` ou outra técnica adequada quando necessário.

Não adicione atributos ARIA indiscriminadamente quando a semântica nativa já resolver corretamente o problema.

---

### Imagens

A implementação de `alt` segue a função real da imagem conforme definido na seção técnica de imagens.

Imagens informativas devem possuir alternativa apropriada.

Imagens puramente decorativas não devem gerar ruído desnecessário para tecnologias assistivas.

---

### Contraste e legibilidade

Garanta contraste suficiente para conteúdo e controles.

Tenha atenção especial a:

- texto sobre fotografia
- texto sobre gradientes
- texto pequeno
- labels
- placeholders
- estados desabilitados
- links
- controles
- overlays
- elementos transparentes

Não sacrificar legibilidade para preservar uma decisão estética.

Quando houver conflito, ajuste a solução visual.

---

### Formulários

Formulários devem possuir:

- identificação clara dos campos
- labels adequados
- estados compreensíveis
- mensagens de erro perceptíveis
- feedback de envio quando necessário
- associação correta entre informação e controle

Não dependa exclusivamente de:

- cor
- placeholder
- ícone

para comunicar informações essenciais.

---

### Áreas de interação

Controles utilizados por toque devem possuir área de interação confortável.

Evite ações importantes que exijam precisão excessiva.

Elementos visualmente pequenos podem possuir uma área interativa maior quando isso não prejudicar a composição.

---

### Movimento

Respeite `prefers-reduced-motion` conforme definido na seção de movimento e animações.

Informações essenciais não devem depender exclusivamente de animação.

---

### Componentes acessíveis

Quando shadcn/ui, Radix UI ou outro recurso já existente fornecer comportamento acessível adequado, preserve essa infraestrutura sempre que ela servir à solução.

Não remova:

- gerenciamento de foco
- navegação por teclado
- atributos necessários
- estados
- comportamento acessível

apenas para facilitar customização visual.

A aparência pode ser reconstruída sem destruir a base funcional.

---

### Mobile e zoom

A experiência deve permanecer compreensível e utilizável em telas menores e diante de aumento de conteúdo.

Evite decisões que dependam de:

- espaço extremamente rígido
- texto minúsculo
- alturas fixas inadequadas
- conteúdo essencial cortado
- precisão excessiva de toque

---

### Regra de prioridade

Quando uma decisão visual prejudicar significativamente:

- compreensão
- legibilidade
- navegação
- operação
- acesso ao conteúdo

reformule a decisão visual.

Acessibilidade não é uma estética específica.

É uma condição de funcionamento da experiência.

---

## 28. Performance

Performance deve ser considerada durante as decisões de implementação, não apenas depois que a interface estiver pronta.

Evite complexidade técnica que não produza benefício perceptível para a experiência.

Avalie especialmente o impacto de:

- JavaScript no cliente
- dependências
- imagens
- fontes
- animações
- efeitos visuais
- componentes interativos
- recursos carregados na primeira experiência

As regras específicas de otimização de imagens, movimento e dependências estão definidas em suas respectivas seções.

---

### JavaScript

Não transforme componentes em Client Components sem necessidade.

Quando a interface não exigir:

- estado
- efeitos
- eventos
- APIs exclusivas do navegador
- interatividade no cliente

preserve uma implementação compatível com Server Components quando apropriado.

Não adicionar `"use client"` por conveniência.

---

### Complexidade proporcional

A complexidade técnica deve acompanhar o benefício real da experiência.

Uma solução visual sofisticada pode justificar implementação mais elaborada.

Isso não significa utilizar automaticamente:

- bibliotecas adicionais
- JavaScript pesado
- efeitos contínuos
- múltiplos observers
- lógica complexa

para produzir uma diferença visual pequena.

Prefira a solução mais simples que preserve corretamente a direção de arte e a experiência desejada.

---

### Primeira experiência

Dê atenção especial aos recursos necessários para a primeira dobra.

Evite carregar antecipadamente recursos que não possuem impacto relevante na experiência inicial.

Ao mesmo tempo, não comprometa elementos protagonistas apenas para perseguir otimizações abstratas.

Performance e qualidade visual devem ser equilibradas de acordo com a importância real de cada recurso.

---

### Regra de decisão

Antes de adicionar uma solução com custo relevante, pergunte:

1. Qual benefício perceptível ela produz?
2. Esse benefício pertence à direção de arte ou à funcionalidade?
3. Existe uma solução mais simples com resultado equivalente?
4. O custo afeta carregamento, interação ou estabilidade?
5. Esse recurso é necessário imediatamente ou pode ser carregado posteriormente?

Não simplifique experiências autorais apenas para reduzir complexidade.

Também não adicione complexidade apenas para fazer o projeto parecer tecnicamente sofisticado.

---

## 29. Movimento e animações

Movimento deve fazer parte da direção de arte quando contribuir para a experiência.

Não adicionar animações automaticamente apenas para fazer o site parecer:

- moderno
- premium
- sofisticado
- tecnológico
- interativo

Também não limitar todo projeto a animações mínimas quando a direção visual justificar uma experiência mais expressiva.

A intensidade do movimento deve acompanhar:

- direção visual
- conceito
- intensidade definida no Visual Strategy Brief
- conteúdo
- narrativa
- interação
- performance
- acessibilidade

---

### Função antes do efeito

Antes de adicionar uma animação, determine sua função.

Movimento pode ajudar a:

- estabelecer hierarquia
- orientar atenção
- indicar mudança de estado
- explicar relação entre elementos
- revelar conteúdo
- criar continuidade
- reforçar narrativa
- aumentar sensação de profundidade
- conectar seções
- demonstrar produto
- fornecer feedback de interação
- criar atmosfera

Se a animação não cumprir nenhuma função perceptível, considere removê-la.

---

### Movimento não corrige composição fraca

Não utilize animação para tentar sofisticar uma composição genérica.

Primeiro resolva:

- hierarquia
- tipografia
- fotografia
- escala
- proporção
- grid
- espaço
- ritmo
- composição

O layout estático deve continuar visualmente forte.

Movimento deve ampliar uma boa direção de arte, não esconder a ausência dela.

---

### Intensidade

A intensidade das animações pode variar.

**Contida**
→ transições sutis, feedback, pequenas revelações e mudanças de estado.

**Expressiva**
→ movimento mais perceptível participando da narrativa e da composição.

**Experimental**
→ movimento pode assumir papel estrutural na experiência quando existir justificativa clara.

Experimental não significa:

- movimento constante
- efeitos aleatórios
- excesso de parallax
- scroll difícil de controlar
- elementos se movendo sem função
- experiência imprevisível

Quanto maior a intensidade, maior deve ser a justificativa.

---

### Relação com a direção visual

O movimento deve combinar com a personalidade do projeto.

Exemplos:

**Minimalista Premium**
→ transições precisas, poucas e controladas.

**Corporativo Moderno**
→ feedback claro, estabilidade e movimento funcional.

**Editorial Sofisticado**
→ revelações, mudanças tipográficas ou transições que reforcem ritmo editorial.

**Clean & Humanizado**
→ movimentos suaves e naturais.

**Impacto Comercial**
→ movimento pode direcionar atenção para proposta, prova ou ação sem atrasar compreensão.

**Tech / Futurista**
→ interfaces, dados, profundidade e estados podem possuir movimento mais evidente quando coerentes com o produto.

**Luxury Minimal**
→ movimento reduzido, preciso e sofisticado.

**Dark Luxury**
→ transições atmosféricas e controle de luz ou profundidade podem participar da experiência.

**Swiss / International**
→ movimento sistemático, geométrico e funcional.

**Immersive / Cinematic**
→ movimento pode participar fortemente da narrativa, escala, fotografia e transições.

Esses exemplos não constituem presets.

---

### Entrada de elementos

Não aplicar automaticamente a todos os elementos:

fade-up + translateY.

Evite transformar cada:

- título
- parágrafo
- card
- imagem
- botão

em uma sequência idêntica de entrada.

Quando utilizar revelações, varie somente quando houver razão compositiva.

Elementos também podem simplesmente estar presentes.

---

### Scroll

Animações relacionadas ao scroll podem ser utilizadas quando contribuírem para narrativa ou compreensão.

Evite:

- scroll hijacking
- alterar artificialmente a velocidade natural da página
- bloquear navegação
- exigir precisão excessiva do usuário
- prender o visitante em sequências longas
- utilizar parallax em todos os elementos
- movimentar conteúdo apenas porque ele entrou na viewport

O visitante deve continuar controlando a navegação.

---

### Microinterações

Microinterações são úteis para comunicar estado.

Considere quando apropriado:

- hover
- focus
- active
- abertura
- fechamento
- seleção
- envio
- carregamento
- sucesso
- erro

O feedback deve ser perceptível sem transformar cada interação em espetáculo.

---

### Hover

Não dependa exclusivamente de hover para comunicar informação importante.

Lembre que dispositivos touch não possuem o mesmo comportamento.

Efeitos de hover devem complementar a experiência.

Não esconder informações essenciais até o usuário passar o mouse.

---

### Duração e easing

Utilize duração e easing coerentes com a linguagem visual.

Evite utilizar exatamente a mesma animação em todos os elementos apenas por conveniência.

Também evite uma coleção de timings e easings sem sistema.

Movimento deve possuir consistência.

---

### Performance

Priorize animações eficientes.

Sempre que possível, prefira propriedades adequadas para animação, como:

- `transform`
- `opacity`

Evite animações que provoquem trabalho excessivo de layout ou pintura sem necessidade.

Não adicione bibliotecas pesadas apenas para executar efeitos simples que podem ser resolvidos com CSS ou recursos já disponíveis.

Se uma experiência mais complexa exigir biblioteca adicional, a dependência deve possuir justificativa clara.

---

### Imagens e efeitos

Não comprometa:

- qualidade
- carregamento
- estabilidade
- leitura
- responsividade

apenas para criar movimento visual.

Efeitos cinematográficos devem continuar eficientes.

---

### Mobile

Reavalie animações em dispositivos menores.

Considere:

- desempenho
- área disponível
- interação touch
- velocidade de navegação
- legibilidade
- bateria
- complexidade da composição

Uma animação apropriada no desktop pode precisar ser:

- simplificada
- reduzida
- substituída
- removida

no mobile.

Preserve a intenção, não necessariamente o mesmo efeito.

---

### Acessibilidade

Respeite `prefers-reduced-motion`.

Quando o usuário solicitar redução de movimento:

- remova movimentos não essenciais
- reduza deslocamentos intensos
- evite parallax significativo
- preserve funcionalidade
- preserve compreensão
- não dependa de animação para comunicar informação indispensável

A experiência deve continuar completa sem movimento não essencial.

---

### Estados iniciais

Não permita que conteúdo importante fique permanentemente invisível caso:

- JavaScript falhe
- uma animação não seja executada
- uma biblioteca não carregue
- `IntersectionObserver` não funcione como esperado

Conteúdo essencial deve permanecer acessível.

---

### Regra de necessidade

Antes de adicionar movimento, pergunte:

1. Qual função esta animação cumpre?
2. Ela reforça a direção de arte?
3. Ela melhora narrativa, hierarquia, feedback ou compreensão?
4. O layout continua forte sem ela?
5. Está sendo adicionada apenas porque outros sites premium utilizam?
6. O efeito continua adequado no mobile?
7. Existe impacto relevante de performance?
8. `prefers-reduced-motion` está sendo respeitado?

Se não houver uma resposta clara, simplifique ou remova.

---

### Regra anti-template

Não utilize automaticamente o mesmo pacote de:

fade-in
→ fade-up
→ stagger
→ hover com scale
→ botão com translate

em todos os projetos.

Assim como tipografia, fotografia e composição, movimento deve pertencer à identidade daquela experiência.

---

## 30. Dados e conteúdo do projeto

Consulte os arquivos existentes em `data` antes de implementar conteúdo ou informações globais.

Verifique especialmente:

- `data/site.config.ts`
- `data/content.ts`
- `data/brand.ts`

Utilize esses arquivos de acordo com a função que realmente possuírem no starter.

Não presuma que todo conteúdo precisa obrigatoriamente estar centralizado em `data`.

---

### Fonte de verdade

Quando uma informação já estiver estruturada em `data`, evite criar outra versão independente da mesma informação em componentes diferentes.

Prefira uma fonte de verdade quando isso reduzir:

- inconsistência
- duplicação
- manutenção desnecessária
- divergência entre partes da página

Isso é especialmente importante para informações reutilizadas em diferentes pontos do site.

---

### Conteúdo do cliente

Os dados existentes no starter são estrutura inicial, não conteúdo definitivo.

Substitua ou adapte conteúdo genérico de acordo com:

- briefing
- materiais fornecidos
- informações reais do cliente
- arquitetura de conteúdo definida para o projeto

Não preserve textos, contatos, serviços, nomes, links ou informações de exemplo apenas porque já existem nos arquivos.

---

### Não inventar dados

Quando uma informação necessária não tiver sido fornecida, não fabrique dados apenas para completar a estrutura existente.

Isso inclui especialmente:

- telefone
- WhatsApp
- e-mail
- endereço
- horários
- redes sociais
- avaliações
- números
- métricas
- credenciais
- serviços
- preços

Utilize apenas informações sustentadas pelos materiais disponíveis.

---

### Estrutura não é contrato rígido

Os arquivos existentes em `data` não devem limitar a arquitetura do novo site.

É permitido:

- adicionar campos necessários
- remover dados de exemplo
- reorganizar estruturas
- criar novas estruturas locais quando houver justificativa

desde que isso melhore a implementação e permaneça coerente com o projeto.

Não force uma nova direção de conteúdo a caber artificialmente em uma estrutura criada para o starter.

---

### Regra de consistência

Antes de escrever diretamente em um componente uma informação que pode aparecer em mais de um lugar, verifique se ela já possui uma fonte apropriada em `data`.

Centralize quando houver benefício real.

Não transforme `data` em uma camada de abstração obrigatória para textos ou valores utilizados apenas uma vez.

---

## 31. Configuração e estabilidade

Preserve uma configuração técnica simples e estável.

Não altere infraestrutura do projeto sem necessidade real.

Antes de modificar arquivos ou configurações como:

- `next.config`
- TypeScript
- ESLint
- PostCSS
- Tailwind
- aliases
- scripts
- estrutura global do projeto

determine se a alteração é realmente necessária para implementar a solução.

---

### Configuração existente

Priorize a configuração já funcional quando ela atender ao projeto.

Não:

- reconfigure ferramentas apenas por preferência pessoal
- substitua configurações estáveis sem benefício concreto
- desative validações para esconder erros
- crie workarounds globais para resolver um problema local
- altere infraestrutura apenas para facilitar uma pequena decisão visual

Corrija a causa do problema quando possível.

---

### Mudanças necessárias

Quando uma alteração de configuração for realmente necessária:

- mantenha o escopo mínimo
- preserve compatibilidade com a stack
- evite efeitos colaterais desnecessários
- não remova comportamento existente sem compreender sua função
- mantenha a implementação compreensível

Complexidade de configuração deve possuir justificativa técnica clara.

---

### Erros

Não considere erros de:

- TypeScript
- lint
- compilação
- imports
- runtime

como obstáculos a serem simplesmente desativados.

Corrija o problema quando ele estiver dentro do escopo do projeto.

Não enfraqueça configurações globais apenas para fazer uma implementação específica passar.

---

### Build

O build final obrigatório e seus critérios de conclusão são tratados na validação final.

Esta seção orienta a estabilidade durante o desenvolvimento.

A validação final confirma que o projeto efetivamente compila.

---

## 34. Validação obrigatória antes de finalizar

Antes de considerar o projeto concluído, realize uma revisão completa.

A validação deve verificar quatro dimensões:

1. estratégia visual
2. conteúdo e conversão
3. experiência e responsividade
4. qualidade técnica

Não utilize a validação para forçar novamente seções ou componentes que foram corretamente considerados desnecessários durante o planejamento.

---

### 1. Estratégia visual

Compare o resultado final com o Visual Strategy Brief definido antes da implementação.

Confirme:

- a direção principal continua reconhecível
- a influência secundária, quando utilizada, permanece controlada
- a intensidade escolhida foi respeitada
- a sensação principal aparece de forma perceptível
- o protagonista visual realmente recebeu protagonismo
- o conceito visual foi traduzido em decisões concretas
- a assinatura visual aparece de maneira consistente
- Hero e restante da página pertencem ao mesmo sistema
- fotografia segue uma linguagem coerente
- tipografia possui hierarquia e intenção
- composição possui variação controlada
- existe contraste de escala
- existe ritmo entre intensidade e respiro
- o projeto não depende de decoração genérica para parecer sofisticado

Se o Visual Strategy Brief descreve uma coisa e a interface entrega outra, o projeto ainda não está finalizado.

---

### 2. Teste de identidade

Observe a página como um sistema visual completo.

Pergunte:

- parece criada especificamente para esta empresa?
- a personalidade da marca é perceptível?
- o segmento influenciou a solução sem resultar em clichê?
- existe pelo menos uma característica visual memorável?
- as decisões parecem intencionais?
- o site continuaria reconhecível sem o logo?
- a direção escolhida aparece além do Hero?

Se o projeto parecer apenas um template com cores e imagens diferentes, continue refinando.

---

### 3. Teste de silhueta

Observe mentalmente a página sem ler os textos.

Confirme se existe:

- mudança de escala
- ritmo
- contraste
- momentos dominantes
- momentos de respiro
- variação de densidade
- relações claras entre seções
- continuidade visual
- hierarquia

Se a página parecer uma sequência uniforme de retângulos contendo pequenos elementos, reavalie a composição.

---

### 4. Arquitetura de conteúdo

Confirme se o visitante consegue compreender:

- quem é a empresa ou marca
- o que ela oferece
- para quem a oferta é relevante quando necessário
- por que deveria considerar a solução
- como funciona quando isso for importante
- quais evidências reais aumentam confiança
- qual é o próximo passo

Essas necessidades não exigem obrigatoriamente seções independentes.

Não validar pela presença de:

- Sobre
- Serviços
- Diferenciais
- Processo
- Depoimentos
- Localização
- FAQ

como blocos obrigatórios.

Valide se as necessidades de informação foram resolvidas em algum ponto da experiência.

---

### 5. Necessidade das seções

Revise cada seção criada.

Pergunte:

1. Ela possui função narrativa, informacional ou comercial?
2. Ela acrescenta algo que ainda não foi comunicado?
3. Sua existência é sustentada pelo briefing ou pela jornada?
4. Poderia ser integrada a outra seção de maneira melhor?
5. Existe conteúdo suficiente para justificá-la?
6. Está presente porque o projeto precisa ou porque sites normalmente possuem essa seção?

Remova, combine ou reorganize seções quando necessário.

Não mantenha conteúdo apenas para fazer a página parecer maior.

---

### 6. Conteúdo real e conteúdo provisório

Revise todas as afirmações factuais.

Não permitir publicação acidental de informações inventadas.

Verifique especialmente:

- números
- estatísticas
- clientes
- anos de experiência
- avaliações
- estrelas
- depoimentos
- nomes
- cargos
- certificações
- prêmios
- resultados
- garantias
- preços
- condições comerciais
- prazos
- endereços
- áreas atendidas
- telefones
- WhatsApp
- e-mails
- redes sociais
- parceiros
- marcas
- credenciais

Toda informação específica deve possuir origem nos materiais fornecidos ou estar claramente identificada como provisória quando a validação humana for necessária.

---

### 7. Conversão

Confirme que existe um próximo passo claro.

Verifique:

- ação principal identificável
- CTA coerente com a oferta
- canal real
- links funcionais
- ausência de competição excessiva entre ações
- repetição de CTA apenas quando útil
- contexto adequado para conversão
- confiança suficiente próxima aos principais momentos de decisão

Não exigir CTA em todas as seções.

Não exigir WhatsApp como ação principal quando ele não for o canal prioritário.

---

### 8. WhatsApp

Quando WhatsApp for utilizado:

- número real
- link correto
- mensagem contextual quando necessária
- funcionamento desktop
- funcionamento mobile
- acessibilidade
- integração visual
- quantidade de aparições justificável

Botão flutuante só deve ser validado quando sua utilização tiver sido definida como adequada para o projeto.

Sua ausência não constitui erro por si só.

---

### 9. Header e navegação

Confirme:

- identificação clara da marca
- navegação necessária
- destinos reais
- âncoras funcionando
- CTA no Header somente quando apropriado
- comportamento de scroll correto
- contraste
- relação coerente com o Hero
- ausência de elementos sem função

Não exigir quantidade fixa de links.

---

### 10. Menu mobile

Quando houver navegação, confirme:

- solução mobile funcional
- abertura e fechamento corretos quando aplicável
- links funcionando
- destinos reais
- ação principal acessível
- boa área de toque
- contraste
- foco e acessibilidade
- `z-index` correto
- ausência de overflow
- comportamento correto em diferentes alturas e larguras

Não exigir hamburger quando outra solução adequada tiver sido escolhida.

---

### 11. Hero

Confirme:

- comunicação clara
- direção de arte evidente
- hierarquia
- composição intencional
- fotografia adequada
- CTA quando necessário
- contraste
- legibilidade
- comportamento responsivo
- relação com o Header

A primeira dobra deve estabelecer o nível visual do restante do projeto.

---

### 12. Prova e confiança

Confirme se o projeto oferece confiança suficiente para o contexto.

Isso pode acontecer através de:

- prova social real
- projetos
- cases
- equipe
- estrutura
- fotografia real
- processo
- metodologia
- informações técnicas
- certificações
- garantias
- transparência
- localização
- experiência
- conteúdo

Não exigir depoimentos quando não existirem.

Não criar prova falsa para completar o layout.

---

### 13. Localização

Quando localização for relevante:

- utilizar somente informações reais
- endereço correto quando fornecido
- mapa funcional quando necessário
- área de atendimento verdadeira
- integração coerente com a experiência

Não considerar ausência de seção de localização um erro quando ela não for relevante.

---

### 14. FAQ e objeções

Confirme se as principais objeções foram tratadas.

Elas podem estar:

- no próprio serviço
- no processo
- próximo ao CTA
- em conteúdo comercial
- em FAQ

Não exigir FAQ como seção independente.

Não exigir quantidade fixa de perguntas.

---

### 15. Footer

Confirmar:

- informações necessárias
- dados reais
- links funcionais
- composição coerente
- responsividade
- encerramento visual adequado
- crédito Z-Agent correto

O crédito deve utilizar:

`Desenvolvido por Z-Agent`

com `Z-Agent` apontando para:

`https://sites.z-agent.com.br`

em nova aba com:

`target="_blank"`

e:

`rel="noopener noreferrer"`

---

### 16. Responsividade

Não considerar responsividade concluída apenas porque o layout não quebra.

Verifique em diferentes larguras:

- hierarquia
- ordem do conteúdo
- escala tipográfica
- espaçamento
- imagens
- recortes
- grids
- elementos fixos
- menus
- formulários
- CTAs
- tabelas
- timelines
- elementos decorativos

Mobile deve ser uma recomposição consciente da experiência.

---

### 17. Acessibilidade

Confirmar pelo menos:

- HTML semântico
- contraste adequado
- `alt` apropriado
- labels
- nomes acessíveis
- foco visível
- navegação por teclado quando aplicável
- controles identificáveis
- áreas de toque adequadas
- estados interativos compreensíveis
- `prefers-reduced-motion` quando relevante

Não sacrificar legibilidade ou usabilidade pela direção de arte.

---

### 18. Assets

Confirmar:

- logo correto
- imagens corretas
- favicon correto
- nenhum asset quebrado
- nenhum asset padrão do starter aparecendo indevidamente
- nenhum placeholder acidental
- proporções adequadas
- qualidade suficiente
- imagens responsivas
- otimização adequada

---

### 19. SEO e metadata

Quando houver informações suficientes, confirmar:

- `title`
- `description`
- metadata
- canonical
- Open Graph
- Twitter
- favicon
- estrutura semântica de headings
- conteúdo indexável

Não inventar dados para completar metadata.

---

### 20. Qualidade técnica

Confirmar:

- JSX válido
- TypeScript válido
- ausência de imports órfãos
- ausência de dependências desnecessárias
- links funcionando
- componentes funcionando
- ausência de erros de console relevantes
- ausência de overflow inesperado
- estabilidade
- performance adequada

---

### 21. Build obrigatório

Executar obrigatoriamente:

`npm run build`

Corrigir todos os erros encontrados.

O projeto só pode ser considerado tecnicamente concluído quando o build terminar com sucesso.

---

### 22. Revisão anti-template

Antes da entrega, faça uma última revisão crítica.

Pergunte:

1. Este site poderia ser entregue para outra empresa apenas trocando logo, cores e textos?
2. Existem grids de cards usados sem necessidade?
3. Existem ícones decorativos repetitivos?
4. Existem muitos containers arredondados?
5. Existe glassmorphism sem justificativa?
6. As seções possuem composições excessivamente semelhantes?
7. Todos os conteúdos receberam aproximadamente o mesmo peso?
8. A fotografia realmente participa da direção de arte?
9. A tipografia possui contraste suficiente?
10. Existem momentos de grande escala?
11. Existem momentos de silêncio?
12. A página possui ritmo?
13. A assinatura visual está presente?
14. O mobile preserva a personalidade?
15. Alguma decisão parece ter vindo do starter em vez do cliente?

Se o resultado ainda parecer um template sofisticado em vez de um projeto específico, continue refinando.

---

### 23. Revisão por subtração

Antes de adicionar novos elementos para melhorar o design, tente remover.

Pergunte:

- alguma borda pode desaparecer?
- algum card é desnecessário?
- algum ícone não acrescenta informação?
- algum texto está repetindo outro?
- algum background está fragmentando demais a página?
- alguma sombra é desnecessária?
- algum badge existe apenas para decorar?
- algum CTA está repetido sem função?
- alguma seção poderia ser integrada?
- algum efeito está tentando compensar uma composição fraca?

Refinamento frequentemente acontece por redução.

---

### Critério final

O projeto não está concluído apenas porque:

- todas as informações foram inseridas
- todos os componentes funcionam
- o layout é responsivo
- o build passou

Ele está concluído quando essas condições técnicas coexistem com:

- direção de arte clara
- identidade
- coerência
- hierarquia
- ritmo
- conteúdo confiável
- conversão
- usabilidade
- acabamento

O objetivo da validação não é verificar se o site seguiu um template.

É verificar se a estratégia definida para aquele projeto foi executada corretamente.

---

## 35. Regra final

Não entregue apenas uma página que funciona.

Não entregue apenas uma página bonita.

Não entregue apenas uma página que contém todas as informações.

Entregue um projeto digital coerente com:

- a empresa
- o posicionamento
- o público
- o objetivo
- o conteúdo disponível
- a direção de arte definida
- a estratégia de conversão

---

### O starter não é o design

O starter fornece:

- estrutura técnica
- stack
- componentes disponíveis
- padrões de qualidade
- regras funcionais
- base de desenvolvimento

Ele não fornece a identidade visual final.

Não preserve uma decisão visual do starter apenas porque ela já existe.

Não transforme componentes existentes em restrições criativas.

Reutilize infraestrutura.

Reinterprete aparência.

---

### O estilo não é uma skin

Selecionar uma direção em `public/docs/estilos-visuais.md` não significa aplicar:

- determinadas cores
- determinada fonte
- determinado border-radius
- determinado background
- determinado efeito

sobre a mesma estrutura de página.

A direção escolhida deve influenciar:

- arquitetura visual
- composição
- escala
- grid
- tipografia
- fotografia
- ritmo
- densidade
- espaço negativo
- formas
- interação
- relação entre seções
- hierarquia
- comportamento mobile

Se duas direções diferentes produzirem essencialmente a mesma página com cores diferentes, a direção de arte não foi aplicada corretamente.

---

### O briefing não é um template preenchível

Não trate o briefing como uma lista de campos que precisam ser encaixados em componentes preexistentes.

Interprete:

- prioridades
- personalidade
- diferenciais reais
- conteúdo
- limitações
- oportunidades
- materiais disponíveis
- objetivo comercial

e transforme essas informações em uma experiência.

---

### Não confunda completude com quantidade

Um site não é mais completo porque possui mais:

- seções
- cards
- textos
- ícones
- CTAs
- efeitos
- imagens
- componentes

Completude significa que o visitante recebeu as informações necessárias para:

- compreender
- confiar
- avaliar
- agir

A quantidade deve servir a essas necessidades.

---

### Não confunda premium com decoração

Aparência premium não deve depender automaticamente de:

- gradientes
- blur
- glassmorphism
- sombras
- dourado
- preto
- animações
- cards arredondados
- fontes serifadas
- imagens fullscreen
- muito espaço vazio

Esses recursos podem ser utilizados.

Nenhum deles é sinônimo de qualidade.

Priorize:

- direção
- proporção
- hierarquia
- fotografia
- tipografia
- composição
- ritmo
- precisão
- coerência
- acabamento

---

### Não confunda criatividade com complexidade

Um projeto autoral pode ser extremamente simples.

Não adicione:

- interações
- animações
- layouts incomuns
- elementos gráficos
- assimetrias
- efeitos

apenas para demonstrar criatividade.

Cada decisão deve fortalecer:

- conceito
- narrativa
- compreensão
- identidade
- experiência
- conversão

Criatividade sem função vira ruído.

---

### Não confunda consistência com repetição

Consistência significa que diferentes partes parecem pertencer ao mesmo sistema.

Não significa repetir:

- mesmo card
- mesmo container
- mesma largura
- mesmo alinhamento
- mesmo espaçamento
- mesmo background
- mesma composição

em todas as seções.

Crie variedade dentro de uma lógica reconhecível.

---

### Não confunda conversão com repetição de CTA

Conversão depende de:

- clareza
- desejo
- confiança
- redução de objeção
- timing
- facilidade de ação

Não apenas da quantidade de botões.

Repita uma ação quando isso ajudar a jornada.

Não transforme toda seção em oportunidade para inserir outro botão.

---

### Conteúdo real acima de preenchimento visual

Nunca invente informações específicas para tornar uma composição mais convincente.

É melhor possuir menos conteúdo real do que preencher a interface com:

- números falsos
- depoimentos falsos
- avaliações falsas
- logos falsos
- prêmios falsos
- endereços falsos
- certificações falsas
- resultados falsos
- características não confirmadas

Quando faltar informação, adapte a composição.

Não adapte a verdade ao layout.

---

### Mobile é direção de arte também

Não considere mobile uma versão empilhada do desktop.

Preserve no mobile:

- conceito
- hierarquia
- protagonista
- ritmo
- assinatura visual
- conversão
- identidade

Reorganize a composição quando necessário.

A geometria pode mudar.

A ideia deve permanecer.

---

### Qualidade do projeto inteiro

Não concentre todo o esforço visual no Hero.

O nível de qualidade estabelecido na primeira dobra deve continuar durante a página.

Isso não significa que todas as seções precisam possuir alta intensidade.

Significa que mesmo momentos silenciosos devem parecer intencionais.

Evite:

Hero autoral
→ restante da página genérico.

---

### Teste da troca de marca

Antes de finalizar, imagine substituir:

- logo
- nome
- cores
- textos
- imagens

pelos materiais de outra empresa do mesmo segmento.

Se o site continuar funcionando visualmente sem alterações relevantes de composição, existe risco de a solução estar genérica.

Reavalie:

- conceito
- assinatura visual
- fotografia
- escala
- composição
- ritmo
- detalhes específicos da marca

---

### Teste da remoção do logo

Imagine a página sem o logo.

Pergunte:

> Ainda existem pistas suficientes para perceber personalidade, posicionamento e direção?

A resposta não precisa depender de elementos decorativos óbvios.

Ela pode estar em:

- tipografia
- fotografia
- proporções
- composição
- linguagem
- ritmo
- interação
- detalhes

---

### Teste de intenção

Para cada decisão visual relevante, deve ser possível responder:

> Por que isso está assim neste projeto?

Respostas válidas podem envolver:

- marca
- conteúdo
- conceito
- hierarquia
- função
- conversão
- legibilidade
- narrativa
- direção visual
- experiência

"Porque fica bonito" não é justificativa suficiente.

"Porque normalmente fazemos assim" também não.

---

### Perguntas finais

Antes de considerar o trabalho concluído, responda:

1. Parece feito especificamente para esta empresa?
2. A primeira dobra comunica claramente o negócio ou posicionamento?
3. Existe uma direção de arte perceptível?
4. O restante da página mantém o nível estabelecido pelo Hero?
5. A página possui hierarquia e ritmo?
6. Existem momentos de impacto e momentos de respiro?
7. A fotografia possui função?
8. A tipografia possui intenção?
9. Os componentes servem ao projeto em vez de definir sua aparência?
10. Existe alguma seção presente apenas por hábito?
11. Existe algum elemento decorativo sem função?
12. As informações específicas são reais?
13. A confiança foi construída de maneira legítima?
14. O visitante sabe qual é o próximo passo?
15. Os canais de conversão estão acessíveis na intensidade correta?
16. O mobile parece projetado ou apenas adaptado?
17. A experiência é acessível e legível?
18. O site possui identidade mesmo sem o logo?
19. O projeto se diferencia de outros sites gerados a partir do mesmo starter?
20. O build foi concluído com sucesso?

Se alguma resposta revelar uma fraqueza relevante, refine antes de finalizar.

---

### Critério máximo

O objetivo não é fazer cada projeto parecer diferente por obrigação.

O objetivo é fazer cada projeto parecer inevitavelmente adequado à empresa para a qual foi criado.

Diferença visual deve surgir de:

- contexto
- estratégia
- conteúdo
- identidade
- posicionamento
- direção de arte

e não de aleatoriedade.

Um bom resultado deve transmitir a sensação de que as decisões poderiam ter sido diferentes, mas foram escolhidas daquela forma por uma razão.

O site final deve parecer projetado.

Não montado.

Não preenchido.

Não tematizado.
