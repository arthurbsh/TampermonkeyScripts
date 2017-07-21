// ==UserScript==
// @name         Hide images telegram
// @namespace    https://github.com/arthurbsh
// @version      1.0
// @description  Media messages are hidden by default and a show/hide button is added to the messages.
// @author       arthurbsh
// @homepage     https://github.com/arthurbsh
// @match        https://web.telegram.org/*
// @require      https://raw.githubusercontent.com/uzairfarooq/arrive/master/minified/arrive.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addHideButton(document, mediaMessage) {

        var buttonParent = findButtonParent(mediaMessage);
        var mediaToHide = findMediaToHide(buttonParent);
        var button = createButton(document, mediaToHide);

        buttonParent.insertBefore(button, mediaToHide);

        hide(mediaToHide);
        addListener(button);
    }

    function createButton(document, mediaToHide) {
        var button = document.createElement('button');
        button.innerHTML = "Show";
        button.showing = false;
        button.mediaToHide = mediaToHide;
        return button;
    }

    function findButtonParent(mediaMessage) {
        var messageBody;

        for (var i = 0; i< mediaMessage.children.length; i++) {
            if (mediaMessage.children[i].nodeName === "DIV") {
                messageBody = mediaMessage.children[i];
            }
        }

        return messageBody;
    }

    function findMediaToHide(buttonParent) {
        return buttonParent.getElementsByClassName('im_message_media')[0];
    }

    function addListener(button) {
        button.addEventListener ("click", function (ev) {
            button.showing = ! button.showing;
            if (button.showing) {
                button.innerHTML = "Hide";
                show(button.mediaToHide);
                button.mediaToHide.style.display = "block";
            } else {
                button.innerHTML = "Show";
                hide(button.mediaToHide);
            }
            ev.stopPropagation();
            ev.preventDefault();
        }, true);
    }

    function show(el) {
        el.style.visibility = "visible";
    }

    function hide(el) {
        el.style.visibility = "hidden";
    }

    document.arrive(".im_message_body_media", function(mediaMessage) {
        addHideButton(document, mediaMessage);
    });

})();