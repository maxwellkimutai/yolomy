$(window).scroll(function() {
  if ($(document).scrollTop() > 860) {
    $('nav').removeClass('bg-transparent');
  } else {
    $('nav').addClass('bg-transparent');
  }
});
