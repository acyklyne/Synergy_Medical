$(function () {
  const $toggle = $('.nav-toggle');
  const $nav = $('.site-nav');

  $toggle.on('click', function () {
    const expanded = $(this).attr('aria-expanded') === 'true';

    $(this).attr('aria-expanded', String(!expanded));
    $nav.toggleClass('is-open');
  });

  $(window).on('resize', function () {
    if (window.innerWidth > 767) {
      $nav.removeClass('is-open');
      $toggle.attr('aria-expanded', 'false');
    }
  });

  $('.nav-list a, .nav-cta').on('click', function () {
    if (window.innerWidth <= 767) {
      $nav.removeClass('is-open');
      $toggle.attr('aria-expanded', 'false');
    }
  });
});