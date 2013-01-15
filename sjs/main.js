//= require lib/jquery-1.8.2
//= require lib/l10n
//= require lib/showdown

(function(window, document, $, Showdown) {
	"use strict";

	var markdownPath = 'data/index.md';

	$.when (
		$.get ( markdownPath ),
		$(document).ready()
	).then( onDataLoad, onDataFail );

	function onDataLoad ( markdownData ) {
		var markdownString = markdownData[0];

		var converter = new Showdown.converter();

		var html = converter.makeHtml(markdownString);

		$('#content').append(html);
	}

	function onDataFail ( error ) {
		$('#content').html('Error.');
	}

}(window, document, jQuery, Showdown));
