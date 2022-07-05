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
</style>
<div class="my-container separador bg-ubicacion">
<section class="row no-padding no-margin mrg-top-141">
        <div class="col-md-6 col-12 column-img" id="column-img">
			<img class="img-ubic" src="<?= $mediaUrl;?>" alt="" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200">
			<?php if($vistapano) : ?>
				<a class="btn-pano" href="<?= $vistapano;?>">
					Vista panorámica
					<img class="icon-eye-pano" src="<?= site_url("/") . 'wp-content/uploads/2022/06/ojo.png' ?>" alt="">
				</a>
			<?php endif;?>
		</div>
		<div class="col-md-6 col-12 no-padding only-desk-b">
			<h2 class="title-des" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200"><?= $title;?></h2>
			<p class="subtitle-des" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200"><?= $content?></p>
            <div class="col-md-12 col-12 no-padding d-flex mrg-top-35 list-btns ">
			<a href="<?= $mediaUrlpdf;?>" class="btn-white" download="<?= $mediaName;?>" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200">Brochure</a>
			<a href="<?= $urlBtn;?>" class="btn-white" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200" ><?= $txtBtn;?></a>
			<a href="<?= $urlBtnTwo;?>" class="btn-white" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200"><?= $txtBtnTwo;?></a>
			</div>
		</div>
</section>
</div>