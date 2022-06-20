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

	$shortcodemapa=$attributes['shortcodemapa'];
	
?>

<div class="my-container">
    <section class="row no-padding no-margin">
            <div class="col-md-12 col-12 no-padding">
                <?= $shortcodemapa;?>
            </div>
    </section>
</div>