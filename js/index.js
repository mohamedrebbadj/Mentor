$(function () {
  $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
    if (!$(this).next().hasClass("show")) {
      $(this)
        .parents(".dropdown-menu")
        .first()
        .find(".show")
        .removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass("show");

    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function (e) {
        $(".dropdown__submenu .show").removeClass("show");
      });

    return false;
  });
  let goUp = $(".goUp");
  function showGoUp() {
    if ($(window).scrollTop() > 999) {
        goUp.fadeIn();
    } else {
        goUp.fadeOut();
    }
  }
  goUp.on("click", function () {

  });
  $(window).on("scroll", function () {
    showGoUp();
  });
});
