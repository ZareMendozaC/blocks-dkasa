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

	$nombreproyecto=$attributes['nombreproyecto'];
	$frase=$attributes['frase'];
	
?>

<div class="my-container separadores bg-simple">
    <section class="row no-padding no-margin">
            <div class="col-md-12 col-12 no-padding">
            <h2 class="subtitle-general center-text" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200"><?= $nombreproyecto;?></h2>
            <h2 class="subtitle-general center-text" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200"><?= $frase;?></h2>
            </div>
    </section>
</div>