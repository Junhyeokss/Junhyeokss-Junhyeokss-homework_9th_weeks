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
});
