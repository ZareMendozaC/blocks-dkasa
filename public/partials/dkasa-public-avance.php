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
        background-color:<?= $backgroundColor2; ?>;
    }
    .btn-white-lg:hover{
    background: <?= $backgroundColor2; ?>;
    color: #FFFFFF;
    text-decoration: none !important;
    border: 0px !important;
  }

</style>

<div class="my-container separador-avance" id="avance-proyecto">
    <section class="row no-padding no-margin">
            <div class="col-md-4 col-12 no-padding">
                <h2 class="subtitle-general" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200">Avance de obra</h2>
                <p class="subtitle-des" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200">Sé parte del día a día en el proceso de construcción de tu hogar. </p>

                    <div id="slider-nav-avance" class="center-btn slider-nav-avance" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200">
                        <?php
                            $num=1; 
                        ?>
                        <?php if($images) : ?>
                                <?php foreach ($images as $image): ?>
                                    <div class="btn-avance indice-<?= $num;?>">
                                        <p class="btn-white-lg"><?= $image['fecha'];?></p>
                                    </div>
                                    <?php
                                        $num=$num+1; 
                                        //jQuery('.slick-slide').not('.slick-cloned').children().length
                                    ?>
                                <?php endforeach; ?>
                        <?php endif;?>
                    </div>

            </div>
            <div class="col-md-8 col-12 no-padding column-slider mrg-r-l">
                <div class="slider-obra slider-for-avance" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200">
                        <?php if($images) : ?>
                                <?php foreach ($images as $image): ?>
                                    <!--<img src="<?= $image['mediaUrl'];?>" alt="" class="">-->
                                    <div>
                                        <iframe class="my-video" width="100%" height="" src="<?= $image['videoUrl'];?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>       
                                <?php endforeach; ?>
                        <?php endif;?>
                </div>
                <?php if($link_transparencia) : ?>
                    <a class="btn-transp" href="<?= $link_transparencia;?>" target="_blank" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200">Ver transparencia del proyecto</a>
                <?php endif;?>
            </div>
    </section>
</div>