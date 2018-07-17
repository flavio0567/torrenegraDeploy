// ===== ROUTES.JS ===========//
// ======date: 03-05-2018 ====//
// 
const path = require('path');
const projeto = require('../controllers/projeto.ctrl.js');
const cliente = require('../controllers/cliente.ctrl.js');

module.exports = function(app){
    app
    .get('/projetos', (req, res) => {
        projeto.list(req, res)})
    .get('/apontamento/list', (req, res) => {
        projeto.apontamentoList(req, res)})
    .put('/apontamento/novo', (req, res) => {
        projeto.apontamentoNovo(req, res)})
    .get('/projeto/:id', (req, res) => {
        projeto.obterProjetoById(req, res)})
    .post('/projeto/novo', (req, res) => {
        projeto.novo(req, res)})
    .put('/projeto/edit/:id', (req, res) => {
        projeto.edit(req, res)})
    .put('/projeto/encerrar/:id', (req, res) => {
        projeto.encerrar(req, res)})
    .get('/clientes', (req, res) => {
        cliente.list(req, res)})
    .post('/cliente/novo', (req, res) => {
        cliente.novo(req, res)})
    .all("*", (req, res) => { 
        res.sendFile(path.resolve('../torrenegraDeploy/public/dist/index.html'))})
}