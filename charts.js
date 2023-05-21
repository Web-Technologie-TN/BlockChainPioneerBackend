const request = require("request");

function charts(app) {

    app.get('/assets', function (req, res, next) {
        try {
            request('https://api.coincap.io/v2/assets', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    res.json(JSON.parse(response.body));
                }
            });
        } catch (ex) {
            res.json({});
        }
    });



}

module.exports = charts;