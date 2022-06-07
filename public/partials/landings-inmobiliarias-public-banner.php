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
?>
<section class="lia-section-spacing lia-seccion-fondo" style="background-color: <?= $bgColor;?>;color: <?= $textColor;?>;background-image: url(<?= $mediaUrl;?>);">
	<div class="lia-section-container text-<?=$alignment;?>">
		<h2 class=""><?= $title;?></h2>
		<p><?= $content;?></p>
	</div>
</section>
