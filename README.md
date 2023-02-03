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
> - Execute o comando <b>npx wrangler dev src/index.ts</b> (Será necessário criar uma conta e logar no cloudflare)
> - Após o login, volte ao terminal e pressione a tecla <b>L</b> do teclado
> - Verifique se está funcionando o host <b>http://localhost:5100</b>

Vamos colocar o clientearea para rodar

> - No clientarea, abra o arquivo <b>Makefile</b>
> - Na linha 8, adiciona o parâmetro <b>PUBLIC_URL=http://cliente.whmcs.brasil:5101/</b>, ficará assim:
> ![image](https://user-images.githubusercontent.com/52017795/216627841-fe8752a0-730c-40da-9823-72a9820f92a7.png)
> - Execute o comando <b>Make build-br</b>
> Após o build ser gerado, execute o comando <b>PORT=5101 npx serve -s build</b>
