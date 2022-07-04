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
$slider_counter = 0;
$modal_counter = 0;
?>
<section id="testimonios-front" class="position-relative container-fluid">
    <div class="row">
        <div class="col-12 px-0 columna-1">
            <img src="<?= site_url("/") . 'wp-content/uploads/2022/06/Frame-test.png' ?>" alt="">
        </div>
        <div class="col-12 px-0 columna-2">
            <div class="contenido-contenedor">
                <div id="testimonios-slider">
                    <?php foreach ($testimonials as $testimony) : $slider_counter++; ?>
                        <div class="testimonios-slide">
                            <div class="slider-container">
                                <div class="columna-1" data-aos="fade-zoom-in" data-aos-duration="2000" data-aos-delay="750">
                                    <div class="position-relative">
                                        <img src="<?= $testimony['mediaUrl'] ?>" alt="">
                                        <div class="nombre position-absolute">
                                            <p><?= $testimony['nombre'] ?></p>
                                        </div>
                                    </div>
                                    <p class="proyecto"><?= $testimony['proyecto'] ?></p>
                                </div>
                                <div class="columna-2" data-aos="fade-zoom-in" data-aos-duration="2000" data-aos-delay="750">
                                    <p class="descripcion">
                                        <?= $testimony['descripcion'] ?>
                                    </p>
                                    <!-- Button trigger modal -->
                                    <a class="texto-enlace" data-toggle="modal" data-target="#testimonioModal<?= $slider_counter ?>">
                                        <?= $testimony['textoEnlace'] ?>
                                    </a>

                                </div>
                            </div>
                            <img data-aos="fade-zoom-in" data-aos-duration="2000" data-aos-delay="750" class="comilla-grande" src="<? site_url('/') ?>wp-content/uploads/2022/07/Comilla-grande.png" alt="">
                            <img data-aos="fade-zoom-in" data-aos-duration="2000" data-aos-duration="750" class="comilla-chica" src="<? site_url('/') ?>wp-content/uploads/2022/07/Comilla-chica.png" alt="">
                            
                        </div>
                    <?php endforeach; ?>
                </div>
                <div id="testimonios-dots">

                </div>
            </div>
        </div>
    </div>
    <?php foreach ($testimonials as $testimony) : $modal_counter++; ?>

    <div class="modal fade" id="testimonioModal<?= $modal_counter ?>" tabindex="-1" aria-labelledby="testimonioModal<?= $modal_counter ?>Label" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="testimonioModal<?= $modal_counter ?>Label">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            ...
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php endforeach; ?>
</section>