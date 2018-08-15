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
    .get('/apontamentos/hora/usuario/', (req, res) => {
        projeto.obterApontamentoHoraPorUsuario(req, res)})
    .get('/apontamentos/despesa/', (req, res) => {
        projeto.obterApontamentoDespesaPorUsuario(req, res)})
    .put('/apontamento/novo/:id', (req, res) => {
        projeto.apontamentoNovo(req, res)})
    .put('/apontamento/encerrar/:id', (req, res) => {
        projeto.encerrarApontamento(req, res)})
    .get('/apontamentos/hora/:id', (req, res) => {
        projeto.obterApontaHora(req, res)})
    .get('/projeto/:id', (req, res) => {
        projeto.obterProjetoById(req, res)})
    .get('/apontamento/total/:id', (req, res) => {
        projeto.obterApontamentoTotal(req, res)})
    .post('/projeto/novo', (req, res) => {
        projeto.novo(req, res)})
    .put('/projeto/edit/:id', (req, res) => {
        projeto.edit(req, res)})
    .put('/projeto/mudarsituacao/:id', (req, res) => {
        projeto.mudarSituacaoProjeto(req, res)})
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
    .put('/usuario/mudarSituacao/:id', (req, res) => {
        usuario.mudarSituacaoUsuario(req, res)})
    .get('/login/', (req, res) => {
        usuario.login(req, res)})
    .get('/usuarios', (req, res) => {
        usuario.list(req, res)})
    .get('/usuario', (req, res) => {
        usuario.obterUsuario(req, res)})
    .get('/usuario/:id', (req, res) => {
        usuario.obterUsuarioById(req, res)})
    .all("*", (req, res) => { 
        res.sendFile(path.resolve('../torrenegraDeploy/public/dist/index.html'))})
}