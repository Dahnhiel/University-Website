$(document).ready(function () {
  $(".btn").click(() => {
    console.log("i was clicked");
  });

  $(".newsImg").mouseenter(() => {
    $(".newsImg").addClass("zoom")
  });

  $(".newsImg").mouseout(() => {
    $(".newsImg").removeClass("zoom")
  });

  $(".recent-btn").click(() => {
    $(".old").hide();
    $(".recent").show();
    // alert("filtered")
    $(".recent-btn").addClass("active")
    $(".all").removeClass("active")

  })

  $(".all").click(() => {
    $(".news-card").show();
    $(".recent").show();
    // alert("filtered")
    $(".all").addClass("active")
    $(".recent-btn").removeClass("active")
  })
});

