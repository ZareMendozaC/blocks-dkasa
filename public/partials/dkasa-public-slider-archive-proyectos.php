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

$slides = $attributes['slides'];
?>
<section id="slider-archive-front" class="container-fluid">
    <div class="row">
        <div class="col-12 px-0 columna-1">
        </div>
        <div class="col-12 px-0 columna-2">
            <div class="contenido-contenedor">
                <div id="slider-archive-slider">
                    <?php foreach ($slides as $slide) : ?>
                        <div class="slider-archive-slide">
                            <div class="slider-container">
                                <div class="columna-1">
                                    <div class="position-relative d-flex align-items-center">
                                        <img class="w-100" src="<?= $slide['mediaUrlLogo'] ?>" alt="">
                                        <div class="datos position-absolute">
                                            <div class="datos-principales" style="background-color:<?= $slide['backgroundColor'] ?>e0;">
                                                <p class="nombre"><?= $slide['nombre'] ?></p>
                                                <p class="descripcion"><?= $slide['descripcion'] ?></p>
                                            </div>
                                            <div class="enlace">
                                                <a style="color:<?= $slide['backgroundColor'] ?>;" href="#">
                                                <?= $slide['textoEnlace'] ?>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>