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
$urlBtnTwo = $attributes['urlBtnTwo'];
$txtBtnTwo = $attributes['txtBtnTwo'];
$backgroundColor = $attributes['backgroundColor'];
$vistapano = $attributes['vistapano'];
?>
<div class="my-container separador bg-ubicacion">
<section class="row no-padding no-margin mrg-top-141">
	
        <div class="col-md-6 col-12 no-padding column-img">
			<img class="img-ubic" src="<?= $mediaUrl;?>" alt="">
			<?php if($vistapano) : ?>
				<a class="btn-pano" href="<?= $vistapano;?>">
					Vista panorámica
					<img class="icon-eye-pano" src="<?= site_url("/") . 'wp-content/uploads/2022/06/ojo.png' ?>" alt="">
				</a>
			<?php endif;?>
		</div>
		<div class="col-md-6 col-12 no-padding ">
			<h2 class="title-des"><?= $title;?></h2>
			<p class="subtitle-des"><?= $content?></p>
            <div class="col-md-12 col-12 no-padding d-flex mrg-top-35 ">
			<a href="<?= $urlBtn;?>" class="btn-green" style="background-color:<?= $backgroundColor; ?>"><?= $txtBtn;?></a>
			<a href="<?= $urlBtnTwo;?>" class="btn-white"><?= $txtBtnTwo;?></a>
			</div>
		</div>
</section>
</div>