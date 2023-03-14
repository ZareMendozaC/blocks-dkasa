<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://apros.pe/
 * @since      1.0.0
 *
 * @package    Landings_Inmobiliarias
 * @subpackage Landings_Inmobiliarias/admin/partials
 */

/**
 * @var      array    $attributes    The ID of this plugin.
 */

	$shortcodemapa=$attributes['shortcodemapa'];
    $linkwaze=$attributes['linkwaze'];
    $linkvisita=$attributes['linkvisita'];
    $background=$attributes['background'];
	
?>

<div class="container-fluid contenedor-inf-dondevivir" id="ubicacion-proyecto">
    <section class="row contenido-part1  no-padding no-margin" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200">
        <h2 class="title-des" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200">Arquitectura que cautiva</h2>
        <div class="line-h2" style="background-color: <?= $background?>"></div>
        <div class="col-md-12 col-12 no-padding mrg-top-map">
            <a href="<?= $linkwaze; ?>"><img class="link-waze" src="<?= site_url('/') . 'wp-content/uploads/2022/06/Frame.png' ?>" alt="waze"></a>
            <div class="openForm btn-mapa"><a target="_blank" href="<?= $linkvisita; ?>">¡Quiero visitarlo!</a></div>

            <?php echo do_shortcode('[put_wpgm id=4]'); ?>
        </div>
    </section>
</div>