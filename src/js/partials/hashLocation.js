/* global $ , location */
$(document).ready(function () {
  hashLocation()
  $(window).on('hashchange', function () {
    hashLocation()
  })
})

function hashLocation () {
  const navbarHeight = $('#HeaderNavigation').height()
  // Select all links with hashes
  // Remove links that don't actually link to anything
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="collapse"]').not('[data-toggle="tab"]').click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      // Figure out element to scroll to
      let target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault()
        $('html, body').animate({
          scrollTop: target.offset().top - navbarHeight - parseFloat($('body').css('padding-top'))
        }, 1000)
      }
    }
  })
}
