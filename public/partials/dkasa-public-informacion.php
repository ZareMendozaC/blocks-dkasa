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
$title = $attributes['title'];
$content = $attributes['content'];

$urlBtn = $attributes['urlBtn'];
$txtBtn = $attributes['txtBtn'];

$urlBtnTwo = $attributes['urlBtnTwo'];
$txtBtnTwo = $attributes['txtBtnTwo'];

$formulario = $attributes['formulario'];

$backgroundColor = $attributes['backgroundColor'];
?>
<style>
    .btn-green-lg{
        background-color:<?= $backgroundColor; ?> !important;
    }
</style>
<div class="separador-87">
        <div class="accordion" id="accordionInfo">
                <div class="card">
                    <div class="card-header banner-color " id="heading" style="background-color:<?= $backgroundColor; ?>">
                        <h2 class="mb-0 my-container">
                            <button class="btn btn-link  text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <p>Quiero más información</p>
                            <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5615 -2.13184e-07L25 2.4484L12.4989 15L1.0973e-06 2.44839L2.43854 -1.97239e-06L12.4989 10.1032L22.5615 -2.13184e-07Z" fill="white"/>
</svg>

                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse color-form" aria-labelledby="heading" data-parent="#accordionInfo">
                    <div class="my-container">
                        <div class="card-body-form">
                            <?= $formulario;?>
                        </div>
                    </div>
                    </div>
                </div>
    </div>


</div>
<div class="my-container mrg-r-l" id="planos-proyecto">
	<section class="row no-padding no-margin">
			<div class="col-md-4 col-12 no-padding mrg-35_top padt-r-l-30">
                    <h2 class="subtitle-general">Tu sueño inicia aquí </h2>
                    <p class="subtitle-des">Selecciona la cantidad de dormitorios que necesitas.</p>
                    <div class="col-md-12 col-12 no-padding">
                        <div class="center-btn pdt-34">
                            <a href="" class="btn-green-lg">2 Dormitorios</a>
                            <a href="" class="btn-white-lg mrg-18-p">3 Dormitorios</a>
                        </div>
                    </div>
			</div>
			<div class="col-md-8 col-12 no-padding">
                <?php if($images) : ?>
                    <div class="lia-section-container lia-carousel carousel-planos">
                        <?php foreach ($images as $image): ?>
                                <img src="<?= $image['mediaUrl'];?>" alt="" class="img-plano">
                        <?php endforeach; ?>
                    </div>
                <?php endif;?>
			</div>


	</section>
</div>