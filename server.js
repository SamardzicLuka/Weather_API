const http = require('http');
const app = require('./app.js');
const dotenv = require('dotenv');

dotenv.config();

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server was successfully started at http://localhost:${PORT}`);
});


