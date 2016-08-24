$(document).ready(function(){
  $('button').click(function(){
  $('img').toggle(2000);
  });
  $('h1').fadeIn(5000);
  $('p').fadeIn(2000);
  
  $('header').click(function(){
    $('header').css('background-color', 'green');
  });
  
  $('#fancy-text').click(function(){
    $(this).css({"font-style":"italic","color":"red", "font-size":"30px"});
  });
  
});
