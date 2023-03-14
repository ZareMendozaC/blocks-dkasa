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
$mediaUrl = $attributes['mediaUrl'];
$inicio = 100;
$background=$attributes['backgroundColor'];

?>

<section class="container-fluid contenedor-futuro-hogar">
    <div class="row contenido-part1">
        <div class="col-12 px-0 columna-1">
            <h2 class="title-futuro_h2">Tu futuro Hogar</h2>
            <div class="line-h2" style="background-color: <?= $background?>"></div>
        </div>
        <div class="col-12 px-0 columna-1 column-tufuturo">
            <?php foreach ($images as $image) : ?>
                <div class="into-carac box-carac" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="<?= $inicio; ?>">
                    <img src="<?= $image['mediaUrl']; ?>" alt="" class="">
                    <h3 class="subtitle-carac"><?= $image['title']; ?></h3>
                </div>
            <?php
                $inicio = $inicio + 100;
            endforeach; ?>
        </div>
        <div class="col-12 px-0 columna-1">
            <img class="img-future" src="<?= $mediaUrl ?>" alt="">
        </div>
    </div>
</section>