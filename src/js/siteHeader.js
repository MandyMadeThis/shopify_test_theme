/* global $ */

function siteHeader () {
  initHamburger()
  initSearch()
}

function initHamburger () {
  $('.siteHeader-hamburger').on('click', function () {
    $('.siteHeader').toggleClass('siteHeader--navVisible')
    if ($('.siteHeader').hasClass('siteHeader--navVisible')) {
      openHamburgerMenu()
    } else {
      closeHamburgerMenu()
    }
  })
}

function closeHamburgerMenu () {
  $('.siteHeader-nav').css('height', 0)
}

function openHamburgerMenu () {
  var mainHeight = $('.siteHeader-main').outerHeight()
  var searchBarHeight = $('.siteHeader-searchBar').outerHeight()
  var offsetTop = mainHeight + searchBarHeight
  $('.siteHeader-nav')
    .css('height', $(window).height() - offsetTop)
    .css('top', offsetTop)
}

function initSearch () {
  clickOffSearchToDismiss() // clicking anywhere off of the search bar should dismiss it
  toggleSearch()
}

function clickOffSearchToDismiss () {
  $(document).click(function (event) {
    if (!$(event.target).closest('.siteHeader').length) {
      if ($('.siteHeader-searchBar').is(':visible')) {
        $('.siteHeader-searchBar').slideUp()
      }
    }
  })
}

function toggleSearch () {
  $('.siteHeader-searchToggle').on('click', function () {
    $('.siteHeader-searchBar').slideToggle()
  })
}

module.exports = siteHeader
