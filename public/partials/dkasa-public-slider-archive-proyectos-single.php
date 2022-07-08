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
$slider_counter = 0;
$modal_counter = 0;
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
                                                <a class="tour" href="#" onMouseOver="this.style.backgroundColor='<?= $slide['backgroundColor'] ?>';this.style.borderColor='<?= $slide['backgroundColor'] ?>';" onMouseOut="this.style.backgroundColor='transparent';this.style.borderColor='#fff';" data-toggle="modal" data-target="#proyectoTour<?= $slider_counter ?>">
                                                    Tour virtual
                                                </a>
                                            <?php endif; ?>
                                            <?php if ($slide['video'] != '') : ?>
                                                <a class="video" href="#" onMouseOver="this.style.backgroundColor='<?= $slide['backgroundColor'] ?>';this.style.borderColor='<?= $slide['backgroundColor'] ?>';" onMouseOut="this.style.backgroundColor='transparent';this.style.borderColor='#fff';" data-toggle="modal" data-target="#proyectoVideo<?= $slider_counter ?>">
                                                    Video
                                                </a>
                                            <?php endif; ?>
                                            <?php if ($slide['panoramica'] != '') : ?>
                                                <a class="panoramica" href="#" onMouseOver="this.style.backgroundColor='<?= $slide['backgroundColor'] ?>';this.style.borderColor='<?= $slide['backgroundColor'] ?>';" onMouseOut="this.style.backgroundColor='transparent';this.style.borderColor='#fff';" data-toggle="modal" data-target="#proyectoPanoramica<?= $slider_counter ?>">
                                                    Panorámica
                                                </a>
                                            <?php endif; ?>
                                        </div>
                                        <div class="datos position-absolute">
                                            <div class="titulo" style="background-color:<?= $slide['backgroundColor'] ?>;">
                                                <h2><?= $slide['nombre'] ?></h2>
                                            </div>
                                            <div class="d-none d-md-block datos-principales">
                                                <p class="rotulo" data-aos="fade-zoom-in" data-aos-delay="2000"  data-aos-once="false">Área total</p>
                                                <p class="datos-info" data-aos="fade-zoom-in" data-aos-delay="2000"  data-aos-once="false"><?= $slide['area'] ?></p>
                                                <p class="rotulo" data-aos="fade-zoom-in" data-aos-delay="2000"  data-aos-once="false">Dormitorios</p>
                                                <p class="datos-info" data-aos="fade-zoom-in" data-aos-delay="2000"  data-aos-once="false"><?= $slide['dormitorios'] ?></p>
                                                <p class="rotulo" data-aos="fade-zoom-in" data-aos-delay="2000"  data-aos-once="false">Ubicación</p>
                                                <p class="datos-info" data-aos="fade-zoom-in" data-aos-delay="2000"  data-aos-once="false"><?= $slide['ubicacion'] ?></p>
                                                <p class="rotulo" data-aos="fade-zoom-in" data-aos-delay="2000"  data-aos-once="false">Precio</p>
                                                <p class="datos-info" data-aos="fade-zoom-in" data-aos-delay="2000"  data-aos-once="false"><?= $slide['precio'] ?></p>
                                                <a class="enlace" href="<?= $slide['enlace'] ?>" style="background-color:<?= $slide['backgroundColor'] ?>;"  data-aos="fade-zoom-in" data-aos-delay="2000"  data-aos-once="false">
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
                    <?php $slider_counter; endforeach; ?>
                </div>
                <div id="slider-archive-single-dots">

                </div>
                <div class="black-back d-none d-md-block">

                </div>
            </div>
        </div>
    </div>
    <?php foreach ($slides as $slide) :  ?>
        <?php if ($slide['tour'] != '') : ?>
            <div class="modal fade" id="proyectoTour<?= $modal_counter ?>" tabindex="-1" aria-labelledby="proyectoTour<?= $modal_counter ?>Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 2L14 13.5L25 25" stroke="white" stroke-width="4" />
                                    <path d="M25 2L13.5 13.5L2 25" stroke="white" stroke-width="4" />
                                </svg>
                            </button>
                            <iframe width="100%" height="100%" src="<?= $slide['tour'] ?>" title="Youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif ?>
        <?php if ($slide['video'] != '') : ?>
            <div class="modal fade" id="proyectoVideo<?= $modal_counter ?>" tabindex="-1" aria-labelledby="proyectoVideo<?= $modal_counter ?>Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 2L14 13.5L25 25" stroke="white" stroke-width="4" />
                                    <path d="M25 2L13.5 13.5L2 25" stroke="white" stroke-width="4" />
                                </svg>

                            </button>
                            <iframe width="100%" height="100%" src="<?= $slide['video'] ?>" title="Youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif ?>
        <?php if ($slide['panoramica'] != '') : ?>
            <div class="modal fade" id="proyectoPanoramica<?= $modal_counter ?>" tabindex="-1" aria-labelledby="proyectoPanoramica<?= $modal_counter ?>Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 2L14 13.5L25 25" stroke="white" stroke-width="4" />
                                    <path d="M25 2L13.5 13.5L2 25" stroke="white" stroke-width="4" />
                                </svg>

                            </button>
                            <iframe width="100%" height="100%" src="<?= $slide['panoramica'] ?>" title="Youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif ?>

    <?php $modal_counter++; endforeach; ?>
</section>