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
$backgroundColor2 = $attributes['backgroundColor'];
$link_transparencia = $attributes['link_transparencia'];
?>
<style>
    .btn-avance.slick-slide.slick-current p {
        background-color: <?= $backgroundColor2; ?>;
    }

    .btn-white-lg:hover {
        background: <?= $backgroundColor2; ?>;
        color: #FFFFFF;
        text-decoration: none !important;
        border: 0px !important;
    }
</style>

<div class="container-fluid contenedor-avance-de-obra mrg-top-80" id="avance-proyecto">
    <section class="row contenido-part1  no-padding no-margin">
        <div class="col-md-12 col-12 no-padding">
            <h2 class="subtitle-general" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200">Avance de obra</h2>
            <div class="line-h2" style="background-color: <?= $attributes['backgroundColor']; ?>;"></div>
            <p class="subtitle-des mrg-top-map" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200">Sé parte del día a día en el proceso de construcción de tu hogar. </p>

            <div id="slider-nav-avance" class="center-btn" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200">
                <?php
                $num = 1;
                ?>
                <?php if ($images) : ?>
                    <?php foreach ($images as $image) : ?>
                        <div class="btn-avance filter-listado indice-<?= $num; ?>" data-indice="indice-<?= $num; ?>">
                            <p class="btn-white-lg"><?= $image['fecha']; ?></p>
                        </div>
                        <?php
                        $num = $num + 1;
                        //jQuery('.slick-slide').not('.slick-cloned').children().length
                        ?>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>

        </div>
        <div class="col-md-12 col-12 no-padding column-slider mrg-r-l">
            <div class="slider-obra slider-avance-filtro">
                <?php
                $num = 1;
                ?>
                <?php if ($images) : ?>
                    <?php foreach ($images as $image) : ?>
                        <!--<img src="<?= $image['mediaUrl']; ?>" alt="" class="">-->
                        <div class="indice-<?= $num; ?>">
                            <iframe class="my-video" width="100%" height="" src="<?= $image['videoUrl']; ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <?php
                        $num = $num + 1;
                        //jQuery('.slick-slide').not('.slick-cloned').children().length
                        ?>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
            <?php if ($link_transparencia) : ?>
                <a class="btn-new-transp" href="<?= $link_transparencia; ?>" target="_blank" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200">Ver transparencia del proyecto</a>
            <?php endif; ?>
        </div>
    </section>
</div>