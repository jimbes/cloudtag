<?php

/*
Plugin Name: Cloud Tag
Description: Have cloud base on word and weight
Version: 1.0.7
Author: Jimmy Besse
Text Domain: Jimmy Besse
*/

function cloudtagConstruct( $atts, $content, $shortcode_tag ){
	ob_start();
	include dirname( __FILE__ ) . '/template/cloudtag-view.php';
	return ob_get_clean();
}
add_shortcode( 'cloudtag', 'cloudtagConstruct' );
/* Custom script with jQuery as a dependency, enqueued in the footer */
add_action('wp_enqueue_scripts', 'cloudtag_enqueue_custom_js');
function cloudtag_enqueue_custom_js() {
	wp_enqueue_script('cloudtag', plugin_dir_url( __FILE__ ) . 'assets/js/custom.js',
		array('jquery'), false, true);
}
wp_register_style('cssCloudTag', plugin_dir_url( __FILE__ ) . 'assets/css/style.css');
wp_enqueue_style('cssCloudTag');
