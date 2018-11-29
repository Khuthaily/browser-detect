/*!
  * Browser Detect
  * Copyright 2018 Khaled Huthaily (http://github.com/khuthaily)
  * Licensed under MIT (https://github.com/Khuthaily/browser-detect/blob/master/LICENSE)
  */

// Define userAgent
let navUserAgent = navigator.userAgent;

// Define Browsers
let firefoxBrowser = navUserAgent.search("Firefox");
let torBrowser = firefoxBrowser;
let chromeBrowser = navUserAgent.search("Chrome");
let chromiumBrowser = chromeBrowser;
let operaBrowser = navUserAgent.search("OPR");
let edgeBrowser = navUserAgent.search("Edge");
let ieBrowser = navUserAgent.search("Trident");
let safariBrowser = navUserAgent.search("Safari");

/**
* This functionn returns the name of the browser. It has been tested on
* FireFox (and Tor), Chrome (and Chromium), Opera, Internet Explorer,
* Microsoft Edge, and Safari.
* @return string browser name
*/
function detectBrowser() {
    let browserName;

    if (firefoxBrowser >= 0) {
         browserName = "firefox";
    } else if (operaBrowser >= 0) {
         browserName = "opera";
    } else if (ieBrowser >= 0) {
         browserName = "ie";
    } else if (edgeBrowser >= 0) {
         browserName = "edge";
    } else if (chromeBrowser >= 0) {
        browserName = "chrome";
    } else if (safariBrowser >= 0 && chromeBrowser < 0) {
        browserName = "safari";
    } else {
        browserName = "unknown";
    };

   return browserName;
};

detectBrowser();

/**
* @return boolean true if the browser is either Chrome or Chromium
*/
function isChrome() {
    if (chromeBrowser >= 0 && edgeBrowser < 0 && operaBrowser < 0) {
        return true;
    }

    return false;
}

// Alias for Chromium
const isChromium = isChrome;

/**
* @return boolean true if the browser is either Firefox or Tor
*/
function isFirefox() {
    if (firefoxBrowser >= 0) {
        return true;
    }

    return false;
}

// Alias for Tor
const isTor = isFirefox;

/**
* @return boolean true if the browser is Internet Explorer
*/
function isIE() {
    if (ieBrowser >= 0) {
        return true;
    }

    return false;
}

/**
* @return boolean true if the browser is Microsoft Edge
*/
function isEdge() {
    if (edgeBrowser >= 0) {
        return true;
    }

    return false;
}

/**
* @return boolean true if the browser is Opera
*/
function isOpera() {
    if (operaBrowser >= 0) {
        return true;
    }

    return false;
}

/**
* @return boolean true if the browser is Apple Safari
*/
function isSafari() {
    if (safariBrowser >= 0 && chromeBrowser < 0) {
        return true;
    }

    return false;
}

/**
 * Tests
 */
console.log('User Agent:', navUserAgent);
console.log('You are using', (detectBrowser().toUpperCase()) , 'browser.');
console.log('Google Chrome', isChrome());
console.log('Google Chromium', isChromium());
console.log('Mozilla Firefox', isFirefox());
console.log('Internet Explorer', isIE());
console.log('Opera', isOpera());
console.log('Tor', isTor());
console.log('Microsoft Edge', isEdge());
console.log('Apple Safari', isSafari());
