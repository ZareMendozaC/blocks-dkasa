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

<div class="separador-87">
        <div class="accordion" id="accordionInfo">
                <div class="card">
                    <div class="card-header banner-color " id="heading" style="background-color:<?= $backgroundColor; ?>">
                        <h2 class="mb-0 my-container">
                            <button class="btn btn-link  text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <p>Quiero más información</p>
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
<div class="my-container" id="planos-proyecto">
	<section class="row no-padding no-margin">
			<div class="col-md-4 col-12 no-padding mrg-35_top">
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