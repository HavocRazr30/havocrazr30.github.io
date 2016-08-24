$(document).ready(function(){
  $('button').click(function(){
  $('img').toggle(2000);
  });
  $('h1').fadeIn(5000);
  $('p').fadeIn(2000);
  
  $('header').click(function(){
    $(this).css('background-image','img url="https://static.pexels.com/photos/69020/pexels-photo-69020-medium.jpeg"', 'green');
  });
  
  $('#fancy-text').click(function(){
    $(this).css({"font-style":"italic","color":"red", "font-size":"30px"});
  });
  
});
