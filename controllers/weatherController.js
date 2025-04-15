const axios = require('axios');
const dotenv = require('dotenv');
const {connectRedis, client} = require('../config/redisClient');

dotenv.config();

module.exports.cityWeather = async (req, res, next) => {
    try {
        const city = req.params.city;
        const date1 = req.params.date || '';
        if(!city || city.trim() === ''){
            return res.status(404).json({error: "We don't know that city"});
        }
        const requestOptions = {
            method: 'GET',
            url: `${process.env.WEATHER_BASE}${city}/${date1}?api=${process.env.API_KEY}&unitGroup=metric`
        }
        const axResponse = await axios(requestOptions);
        const key = `${city.toLowerCase()}_${date1}`;
        client.set(key, JSON.stringify(axResponse.data), {EX: 43200});
        
        return res.status(200).json({
            source: 'api',
            data: axResponse.data,
        });

    } catch (error) {
        // next(error);
        if(axios.isAxiosError(error)){
            return res.status(502).json({ error: "Failed to fetch weather data." });
        }
    }
}
