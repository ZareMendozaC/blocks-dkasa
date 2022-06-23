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
	$alignment = $attributes['alignment'];
	$bgColor = $attributes['backgroundColor'];
	$textColor = $attributes['textColor'];
	$mediaUrl = $attributes['mediaUrl'];
	$mediaUrlLogo = $attributes['mediaUrlLogo'];

	$area=$attributes['area'];
	$dormitorios=$attributes['dormitorios'];
	$ubicacion=$attributes['ubicacion'];
	$precio=$attributes['precio'];
?>

<div class="sub-menu" style="background-color:<?= $bgColor;?>">
	<div class="box-sub-menu">
		<a href="#galeria-proyecto">Galería</a>
		<a href="#planos-proyecto">Planos</a>
		<a href="#ubicacion-proyecto">Ubicación</a>
		<a href="#avance-proyecto">Avance de obra</a>
	</div>
</div>
<section class="lia-seccion-fondo hero" style="background-image: url(<?= $mediaUrl;?>);">
	<div class="lia-section-container text-<?=$alignment;?>">
		<h2 class=""><?= $title;?></h2>
		<p><?= $content;?></p>
	</div>
	<img class="logo-front" src="<?= $mediaUrlLogo;?>" alt="Logo Proyecto">
	<div class="box-proyecto" style="background-color:<?= $bgColor;?>">
		<div class="part-4">
			<div>
				<p class="box-title">Área total</p>
				<p class="box-subtitle">Desde <?= $area;?></p>
			</div>
		</div>
		<div class="part-4">
			<div>
				<p class="box-title">Dormitorios</p>
				<p class="box-subtitle"><?= $dormitorios;?></p>
			</div>
		</div>
		<div class="part-3">
			<div>
				<p class="box-title">Ubicación</p>
				<p class="box-subtitle"><?= $ubicacion;?></p>
			</div>
		</div>
		<div class="part-4">
			<div>
				<p class="box-title">Precio</p>
				<p class="box-subtitle">Desde <?= $precio;?></p>
			</div>
		</div>
	</div>
</section>
