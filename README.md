<h1 align="center">
  <br>Microfrontend com CloudFlare worker
</h1>

## Instalação do projeto

> - Clonar o projeto

Na raiz do projeto:

> - execute <b>yarn install</b>
> - execute <b>yarn build:start</b>
> - Verifique se está funcionando o host <b>http://localhost:8082</b> 

Dentro da pasta worker:

> Dado que você está na raiz do projeto, siga: 
> - cd worker
> - execute o comando <b>npx wrangler dev src/index.ts</b> (Será necessário criar uma conta e logar no cloudflare)
> - Após o login, volte ao terminal e pressione a tecla <b>L</b> do teclado
> - Verifique se está funcionando o host <b>http://localhost:5100</b>

Vamos colocar o clientearea para rodar
