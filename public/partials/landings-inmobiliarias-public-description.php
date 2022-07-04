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

$title = $attributes['title'];
$content = $attributes['content'];
$mediaUrl = $attributes['mediaUrl'];
$urlBtn = $attributes['urlBtn'];
$txtBtn = $attributes['txtBtn'];

?>
<div class="my-container separador first-bloque mrg-r-l">
	<section id="descripcion" class="row no-padding no-margin mrg-top-141">
			<div class="col-md-6 col-12 no-padding order-2-res">
				<img class="img-des space-img" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200" src="<?= $mediaUrl;?>" alt="">
				<div class="openForm btn-quiero only-mobile-f"><?= $txtBtn;?></div>
			</div>
			<div class="col-md-6 col-12 no-padding pdt-93 order-1-res">
				<h2 class="title-des per-res-one" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200"><?= $title;?></h2>
				<p class="subtitle-des  per-res-two" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200"><?= $content?></p>
				<div class="openForm btn-quiero only-desk-f" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200"><?= $txtBtn;?></div>
			</div>
	</section>
</div>