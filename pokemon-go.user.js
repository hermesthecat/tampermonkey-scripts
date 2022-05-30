// ==UserScript==
// @name         pokemon go
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       abdullahazad
// @match        https://club.pokemon.com/us/pokemon-trainer-club/activated/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pokemon.com
// @grant        GM_notification
// @grant        window.focus
// ==/UserScript==

setTimeout(function() {
    if (document.querySelector('.cufonAlternate') !== null) {
        var win = window.open("", "_self");
        shim_GM_notification()
        win.close();
    }
}, 1000);

if (document.querySelector('div.column-10:nth-child(1) > p:nth-child(2)') !== null) {
    var metin = document.querySelector('div.column-10:nth-child(1) > p:nth-child(2)').textContent;
} else {
    metin = document.querySelector('.cufonAlternate').textContent;
}
console.log(metin);

var notificationDetails = {
    text: metin,
    title: 'Pokemon GO Account',
    timeout: 3000,
    onclick: function() {
        window.focus();
    }
};
GM_notification(notificationDetails);

/*--- Cross-browser Shim code follows:
 */
function shim_GM_notification() {
    if (typeof GM_notification === "function") {
        return;
    }
    window.GM_notification = function(ntcOptions) {
        checkPermission();

        function checkPermission() {
            if (Notification.permission === "granted") {
                fireNotice();
            } else if (Notification.permission === "denied") {
                alert("User has denied notifications for this page/site!");
                return;
            } else {
                Notification.requestPermission(function(permission) {
                    console.log("New permission: ", permission);
                    checkPermission();
                });
            }
        }

        function fireNotice() {
            if (!ntcOptions.title) {
                console.log("Title is required for notification");
                return;
            }
            if (ntcOptions.text && !ntcOptions.body) {
                ntcOptions.body = ntcOptions.text;
            }
            var ntfctn = new Notification(ntcOptions.title, ntcOptions);

            if (ntcOptions.onclick) {
                ntfctn.onclick = ntcOptions.onclick;
            }
            if (ntcOptions.timeout) {
                setTimeout(function() {
                    ntfctn.close();
                }, ntcOptions.timeout);
            }
        }
    }
}
