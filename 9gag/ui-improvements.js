// ==UserScript==
// @name         9gag UI improvements
// @namespace    https://github.com/arthurbsh/
// @version      1.0
// @description  Remove annoying 9gag elements
// @author       arthurbsh
// @homepage     https://github.com/arthurbsh/
// @match        https://9gag.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeElement(elementName) {
        try {
            var el = document.getElementById(elementName);
            if (el === null) {
                el = document.getElementsByClassName(elementName);
            }

            if (! el.remove) {
                el = el[0];
            }

            if (el.remove) {
                el.remove();
                console.log('Element removed ' + elementName);
            }
        } catch (err) {
            console.log('Error removing element: ' + elementName);
        }
    }

    removeElement('featured-tag');
    removeElement('jsid-sticky-button');
    //};
})();