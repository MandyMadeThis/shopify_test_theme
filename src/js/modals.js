/* global $ */

var FADE_SPEED = 200
var ESC_KEYCODE = 27

function modals () {
  // open modal when trigger is clicked
  $('.modal-trigger').on('click', function () {
    var modal = $(this).closest('.modal')
    openModal(modal)
  })

  // close modal when "Close" is clicked
  $('.modal-close').on('click', function () {
    var modal = $(this).closest('.modal')
    closeModal(modal)
  })

  // close modal when overlay is clicked
  $('.modal-overlay').on('click', function (event) {
    if (event.target === this) {
      var modal = $(this).closest('.modal')
      closeModal(modal)
    }
  })

  // close modal when ESC key is pressed
  $(document).on('keyup', function (event) {
    if (event.keyCode === ESC_KEYCODE) {
      var modal = $('.modal--active').closest('.modal')
      closeModal(modal)
    }
  })
}

function openModal (modal) {
  modal.addClass('modal--active')
  modal.find('.modal-overlay').fadeIn(FADE_SPEED)
  $('body').addClass('u-freezeScroll')
}

function closeModal (modal) {
  modal.removeClass('modal--active')
  modal.find('.modal-overlay').fadeOut(FADE_SPEED)
  $('body').removeClass('u-freezeScroll')
}

module.exports = modals
