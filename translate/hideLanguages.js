// ==UserScript==
// @name         Hide not used languages
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide not so used languages from https://translate.google.com menus
// @author       arthurbsh
// @match        https://translate.google.com/*
// @require      https://raw.githubusercontent.com/uzairfarooq/arrive/master/minified/arrive.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function getLanguage(menu) {
        var innerHtml = menu.children[0].innerHTML;
        return languageFromInnerHtml(innerHtml);
    }

    function languageFromInnerHtml(innerHtml) {
        var split = innerHtml.split("</div>");
        return split[split.length-1];
    }

    function hide(element) {
        element.style.display = "none";
    }

    var blackList = ["Detect language",
        "Afrikaans",
        "Albanian",
        "Amharic",
        "Arabic",
        "Armenian",
        "Azerbaijani",
        "Basque",
        "Belarusian",
        "Bengali",
        "Bosnian",
        "Bulgarian",
        "Catalan",
        "Cebuano",
        "Chichewa",
        "Chinese (Simplified)",
        "Chinese (Traditional)",
        "Chinese",
        "Corsican",
        "Croatian",
        "Czech",
        "Danish",
        "Dutch",
        // "English",
        "Esperanto",
        "Estonian",
        "Filipino",
        // "Finnish",
        // "French",
        "Frisian",
        "Galician",
        "Georgian",
        // "German",
        "Greek",
        "Gujarati",
        "Haitian Creole",
        "Hausa",
        "Hawaiian",
        "Hebrew",
        "Hindi",
        "Hmong",
        "Hungarian",
        "Icelandic",
        "Igbo",
        "Indonesian",
        "Irish",
        "Italian",
        "Japanese",
        "Javanese",
        "Kannada",
        "Kazakh",
        "Khmer",
        "Korean",
        "Kurdish (Kurmanji)",
        "Kyrgyz",
        "Lao",
        "Latin",
        "Latvian",
        "Lithuanian",
        "Luxembourgish",
        "Macedonian",
        "Malagasy",
        "Malay",
        "Malayalam",
        "Maltese",
        "Maori",
        "Marathi",
        "Mongolian",
        "Myanmar (Burmese)",
        "Nepali",
        // "Norwegian",
        "Pashto",
        "Persian",
        "Polish",
        // "Portuguese",
        "Punjabi",
        "Romanian",
        // "Russian",
        "Samoan",
        "Scots Gaelic",
        "Serbian",
        "Sesotho",
        "Shona",
        "Sindhi",
        "Sinhala",
        "Slovak",
        "Slovenian",
        "Somali",
        // "Spanish",
        "Sundanese",
        "Swahili",
        // "Swedish",
        "Tajik",
        "Tamil",
        "Telugu",
        "Thai",
        "Turkish",
        "Ukrainian",
        "Urdu",
        "Uzbek",
        "Vietnamese",
        "Welsh",
        "Xhosa",
        "Yiddish",
        "Yoruba",
        "Zulu"];

    document.arrive(".goog-menuitem", function(languageEl) {
        var language = getLanguage(languageEl);
        if (blackList.indexOf(language) !== -1) {
            hide(languageEl);
        }
    });

})();