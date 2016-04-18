"use strict";
/* globals $, require */

$(document).ready(function() {
	$(window).on('action:app.load', function() {
		console.log('initting');
		require(['composer/formatting', 'composer/controls', 'uploader'], function(formatting, controls, uploader) {
			if (formatting && controls) {
				formatting.addButtonDispatch('audio-embed', function(textarea, selectionStart, selectionEnd){
					uploader.show({
						title: 'Step 1: Upload Audio',
						description: 'Upload an audio file for embedding into your post',
						route: config.relative_path + '/plugins/nodebb-plugin-audio-embed/upload'
					}, function(id) {
						controls.insertIntoTextarea(textarea, '[audio/' + id + ']');
						controls.updateTextareaSelection(textarea, id.length + 8, id.length + 8);
					});
					// if(selectionStart === selectionEnd){
						// controls.insertIntoTextarea(textarea, '**' + strings.bold + '**');
						// controls.updateTextareaSelection(textarea, selectionStart + 2, selectionStart + strings.bold.length + 2);
					// } else {
					// 	controls.wrapSelectionInTextareaWith(textarea, '**');
					// 	controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
					// }
				});
			}
		});
	});
});