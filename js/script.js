$(document).ready(function () {
  function search_hide() {
    $(".close, .search, .search-box").toggle();
    if ($(window).width() > 1024) {
      $(".nav_desktop").toggle();
    }
  }
  $(".search, .close").click(function () {
    search_hide();
  });
});
