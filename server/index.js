//COMMON JS MODULE
const express = require('express');
//APP sets up config
const app = express();

//ROUTE HANDLER
/*
app: registers this route handler
get: watch for incoming requests with this method
    get, post, put, delete, patch
/: watch for requests trying to access '/'
req: obj representing incoming request
res: obj representing outgoing request
res.send: send back some JSON 
*/
app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

//
const PORT = process.env.PORT || 5000;
//instructs express to tell Node to listen for traffic on port 5000
app.listen(PORT);