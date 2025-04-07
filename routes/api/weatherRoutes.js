const express = require('express');
const weatherController = require('../../controllers/weatherController.js');

const router = express.Router();

router.get('/weather/:city', weatherController.cityWeather);


module.exports = router;



