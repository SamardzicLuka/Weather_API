const express = require('express');
const {connectRedis, client} = require('./config/redisClient.js');
const rateLimit = require('express-rate-limit');
const {urlencoded, json} = require('body-parser');
const weatherRoutes = require('./routes/api/weatherRoutes.js');

const app = express();

app.use(json());
app.use(urlencoded({extended: false}));

const limiter = rateLimit({
    
});

app.use(limiter);
app.use('/api', weatherRoutes);


app.use()

module.exports = app;


