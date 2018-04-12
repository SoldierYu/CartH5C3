/**
 * Created by yuxibing on 2018/4/11.
 */
$(function () {
    $('#fullpage').fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        scrollingSpeed: 1000,
        afterLoad: function (link, index) {
            $('.section').eq(index - 1).addClass('now');

        },
        afterRender: function () {
            $('.more').on('click', function () {
                $.fn.fullpage.moveSectionDown();
            });
            $('.screen04 .cart').on('transitionend',function () {
                console.log('动画结束');
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });

        },
        onLeave: function (index, nextIndex, direction) {
            //第二页到第三页
            if (index == 2 && nextIndex == 3) {
                $('.section').eq(index - 1).addClass('leaved');
            } else if (index == 3 && nextIndex == 4) {
                $('.section').eq(index - 1).addClass('leaved');
            }
        }
    })


})
