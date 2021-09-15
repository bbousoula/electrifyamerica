$(document).ready(function () {
  function search_hide() {
    $(".search-box").toggle();
    if ($(window).width() > 1024) {
      $(".nav_desktop").toggle();
    }
  }
  $(".search").click(function () {
    $(".close").toggle();
    $(".search").toggle();
    search_hide();
  });
  $(".close").click(function () {
    $(".search").toggle();
    $(".close").toggle();
    search_hide();
  });
});
