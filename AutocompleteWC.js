// ==UserScript==
// @name         AutocompleteWC
// @include    http://www.pixiv.net*
// @version      0.0
// @description  TOwhitecube Shisaku, an userscript referenced, thank them.
// @license      NYSL
// @grant        none
// ==/UserScript==

var serel = document.getElementsByClassName('search');
if (serel){serel.autocomplete = "on";}
var slhel = document.getElementsByClassName('suggestions lock-header');
if (slhel){ while(slhel.length > 0) slhel[0].parentNode.removeChild(slhel[0]); } 