const {connectRedis, client} = require('../config/redisClient');

module.exports.checkCache = async (req, res, next) => {
    try{
        const city = req.params.city;
        const cacheResult = await client.get(city);

        if(cacheResult){
            return res.status(200).json(JSON.parse(cacheResult));
        }else{
            next();//cache miss, we will need to send a request to the original API
        }
    }catch(error){
        next(error);
    }
}
