$(document).ready(function(){

    /*------------Sticky Navigation----------------*/
    
        $('.js-section-features').waypoint(function(direction){
            if (direction == "down")
            {
                $('nav').addClass('sticky');
            }
            else
            {
                $('nav').removeClass('sticky');
            }
        },  {
            offset: '60px'
            }
         );
    
    /*---------------Scroll on Buttons----------------*/
    
         $('.js-scroll-to-plan').click(function(){
    
            $('html,body').animate({scrollTop:$('.js-section-plans').offset().top},1000);
    
         });
    
         $('.js-scroll-to-start').click(function(){
    
            $('html,body').animate({scrollTop:$('.js-section-features').offset().top},1000);
    
         });
    
    
    /*---------------Navigation Scroll-----------------*/
    
        $(function(){
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                || location.hostname == this.hostname) {
        
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                   if (target.length) {
                     $('html,body').animate({
                         scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    /*----------------Animation on scrolls----------------*/
    
    $('.js-row').waypoint(function(direction){
        $('.js-row').addClass('animated fadeIn');
    
    },
       {
        offset:'50%'
       }
    );
    
    
    $(".js-works").waypoint(function(direction){
        $(".js-works").addClass("animated fadeInUp");
    
    },{
        offset:"50%"
      }
    );
    
    $(".js-cities").waypoint(function(direction){
        $(".js-cities").addClass("animated fadeInLeft");
    
    },{
        offset:"50%"
      }
    );
    
    $(".js-cities-1").waypoint(function(direction){
        $(".js-cities-1").addClass("animated fadeInRight");
    
    },{
        offset:"50%"
      }
    );
    
    $(".js-plans").waypoint(function(direction){
        $(".js-plans").addClass("animated pulse");
    
    },{
        offset:"50%"
      }
    );

    /*-------------Mobile Nav--------------------*/

$('.js-mobile-nav').click(function(){
    var nav=$('.js-main-nav');
    var icon=$('.js-mobile-nav i');
    
    nav.slideToggle(200);

    if(icon.hasClass('ion-navicon-round'))
    {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    }
    else
    {
        icon.removeClass('ion-close-round');
        icon.addClass('ion-navicon-round');
    }

});
    
    });
    
    
    
    
    
        
    
    
    
    
        