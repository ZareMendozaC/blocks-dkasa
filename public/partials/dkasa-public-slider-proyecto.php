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

$images = $attributes['images'];

?>
<section id="galeria-proyecto">
	<?php if($images) : ?>
		<div class="container-slider-proyecto mrg-r-l" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200">
            <div class="slider-for">
                <?php foreach ($images as $image): ?>
                        <img src="<?= $image['mediaUrl'];?>" alt="" class="img-big">
                <?php endforeach; ?>
            </div>
            <div class="slider-nav" id="slider-nav">
                <?php foreach ($images as $image): ?>
                    
                        <img src="<?= $image['mediaUrl'];?>" alt="imagen" class="img-litle" id="img-litle">
                <?php endforeach; ?>
            </div>
		</div>
	<?php endif;?>
</section>