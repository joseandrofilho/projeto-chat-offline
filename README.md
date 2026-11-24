# Chat Offline

Aplicação de chat em uma única tela desenvolvida com React e TypeScript. O usuário pode alternar o remetente entre **Usuário** e **Robô** para montar um histórico visual de conversa diretamente na interface.

O projeto foi criado para funcionar como uma demonstração simples de interface de chat, sem backend ou persistência de dados. Ao recarregar a página, o histórico é reiniciado.

## Funcionalidades

- Envio de mensagens como usuário ou robô.
- Mensagens do usuário alinhadas à direita.
- Mensagens do robô alinhadas à esquerda.
- Alternância do remetente pelo botão no card de input.
- Destaque roxo no card de input quando o modo robô está ativo.
- Textarea multilinha com ajuste automático de altura.
- Até aproximadamente seis linhas visíveis antes de ativar o scroll interno.
- Envio com `Enter` e quebra de linha com `Shift + Enter`.
- Botão de envio desabilitado enquanto o texto estiver vazio.
- Estado vazio enquanto não houver mensagens.
- Auto-scroll automático para a mensagem mais recente.
- Layout responsivo centralizado em uma área de chat de largura máxima `2xl`.
- Histórico mantido apenas na memória durante a sessão da página.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Oxlint

## Estrutura do projeto

```text
src/
├── components/
│   ├── Chat.tsx           # Estado principal e lógica de envio
│   ├── ChatInput.tsx      # Card fixo com textarea e botão de envio
│   ├── MessageList.tsx    # Histórico, estado vazio e auto-scroll
│   ├── MessageBubble.tsx  # Bolha individual da mensagem
│   └── SenderToggle.tsx   # Alternância entre usuário e robô
├── types/
│   └── message.ts         # Tipos Sender e Message
├── App.tsx
├── index.css
└── main.tsx
```

## Modelo de dados

As mensagens são armazenadas em estado do React e possuem o formato abaixo:

```ts
type Sender = "user" | "robot";

type Message = {
  id: string;
  text: string;
  sender: Sender;
};
```

Os identificadores são gerados com `crypto.randomUUID()`. Não há uso de `localStorage`, banco de dados ou API.

## Como executar

### Pré-requisitos

- Node.js
- npm

### Instalação

Na raiz do projeto, instale as dependências:

```bash
npm install
```

### Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação.

### Build de produção

```bash
npm run build
```

Os arquivos compilados serão gerados no diretório `dist`.

### Preview da build

```bash
npm run preview
```

### Verificação de código

Execute o lint configurado com Oxlint:

```bash
npm run lint
```

## Uso

1. Digite uma mensagem no campo inferior.
2. Clique em **Enviar** ou pressione `Enter`.
3. Use `Shift + Enter` para inserir uma quebra de linha.
4. Clique no botão **Usuário** para alternar para **Robô**.
5. Envie novas mensagens para visualizar os alinhamentos de remetente.

As mensagens já enviadas não são alteradas ao trocar o remetente.
