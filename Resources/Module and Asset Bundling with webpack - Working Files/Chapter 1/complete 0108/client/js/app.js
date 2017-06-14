var $ = require('jquery');

if (__DEV__) console.log('hello world');

$(function () {
  $('#root').append('<div>').text('hello world');
  if (__DEV__) console.log('page ready');
});
