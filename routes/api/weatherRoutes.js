const express = require('express');
const weatherController = require('../../controllers/weatherController.js');
const checkCache = require('../../services/cacheService.js');

const router = express.Router();

router.get('/weather/:city', checkCache, weatherController.cityWeather);


module.exports = router;



