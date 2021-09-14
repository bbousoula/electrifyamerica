$(document).ready(function () {
  $(".search").click(function () {
    $(".search-box").toggle();
    $(".nav_desktop").toggle();

    $(".nav_desktop").hide();

    if ($(window).width() > 1024) {
      $(".nav_desktop").toggle();
    }
  });
});
