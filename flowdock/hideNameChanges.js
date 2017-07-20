// ==UserScript==
// @name         Hide name changes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide name changes from flows
// @author       arthur
// @match        https://www.flowdock.com/*
// @require      https://raw.githubusercontent.com/uzairfarooq/arrive/master/minified/arrive.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function isNameChange(threadStarter) {
        var content = threadStarter.getElementsByClassName('content')[0];
        var msgBody = threadStarter.getElementsByClassName('msg-body')[0];
        if (! msgBody) {
            return false;
        }
        var msgText = msgBody.innerHTML;

        if (skipCheck(msgText)) {
            return false;
        }

        return msgText.indexOf(" is now known as ") !== -1;
    }

    function skipCheck(text) {
        return text.indexOf('"') !== -1 || text.indexOf("'") !== -1;
    }

    function hide(element) {
        element.style.display = "none";
    }

    document.arrive(".thread-starter", function(threadStarter) {
        if (isNameChange(threadStarter)) {
            hide(threadStarter);
        }
    });
})();