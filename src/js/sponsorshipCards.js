/* global $ */

function sponsorshipCards () {
  var sponsorshipCard = $('.sponsorshipCard')
  var selectedClass = 'sponsorshipCard--selected'

  sponsorshipCard.on('click', function () {
    if ($(this).hasClass(selectedClass)) {
      $(this).removeClass(selectedClass)
    } else {
      sponsorshipCard.removeClass(selectedClass)
      $(this).addClass(selectedClass)
    }
  })
}

module.exports = sponsorshipCards
