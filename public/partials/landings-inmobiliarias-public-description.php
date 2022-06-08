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

?>
<section class="lia-section-spacing ">
	<div class="lia-section-container row">
		<div class="col-md-6 col-12">
			<h2><?= $title;?></h2>
			<p><?= $content?></p>
		</div>
		<div class="col-md-6 col-12">
			<img src="<?= $mediaUrl;?>" alt="" class="w-100">
		</div>
	</div>
</section>