$(function() {

    // --------------nav模块
    $('.header-nav li').on('mouseover', function() {

        var bb = $(this).index();
        console.log(bb);
        $('.nav-all div').eq(bb).css({
            'display': 'block',
            'background': '#fff'
        }).siblings().css('display', 'none');
        $('.header-nav span').eq(bb).css({
            'display': 'block',
            'height': '41',
            'border-bottom': '4px solid #f9b949'
        })

    }).on('mouseout', function() {
        $('.nav-all div').stop().hide();
        $('.header-nav span').css('border', '0')

    })

    $('.nav-all div').on('mouseover', function() {
        $(this).stop().show();
    }).on('mouseout', function() {
        $(this).stop().hide();

    })

    //    --------购物车
    $('.icongouwudai').on('click', function() {
        ff();
        $('.header-mask').stop().fadeIn("slow");
        $('.sidebar').stop().animate({
            right: 0
        })

    })

    // 顶部search
    function ff() {
        $('.iconMagnifier').on('click', function() {
            $("body").css("overflow", "hidden");
            $('.header-search').slideDown(200);
            $('body').bind("touchmove", function(e) {
                e.preventDefault();
            })
        })
    }
    ff();

    $('.search-gb').on('click', function() {
        $("body").css("overflow", "auto");

        $('.header-search').fadeOut()
        $("body").unbind("touchmove");

    })


    // --------------侧边栏
    $('.iconguanbi').on('click', function() {
        $('.header-mask').stop().hide();
        $('.sidebar').stop().animate({
            right: -300
        })
    })
});