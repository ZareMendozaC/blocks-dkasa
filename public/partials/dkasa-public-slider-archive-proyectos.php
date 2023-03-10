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
<section id="slider-proyectos" class="container-fluid">
    <img class="bg-proyectos" src="https://www.dkasa.com.pe/wp-content/uploads/2023/03/Rectangle-3779.png" alt="">
    <img class="arrows-res" src="https://www.dkasa.com.pe/wp-content/uploads/2023/03/Group-9.png" alt="">
    <img class="point-res" src="https://www.dkasa.com.pe/wp-content/uploads/2023/03/publishmedia-dots-2.png" alt="">
    <img class="arrows-desk" src="https://www.dkasa.com.pe/wp-content/uploads/2023/03/Group-10-1.png" alt="">
    <img class="point-desk" src="https://www.dkasa.com.pe/wp-content/uploads/2023/03/publishmedia-dots-2-1.png" alt="">
    <div class="row">
        <div class="col-12 px-0 columna-1">
            <h1 class="title-pro_1">Transformamos espacios en hogares para la familia peruana</h1>
        </div>
        <div class="col-12 px-0 columna-2 ver-desktop">
            <div class="slider-proyectos_1">
                <?php foreach ($slides as $slide) : ?>
                    <div class="card-proyectos_1">
                        <div class="position-relative d-flex align-items-center">
                            <img class="d-none d-md-block w-100" src="<?= $slide['mediaUrlLogo'] ?>" alt="">
                            <img class="d-block d-md-none w-100" src="<?= $slide['mediaUrlMovil'] ?>" alt="">
                            <div class="datos-p position-absolute" data-aos="fade-right" data-aos-duration="2000">
                                <div class="datos-principales-p" style="background-color:<?= $slide['backgroundColor'] ?>e0;">
                                    <p class="nombre" data-aos="fade-zoom-in" data-aos-delay="2000"><?= $slide['nombre'] ?></p>
                                    <p class="descripcion" data-aos="fade-zoom-in" data-aos-delay="2000"><?= $slide['descripcion'] ?></p>
                                    <p class="direccion" data-aos="fade-zoom-in" data-aos-delay="2000"><?= $slide['direccion'] ?></p>
                                </div>
                                <div class="enlace" style="background-color:<?= $slide['backgroundColor'] ?>;" data-aos="fade-zoom-in" data-aos-delay="2000">
                                    <p>
                                        <?= $slide['textoEnlace'] ?>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
        <div class="col-12 px-0 columna-2 ver-responsive">
            <div class="slider-proyectos_3">
                <?php foreach ($slides as $slide) : ?>
                    <a href="<?= $slide['enlace'] ?>">
                        <div class="card-proyectos_res">
                            <div class="fondo-abs" style="background-image: url(<?= $slide['mediaUrlMovil'] ?>); background-size: cover;">
                                <p class="etiqueta-white"><?= $slide['nombre'] ?></p>
                                <p class="etiqueta-black">San Miguel</p>
                            </div>
                            <div class="part-color" style="background-color:<?= $slide['backgroundColor'] ?>e0;">
                                <p class="title-color"><?= $slide['descripcion'] ?></p>
                                <p class="direction-color"><?= $slide['direccion'] ?></p>
                            </div>
                        </div>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
</section>