$('.owl-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10
});

function navToggle() {
    var navToggleBtn = document.getElementById("burger");
    var navToggleUl = document.getElementById("nav");
    navToggleBtn.classList.toggle("_active");
    navToggleUl.classList.toggle("_active");
}