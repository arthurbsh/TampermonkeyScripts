// ==UserScript==
// @name         Auto price
// @namespace    https://github.com/arthurbsh/
// @version      1.0
// @description  Sets reasonable prices automatically when clicking to list an item
// @author       arthurbsh
// @homepage     https://github.com/arthurbsh/
// @match       https://www.easports.com/fifa/ultimate-team/web-app/*
// @match       https://www.easports.com/*/fifa/ultimate-team/web-app/*
// @require      https://raw.githubusercontent.com/uzairfarooq/arrive/master/minified/arrive.min.js
// @grant        none
// This only works together with script X
// ==/UserScript==

(function() {
    'use strict';

    function peform() {
        var selectedItem = getSelectedItem();

        var currentPrice = getCurrentPrice(selectedItem);

        var buyNowPrice = getLowerPrice(currentPrice);
        var startPrice = getLowerPrice(buyNowPrice);

        if (currentPrice === 200) {
            buyNowPrice = 200;
            startPrice = 150;
        }

        setSpinnerValue(getBuyNowSpinner(), buyNowPrice);
        setSpinnerValue(getStartPriceSpinner(), startPrice);
    }

    function getSelectedItem() {
        return document.getElementsByClassName('listFUTItem selected')[0];
    }

    function getLowerPrice(current) {
        if (current <= 1000) {
            return current - 50;
        } else if (current <= 10000) {
            return current - 100;
        } else if (current <= 50000) {
            return current - 250;
        } else if (current <= 100000) {
            return current - 500;
        }

        return current - 1000;
    }

    function getCurrentPrice(selectedItem) {
        var futbin = selectedItem.getElementsByClassName('auctionValue futbin')[0];
        var coinsString = futbin.getElementsByClassName('coins value')[0].innerText;

        coinsString = coinsString.replace(',', '');

        return +coinsString;
    }

    function setSpinnerValue(spinner, value) {

        var newValue = new Intl.NumberFormat('en-US', {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0}
            ).format(value);

        spinner.getElementsByClassName("numericInput")[0].value = newValue;
    }

    function getStartPriceSpinner() {
        return document.getElementsByClassName("buttonInfo bidSpinner")[0];
    }

    function getBuyNowSpinner() {
        return document.getElementsByClassName("buttonInfo bidSpinner")[1];
    }

    document.arrive(".accordian", function(button) {
        button.onclick = peform;
    });
})();