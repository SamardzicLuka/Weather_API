const express = require('express');
const weatherController = require('../../controllers/weatherController.js');
const cacheService = require('../../services/cacheService.js');

const router = express.Router();

router.get('/weather/:city', cacheService.checkCache, weatherController.cityWeather);
router.get('/weather/:city/:date', cacheService.checkCache, weatherController.cityWeather);

module.exports = router;



