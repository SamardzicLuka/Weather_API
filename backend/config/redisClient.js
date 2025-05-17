const redis = require('redis');

const client = redis.createClient();

client.on('error', err => console.log("Redis client error", err));

async function connectRedis(){
    await client.connect();
}

module.exports = {connectRedis, client};


