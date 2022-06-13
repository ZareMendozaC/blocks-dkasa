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
<div class="my-container">
<section class="row no-padding no-margin mrg-top-141">
	
        <div class="col-md-6 col-12 no-padding">
			<img class="img-des" src="<?= $mediaUrl;?>" alt="">
		</div>
		<div class="col-md-6 col-12 no-padding pdt-93">
			<h2 class="title-des"><?= $title;?></h2>
			<p class="subtitle-des"><?= $content?></p>
            <a href="<?= $urlBtn;?>" class="btn-quiero"><?= $txtBtn;?></a>
		</Button>
		</div>

	
</section>
</div>