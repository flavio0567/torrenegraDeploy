// ===== ROUTES.JS ===========//
// ======date: 03-05-2018 ====//
// 
const path = require('path');
const projeto = require('../controllers/projeto.ctrl.js');

module.exports = function(app){
    app
    .get('/projetos', (req, res) => {
        projeto.list(req, res)})
    .get('/apontamento/list', (req, res) => {
        projeto.apontamentoList(req, res)})
    .get('/projeto/edit/:id', (req, res) => {
        projeto.edit(req, res)})
    .post('/projeto/novo', (req, res) => {
        projeto.novo(req, res)})
    .put('/projeto/encerrar/:id', (req, res) => {
        projeto.encerrar(req, res)})
    .put('/projeto/edit/:id', (req, res) => {
        projeto.edit(req, res)})
    .delete('/projeto/destroy', (req, res) => {
        projeto.destroy(req, res)})
    .all("*", (req, res) => { 
        res.sendFile(path.resolve('../torrenegraDeploy/public/dist/index.html'))})
}