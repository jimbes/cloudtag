<?php

/*
Plugin Name: Cloud Tag
Description: Have cloud base on word and weight
Version: 1.0.0
Author: Jimmy Besse
Text Domain: Jimmy Besse
*/

function cloudtagConstruct( $atts, $content, $shortcode_tag ){
	ob_start();
	include dirname( __FILE__ ) . '/template/cloudtag-view.php';
	return ob_get_clean();
}
add_shortcode( 'cloudtag', 'cloudtagConstruct' );
