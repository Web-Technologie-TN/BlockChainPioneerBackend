const express = require('express');
const cors = require('cors');
const axios = require("axios");
const request = require('request');

const app = express();

// 👇️ configure CORS
app.use(cors());

app.get('/latestblock', function (req, res, next) {
    try {
        request('https://blockchain.info/latestblock', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(JSON.parse(response.body));
            }
        });
    } catch (ex) {
        res.json({});
    }
});

app.get('/rawblock', function (req, res, next) {
    try {
        request('https://blockchain.info/rawblock/0000000000000000000141f0c6b19625e7610f763a9ed6872b4642581797f040', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(JSON.parse(response.body));
            }
        });
    } catch (ex) {
        res.json({});
    }
});

const PORT = 5000;

app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`);
});