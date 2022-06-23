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

<div class="my-container separador-avance">
    <section class="row no-padding no-margin">
            <div class="col-md-4 col-6 no-padding">
                <h2 class="subtitle-general">Avance de obra</h2>
                <p class="subtitle-des">Sé parte del día a día en el proceso de construcción de tu hogar. </p>

                    <div class="center-btn slider-nav-avance">
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
            <div class="col-md-8 col-6 no-padding column-slider">
                <div class="slider-obra slider-for-avance">
                        <?php if($images) : ?>
                                <?php foreach ($images as $image): ?>
                                    <!--<img src="<?= $image['mediaUrl'];?>" alt="" class="">-->
                                    <div>
                                        <iframe class="my-video" width="100%" height="" src="<?= $image['videoUrl'];?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>       
                                <?php endforeach; ?>
                        <?php endif;?>
                </div>
            </div>
    </section>
</div>