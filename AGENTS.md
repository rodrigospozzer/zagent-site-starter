# Z-Agent — Regras do Projeto

## 1. Papel

Aja como um Engenheiro Frontend Sênior.

Desenvolva landing pages premium, profissionais e prontas para publicação.

## 2. Stack

- Next.js
- App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI
- lucide-react

## 3. Regras de Layout

### Hero / Primeira Dobra

O conteúdo principal deve ter espaço suficiente abaixo do header.

Use padding superior generoso quando necessário.

O Hero deve priorizar:

- hierarquia visual clara
- boa distribuição de espaço
- alinhamento consistente
- responsividade

Sempre que apropriado, utilizar:

`min-h-[80vh]`

com centralização vertical.

### Cards

O container do grid deve utilizar:

`items-stretch`

Cada card deve utilizar:

`h-full flex flex-col`

Botões ou elementos de rodapé dentro de cards devem utilizar:

`mt-auto`

### Menu Mobile

O overlay do menu mobile deve utilizar:

`fixed inset-0 z-[9999] w-screen h-screen`

Não utilizar `overflow-hidden` em `<main>` ou wrappers globais de layout.

### Espaçamento

As seções devem possuir espaçamento vertical generoso.

Como referência:

`py-16 md:py-24`

Evitar páginas visualmente comprimidas.

## 4. Assets

Utilizar os arquivos existentes na pasta `public`.

Arquivos principais:

- `/logo.png`
- `/favicon.png`

Não substituir assets fornecidos pelo cliente sem necessidade.

## 5. Favicon

O Next.js prioriza a hierarquia da pasta `app`.

Caso exista um favicon padrão em:

`src/app/favicon.ico`

ele deve ser removido para evitar conflito com o favicon fornecido.

O metadata deve configurar:

```ts
icons: {
  icon: "/favicon.png",
  shortcut: "/favicon.png",
  apple: "/favicon.png",
}

## 6. Open Graph

Configurar Open Graph e Twitter no metadata.

As imagens devem apontar para um asset real existente no projeto.

## 7. Estrutura de Página

Quando o briefing solicitar uma landing page completa, considerar a seguinte estrutura:

Header
Hero
Sobre
Serviços
Passo a passo
Prova social
Localização
FAQ
Rodapé
Interface global

O conteúdo deve ser baseado nos materiais fornecidos pelo cliente.

## 8. WhatsApp

Quando houver CTA de WhatsApp, utilizar as informações de contato fornecidas para o cliente.

Também pode existir botão flutuante de WhatsApp com z-index elevado.
## 9. Créditos

O crédito da Z-Agent deve permanecer conforme definido pela configuração do projeto.

Não modificar o link de crédito sem solicitação explícita.

## 10. Build

Priorizar builds estáveis e simples.

Evitar configurações desnecessariamente complexas.

Não criar regras de PostCSS que exijam instalação manual de dependências adicionais.

## 11. Imports

Não deixar imports órfãos.

Toda variável, componente, função ou ícone importado deve ser utilizado.

## 12. JSX

Quando necessário, escapar caracteres especiais em textos JSX utilizando:

&apos;

ou

&quot;

## 13. Imagens

Quando utilizar a tag HTML <img> em vez de next/image, adicionar antes da tag:

/* eslint-disable-next-line @next/next/no-img-element */

## 14. Qualidade

Priorizar:

responsividade
consistência visual
hierarquia tipográfica
espaçamento
acessibilidade
estabilidade do build
qualidade de código