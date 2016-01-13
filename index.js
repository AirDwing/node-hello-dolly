'use strict';
var fs = require('fs');

module.exports = function(lang) {
    lang = lang || 'en';
    var path = __dirname + '/lang/' + lang + '.js';
    var exists = fs.existsSync(path);
    var motto = exists ? require('./lang/' + lang) : require('./lang/en');
    return motto[Math.floor(Math.random() * (motto.length))];
};
