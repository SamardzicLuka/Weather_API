const {connectRedis, client} = require('../config/redisClient');

module.exports.checkCache = async (req, res, next) => {
    try{
        const city = req.params.city;
        const date1 = req.params.date || ''; // this is the case if we dont specify the 2025-04-19                                          // parameter which is optional

        const cacheResult = await client.get(`${city.toLowerCase()}_${date1}`);

        if(cacheResult){
            return res.status(200).json({
                source: 'cache',
                data: JSON.parse(cacheResult)
            });
        }else{
            next();//cache miss, we will need to send a request to the original API
        }
    }catch(error){
        next(error);
    }
}
