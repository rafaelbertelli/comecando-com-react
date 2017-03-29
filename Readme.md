Iniciando com React.js
----------------------
[JS do zero](http://jscasts.teachable.com/)
 
 1
 npm init

 2
 npm install --save react react-dom

 3
 npm install --save-dev webpack
 npm install webpack -g

4
npm install --save-dev babel-core babel-loader babel-preset-react

5
criar o index html, colocar uma div com id=app que sera onde renderizarei o App react
referenciar o script src=bundle.js, que é a referência para o bundle que o webpack faz

6
criar o arqiuvo webpack.config.js

7
criar a pasta app e o arquivo App.js dentro dela

8
no webpack.config eu configuro o exports, sendo o entry o local onde ele vai injetar o conteudo do react(que era no id do App.js) e o output é o local do bundle.js gerado pelo webpack.
os loaders que ele faz é uma espécie de verificação onde, neste caso ele esta testando todos os arquivos terminados em js, excluindo a pasta node_modules, fazendo loader do babel com o preset react

9
App.js
importo a lib react e react-dom
peço pro reactdom renderizar algo, que é 2 parametros, sendo o primeiro o JSX, que eh o HTML dentro do JS e o segundo é onde ele vai injetar isso, que era la no index div id=app

9
webpack -w
finalmente consigo rodar o webpack no projeto e vê-lo funcionando.
a flag -w serve para eu nao ter que inicializar o webpack toda vez que eu atualizar o fonte do projeto

10
ao invés de passar o webpack -w no cli, eu adicionei a propriedade watch com o valor true dentro do webpack.config.js

11
instalei o servidor do webpack
npm install webpack-dev-server -g

12 executo o servidor com o cli
webpack-dev-server
