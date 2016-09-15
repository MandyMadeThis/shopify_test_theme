/* global $ */

function sliders () {
  initStandard()
  initPadded()
  initAlternate()
}

function initStandard () {
  $('.standardSlider:not(.standardSlider--padded)').slick({
    dots: true
  })
}

function initPadded () {
  $('.standardSlider--padded').slick({
    dots: true,
    centerMode: true,
    centerPadding: '100px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false
        }
      }
    ]
  })
}

function initAlternate () {
  $('.alternateSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
}

module.exports = sliders
