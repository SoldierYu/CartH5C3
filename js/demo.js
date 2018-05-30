/**
 * Created by yuxibing on 2018/5/17.
 */
!function (e) {
    var t = {};

    function i(r) {
        if (t[r])return t[r].exports;
        var n = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }

    i.m = e, i.c = t, i.d = function (e, t, r) {
        i.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: r})
    }, i.r = function (e) {
        Object.defineProperty(e, "__esModule", {value: !0})
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/public/", i(i.s = 1)
}([, function (e, t, i) {
    "use strict";
    new Swiper("#gf-mall-banner", {
        autoplay: {disableOnInteraction: !1, delay: 5e3},
        visibilityFullFit: !0,
        loop: !0,
        pagination: {el: ".pagination"}
    }), new Swiper("#gf-mall-hot-commodity", {freeMode: !0, slidesPerView: "auto", freeModeSticky: !0});
    var r = navigator.userAgent, n = "";
    "i" == (n = -1 !== r.indexOf("Android") ? "A" : "i") ? ($(".pagination .swiper-pagination-bullet").css({
        width: ".13rem",
        height: ".13rem"
    }), $(".gf-mall-recommend-for-you-commodity-list li section").css({paddingTop: ".33rem"})) : ($(".pagination .swiper-pagination-bullet").css({
        width: "6px",
        height: "6px"
    }), $(".gf-mall-recommend-for-you-commodity-list li").css({borderColor: "rgba(0,0,0,0)"}), $(".gf-mall-recommend-for-you-commodity-list").css({border: 0})), $(".gf-j-enter-details").each(function () {
        $(this).click(function () {
            var e = $(this).attr("detailsid");
            "A" == n ? stub.transferID(e) : window.NativeBridge("transferID", e)
        })
    })
}]);