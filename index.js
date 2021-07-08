const express = require('express');
const app = express();
const indexRoute = require('./routes');
const homeRoute=require('./routes/home')
app.use(indexRoute);
app.use(homeRoute);

app.listen(3000);