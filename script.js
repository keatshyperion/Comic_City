var done = false;



// document.onload = (function(){
//   $(".nawigacja").css('opacity','1');
// })()
$(window).scroll(function () {


    if ($(window).scrollTop() < 200 && $(window).width() >= 980) {
        $(".nawigacja").finish();
        $(".nawigacja").fadeIn(0);
        $(".nawigacja").css('position', 'relative')

    } else if ($(window).scrollTop() >= 200 && $(window).scrollTop() <= 599 && $(window).width() >= 980) {

        $(".nawigacja").fadeOut(300);

    }
    //ss
    else if ($(window).scrollTop() >= 610 && $(window).width() >= 980) {

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

  
        getHamburger[0].classList.remove('is-active');
    

})

var getKadr = document.getElementsByClassName('cHook');
var i = 0;

var do_your_job = setInterval(function(){

if(i == getKadr.length){
    clearInterval(do_your_job);
}

getKadr[i].style.opacity=1;
i++;


},1050)


$(document).ready(function(){
     $('.navbar-toggle').bind( "touchstart", function(e){
         e.preventDefault();
         $('.navbar-collapse').collapse('toggle');
    });
});