// ===== ROUTES.JS ===========//
// ======date: 03-05-2018 ====//
// 
const path = require('path');
const projeto = require('../controllers/projeto.ctrl.js');
const cliente = require('../controllers/cliente.ctrl.js');
const usuario = require('../controllers/usuario.ctrl.js');

module.exports = function(app){
    app

    .get('/projetos', (req, res) => {
        projeto.list(req, res)})
    .get('/apontamentos/hora/', (req, res) => {
        projeto.apontamentosHora(req, res)})
    .get('/apontamentos/despesa/', (req, res) => {
        projeto.apontamentosDespesa(req, res)})
    .put('/apontamento/novo/:id', (req, res) => {
        projeto.apontamentoNovo(req, res)})
    .put('/apontamento/encerrar/:id', (req, res) => {
        projeto.encerrarApontamento(req, res)})
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
    .get('/cliente/:id', (req, res) => {
        cliente.obterClienteById(req, res)})
    .post('/cliente/novo', (req, res) => {
        cliente.novo(req, res)})
    .put('/cliente/edit/:id', (req, res) => {
        cliente.edit(req, res)})
    .delete('/cliente/excluir/:id', (req, res) => {
        cliente.destroy(req, res)})
    .post('/usuario/novo', (req, res) => {
        usuario.novo(req, res)})
    .put('/usuario/edit/:id', (req, res) => {
        usuario.edit(req, res)})
    .get('/login/', (req, res) => {
        usuario.login(req, res)})
    .get('/usuarios', (req, res) => {
        usuario.list(req, res)})
    .get('/usuario/:id', (req, res) => {
        usuario.obterUsuarioById(req, res)})
    .all("*", (req, res) => { 
        res.sendFile(path.resolve('../torrenegraDeploy/public/dist/index.html'))})
}