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

$backgroundColor = $attributes['backgroundColor'];
$textColor = $attributes['textColor'];
$mediaUrlDibujo = $attributes['mediaUrlDibujo'];
$textoEnlace = $attributes['textoEnlace'];
$enlace = $attributes['enlace'];
$textoPequeño1 = $attributes['textoPequeño1'];
$cifraGrande1 = $attributes['cifraGrande1'];
$textoPequeño2 = $attributes['textoPequeño2'];
$cifraGrande2 = $attributes['cifraGrande2'];
?>

<section id="banner-rojo-front" class="container-fluid" style="background-color:<?= $backgroundColor; ?>">
    <div class="row">
        <div class="col-12 px-0">
            <div class="d-flex flex-no-wrap contenido-contenedor">
                <div class="columna-1">
                    <div class="image-container">
                        <img class="" src="<?= $mediaUrlDibujo; ?>" alt="Dibujo">
                    </div>
                    <div>
                        <p class="texto-pequeño" style="color: <?= $textColor ?>"><?= $textoPequeño1 ?></p>
                        <p class="texto-grande" style="color: <?= $textColor ?>"><?= $cifraGrande1 ?></p>
                        <p class="texto-pequeño" style="color: <?= $textColor ?>"><?= $textoPequeño2 ?></p>
                        <p class="texto-grande" style="color: <?= $textColor ?>"><?= $cifraGrande2 ?></p>
                    </div>
                </div>
                <div class="columna-2">
                    <a class="text-decoration-none" href="<?= $enlace ?>">
                        <p style="color: <?= $textColor ?>"><?= $textoEnlace ?></p>
                        <img src="<?= site_url("/").'wp-content/uploads/2022/06/enlace-banner-rojo.png' ?>" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>