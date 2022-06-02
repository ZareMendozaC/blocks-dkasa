<?php

/*
    Plugin Name: Dkasa Blocks
    Description: Dkasa Custom Blocks
    Version: 1.0
    Author: Gabriel Soto
    Author URI:
*/

if( ! defined( 'ABSPATH' ) ) exit;

class DkasaBlocks{
    
    function __construct()
    {
        add_action('enqueue_block_editor_assets', array($this, 'adminAssets'));
        add_filter( 'block_categories_all' , function( $categories ) {

            // Adding a new category.
            $categories[] = array(
                'slug'  => 'custom-layout-category',
                'title' => 'Dkasa Blocks'
            );
        
            return $categories;
        } );
    }

    function adminAssets(){
        wp_enqueue_script('dkasablock1', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks','wp-element'));
    }
}

$dkasaBlocks = new DkasaBlocks();