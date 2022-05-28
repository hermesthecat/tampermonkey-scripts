// ==UserScript==
// @name         github
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  github
// @author       abdullahazad
// @match        https://github.com/*
// @resource     github https://github.com/fluidicon.png
// @grant        GM_setClipboard
// @grant        GM_notification
// ==/UserScript==

(function() {
    'use strict';
if (document.querySelector("li.Box-row:nth-child(1) > tab-container:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)") !== null) {
    var element = document.querySelector("li.Box-row:nth-child(1) > tab-container:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)");
    var element2 = element.value;
    GM_setClipboard(element2);
    //GM_notification("Github Copy Notification OK", element2, GM_getResourceURL("github"));
}
})();
