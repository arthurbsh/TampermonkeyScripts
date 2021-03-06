// ==UserScript==
// @name         Hide name changes
// @namespace    https://github.com/arthurbsh/
// @version      1.0
// @description  Hides name changes and deleted thread starters
// @author       arthurbsh
// @homepage     https://github.com/arthurbsh/
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

    function isDeleted(threadStarter) {
        var content = threadStarter.getElementsByClassName('content')[0];
        var deleted = threadStarter.getElementsByClassName('deleted')[0];
        return deleted;
    }

    function skipCheck(text) {
        return text.indexOf('"') !== -1 || text.indexOf("'") !== -1;
    }

    function hide(element) {
        element.style.display = "none";
    }

    document.arrive(".thread-starter", function(threadStarter) {
        if (isNameChange(threadStarter) || isDeleted(threadStarter)) {
            hide(threadStarter);
        }
    });
})();