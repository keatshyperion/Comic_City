
var done = false;


$(window).scroll(function() {
    if ($(window).scrollTop() > 600 && $(window).width() > 980 && done == false) {
        done = true;
        $(".nawigacja").css('position', 'fixed');
        $(".nawigacja").fadeOut(0);
        $(".nawigacja").fadeIn(500);
       
    } else if ($(this).scrollTop() < 600 && done == true) {
        done = false;
        $(".nawigacja").fadeOut(500,
            function() {
                $(".nawigacja").fadeIn(500);
                $(".nawigacja").css('position', 'relative');
            }
        );

        

  





    }
    // else if($(this).scrollTop() == 0){
    //       $(".nawigacja").fadeOut(0,
    //         function() {
    //             $(".nawigacja").fadeIn(0);
    //             $(".nawigacja").css('position', 'relative');
    //         }
    //     );
        
    // }
});


var get_navbar_collapse = document.getElementsByClassName('navbar-collapse');

window.addEventListener('resize',function(){
get_navbar_collapse[0].classList.remove("show");




})

getHamburger = document.getElementsByClassName('hamburger');

getHamburger[0].addEventListener('click',function(){
this.classList.toggle('is-active');

})

window.addEventListener('resize',function(){

if(window.innerWidth > 980){
     getHamburger[0].classList.remove('is-active');
}

})