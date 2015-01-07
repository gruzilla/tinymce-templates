/* global ajaxurl, tinymce, wpLinkL10n, setUserSetting, wpActiveEditor */
var tinymceTemplates;

( function( $ ) {
	var editor,

	tinymceTemplates = {

		init: function()
		{
			$('#button-tinymce-templates').bind('click', function(e){
				e.preventDefault();
				tinymceTemplates.open();
			});

			$(window).resize(function(){
				tinymceTemplates.positionTop();
			});

			$('.close').click(function(e){
				e.preventDefault();
				tinymceTemplates.close();
			});

			$('#tinymce-templates-backdrop').click(function(e){
				e.preventDefault();
				tinymceTemplates.close();
			});

			$('#tinymce-templates-insert').click(function(e){
				e.preventDefault();
				tinymceTemplates.insert();
				tinymceTemplates.close();
			});
		},

		insert: function()
		{
			wp.media.editor.insert('[myshortcode id="aa"]');
		},

		open: function( editorId )
		{
			tinymceTemplates.positionTop();

			$( document.body ).addClass( 'modal-open' );
			$('#tinymce-templates-wrap').show();
			$( '#tinymce-templates-backdrop' ).show();
		},

		close: function()
		{
			$( document.body ).removeClass( 'modal-open' );
			$('#tinymce-templates-wrap').hide();
			$( '#tinymce-templates-backdrop' ).hide();
		},

		positionTop: function()
		{
			var windowHeight = $(document.body).height();

			$('#tinymce-templates-preview').css('height', windowHeight * 0.5);

			var height = $('#tinymce-templates-wrap').height();

			var top = (windowHeight / 2) - (height / 2) - ($('#wpadminbar').height() / 2);
			if (top < (0 - $('#wpadminbar').height() + 8)) {
				top = (0 - $('#wpadminbar').height() + 8);
			} else if (top > 100) {
				top = 100;
			}

			$('#tinymce-templates-wrap').css('top', top);
		},

		//
		// isMCE: function() {
		// 	return editor && ! editor.isHidden();
		// },
		//
		// close: function() {
		// 	$( document.body ).removeClass( 'modal-open' );
		//
		// 	if ( ! wpLink.isMCE() ) {
		// 		wpLink.textarea.focus();
		//
		// 		if ( wpLink.range ) {
		// 			wpLink.range.moveToBookmark( wpLink.range.getBookmark() );
		// 			wpLink.range.select();
		// 		}
		// 	} else {
		// 		editor.focus();
		// 	}
		//
		// 	inputs.backdrop.hide();
		// 	inputs.wrap.hide();
		// 	$( document ).trigger( 'wplink-close', inputs.wrap );
		// },
	};

	$( document ).ready( tinymceTemplates.init );
})( jQuery );
