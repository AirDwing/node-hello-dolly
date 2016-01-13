'use strict';
var hello_dolly = require('../index');

console.log(hello_dolly());//English
console.log(hello_dolly('en'));//English
console.log(hello_dolly('zh-CN'));//Simplified-Chinese
console.log(hello_dolly('test'));//Others Default Language English
