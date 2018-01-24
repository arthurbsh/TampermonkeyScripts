// ==UserScript==
// @name         Auto price
// @namespace    https://github.com/arthurbsh/
// @version      1.0
// @description  Sets reasonable prices automatically when clicking to list an item
// @author       arthurbsh
// @homepage     https://github.com/arthurbsh/
// @match        <fifa web app url>

// @require      https://raw.githubusercontent.com/uzairfarooq/arrive/master/minified/arrive.min.js
// @grant        none
// This only works together with script X
// ==/UserScript==

(function() {
    'use strict';

    function peform() {
        
    }

    function getLowerPrice(current) {

    }

    function getCurrentPrice() {
        return 200;
    }

    function setBuyNow(value) {

    }

    function setBid(value) {

    }

    document.arrive(".thread-starter", function(threadStarter) {
        if (isNameChange(threadStarter) || isDeleted(threadStarter)) {
            hide(threadStarter);
        }
    });
})();