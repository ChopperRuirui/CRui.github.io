jQuery(document).ready(function($){ 
    
    jQuery("a[rel^='prettyPhoto']").prettyPhoto({overlay_gallery: false});
    
    /* Change BW image in slider */
    jQuery('#slider_ul li').hover(function(){
       jQuery(this).find('img').toggle(); 
    });
    
    /* Change BW image in Latest News */
    jQuery('.rp_posts_popular li').hover(function(){
       jQuery(this).find('img').toggle(); 
    });
    
    /* Comments */
    jQuery('ol.commentlist li .comment-div-wrapper').hover(function(){
       jQuery(this).find('a.comment-reply-link').toggle();
    });
    
    /* Images hover */
    jQuery('.blog-article-image img, .blog-content img').hover(function(){
        jQuery(this).stop().animate({
            'filter':'alpha(opacity=92)',
            '-moz-opacity':'0.92',
            '-khtml-opacity':'0.92',
            'opacity': '0.92'
        }, 200);
    },function(){
        jQuery(this).stop().animate({
            'filter':'alpha(opacity=100)',
            '-moz-opacity':'1',
            '-khtml-opacity':'1',
            'opacity': '1'
        }, 200);
    });    
    
    
    /* Change background position */
    jQuery(window).resize(function() {
        changeHeader();
        changeBackground();
    });

    changeHeader();
    
    function changeHeader() {
        var p = jQuery("#rt-logo-wrapper");
        var position = p.position();
        var width = parseInt(jQuery(window).width());

        jQuery('#rt-logo-background').css({
            'width': Math.round(position.left),
            'left': - Math.round(position.left)
            });   

        var p1 = jQuery("#rt-navigation-wrapper");
        var position1 = p1.position();
        var navigationWidth = parseInt(jQuery('#rt-navigation-wrapper').css('width'));   
        var rtnavpos = width - position1.left - navigationWidth;

        jQuery('#rt-navigation-background').css({
            'width': Math.round(rtnavpos),
            'left': '732px'
        });
    }
    
    function changeBackground() {
        var width = parseInt(jQuery(window).width());
        var img_width = parseInt(jQuery('#site-background-image').width());
        
        if (img_width < width) {
            img_left = Math.round((width - img_width)/2);
            jQuery('#site-background-image').css({
               'left': img_left 
            });
			jQuery('#site-background-image').show();
        } else {
            jQuery('#site-background-image').css({
               'left': '0px' 
            });
			jQuery('#site-background-image').show();
        }
    }
    
    jQuery('#site-background-image').load(function() {
            //alert("The image has loaded; width: " + jQuery('#site-background-image').width() + "px");
            changeBackground();
    });
    
    jQuery('.portfolio .portfolio-row-item-image img').animate({
        'filter':'alpha(opacity=100)',
        '-moz-opacity':'1',
        '-khtml-opacity':'1',
        'opacity': '1'},2000);

 jQuery('.portfolio-row-item-image').hover(
 function(){
     jQuery(this).find('.image_overlay').stop().animate({
            'filter':'alpha(opacity=50)',
            '-moz-opacity':'0.5',
            '-khtml-opacity':'0.5',
            'opacity': '0.5'}, 400); 
 }, 
 function(){
     
     jQuery(this).find('.image_overlay').stop().animate({ 
            'filter':'alpha(opacity=0)',
            '-moz-opacity':'0',
            '-khtml-opacity':'0',
            'opacity': '0'}, 400); 
 }
 );
	
		
});


