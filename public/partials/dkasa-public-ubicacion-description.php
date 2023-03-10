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

$title = $attributes['title'];
$content = $attributes['content'];
$mediaUrl = $attributes['mediaUrl'];
$mediaUrlpdf = $attributes['mediaUrlpdf'];
$mediaName = $attributes['mediaName'];
$urlBtn = $attributes['urlBtn'];
$txtBtn = $attributes['txtBtn'];
$urlBtnTwo = $attributes['urlBtnTwo'];
$txtBtnTwo = $attributes['txtBtnTwo'];
$backgroundColor = $attributes['backgroundColor'];
$vistapano = $attributes['vistapano'];
$mediaPanUrl = $attributes['mediaPanUrl'];

?>
<style>
    .btn-white:hover {
        background-color: <?= $backgroundColor; ?>;
        color: #fff;
        border: 0px;
    }

    .btn-white:focus {
        background-color: <?= $backgroundColor; ?>;
        color: #fff;
        border: 0px;
    }

    .list-btns .btn-white:nth-child(1),
    .list-btns .btn-white:nth-child(2) {
        margin-right: calc(100vw * (calc(20 / var(--width_base))));
    }

    @media(max-width: 767px) {
        .btn-res-u {
            background-color: <?= $backgroundColor; ?>;
        }

        .btn-white,
        .btn-white:hover {
            width: calc(100vw * 147 / var(--width_base));
            height: calc(100vw * 35 / var(--width_base));
            font-size: calc(100vw * (14/var(--width_base)));
            line-height: calc(100vw * (17/var(--width_base)));
            border-radius: 7px;
        }
    }
</style>
<section class="container-fluid contenedor-inf-dondevivir">
    <div class="row contenido-part1">
        <div class="inf-dondevivir-1">
            <img class="img-dondevivir-1" src="<?= $mediaUrl; ?>" alt="" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200">
        </div>
        <div class="inf-dondevivir-2">
            <h2 class="title-des" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200"><?= $title; ?></h2>
            <div class="line-h2"></div>
            <p class="subtitle-des" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200"><?= $content ?></p>
            <div class="col-md-12 col-12 no-padding d-flex mrg-top-35 list-btns ">
                <?php if ($mediaUrlpdf) : ?>
                    <a href="<?= $mediaUrlpdf; ?>" class="btn-white" download="<?= $mediaName; ?>" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200">Descargar Brochure</a>
                <?php endif; ?>
                <?php if ($mediaPanUrl) : ?>
                    <a class="btn-pano" href="#" data-toggle="modal" data-target="#verPanoramica">
                        Vista panorámica
                    </a>
                <?php endif; ?>
                <?php if ($urlBtn) : ?>
                    <a href="<?= $urlBtn; ?>" data-bs-toggle="modal" data-bs-target="#verTour" class="btn-white" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200"><?= $txtBtn; ?></a>
                <?php endif; ?>
                <?php if ($urlBtnTwo) : ?>
                    <a href="<?= $urlBtnTwo; ?>" data-bs-toggle="modal" data-bs-target="#verVideo" class="btn-white" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200"><?= $txtBtnTwo; ?></a>
                <?php endif; ?>
            </div>

            <div class="modal fade" id="verVideo" tabindex="-1" aria-labelledby="verVideoLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="verVideoLabel">Modal video</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="verTour" tabindex="-1" aria-labelledby="verTourLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="verTourLabel">Modal tour</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade panoramica-modal" id="verPanoramica" tabindex="-1" aria-labelledby="verPanoramicaLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 2L14 13.5L25 25" stroke="white" stroke-width="4" />
                                    <path d="M25 2L13.5 13.5L2 25" stroke="white" stroke-width="4" />
                                </svg>
                            </button>
                            <div id="panoramica-imagen" data-image-pan="<?= $mediaPanUrl ?>">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>