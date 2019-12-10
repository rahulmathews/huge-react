import $ from 'jquery'

$(window).on('load', () => {
    console.log('Jquery loaded');
})


/*menu js*/
$(function(e) {
    $($("body").html(), !0, e("#main-menu-caller")).on("click", function() {
        var $menuCaller = e(this); 
        var $mainMenu = e("#main-menu"); 
        $mainMenu.hasClass("activated") ? $mainMenu.find("a").fadeOut("fast", function() {
            $mainMenu.removeClass("activated"), $menuCaller.removeClass("lines-close")
        }) : e("#ui-layer").each(function() {
            $mainMenu.addClass("activated"), $menuCaller.addClass("lines-close"), setTimeout(function() {
                $mainMenu.find("a").each(function(n, i) {
                    e(i).css({
                        display: "inline-block"
                    }).shuffleLetters();
                    var a;
                    e(i).mouseenter(function() {
                        a = setTimeout(function() {
                            e(i).css({
                                height: e(i).height() + "px",
                                display: "inline-block"
                            }), setTimeout(function() {
                                e(i).css({
                                    height: "",
                                    display: "inline-block"
                                })
                            }, 1e3)
                        }, 50)
                    }), e(i).mouseleave(function() {
                        clearTimeout(a)
                    })
                })
            }, 350)
        })
    }), e(".menu").on("click", function(n) {
        n.stopPropagation(), n.preventDefault(), e("#main-menu").removeClass("activated"), e("#main-menu-caller").removeClass("lines-close")
    })
});