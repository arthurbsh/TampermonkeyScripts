// ==UserScript==
// @name         New thread confirmation
// @namespace    https://github.com/arthurbsh/
// @version      1.0
// @description  Show a confirmation dialog before starting a new thread
// @author       arthurbsh
// @homepage     https://github.com/arthurbsh/
// @match        https://www.flowdock.com/*
// @require      https://raw.githubusercontent.com/uzairfarooq/arrive/master/minified/arrive.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function willStartNewThread(chatInput) {

        var text = chatInput.value;

        var isNewThread = chatInput.placeholder.indexOf("new thread") !== -1;
        var nonEmpty = text.length > 0;

        return isNewThread && nonEmpty;
    }

    function enterOnlyPressed(ev) {
        return ev.keyCode === 13 && !ev.shiftKey && !ev.altKey;
    }

    function addNewThreadConfirmationFeature (messageInput) {
        messageInput.setup = true;
        messageInput.addEventListener("keydown", function (ev) {
            if (enterOnlyPressed(ev)) {//enter key
                if (willStartNewThread(ev.currentTarget)) {
                    if (!confirm("Start new thread?")) {
                        ev.stopPropagation();
                    }
                }
            }
        });
    }

    document.arrive(".message-input", function(messageInput) {
        if (messageInput.setup) {
            return;
        }

        addNewThreadConfirmationFeature(messageInput);
    });
})();