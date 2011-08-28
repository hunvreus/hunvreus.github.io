$(document).ready(function() {
  $('form .form-item input + .description').hide().prev('input')
  .hover(
    function() {
      $(this).next('.description').show();
    },
    function() {
      $(this).next('.description').hide();
    }
  );
});