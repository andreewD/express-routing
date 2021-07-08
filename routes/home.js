const express = require('express');
const { route } = require('.');
const Route = express.Router();
const IndexController = require('../controllers/indexController');
const Auth = require('../middlewares/Auth');



Route.use(Auth.validate);

Route.get('/home',IndexController.home);

module.exports=Route;