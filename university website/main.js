(function () {
  "use strict";

  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 300
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }

  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);
})();

const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

function mobileNavToogle() {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  mobileNavToggleBtn.classList.toggle('bi-list');
  mobileNavToggleBtn.classList.toggle('bi-x');
}
mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll('#navmenu a').forEach(navmenu => {
  navmenu.addEventListener('click', () => {
    if (document.querySelector('.mobile-nav-active')) {
      mobileNavToogle();
    }
  });

});

/**
 * Toggle mobile nav dropdowns
 */
document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
  navmenu.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('active');
    this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  });
});

$(document).ready(() => {
  $("#page2").hide();
  $("#all-btn").click(() => {
    $(".course-card").show();
    $(".filter-course-btn").removeClass("active");
    $("#all-btn").addClass("active");
  });

  $("#ss-btn").click(() => {
    $(".course-card").show();
    $(".course-card").not(".social-science").hide();
    $(".filter-course-btn").removeClass("active");
    $("#ss-btn").addClass("active");
  });

  $("#business-btn").click(() => {
    $(".course-card").show();
    $(".course-card").not(".business").hide();
    $(".filter-course-btn").removeClass("active");
    $("#business-btn").addClass("active");
  });

  $("#science-btn").click(() => {
    $(".course-card").show();
    $(".course-card").not(".science").hide();
    $(".filter-course-btn").removeClass("active");
    $("#science-btn").addClass("active");
  });

  $("#language-btn").click(() => {
    $(".course-card").show();
    $(".course-card").not(".language").hide();
    $(".filter-course-btn").removeClass("active");
    $("#language-btn").addClass("active");
  });

  $("#art-btn").click(() => {
    $(".course-card").show();
    $(".course-card").not(".art").hide();
    $(".filter-course-btn").removeClass("active");
    $("#art-btn").addClass("active");
  });

  $("#eng-btn").click(() => {
    $(".course-card").show();
    $(".course-card").not(".engineering").hide();
    $(".filter-course-btn").removeClass("active");
    $("#eng-btn").addClass("active");
  });

  $(window).scroll(() => {
    if ($(window).scrollTop() > 100) {
      $(".header").addClass("scrolled");
      // $(".navmenu a").addClass("color", "black")
    } else {
      $("header").removeClass("scrolled");
      // $("#navmenu a").removeClass("color", "white")
    }
  });

  $(".gallery-img img").click(function() {
    $(".modal").fadeIn();
    $(".modal-content").attr("src", $(this).attr("src"));
    $("body").addClass("modal-open");
});

$(".close").click(function() {
    $(".modal").fadeOut();
    $("body").removeClass("modal-open");
});


  // $(".gallery-img img").mouseenter(() => {
  //   $(".gallery-img img").addClass("zoom")
  // });

  // $(".gallery-img img").mouseout(() => {
  //   $(".gallery-img img").removeClass("zoom")
  // });
});

// var modal = document.getElementById("myModal");
// var img = document.querySelectorAll(".gallery-img img");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
  // modal.style.display = "block";
  // modalImg.src = this.src;
  // captionText.innerHTML = this.alt;
// }


