# Calculadora WEB

##### Calculadora com operações de soma, subtração, divisão, multiplicação, raiz quadrada, potência e porcentagem

## Explicação do ambiente

### Dentro da pasta "PROJECT" temos 5 pastas e 2 arquivos:

- CSS => Contém os arquivos .css utilizados no projeto.
- HTML => Contém o arquivo .html utilizado no projeto.
- scripts => Contém os arquivos .js utilizado no projeto.
- tests => Contém o arquivo com os testes para as operações da calculadora.
- package.json => Configuração do projeto em geral.
- package-lock.json => Também para configuração do projeto em geral.

## Como utilizar a calculadora

### 1º - Após ter extraído a pasta do projeto, abra a pasta "HTML".

### 2º - Abra o arquivo "calculator.html" no seu navegador.

### 3º - Pronto! A calculadora já está pronta para o uso.

## Informações sobre a calculadora

- Possui uma janela de ajuda, basta clicar no botão com um ponto de interrogação
- Digite o número desejado, logo em seguida a operação e, se preciso o segundo número
- Caso queira um número negativo basta clicar no botão de menos e aí digitar o número
- Para limpar o visor, basta clicar no botão vermelho, no lado esquerdo
- Para porcentagem deve primeiro digitar o número que se refere à porcentagem e depois o valor.
- No botão ao lado do botão de ajuda, você pode acessar a última operação feita - E clicando no botão azul "adicionar" o resultado é colocado no visor
- Para números decimais, basta clicar no botão de ponto.

## Como rodar os testes

- Os testes foram construídos com jest
- Qualquer dúvida pode ser tirada na documentação: https://jestjs.io/
- Devido ao um conflito entre o jest e o require, os testes foram colocados
  em uma pasta separada("tests"), com copias dos arquivos javascript.
