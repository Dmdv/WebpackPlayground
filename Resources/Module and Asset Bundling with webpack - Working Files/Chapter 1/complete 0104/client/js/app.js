var $ = require('jquery');

console.log('hello world');

$(function () {
  $(document.body).append('<div>').text('hello webpack');
});
