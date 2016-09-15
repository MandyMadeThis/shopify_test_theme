/* global $ */

function formInputs () {
  // Add a class to text and email inputs so the label stays where it should when the input has characters in it.
  $('input[type="text"], input[type="email"]').blur(function () {
    $(this).closest().removeClass('js-hasValue')
    if ($(this).val()) {
      $(this).addClass('js-hasValue')
    }
  })

  // Add a class to the checkbox and radio's parent container, so the styles are corrects when the input is :checked
  $('input[type="checkbox"], input[type="radio"]').on('click touchend', function () {
    $(this).closest('.formGroup').find('.js-hasValue').removeClass('js-hasValue')
    if ($(this).is(':checked')) {
      $(this).closest('label').addClass('js-hasValue')
    }
  })
}

module.exports = formInputs
