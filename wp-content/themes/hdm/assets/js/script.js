// Mobile Menu

// var jQuery = jQuery.noConflict();

AOS.init();

// jQuery.noConflict()(function(jQuery){
jQuery(document).ready(function (){


    jQuery(".MobileMenuIcon ").click(function (){
        jQuery('.menu-\\%d9\\%85\\%d9\\%86\\%d9\\%88-\\%d8\\%a7\\%d8\\%b5\\%d9\\%84\\%db\\%8c-container').toggleClass("active");
    })

    jQuery('.menu-\\%d9\\%85\\%d9\\%86\\%d9\\%88-\\%d8\\%a7\\%d8\\%b5\\%d9\\%84\\%db\\%8c-container').append('<i class="las la-times-circle hide_desktop" id="close_menu" ></i>')

    jQuery('.menu-\\%d9\\%85\\%d9\\%86\\%d9\\%88-\\%d8\\%a7\\%d8\\%b5\\%d9\\%84\\%db\\%8c-container').on("click"," #close_menu",function(){
        jQuery('.menu-\\%d9\\%85\\%d9\\%86\\%d9\\%88-\\%d8\\%a7\\%d8\\%b5\\%d9\\%84\\%db\\%8c-container').removeClass("active");
    })

    jQuery('.MobileMenuIcon').click(function (){
        jQuery('.mask-menu').addClass('active');
    });

    jQuery('.menu-\\%d9\\%85\\%d9\\%86\\%d9\\%88-\\%d8\\%a7\\%d8\\%b5\\%d9\\%84\\%db\\%8c-container').append('<div class="mask-menu"></div>');

        jQuery('.mask-menu').click(function(){

        jQuery('.menu-\\%d9\\%85\\%d9\\%86\\%d9\\%88-\\%d8\\%a7\\%d8\\%b5\\%d9\\%84\\%db\\%8c-container').removeClass("active");
    });

    jQuery("#HDM_FAQ_Style .elementor-accordion-item").click(function (){
        jQuery("#HDM_FAQ_Style .elementor-accordion-item").each(function (){
            if(jQuery(this).children(".elementor-tab-title").hasClass("elementor-active")){
                jQuery(this).addClass("active");
            }else{
                jQuery(this).removeClass("active");
            }
        })
    })
    var i = 0
    jQuery("#HDM_FAQ_Style .elementor-accordion-item").each(function (){
        i++;
        if(i == 1){
            jQuery(this).addClass("active");
        }

    });

    jQuery('#CarouselTestimonial .elementor-widget-wrap').addClass("owl-carousel");
    jQuery('#CarouselTestimonial .elementor-widget-wrap').addClass("owl-theme");
    jQuery('#CarouselTestimonial .elementor-widget-wrap').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        rtl:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }

    });

    jQuery(".MobileMenuIcon ").click(function (){
        jQuery('.menu-\\%d9\\%85\\%d9\\%86\\%d9\\%88-\\%d8\\%a7\\%d8\\%b5\\%d9\\%84\\%db\\%8c-\\%d8\\%a7\\%d9\\%86\\%da\\%af\\%d9\\%84\\%db\\%8c\\%d8\\%b3\\%db\\%8c-container').toggleClass("active");
    })

    jQuery('.menu-\\%d9\\%85\\%d9\\%86\\%d9\\%88-\\%d8\\%a7\\%d8\\%b5\\%d9\\%84\\%db\\%8c-\\%d8\\%a7\\%d9\\%86\\%da\\%af\\%d9\\%84\\%db\\%8c\\%d8\\%b3\\%db\\%8c-container').append('<i class="las la-times-circle hide_desktop" id="close_menu" ></i>')

    jQuery('.menu-\\%d9\\%85\\%d9\\%86\\%d9\\%88-\\%d8\\%a7\\%d8\\%b5\\%d9\\%84\\%db\\%8c-\\%d8\\%a7\\%d9\\%86\\%da\\%af\\%d9\\%84\\%db\\%8c\\%d8\\%b3\\%db\\%8c-container').on("click"," #close_menu",function(){
        jQuery('.menu-\\%d9\\%85\\%d9\\%86\\%d9\\%88-\\%d8\\%a7\\%d8\\%b5\\%d9\\%84\\%db\\%8c-\\%d8\\%a7\\%d9\\%86\\%da\\%af\\%d9\\%84\\%db\\%8c\\%d8\\%b3\\%db\\%8c-container').removeClass("active");
    })

    jQuery('.MobileMenuIcon').click(function (){
        jQuery('.mask-menu').addClass('active');
    });

    jQuery('.menu-\\%d9\\%85\\%d9\\%86\\%d9\\%88-\\%d8\\%a7\\%d8\\%b5\\%d9\\%84\\%db\\%8c-\\%d8\\%a7\\%d9\\%86\\%da\\%af\\%d9\\%84\\%db\\%8c\\%d8\\%b3\\%db\\%8c-container').append('<div class="mask-menu"></div>');

    jQuery('.mask-menu').click(function(){

        jQuery('.menu-\\%d9\\%85\\%d9\\%86\\%d9\\%88-\\%d8\\%a7\\%d8\\%b5\\%d9\\%84\\%db\\%8c-\\%d8\\%a7\\%d9\\%86\\%da\\%af\\%d9\\%84\\%db\\%8c\\%d8\\%b3\\%db\\%8c-container').removeClass("active");
    });
    jQuery("body").on("click", " .elementor-testimonial-content",function (){
        jQuery(this).toggleClass("active");
    })




    var i = 0;
    var b = 0;
    setInterval(function (){
        i++;
        b--;
        jQuery(".CustomerList.c1").css("background-position",i+"px 0");
        jQuery(".CustomerList.c2").css("background-position",b+"px 0");

    },30)






    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 500) {
            jQuery(".clearHeader").addClass("darkHeader");
        }
    });

    jQuery(".styles_button_interactive__GhoXu").mouseenter(function (){
    //     jQuery(".v-split-text__word span.v-split-text__letter").each(function (){
    //         console.log("1");
    //         // jQuery(this).animate({
    //         //     transform : 'translateX(50px)',
    //         // });
    //         // jQuery(this).css("transform",'translateX(50px)');
    //
    //
    //
    //
    //
    //     });
    //
    // });
    });
    jQuery(".styles_button_interactive__GhoXu").mouseenter(function (){

        var i = 0 ;
        var b = 100;
        var c = 0;
        setInterval(function(){
            if(i < 50){
                i++;
                jQuery("body .v-split-text__word span.v-split-text__letter").css('transform','translateX('+ i +'px)');
            }
            if(b > 0){
                b = b - 2;
                jQuery("body .v-split-text__word span.v-split-text__letter").css('--l', b + '%');
            }
            if(c < 50){
                c++;
                var d = c / 50;
                jQuery(".styles_bg__G12Js").css("transform" , 'scale('+ d +',1)');
            }

        },5);

    });

    jQuery(".styles_button_interactive__GhoXu").mouseleave(function (){
        var i = 50 ;
        var b = 0;
        var c = 50;


        setInterval(function(){
            if(i > 0){
                i--;
                jQuery("body .v-split-text__word span.v-split-text__letter").css('transform','translateX('+ i +'px)');
            }
            if(b < 100){
                b = b + 2;
                jQuery("body .v-split-text__word span.v-split-text__letter").css('--l', b + '%');
            }
            if(c > 0){
                c--;
                var d = c / 50;
                jQuery(".styles_bg__G12Js").css("transform" , 'scale('+ d +',1)');
            }
        },5);


    });


});


