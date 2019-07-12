var userData = require ('../data/friends.js');

module.exports = function (app) {

    app.get('/api/users', function (req, res) {
        res.json(userData);
    });

    app.post('/api/survey', function (req, res) {
        console.log("req.body", req.body);
        userData.push(req.body);
        res.json(true);
    });

    app.post('/api/clear', function (req, res) {
        userData.splice(10);
        console.log("cleared user data");
    });

};