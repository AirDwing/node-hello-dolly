'use strict';
var current = 'en';
var motto = require('./lang/en');

module.exports = function(lang) {
    lang = lang || 'en';
    if(lang !== current) {
      try {
        current = 'lang';
        motto = require('./lang/' + lang);
      } catch (e) {
        console.error(e);
      }
    }
    return motto[Math.floor(Math.random() * (motto.length))];
};
