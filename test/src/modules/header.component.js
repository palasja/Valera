import $ from 'jquery'

$('<h1 />')
  .text('Hello world from JQuery')
  .css({
    textAlign: 'center',
    color: '#2020c1'
  })
  .appendTo($('header'))