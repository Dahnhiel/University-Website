
(function() {
  "use strict";


  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }

  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);
})();


$(document).ready(() => {
  $("#page2").hide();
  $("#all-btn").click(() => {
    $(".course-card").show();
    $(".filter-course-btn").removeClass("active");
    $("#all-btn").addClass("active");
  })

  $("#ss-btn").click(() => {
    $(".course-card").show();
    $(".course-card").not(".social-science").hide();
    $(".filter-course-btn").removeClass("active");
    $("#ss-btn").addClass("active");
  })

  $("#business-btn").click(() => {
    $(".course-card").show();
    $(".course-card").not(".business").hide();
    $(".filter-course-btn").removeClass("active");
    $("#business-btn").addClass("active");
  })

  $("#science-btn").click(() => {
    $(".course-card").show();
    $(".course-card").not(".science").hide();
    $(".filter-course-btn").removeClass("active");
    $("#science-btn").addClass("active");
  })

  $("#language-btn").click(() => {
    $(".course-card").show();
    $(".course-card").not(".language").hide();
    $(".filter-course-btn").removeClass("active");
    $("#language-btn").addClass("active");
  })

  $("#art-btn").click(() => {
    $(".course-card").show();
    $(".course-card").not(".art").hide();
    $(".filter-course-btn").removeClass("active");
    $("#art-btn").addClass("active");
  })

  $("#eng-btn").click(() => {
    $(".course-card").show();
    $(".course-card").not(".engineering").hide();
    $(".filter-course-btn").removeClass("active");
    $("#eng-btn").addClass("active");
  })

  $(window).scroll(() => {
    if ($(window).scrollTop() > 100) {
      $(".header").addClass("scrolled") && $("    ")
    } else {
      $("header").removeClass("scrolled")
    }
    
  })

})