// ==UserScript==
// @name         github
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  github
// @author       abdullahazad
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';
if (document.querySelector("li.Box-row:nth-child(1) > tab-container:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)") !== null) {
    var element = document.querySelector("li.Box-row:nth-child(1) > tab-container:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)");
    var element2 = element.value;
    GM_setClipboard(element2);
}
})();
