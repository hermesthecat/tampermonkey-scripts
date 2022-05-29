// ==UserScript==
// @name         turk torrent siteleri oto like
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  turk torrent sitelerindeki sunumları otomatik begenir, reklam kliklerinden korur.
// @author       abdullahazad
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @match        https://letseed.net/details.php*
// @match        https://turktracker.net/details.php*
// @match        https://turktorrent.us/?p=torrents&pid=10&action=details&tid=*
// @match        https://broadcity.in/details.php?id=*
// @match        http://bitturk.net/?p=torrents&pid=10&action=details&tid=*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==
 
// letseed
$(document).find("#indir").show();
$(document).find("#destek").hide();
$(document).find("#pasiftorrent").hide();
 
// turktorrent & bitturk
$(document).find("#like").click();
 
// broadcity & letseed
$(document).find("#thanks_button > input[type=button]").click();
