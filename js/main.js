$(function () {
  $(".main_slide").slick({
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplay: true,
  });
  $(".m_link li a").on("click", function (e) {
    e.preventDefault();
    var idx = $(this).parent().index();
    $(".main_slide").slick("slickGoTo", idx);
  });

  $("#gnb>ul>li>a").on("click", function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
    //$(this).next().toggle();
  });

  $(".gnb>ul>li>a").on("click", function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
    //$(this).next().toggle();
  });

  $(".second_inner #gnb > ul > li .xi-angle-down-min").on("click", function () {
    //$('.fl ul').toggle();
    //$('.fl ul').slideToggle();
    $(this).toggleClass("on");

    // $(this) : 내가 클릭한 것
  });
  $(".gnb > ul > li .xi-angle-down-min").on("click", function () {
    //$('.fl ul').toggle();
    //$('.fl ul').slideToggle();
    $(this).toggleClass("on");

    // $(this) : 내가 클릭한 것
  });
});
