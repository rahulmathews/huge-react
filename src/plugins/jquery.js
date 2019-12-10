import $ from 'jquery'

$(window).on('load', () => {
    console.log('Jquery loaded');
})

/*menu js*/
$(function() {
    $("body, #main-menu-caller").on("click", function() {
        var $menuCaller = $(this); 
        var $mainMenu = $("#main-menu"); 
        $mainMenu.hasClass("activated") ? $mainMenu.find("a").fadeOut("fast", function() {
            $mainMenu.removeClass("activated");
            $menuCaller.removeClass("lines-close");
        }) : $("#ui-layer").each(function() {
            $mainMenu.addClass("activated");
            $menuCaller.addClass("lines-close");
            setTimeout(function() {
                $mainMenu.find("a").each(function(n, i) {
                    $(i).css({
                        display: "inline-block"
                    });
                    var a;
                    $(i).on('mouseenter', (function() {
                        a = setTimeout(function() {
                            $(i).css({
                                height: $(i).height() + "px",
                                display: "inline-block"
                            });
                            setTimeout(function() {
                                $(i).css({
                                    height: "",
                                    display: "inline-block"
                                })
                            }, 1e3)
                        }, 50)
                    }), $(i).on('mouseleave', function() {
                        clearTimeout(a)
                    }))
                })
            }, 350)
        })
    });
    $(".menu").on("click", function(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        $("#main-menu").removeClass("activated");
        $("#main-menu-caller").removeClass("lines-close")
    })
});