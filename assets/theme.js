;(function($) {
    "use strict";
    // niceSelect============

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

        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {

        

            //  if ( $('.mobile-menu li.dropdown ul').css("display") === "block")
            //     {
            //         $('.mobile-menu  ul li ul').slideUp();
            //     }

            $(this).prev('ul').slideToggle(500);
            $(this).toggleClass("minous");
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
    };




    // index hero slider


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
    
    // if($('.mobile-menu li.dropdown ul').length){
    //     $('.mobile-menu li.dropdown').append('<div class="dropdown-btn">+</div>');
    //     $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
    //         $(this).prev('ul').slideToggle(500);
    //         $(this).toggleClass('d-btn-active');
    //     });
    // };
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



(function () {
    "use strict";
    var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
        return function (arg) {
        if (this.length > 1) {
            this.each(function () {
            var $this = $(this);

            if (!$this.data(ident)) {
                $this.data(ident, func($this, arg));
            }
            });

            return this;
        } else if (this.length === 1) {
            if (!this.data(ident)) {
            this.data(ident, func(this, arg));
            }

            return this.data(ident);
        }
        };
    });
    })();

    (function () {
    "use strict";
    function Guantity($root) {
        const element = $root;
        const quantity = $root.first("data-quantity");
        const quantity_target = $root.find("[data-quantity-target]");
        const quantity_minus = $root.find("[data-quantity-minus]");
        const quantity_plus = $root.find("[data-quantity-plus]");
        var quantity_ = quantity_target.val();
        $(quantity_minus).click(function () {
            e.preventDefault();
        quantity_target.val(--quantity_);
        });
        $(quantity_plus).click(function () {
            e.preventDefault();
        quantity_target.val(++quantity_);
        });
    }
    $.fn.Guantity = jQueryPlugin("Guantity", Guantity);
    $("[data-quantity]").Guantity();
    })();

    // sidebar_menu All Page/
    $(".sidebar-card").on('click', function () {
        $(".main-card-area").addClass("active");
    });
    $("#cartDrawyerOpener").on('click', function () {
        $('.main-card-area').addClass('active');
    });
    $(".main-card-remove").on('click', function () {
        $(".main-card-area").removeClass("active");
    });

      $('.add_to_cart_form').on('submit', function(e){
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: '/cart/add.js',
          dataType: 'json',
          data: {
            quantity: 1,
            id: $(this).find('.addcart__buttonwrap').data("id")
          },
          success: function(data) {
            $('.main-card-area').addClass('active');
            get_cart_details();
          },
          error: function(data) {
            console.log("No data is found");
         }
        });
      });
    
    
      function get_cart_details() {
        fetch("/?section_id=cart-drawyer").then((response) => response.text() ).then((cartData) => {
          var cart_html = $(cartData);
          var cart_items = $(".product_items_subwrapper", cart_html);
          var cart_count = $(".cart-drawer__count", cart_html);
          var cart_subtotal = $(".cart-drawer__total-amount", cart_html);
          // var cartData2 = JSON.parse(cart_items); 
          $(".cart-drawer__content").replaceWith(cart_items);
          $('.cart-drawer__count').replaceWith(cart_count);
          $('.cart-drawer__total-amount').replaceWith(cart_subtotal);
        });
      };



