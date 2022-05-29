// ==UserScript==
// @name         Eksisozluk Utility
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author       end
// @match        https://eksisozluk.com/*
// @icon         https://www.google.com/s2/favicons?domain=eksisozluk.com
// ==/UserScript==
 
(function() {
    window.onload = () => {
        const adsList = ['.under-top-ad', '#networkad-inread-video-ad', '.ad-double-click'] //Reklam elementleri
 
        //basit gorunum
        const backToNormal = document.querySelector('#return-to-innocence')
        if (backToNormal) backToNormal.click()
 
        //sayfa gecerken cikan reklami gec
        const skipFullPageAd = document.querySelector('#interstitial-close-link-tag')
        if (skipFullPageAd) skipFullPageAd.click()
 
        //reklamlari gez ve yok et :P
        adsList.forEach(adElem => {
            let ads = document.querySelectorAll(adElem)
            ads.forEach(ad => {
                ad.remove()
            })
        })
    }
})();
