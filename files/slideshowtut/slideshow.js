$(document).ready( function() {
  setInterval( "switchSlide()", 6000);
});

function switchSlide() {
  var slide = $('.slideshow .slide:first');
  slide.hide();
  $('.slideshow').append(slide);
  slide.fadeIn('slow');
}