var $ = require('jquery');

console.log('hello world');

$(function () {
  $('#root').append('<div>').text('hello world');
  console.log('page ready');
});
