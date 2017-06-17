
var done = false;



    
$(window).scroll(function() {

  if ($(window).scrollTop() > 80 && $(window).scrollTop() < 599) {
         $(".nawigacja").fadeOut(0);
     console.log("hi");
    } 
    else if ($(window).scrollTop() < 80 ) {
    
        $(".nawigacja").fadeIn(500);
       $(".nawigacja").css('position', 'static')
        
   } 
   //ss
    else if ($(window).scrollTop() > 600 ) {
         
   // }
       $(".nawigacja").fadeIn(500);
       $(".nawigacja").css('position','fixed');
       
   }

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