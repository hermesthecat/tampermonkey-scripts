// ==UserScript==
// @name         gitlab
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  gitlab
// @author       abdullahazad
// @match        https://git.abdullahazad.com/projects/new*
// @match        https://git.abdullahazad.com/root/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gitlab.com
// ==/UserScript==


setTimeout(function(){
    if (document.querySelector("[data-qa-selector='import_project_link']") !== null) {
        var element = document.querySelector("[data-qa-selector='import_project_link']");
        element.click();
        }
}, 1000);

setTimeout(function(){
    if (document.querySelector('div.import-btn-container:nth-child(1) > div:nth-child(2) > div:nth-child(9) > button:nth-child(1)') !== null) {
        var element2 = document.querySelector('div.import-btn-container:nth-child(1) > div:nth-child(2) > div:nth-child(9) > button:nth-child(1)');
        element2.click();
        }
}, 1000);

setTimeout(function(){
    if (document.querySelector('#project_mirror') !== null) {
        var element3 = document.querySelector('#project_mirror');
        element3.click();
        }
}, 1000);

setTimeout(function(){
    if (document.querySelector('.home-panel-home-desc > p:nth-child(1) > a:nth-child(3)') !== null) {
        var element4 = document.querySelector('.home-panel-home-desc > p:nth-child(1) > a:nth-child(3)');
        element4.click();
        }
}, 1000);

setTimeout(function(){
    if (document.querySelector("[data-qa-selector='update_now_button']") !== null) {
        var element5 = document.querySelector("[data-qa-selector='update_now_button']");
  element5.click();
        }
}, 1000);
