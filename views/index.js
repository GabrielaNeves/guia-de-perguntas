const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//estou dizendo para o express usar o ejs como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false})); //esse comando decodifica os dados enviados pelo form
app.use(bodyParser.json());

app.get('/',(req, res) => {
  res.render('index');
});

app.get('/perguntar',(req, res) => {
  res.render('perguntar');
});
//post para receber dados de formularios e é mais seguro q get
app.post('/salvarpergunta',(req, res) => {
  var titulo = req.body.titulo; //estou armazenando as informacoes do form numa variavel
  var descricao = req.body.descricao;
  res.send('Formulário recebido! titulo ' + titulo + ' ' + 'descricao ' + descricao)
});

app.listen(8080, ()=>{console.log('App rodando!');});