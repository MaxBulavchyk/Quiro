$('.owl-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10
});

function navToggle() {
    var navToggleNav = document.getElementById("nav");
    navToggleNav.classList.toggle("_active");
    var html = document.getElementById("html");
    html.classList.toggle("_overflow");
    var body = document.getElementById("body");
    body.classList.toggle("_overflow");
  }
  