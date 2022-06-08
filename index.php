<?php

/*
    Plugin Name: Dkasa Blocks - Original
    Description: Dkasa Custom Blocks
    Version: 1.0
    Author: Gabriel Soto
    Author URI:
*/

if( ! defined( 'ABSPATH' ) ) exit;

define( 'DKASA_BLOCKS_URL_PLUGIN', plugin_dir_path( __FILE__ ) );

class DkasaBlocks{
    function enqueue_styles() {
		wp_enqueue_style('dkasa-bootstrap', plugin_dir_url( __FILE__ ) . 'public/lib/bootstrap/css/bootstrap.min.css', array(), '0.1', 'all' );
		wp_enqueue_style( 'dkasa-slick-slider', plugin_dir_url( __FILE__ ) . 'public/lib/slick/slick.css', array(), '0.1', 'all' );
		wp_enqueue_style( 'dkasa-slick-theme-slider', plugin_dir_url( __FILE__ ) . 'public/lib/slick/slick-theme.css', array(), '0.1', 'all' );
		wp_enqueue_style( 'dkasa-css', plugin_dir_url( __FILE__ ) . 'public/css/landings-inmobiliarias-public.css', array(), '0.1', 'all' );
	}
    function enqueue_scripts() {
		wp_enqueue_script( 'dkasa-bootstrap', plugin_dir_url( __FILE__ ) . 'public/lib/bootstrap/js/bootstrap.bundle.min.js', array( 'jquery' ), '0.1', true );
		wp_enqueue_script( 'dkasa-slick-slider', plugin_dir_url( __FILE__ ) . 'public/lib/slick/slick.js', array( 'jquery' ), '0.1', true );
		wp_enqueue_script( 'dkasa-js', plugin_dir_url( __FILE__ ) . 'public/js/landings-inmobiliarias-public.js', array( 'jquery' ), '0.1', true );
	}
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
        wp_register_script('dkasablock1', plugin_dir_url(__FILE__) . 'build/index.js', array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-block-editor'));
        register_block_type("dkasa/block-1",array(
            'editor_script' => 'dkasablock1',
            'render_callback' => array($this, 'theHTML')
        ));
        register_block_type( DKASA_BLOCKS_URL_PLUGIN . 'config/banner-block.json', array(
            'editor_script' => 'dkasablock1',
            'render_callback' => array($this,'landings_inmobiliarias_banner_render_callback'),
        ));
        register_block_type( DKASA_BLOCKS_URL_PLUGIN . 'config/description-block.json', array(
            'render_callback' => array($this,'landings_inmobiliarias_description_render_callback'), 
        ));

    }
    
    function landings_inmobiliarias_banner_render_callback( $attributes, $content, $block_instance ) {
        ob_start();
        require DKASA_BLOCKS_URL_PLUGIN . 'public/partials/landings-inmobiliarias-public-banner.php';
        return ob_get_clean();
    }
    function landings_inmobiliarias_description_render_callback( $attributes, $content, $block_instance ) {
        ob_start();
        require DKASA_BLOCKS_URL_PLUGIN . 'public/partials/landings-inmobiliarias-public-description.php';
        return ob_get_clean();
    }
}

$dkasaBlocks = new DkasaBlocks();
