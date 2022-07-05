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
	
?>

<div class="my-container" id="ubicacion-proyecto">
    <section class="row no-padding no-margin" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200">
            <div class="col-md-12 col-12 no-padding">
            <a href="<?= $linkwaze;?>" ><img class="link-waze" src="https://apros-qa.net.pe/dkasa/wp-content/uploads/2022/06/Frame.png" alt="waze"></a>
            <a href="<?= $linkvisita;?>" class="btn-mapa">¡Quiero visitarlo!</a>
                <?= $shortcodemapa;?>
            </div>
    </section>
</div>