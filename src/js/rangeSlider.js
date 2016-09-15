/* global $ */
var noUiSlider = require('nouislider')

function rangeSlider () {
  $('.rangeSlider').each(function (instance) {
    var slider = $(this)
    var options = {
      min: parseInt(slider.attr('min'), 10) || 0,
      max: parseInt(slider.attr('max'), 10) || 100
    }

    noUiSlider.create(slider[0], {
      start: [options.min, options.max],
      connect: true,
      range: {
        min: options.min,
        max: options.max
      },
      step: 1,
      pips: {
        mode: 'steps',
        density: 2
      }
    })

    slider[0].noUiSlider.on('update', function (values) {
      slider.find('.noUi-handle-lower').text(values[0].split('.')[0])
      slider.find('.noUi-handle-upper').text(values[1].split('.')[0])
    })
  })
}

module.exports = rangeSlider
