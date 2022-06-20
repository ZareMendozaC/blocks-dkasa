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
define( 'DKASA_BLOCKS_URL_PLUGIN_FRONT', site_url().'/wp-content/plugins/dkasa-plugin/');

class DkasaBlocks{

    function __construct()
    {
        add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );
        add_action( 'admin_enqueue_scripts', 'enqueue_scripts' );
        add_action('init', array($this, 'adminAssets'));
        add_filter( 'block_categories_all' , function( $categories ) {

            // Adding a new category.
            $categories[] = array(
                'slug'  => 'dkasa',
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
        /*Mapa */
        register_block_type( DKASA_BLOCKS_URL_PLUGIN . 'config/mapa-block.json', array(
            'render_callback' => array($this,'dkasa_mapa_render_callback'), 
        ));
        /* bannersimple*/
        register_block_type( DKASA_BLOCKS_URL_PLUGIN . 'config/banner-simple-block.json', array(
            'render_callback' => array($this,'dkasa_bannersimple_render_callback'), 
        ));
        /* Informacion planos */
        register_block_type( DKASA_BLOCKS_URL_PLUGIN . 'config/informacion-block.json', array(
            'render_callback' => array($this,'dkasa_bannerinformacion_render_callback'), 
        ));
        /* Descripcion Ubicacion */
        register_block_type( DKASA_BLOCKS_URL_PLUGIN . 'config/description-ubicacion-block.json', array(
            'render_callback' => array($this,'dkasa_descriptionubicacion_render_callback'), 
        ));
        /* Bloque tu hogar */
        register_block_type( DKASA_BLOCKS_URL_PLUGIN . 'config/descriptionhogar-block.json', array(
            'editor_script' => 'dkasablock1',
            'render_callback' => array($this,'dkasa_descriptionhogar_render_callback'), 
        ));
        /* Slider proyecto*/
        register_block_type( DKASA_BLOCKS_URL_PLUGIN . 'config/slider-proyecto-block.json', array(
            'render_callback' => array($this,'dkasa_sliderproyecto_render_callback'), 
        ));
        /* Bloque Rojo */
        register_block_type( DKASA_BLOCKS_URL_PLUGIN . 'config/banner-rojo-block.json', array(
            'editor_script' => 'dkasablock1',
            'render_callback' => array($this,'dkasa_bloque_rojo_render_callback'), 
        ));
        /* Tu Futuro */
        register_block_type( DKASA_BLOCKS_URL_PLUGIN . 'config/tu-futuro-block.json', array(
            'editor_script' => 'dkasablock1',
            'render_callback' => array($this,'dkasa_tu_futuro_render_callback'), 
        ));
        /* Testimonios */
        register_block_type( DKASA_BLOCKS_URL_PLUGIN . 'config/testimonios-block.json', array(
            'editor_script' => 'dkasablock1',
            'render_callback' => array($this,'dkasa_testimonios_render_callback'), 
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
    function dkasa_bloque_rojo_render_callback( $attributes, $content, $block_instance ) {
        ob_start();
        require DKASA_BLOCKS_URL_PLUGIN . 'public/partials/dkasa-public-banner-rojo.php';
        return ob_get_clean();
    }
    function dkasa_tu_futuro_render_callback( $attributes, $content, $block_instance ) {
        ob_start();
        require DKASA_BLOCKS_URL_PLUGIN . 'public/partials/dkasa-public-tu-futuro.php';
        return ob_get_clean();
    }
    function dkasa_testimonios_render_callback( $attributes, $content, $block_instance ) {
        ob_start();
        require DKASA_BLOCKS_URL_PLUGIN . 'public/partials/dkasa-public-testimonios.php';
    }
    function dkasa_descriptionhogar_render_callback( $attributes, $content, $block_instance ) {
        ob_start();
        require DKASA_BLOCKS_URL_PLUGIN . 'public/partials/dkasa-public-descriptionhogar.php';
        return ob_get_clean();
    }
    function dkasa_descriptionubicacion_render_callback( $attributes, $content, $block_instance ) {
        ob_start();
        require DKASA_BLOCKS_URL_PLUGIN . 'public/partials/dkasa-public-ubicacion-description.php';
        return ob_get_clean();
    }
    function dkasa_sliderproyecto_render_callback( $attributes, $content, $block_instance ) {
        ob_start();
        require DKASA_BLOCKS_URL_PLUGIN . 'public/partials/dkasa-public-slider-proyecto.php';
        return ob_get_clean();
    }
    function dkasa_bannerinformacion_render_callback( $attributes, $content, $block_instance ) {
        ob_start();
        require DKASA_BLOCKS_URL_PLUGIN . 'public/partials/dkasa-public-informacion.php';
        return ob_get_clean();
    }
    function dkasa_bannersimple_render_callback( $attributes, $content, $block_instance ) {
        ob_start();
        require DKASA_BLOCKS_URL_PLUGIN . 'public/partials/dkasa-public-bannersimple.php';
        return ob_get_clean();
    }
    function dkasa_mapa_render_callback( $attributes, $content, $block_instance ) {
        ob_start();
        require DKASA_BLOCKS_URL_PLUGIN . 'public/partials/dkasa-public-mapa.php';
        return ob_get_clean();
    }
}
function enqueue_scripts(){

    wp_enqueue_style( 'bootstrap-min', DKASA_BLOCKS_URL_PLUGIN_FRONT . 'public/lib/bootstrap/css/bootstrap.min.css', array(), '5.0.0', 'all' );
    wp_enqueue_style( 'slick-style', DKASA_BLOCKS_URL_PLUGIN_FRONT . 'public/lib/slick/slick.css', array(), '5.0.0', 'all' );
    wp_enqueue_style( 'slick-theme-style', DKASA_BLOCKS_URL_PLUGIN_FRONT . 'public/lib/slick/slick-theme.css', array(), '5.0.0', 'all' );
    wp_enqueue_style( 'style-dkasa', DKASA_BLOCKS_URL_PLUGIN_FRONT . 'public/css/landings-inmobiliarias-public.css', array(), '5.0.0', 'all' );
    wp_enqueue_style( 'style-dkasa-blocks', DKASA_BLOCKS_URL_PLUGIN_FRONT . 'build/style-index.css', array(), '5.0.0', 'all' );

    wp_enqueue_script( 'bootstrap-bundle', DKASA_BLOCKS_URL_PLUGIN_FRONT . 'public/lib/bootstrap/js/bootstrap.bundle.js', array( 'jquery' ), '5.0.0', true );
    wp_enqueue_script( 'slick-script', DKASA_BLOCKS_URL_PLUGIN_FRONT . 'public/lib/slick/slick.min.js', array( 'jquery' ), '5.0.0', true );
    wp_enqueue_script( 'dkasa-script', DKASA_BLOCKS_URL_PLUGIN_FRONT . 'public/js/landings-inmobiliarias-public.js', array( 'jquery' ), '5.0.0', true );

}

$dkasaBlocks = new DkasaBlocks();
