# To play

https://saulocastillos.github...

## 1. Como rodar localmente?

#### Entre no prompt de comando ou terminal e navegue até a pasta desejada.

#### Clone o repositório digitando o seguinte comando:

  git clone "https://github.com/saulocastillos/weather.git"

#### Entre na pasta weather:

  cd weather

#### Edite o arquivo .env na raiz do projeto, adicionando a key gerada em https://api.openweathermap.org

##### O arquivo vai ficar assim

  REACT_APP_KEY=78144cbaa0439c70d1ec3f8f95037759

#### Rode o yarn:

  yarn

#### Pronto, basta executar o seguinte comando:

  yarn start

## 2 .Como fazer o deploy?

#### Depois de seguir o passso 1 (como rodar o projeto localmente), execute o seguinte comando no terminal dentro da pasta raiz do projeto:

  yarn run deploy