$(function () {

  // Cache elements
  const $toggle = $('.nav-toggle');
  const $nav    = $('.site-nav');
  const $links  = $('.nav-list a, .nav-cta');

  //Hamburger toggle
  $toggle.on('click', function () {
    const isExpanded = $(this).attr('aria-expanded') === 'true';

    $(this).attr('aria-expanded', String(!isExpanded));
    $nav.toggleClass('is-open');
  });

  // Close nav on link click (mobile only)
  $links.on('click', function () {
    if (window.innerWidth <= 1024) {
      $nav.removeClass('is-open');
      $toggle.attr('aria-expanded', 'false');
    }
  });

  // Reset nav on resize past tablet breakpoint
  $(window).on('resize', function () {
    if (window.innerWidth > 1024) {
      $nav.removeClass('is-open');
      $toggle.attr('aria-expanded', 'false');
    }
  });

});