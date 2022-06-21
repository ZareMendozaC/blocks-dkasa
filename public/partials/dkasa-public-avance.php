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

?>


<div class="my-container separador-avance">
    <section class="row no-padding no-margin">
            <div class="col-md-4 col-6 no-padding">
                <h2 class="subtitle-general">Avance de obra</h2>
                <p class="subtitle-des">Sé parte del día a día en el proceso de construcción de tu hogar. </p>
                <div class="center-btn pdt-34">
                    <img src="http://localhost/wordpress/wp-content/uploads/2022/06/Vector.png" alt="MDN">
                </div>
                    <div class="center-btn pdt-34">
                        <?php if($images) : ?>
                                <?php foreach ($images as $image): ?>
                                    <div class="btn-avance">
                                        <p class="btn-white-lg"><?= $image['fecha'];?></p>
                                    </div>
                                <?php endforeach; ?>
                        <?php endif;?>
                    </div>
                <div class="center-btn pdt-34">
                    <img src="https://apros-qa.net.pe/dkasa/wp-content/uploads/2022/06/Vector-1-1.png" alt="MDN">
                </div>
            </div>
            <div class="col-md-8 col-6 no-padding column-slider">
                <div class="slider-obra">
                        <?php if($images) : ?>
                                <?php foreach ($images as $image): ?>
                                    <img src="<?= $image['mediaUrl'];?>" alt="" class="">
                                <?php endforeach; ?>
                        <?php endif;?>
                </div>
            </div>
    </section>
</div>