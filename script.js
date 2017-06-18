var done = false;




$(window).scroll(function () {


    if ($(window).scrollTop() < 200) {
        $(".nawigacja").finish();
        $(".nawigacja").fadeIn(0);
        $(".nawigacja").css('position', 'relative')

    } else if ($(window).scrollTop() >= 200 && $(window).scrollTop() <= 599) {

        $(".nawigacja").fadeOut(300);

    }
    //ss
    else if ($(window).scrollTop() >= 610) {

        // }



        $(".nawigacja").fadeIn(300);
        $(".nawigacja").css('position', 'fixed');
       $(".nawigacja").css('position', 'fixed');

    }

});

//lel
//lel
var get_navbar_collapse = document.getElementsByClassName('navbar-collapse');

window.addEventListener('resize', function () {
    get_navbar_collapse[0].classList.remove("show");




})

getHamburger = document.getElementsByClassName('hamburger');

getHamburger[0].addEventListener('click', function () {
    this.classList.toggle('is-active');

})

window.addEventListener('resize', function () {

    if (window.innerWidth > 980) {
        getHamburger[0].classList.remove('is-active');
    }

})