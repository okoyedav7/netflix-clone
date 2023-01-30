const icon = $(".fa-solid");

function check(x) {
  if (!icon[x].classList.contains("fa-x")) {
    icon[x].classList.remove("fa-plus");
    icon[x].classList.add("fa-x");
  } else if (!icon[x].classList.contains("fa-plus")) {
    icon[x].classList.remove("fa-x");
    icon[x].classList.add("fa-plus");
  }
}

$(".btn:eq(0)").click(function () {
  $(".answers:gt(0)").slideUp("slow");
  $(".fa-solid:gt(0)").removeClass("fa-x").addClass("fa-plus");
  $(".answers:eq(0)").slideToggle("slow");
  check(0);
});

$(".btn:eq(1)").click(function () {
  $(".answers:gt(1), .answers:lt(1)").slideUp("slow");
  $(".fa-solid:gt(1), .fa-solid:lt(1)").removeClass("fa-x").addClass("fa-plus");
  $(".answers:eq(1)").slideToggle("slow");
  check(1);
});

$(".btn:eq(2)").click(function () {
  $(".answers:gt(2), .answers:lt(2)").slideUp("slow");
  $(".fa-solid:gt(2), .fa-solid:lt(2)").removeClass("fa-x").addClass("fa-plus");
  $(".answers:eq(2)").slideToggle("slow");
  check(2);
});

$(".btn:eq(3)").click(function () {
  $(".answers:gt(3), .answers:lt(3)").slideUp("slow");
  $(".fa-solid:gt(3), .fa-solid:lt(3)").removeClass("fa-x").addClass("fa-plus");
  $(".answers:eq(3)").slideToggle("slow");
  check(3);
});

$(".btn:eq(4)").click(function () {
  $(".answers:gt(4), .answers:lt(4)").slideUp("slow");
  $(".fa-solid:gt(4), .fa-solid:lt(4)").removeClass("fa-x").addClass("fa-plus");
  $(".answers:eq(4)").slideToggle("slow");
  check(4);
});

$(".btn:eq(5)").click(function () {
  $(".answers:gt(5), .answers:lt(5)").slideUp("slow");
  $(".fa-solid:gt(5), .fa-solid:lt(5)").removeClass("fa-x").addClass("fa-plus");
  $(".answers:eq(5)").slideToggle("slow");
  check(5);
});
