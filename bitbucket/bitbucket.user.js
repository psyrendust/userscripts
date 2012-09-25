(function(){
// ==UserScript==
// @name        bitbucket UserScript
// @namespace   http://www.psyrendust.com/userscripts/bitbucket
// @description Makes the respository list more readable
// @grant       none
// @license     bitbucket UserScript is released under the MIT License. Included third-party software are limited to their respective licenses.
// @version     1.0
//
// @include     http://bitbucket.org/*
// @include     http://www.bitbucket.org/*
// @include     https://bitbucket.org/*
// @include     https://www.bitbucket.org/*
//
// ==/UserScript==


function addJQuery(callback) {
	var script = document.createElement("script");
	script.setAttribute("src", "https://dwz7u9t8u8usb.cloudfront.net/m/4b4af5728843/compressed/js/0cd046e494e4.js");
	script.addEventListener('load', function() {
		var script = document.createElement("script");
		script.textContent = "(" + callback.toString() + ")();";
		document.body.appendChild(script);
	}, false);
	document.body.appendChild(script);
}

function userScriptInit() {
	var $filterList = $('ol.filter-list');
	var $spans = $filterList.find("span.owner:contains('johnmcneilstudio')");
	$filterList.css('font-size', '80%');
	$spans.html('JMS');
}

// load jQuery and execute the main function
addJQuery(userScriptInit);

})();