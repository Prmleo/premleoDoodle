const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

//API file for interacting with mongoDB
const api = require('./server/routes/api');

//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Angular src output folder
app.use(express.static(path.join(__dirname, 'dist')));

//API location 
app.use('/api',api);

//send all other requests to the Angular app
app.get('*',(req,res) => {
    res.sendFile(path.join(_dirname,'dist/index.html'));
});

//set port
const port = process.env.PORT || '3005';
app.set('port',port);

const server = http.createServer(app);

server.listen(port,() => {
console.log(`Running on localhost:${port}`)
});
