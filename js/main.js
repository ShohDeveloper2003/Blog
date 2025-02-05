const responsive = {
    0:{
        items:0
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}
$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    
    /* Click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    //owl-carosek for Blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive
    });

    // click to scroll top
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    })
    
    // Aos Instance
    AOS.init();

});