// ==UserScript==
// @name        ekşi sözlük normal görünüme dön
// @namespace   ekşi sözlük normal görünüme dön
// @description ekşi sözlük normal görünüme dön
// @match       https://eksisozluk.com/*
// @match       https://eksisozluk.com
// @match       https://eksisozluk2023.com/*
// @match       https://eksisozluk2023.com
// @icon        https://www.google.com/s2/favicons?sz=64&domain=eksisozluk.com
// @require     https://code.jquery.com/jquery-2.1.3.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js
// @updateURL   https://raw.githubusercontent.com/hermesthecat/tampermonkey-scripts/main/eksisozluk-v1.meta.js
// @downloadURL https://github.com/hermesthecat/tampermonkey-scripts/raw/main/eksisozluk-v1.user.js
// ==/UserScript==

setTimeout(function() {

    let CookieName = 'notheme'

    if (!$.cookie(CookieName) || $.cookie(CookieName) == 0) {
        $.removeCookie(CookieName);
        $.cookie(CookieName, 1);
        location.reload();
    }
}, 1000)
