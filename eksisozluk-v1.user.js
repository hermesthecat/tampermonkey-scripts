// ==UserScript==
// @name        ekşi sözlük normal görünüme dön
// @namespace   Auto click
// @description Auto click
// @include     https://eksisozluk.com/*
// @include     https://eksisozluk.com
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       none
// ==/UserScript==
 
setTimeout(function() {
    document.querySelector('#return-to-innocence').click()
}, 1000)
