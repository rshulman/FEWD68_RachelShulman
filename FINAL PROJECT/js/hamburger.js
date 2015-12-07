
$('.nav-btn').on('click', function() {
  console.log('clicked');
  $('.nav').slideToggle(300);
});


$(window).resize(function(){
  if ( $(window).width() > 980 ){
    $('.nav').show();
  }
  else {
    $('.nav').hide(); 
  }

})