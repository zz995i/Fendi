$(function() {
    $('.titleBox span').click(function() {

        // $(this).css('border-bottom', '4px solid #f9b949')
        $(this).addClass('color-f').siblings().removeClass('color-f');
        var bb = $(this).index();

        $('.column-box').eq(bb).show().siblings().hide();
    });


    // 提示框
    // $('.btn-small').click(function() {
    //     $('.m-mask').show();
    //     $('.msg').fadeIn();
    // })
    $('.guanbi').click(function() {
        $('.m-mask').stop().fadeOut()
        $('.msg').stop().fadeOut()
    });
    $('.m-submit').click(function() {
        $('.m-mask').stop().fadeOut()
        $('.msg').stop().fadeOut()
    });
})