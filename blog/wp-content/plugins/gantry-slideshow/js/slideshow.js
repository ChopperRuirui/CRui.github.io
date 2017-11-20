jQuery(function($){
	/* Media Upload control */
	var formfield = null;
	$('input.media-upload').live('click', function() {
		$('html').addClass('Image');
		formfield = $(this).prev();
		tb_show('', 'media-upload.php?type=image&TB_iframe=true');
		return false;
	});

	// user inserts file into post.
	//only run custom if user started process using the above process
	// window.send_to_editor(html) is how wp normally handle the received data
	window.original_send_to_editor = window.send_to_editor;
	window.send_to_editor = function(html){
		var fileurl;
		if (formfield != null) {
			fileurl = $('img',html).attr('src');
			formfield.val(fileurl);
			tb_remove();
			$('html').removeClass('Image');
			formfield = null;
		} else {
			window.original_send_to_editor(html);
		}
	};
	$('#new-slide').click(function(){
		$('#slides').append('<li><div class="handle"></div><div class="slide"><input type="text" name="slideshow[slides][title][]" value="" />			<input type="text" name="slideshow[slides][image][]" value="" /><input type="button" class="button-secondary media-upload" value="Upload" />	</div></li>');
	});

	$('#slides').sortable({
		handle: '.handle',
		placeholder: 'placeholder'
	});

	$('#enable_override').change(function(){
		if( this.checked ) {
			$('#override_opac').hide();
		} else {
			$('#override_opac').show();
		}
	}).trigger('change');

	$('.remove').live('click', function(){
		$(this).closest('li').fadeOut('slow', function(){
			$(this).remove();
		});
	});
});