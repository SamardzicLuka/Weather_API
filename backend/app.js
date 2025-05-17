const express = require('express');
const {connectRedis, client} = require('./config/redisClient.js');
const rateLimit = require('express-rate-limit');
const {urlencoded, json} = require('body-parser');
const weatherRoutes = require('./routes/api/weatherRoutes.js');

const app = express();

app.use(json());
app.use(urlencoded({extended: false}));

const limiter = rateLimit({
    windowsMs: 15 * 60 * 1000,
    max: 10,
});

app.use(limiter);
app.use('/api', weatherRoutes);

app.use(function (error, req,res,next){
    const statusCode = error.status || 500;

    res.status(statusCode).json({
        error:{
            message: error.message,
            status: statusCode,
            stack: error.stack,
        },
    });
});

app.use(function (req, res, next){
    const  error = new Error('Zahtev nije podrzan');
    error.status = 405;

    next(error);
});
connectRedis();

module.exports = app;

