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
<section id="slider-home-front" class="container-fluid">
    <div class="row">
        <div class="col-12 px-0 columna-1">
        </div>
        <div class="col-12 px-0 columna-2">
            <div class="contenido-contenedor">
                <div id="slider-home-slider">
                    <?php foreach ($slides as $slide) : ?>
                        <div class="slider-home-slide">
                            <a href="<?= $slide['enlace'] ?>">
                                <div class="slider-container">
                                    <div class="columna-1">
                                        <div class="position-relative d-flex align-items-center">
                                            <img class="d-none d-md-block w-100" src="<?= $slide['mediaUrlLogo'] ?>" alt="">
                                            <img class="d-block d-md-none w-100" src="<?= $slide['mediaUrlMovil'] ?>" alt="">
                                            <div class="datos position-absolute" data-aos="fade-left">
                                                <div class="datos-principales" style="background-color:<?= $slide['backgroundColor'] ?>;">
                                                    <img src="<?= $slide['mediaUrl'] ?>" alt="">
                                                    <p class="cifra"><?= $slide['cifra'] ?></p>
                                                    <p class="descripcion"><?= $slide['descripcion'] ?></p>
                                                    <div class="d-flex distrito">
                                                        <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18 8.36382C18 3.74101 13.9598 0 9 0C4.04025 0 0 3.74101 0 8.36382C0 8.47071 0 8.57759 0 8.68448C0 13.4409 8.33127 26.0267 8.33127 26.0267C8.33127 26.0267 15.1579 17.2354 17.3313 11.517C17.582 10.9558 17.7492 10.3679 17.8607 9.75334C17.9443 9.35252 18 9.00514 18 8.65776C18 8.65776 18 8.44399 18 8.3371V8.36382ZM8.83282 11.4635C6.91022 11.4635 5.32198 10.0206 5.32198 8.20349C5.32198 6.38643 6.88235 4.94347 8.83282 4.94347C10.7833 4.94347 12.3437 6.38643 12.3437 8.20349C12.3437 10.0206 10.7833 11.4635 8.83282 11.4635Z" fill="white" />
                                                        </svg>
                                                        <p><?= $slide['distrito'] ?></p>
                                                    </div>
                                                </div>
                                                <div class="enlace">
                                                    <div style="color:<?= $slide['backgroundColor'] ?>;">
                                                        <?= $slide['textoEnlace'] ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>