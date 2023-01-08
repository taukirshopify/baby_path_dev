;(function($) {
    "use strict";
    // niceSelect============
    // $(document).ready(function() {
    //     $('select').niceSelect();
    //       $("html").niceScroll();	
    //       $(".list").niceScroll();
    //       $('.xyz').on('click',function(){
    //           event();
    //       });
    // }); 
    //* Navbar Fixed  
    function navbarFixed(){
        if ( $('.fast-header-area').length ){
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >=90) {
                    $(".fast-header-area").addClass("navbar-fixed").fadeIn();
                } else {
                    $(".fast-header-area").removeClass("navbar-fixed");
                }
            });
        };
    };  
    // Mobile menu/
    $("button#menu-opener").on('click', function () {
        $(".sidebar-menus").addClass("active");
    });
    $(".remove-one").on('click', function () {
        $(".sidebar-menus").removeClass("active");
    });
    $(" button.simple-icon.searchBoxToggler").on('click', function () {
        $(".popup-search-box").addClass("show");
    });

    if($('.mobile-menu li.dropdown ul').length){
        $('.mobile-menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });
    }  
    // Scroll to top
    function scrollToTop() {
        if ($('.back-to-top').length) {  
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    $('.back-to-top').fadeIn();
                } else {
                    $('.back-to-top').fadeOut();
                }
            }); 
            //Click event to scroll to top
            $('.back-to-top').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 100);
                return false;
            });
        }
    } 

    // background-image
    function bgImg() {
        $("[data-background]").each(function() {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    }

    // search btn 
     // Menu Search from 
     $(".js-search-dropdown-toggle").on("click", function () {
        $(".mnmd-search-full").toggleClass("On");
    });
    $("button.searchClose").on("click", function () {
        $("div#popupfooter").removeClass("show");
    });
     
     
    $('.dropdown > .caption').on('click', function() {
        $(this).parent().toggleClass('open');
    });

    // $('.price').attr('data-currency', 'RUB');

    $('.dropdown > .list > .item').on('click', function() {
        $('.dropdown > .list > .item').removeClass('selected');
        $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').html($(this).html());

        if ($(this).data("item") == "RUB") {
            console.log('RUB');
        } else if ($(this).data("item") == "UAH") {
            console.log('UAH');
        } else {
            console.log('USD');
        }
//         if ($(this).data("item") == "RUB") {
//             $('.price').attr('data-currency', 'RUB');
//             $('.currency').text('руб.');

//         } else if ($(this).data("item") == "UAH") {
//             $('.price').attr('data-currency', 'UAH');
//             $('.currency').text('грн.');

//         } else {
//             $('.price').attr('data-currency', 'USD');
//             $('.currency').text('долл.');
//         }
      

      
    });

    $(document).on('keyup', function(evt) {
        if ((evt.keyCode || evt.which) === 27) {
            $('.dropdown').removeClass('open');
        }
    });

    $(document).on('click', function(evt) {
        if ($(evt.target).closest(".dropdown > .caption").length === 0) {
            $('.dropdown').removeClass('open');
        }
    });


    // // sidebar_menu All Page/

    $("section, .remove-one").on('click', function () {
        $(".sidebar-menus, .remove-one").removeClass("active");
    });
    
    if($('.mobile-menu li.dropdown ul').length){
        $('.mobile-menu li.dropdown').append('<div class="dropdown-btn">+</div>');
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
            $(this).toggleClass('d-btn-active');
        });
    } 
    
    // index hero slider
    var splide1 = new Splide( '.index-slider', {
        type  : 'fade', 
        rewind: true,
        arrows: false,
        type: 'loop',
        rewind: true,
        autoplay: true,
    } ); 
    splide1.mount();
    
    // justin-slider tab strat =============
    var splide2 = new Splide( '.product-slider', {
        perPage: 4,
        gap    : '10px',
        type: 'loop', 
        perMove: 1,
        pagination: false, 
        breakpoints: {
          1024: {
            perPage: 3, 
          },
          640: {
            perPage: 2, 
          },
        //   480: {
        //     perPage: 1, 
        //   },
        },
    } );
    splide2.mount(); 

    var splide4 = new Splide( '.product-sliders', {
        perPage: 4,
        gap    : '10px',
        type: 'loop', 
        perMove: 1,
        pagination: false, 
        breakpoints: {
          1024: {
            perPage: 3, 
          },
          640: {
            perPage: 2, 
          },
        //   480: {
        //     perPage: 1, 
        //   },
        },
    } );
    splide4.mount(); 
    // justin-slider tab end ==============

    var splide3 = new Splide( '.trending', {
        perPage: 4,
        gap    : '27px',
        type: 'loop', 
        perMove: 1,
        pagination: false, 
        breakpoints: {
          1024: {
            perPage: 3, 
          },
          640: {
            perPage: 2, 
          },
        //   480: {
        //     perPage: 1, 
        //   },
        },
    } );
    splide3.mount(); 

    // free-shop-slider====
    var splide5 = new Splide( '.free-shop-slider', {
        perPage: 5,
        gap    : '20px',
        type: 'loop',  
        perMove: 1,
        arrows: false, 
        pagination: false, 
        breakpoints: {
          1024: {
            perPage: 4,
            arrows: false, 
          },
          640: {
            perPage: 3,
            arrows: false, 
          },
          570: {
            perPage: 1, 
            arrows: true,
            gap    : '10px', 
          },
        },
    } );
    splide5.mount(); 

  
    // footer collapse======
    $('.cl-item:not(.cl-item-no-sub) > .cl-label-wrap .cl-label-title').click(function() {
        $(this).parent().parent().toggleClass('cl-item-open');
    });
    $('.cl-item:not(.cl-item-no-sub) > .cl-label-wrap .cl-label-icon').click(function() {
        $(this).parent().parent().toggleClass('cl-item-open');
    })
    
    $('.cl-item').each(function(){
        console.log ($(this).find('> ul').length);
        if ( $(this).find('> ul').length === 0 ) {
            $(this).addClass('cl-item-no-sub');
        }
    })

    // home page justin slider tab js======
    $(document).ready(function(){
        $(".nav-tabs button").click(function(){
          $(this).tab('show');
        });
    });

    /*Function Calls*/  
    scrollToTop();
    navbarFixed ();   
    bgImg();  
})(jQuery);