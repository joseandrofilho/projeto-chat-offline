# Projeto: chat offline

Projeto de uma janela unica de chat em que eu consigo enviar mensagens como usuario e como robô (atraves de um toggle no input de mensagem)

## Aspectos tecnicos

Projeto feito em Vite + React + Typescript + Tailwind
todos os types salvos na pasta src/types (usando type e nao interface)
todos os componentes salvo na pasta src/components
O historico do chat deve estar em um state sem persistencia

## Aspectos Visuais

A tela vai ter um fundo marrom claro

todo o chat(incluindo historico de mensagens e input) terao uma largura maxima (2xl) , centralizado, em tela maior

O input será em um card com fundo branco e altura ajustada conforme a mensagem.

o card ficara no canto inferior o tempo inteiro

Dentro do card do input , do lado direito:

- Botao de enviar , que fica desabilitado quando nao tiver mensagem digitada.

Dentro do card do input , do lado esquerdo:

- Um botao que servirá como toggle para marcar se a mensagem enviada será via usuario ( e fica do lado direito do historico) ou robô ( e fica do lardo esquerdo do historico)
  - quando o toggle estiver ativado (robo) o card do input tera uma borda roxa, indicando visualmente que a mensagem enviada sera enviada como robo e nao usuario.
