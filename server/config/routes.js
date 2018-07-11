// ===== ROUTES.JS ===========//
// ======date: 03-05-2018 ====//
// 
const path = require('path');
const boiler = require('../controllers/boiler.js');

module.exports = function(app){
    app
    .get('/', (req, res) => {
        boiler.dashboard(req, res)})
    .get('/read/:id', (req, res) => {
        boiler.read(req, res)})
    .post('/new', (req, res) => {
        boiler.new(req, res)})
    .put('/update/:id', (req, res) => {
        boiler.update(req, res)})
    .delete('/destroy', (req, res) => {
        boiler.destroy(req, res)})
    .all("*", (req, res) => { 
        res.sendFile(path.resolve('../boilerplate/public/dist/index.html'))})
}