const express = require('express');
const cors = require('cors');
const axios = require("axios");
const request = require('request');

const app = express();

// 👇️ configure CORS
app.use(cors());
app.use(express.static('assets/images'));


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

app.get('/rawtx', function (req, res, next) {
    try {
        request('https://blockchain.info/rawtx/8e59ee7cfb325934ec4571f294615b59711e7d22bb1a640ca3d0127063dc50d2', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(JSON.parse(response.body));
            }
        });
    } catch (ex) {
        res.json({});
    }
});

app.get('/block-height', function (req, res, next) {
    try {
        request('https://blockchain.info/block-height/790670?format=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(JSON.parse(response.body));
            }
        });
    } catch (ex) {
        res.json({});
    }
});

app.get('/rawaddr', function (req, res, next) {
    try {
        request('https://blockchain.info/rawaddr/bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(JSON.parse(response.body));
            }
        });
    } catch (ex) {
        res.json({});
    }
});

app.get('/multiaddr', function (req, res, next) {
    try {
        request('https://blockchain.info/multiaddr?active=bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh|bc1pdplftwmmvwd79ex0d5mtzhuumdura7yafcdva5753u94nmuu8heqdgwk6k', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(JSON.parse(response.body));
            }
        });
    } catch (ex) {
        res.json({});
    }
});

app.get('/unspent', function (req, res, next) {
    try {
        request('https://blockchain.info/unspent?active=bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(JSON.parse(response.body));
            }
        });
    } catch (ex) {
        res.json({});
    }
});

app.get('/balance', function (req, res, next) {
    try {
        request('https://blockchain.info/balance?active=bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(JSON.parse(response.body));
            }
        });
    } catch (ex) {
        res.json({});
    }
});

app.get('/unconfirmed-transactions', function (req, res, next) {
    try {
        request('https://blockchain.info/unconfirmed-transactions?format=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(JSON.parse(response.body));
            }
        });
    } catch (ex) {
        res.json({});
    }
});

app.get('/blocks', function (req, res, next) {
    try {
        request('https://blockchain.info/blocks/1684632093461?format=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(JSON.parse(response.body));
            }
        });
    } catch (ex) {
        res.json({});
    }
});

const charts = require('./charts.js');

charts(app);

const PORT = 5000;

app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`);
});