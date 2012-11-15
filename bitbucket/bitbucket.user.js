(function(){
// ==UserScript==
// @name        bitbucket UserScript
// @namespace   http://www.psyrendust.com/userscripts/bitbucket
// @description Makes the respository list more readable and fixes the display of tables in markdown files.
// @grant       none
// @license     bitbucket UserScript is released under the MIT License. Included third-party software are limited to their respective licenses.
// @version     2.1
//
// @include     https://bitbucket.org
// @include     https://bitbucket.org/*
//
// ==/UserScript==

var app = function(){
	var addStyletoDom = function(src) {
		console.log('addStyletoDom');
		$('head').append('<link rel="stylesheet" type="text/css" href="'+src+'" />');
	};

	var resizeRepoList = function() {
		var $filterList = $('ol.filter-list');
		var $spans = $filterList.find("span.owner:contains('johnmcneilstudio')");
		$filterList.css('font-size', '80%');
		$spans.html('JMS');
	};

	$(document).ready(function(){
		console.log('document ready');
		resizeRepoList();
		addStyletoDom('https://raw.github.com/psyrendust/userscripts/master/bitbucket/fixMarkdownTable.css');
	});
};

function addFiletoDom(tag, type, src, callback) {
	var el = document.createElement(tag);
	el.setAttribute("src", src);
	el.setAttribute("type", type);
	if(callback){
		el.addEventListener('load', function() {
			var script = document.createElement("script");
			script.textContent = "jQuery.noConflict();(" + callback.toString() + ")();";
			document.body.appendChild(script);
		}, false);
	}
	document.body.appendChild(el);
}

// 	// load css file to fix markdown tables
// 	addFiletoDom('style', 'text/css', 'https://raw.github.com/psyrendust/userscripts/master/bitbucket/fixMarkdownTable.css');
// }

// load jQuery and execute the main function
addFiletoDom('script', 'text/javascript', 'https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js', app);


})();