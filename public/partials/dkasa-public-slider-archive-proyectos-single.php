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
$titulo = $attributes['titulo'];
$slides = $attributes['slides'];
?>

<section id="slider-archive-single-front" class="container-fluid">
    <div class="row">
        <div class="col-12 px-0 columna-1">
            <h2 class="titulo"><?= $titulo ?></h2>
        </div>
        <div class="col-12 px-0 columna-2">
            <div class="contenido-contenedor">
                <div id="slider-archive-single-slider">
                    <?php foreach ($slides as $slide) : ?>
                        <div class="slider-archive-single-slide">
                            <div class="slider-container">
                                <div class="columna-1">
                                    <div class="position-relative d-flex align-items-center">
                                        <img class="w-100" src="<?= $slide['mediaUrlLogo'] ?>" alt="">
                                        <div class="botones">
                                            <?php if ($slide['tour'] != '') : ?>
                                                <a class="tour" onMouseOver="this.style.backgroundColor='<?= $slide['backgroundColor'] ?>'" onMouseOut="this.style.backgroundColor='transparent'">
                                                    Tour virtual
                                                </a>
                                            <?php endif; ?>
                                            <?php if ($slide['video'] != '') : ?>
                                                <a class="video" onMouseOver="this.style.backgroundColor='<?= $slide['backgroundColor'] ?>'" onMouseOut="this.style.backgroundColor='transparent'">
                                                    Video
                                                </a>
                                            <?php endif; ?>
                                            <?php if ($slide['panoramica'] != '') : ?>
                                                <a class="panoramica" onMouseOver="this.style.backgroundColor='<?= $slide['backgroundColor'] ?>'" onMouseOut="this.style.backgroundColor='transparent'">
                                                    Panorámica
                                                </a>
                                            <?php endif; ?>
                                        </div>
                                        <div class="datos position-absolute">
                                            <div class="titulo" style="background-color:<?= $slide['backgroundColor'] ?>;">
                                                <h2><?= $slide['nombre'] ?></h2>
                                            </div>
                                            <div class="d-none d-md-block datos-principales">
                                                <p class="rotulo">Área total</p>
                                                <p class="datos-info"><?= $slide['area'] ?></p>
                                                <p class="rotulo">Dormitorios</p>
                                                <p class="datos-info"><?= $slide['dormitorios'] ?></p>
                                                <p class="rotulo">Ubicación</p>
                                                <p class="datos-info"><?= $slide['ubicacion'] ?></p>
                                                <p class="rotulo">Precio</p>
                                                <p class="datos-info"><?= $slide['precio'] ?></p>
                                                <a class="enlace" href="<?= $slide['enlace'] ?>" style="background-color:<?= $slide['backgroundColor'] ?>;">
                                                    <?= $slide['textoEnlace'] ?>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="estado">
                                            <p><?= $slide['estado'] ?></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="columna-2 d-block d-md-none ">
                                    <div class="datos-principales">
                                        <p class="rotulo">Área total</p>
                                        <p class="datos-info"><?= $slide['area'] ?></p>
                                        <p class="rotulo">Dormitorios</p>
                                        <p class="datos-info"><?= $slide['dormitorios'] ?></p>
                                        <p class="rotulo">Ubicación</p>
                                        <p class="datos-info"><?= $slide['ubicacion'] ?></p>
                                        <p class="rotulo">Precio</p>
                                        <p class="datos-info"><?= $slide['precio'] ?></p>
                                        <a class="enlace" href="<?= $slide['enlace'] ?>" style="background-color:<?= $slide['backgroundColor'] ?>;">
                                            <?= $slide['textoEnlace'] ?>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div id="slider-archive-single-dots">

                </div>
            </div>
        </div>
    </div>
</section>