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

$testimonials = $attributes['testimonials'];
?>
<section id="testimonios-front" class="container-fluid">
    <div class="row">
        <div class="col-12 px-0 columna-1">
            <img src="<?= site_url("/") . 'wp-content/uploads/2022/06/Frame-test.png' ?>" alt="">
        </div>
        <div class="col-12 px-0 columna-2">
            <div class="contenido-contenedor">
                <div id="testimonios-slider">
                    <?php foreach ($testimonials as $testimony) : ?>
                        <div class="testimonios-slide">
                            <div class="slider-container">
                                <div class="columna-1">
                                    <div class="position-relative">
                                        <img src="<?= $testimony['mediaUrl'] ?>" alt="">
                                        <div class="nombre position-absolute">
                                            <p ><?= $testimony['nombre'] ?></p>
                                        </div>
                                    </div>
                                    <p class="proyecto"><?= $testimony['proyecto'] ?></p>
                                </div>
                                <div class="columna-2">
                                    <p class="descripcion">
                                        <?= $testimony['descripcion'] ?>
                                    </p>
                                    <a class="texto-enlace" href="">
                                        <?= $testimony['textoEnlace'] ?>
                                    </a>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div id="testimonios-dots">

                </div>
            </div>
        </div>
    </div>
</section>