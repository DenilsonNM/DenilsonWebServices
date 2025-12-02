// $(".div_sumary").click(function () {
//   $(this).next("ul").slideToggle();
// });

$(".div_sumary").click(function () {
  const icon = $(this).find("i");
  const content = $(this).next("ul");

  content.slideToggle(400, function () {

    if (content.is(":visible")) {
      icon.removeClass("fa-caret-down").addClass("fa-caret-up");
    } else {
      icon.removeClass("fa-caret-up").addClass("fa-caret-down");
    }
  });
});
