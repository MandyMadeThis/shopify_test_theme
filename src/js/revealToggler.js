/* global $ */

function revealToggler () {
  var toggler = $('.revealToggle-toggle')
  var parent = toggler.parent()
  var hider = $('.revealToggle-hide')

  toggler.on('click', function () {
    parent.toggleClass('revealToggle--revealed')
    hider.slideToggle()
  })
}

module.exports = revealToggler
