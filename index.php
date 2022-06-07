<?php

/*
    Plugin Name: Dkasa Blocks
    Description: Dkasa Custom Blocks
    Version: 1.0
    Author: Gabriel Soto
    Author URI:
*/

if( ! defined( 'ABSPATH' ) ) exit;

define( 'DKASA_BLOCKS_URL_PLUGIN', plugin_dir_path( __FILE__ ) );

class DkasaBlocks{
    
    function __construct()
    {
        add_action('init', array($this, 'adminAssets'));
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
        wp_register_script('dkasablock1', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks','wp-element'));
        register_block_type("dkasa/block-1",array(
            'editor_script' => 'dkasablock1',
            'render_callback' => array($this, 'theHTML')
        ));
        register_block_type( DKASA_BLOCKS_URL_PLUGIN . 'config/banner-block.json', array(
            'editor_script' => 'dkasablock1',
            'render_callback' => "landings_inmobiliarias_banner_render_callback",
        ));
    }

    function theHTML($attributes){
        ob_start(); ?>
        <h1>Today the sky is <?php echo esc_html($attributes['skyColor']) ?> and the grass is <?php echo esc_html($attributes['grassColor']) ?> !!!</h1>
        <?php return ob_get_clean();
    }

    function landings_inmobiliarias_banner_render_callback( $attributes, $content, $block_instance ) {
        ob_start();
        require DKASA_BLOCKS_URL_PLUGIN . 'public/partials/landings-inmobiliarias-public-banner.php';
        return ob_get_clean();
    }
}

$dkasaBlocks = new DkasaBlocks();