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
$mediaUrlpdf = $attributes['mediaUrlpdf'];
$mediaName = $attributes['mediaName'];
$urlBtn = $attributes['urlBtn'];
$txtBtn = $attributes['txtBtn'];
$urlBtnTwo = $attributes['urlBtnTwo'];
$txtBtnTwo = $attributes['txtBtnTwo'];
$backgroundColor = $attributes['backgroundColor'];
$vistapano = $attributes['vistapano'];

?>
<style>
.btn-white:hover{
	background-color:<?= $backgroundColor; ?>;
	color: #fff;
	border: 0px;
}
.btn-white:focus{
	background-color:<?= $backgroundColor; ?>;
	color: #fff;
	border: 0px;
}
.list-btns .btn-white:nth-child(1), .list-btns .btn-white:nth-child(2){
	margin-right:  calc(100vw * (calc(20 / var(--width_base))));
}
@media(max-width: 767px) {
	.btn-res-u{
		background-color: <?= $backgroundColor; ?>;
	}
	.btn-white, .btn-white:hover {
    width: calc(100vw * 147 / var(--width_base));
    height: calc(100vw * 35 / var(--width_base));
	font-size: calc(100vw * (14/var(--width_base)));
    line-height: calc(100vw * (17/var(--width_base)));
	border-radius: 7px;
}
}
</style>
<div class="my-container separador bg-ubicacion">
<section class="row no-padding no-margin mrg-top-141">
        <div class="col-md-6 col-12 column-img" id="column-img">
			<img class="img-ubic" src="<?= $mediaUrl;?>" alt="" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200">
			<?php if($vistapano) : ?>
				<a class="btn-pano" href="<?= $vistapano;?>" data-bs-toggle="modal" data-bs-target="#verPanoramica">
					Vista panorámica
					<img class="icon-eye-pano" src="<?= site_url("/") . 'wp-content/uploads/2022/06/ojo.png' ?>" alt="">
				</a>
			<?php endif;?>
			<?php if($mediaUrlpdf) : ?>
					<a href="<?= $mediaUrlpdf;?>" class="btn-white btn-res-u btn_1" download="<?= $mediaName;?>" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200">Brochure</a>
			<?php endif;?>
			<?php if($urlBtn) : ?>
					<a href="<?= $urlBtn;?>" data-bs-toggle="modal" data-bs-target="#verTour"  class="btn-white btn-res-u btn_2" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200" ><?= $txtBtn;?></a>
			<?php endif;?>
			<?php if($urlBtnTwo) : ?>
					<a href="<?= $urlBtnTwo;?>" data-bs-toggle="modal" data-bs-target="#verVideo" class="btn-white btn-res-u btn_3" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200"><?= $txtBtnTwo;?></a>
			<?php endif;?>
			<?php if($vistapano) : ?>
					<a href="<?= $vistapano;?>" data-bs-toggle="modal" data-bs-target="#verPanoramica" class="btn-white btn-res-u btn_4" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200">Panorámica <img class="icon-eye-pano" src="<?= site_url("/") . 'wp-content/uploads/2022/06/ojo.png' ?>" alt=""></a>
			<?php endif;?>
		</div>
		<div class="col-md-6 col-12 no-padding only-desk-b">
			<h2 class="title-des" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200"><?= $title;?></h2>
			<p class="subtitle-des" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200"><?= $content?></p>
            <div class="col-md-12 col-12 no-padding d-flex mrg-top-35 list-btns ">
				<?php if($mediaUrlpdf) : ?>
					<a href="<?= $mediaUrlpdf;?>" class="btn-white" download="<?= $mediaName;?>" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200">Brochure</a>
				<?php endif;?>
				<?php if($urlBtn) : ?>
					<a href="<?= $urlBtn;?>" data-bs-toggle="modal" data-bs-target="#verTour" class="btn-white" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200" ><?= $txtBtn;?></a>
				<?php endif;?>
				<?php if($urlBtnTwo) : ?>
					<a href="<?= $urlBtnTwo;?>" data-bs-toggle="modal" data-bs-target="#verVideo" class="btn-white" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200"><?= $txtBtnTwo;?></a>
				<?php endif;?>
			</div>
		</div>

		<div class="modal fade" id="verVideo" tabindex="-1" aria-labelledby="verVideoLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="verVideoLabel">Modal video</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					...
				</div>
				</div>
			</div>
		</div>
		<div class="modal fade" id="verTour" tabindex="-1" aria-labelledby="verTourLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="verTourLabel">Modal tour</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					...
				</div>
				</div>
			</div>
		</div>
		<div class="modal fade" id="verPanoramica" tabindex="-1" aria-labelledby="verPanoramicaLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="verPanoramicaLabel">Modal Vista Panoramica</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					...
				</div>
				</div>
			</div>
		</div>
</section>
</div>