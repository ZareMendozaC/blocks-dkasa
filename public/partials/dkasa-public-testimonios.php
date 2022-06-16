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

$testimonios = $attributes['testimonios'];
?>
<section id="testimonios-front" class="container-fluid">
	<div class="row">
		<div class="col-12 px-0">
			<img src="<?= site_url("/").'wp-content/uploads/2022/06/Frame-test.png' ?>" alt="">
		</div>
		<div class="col-12 px-0">
			<div class="contenido-contenedor">
				<?php foreach ($testimonios as $testimonio) : ?>
					<div>
						<img src="<?=  $testimonio['mediaUrl'] ?>" alt="">
						<p><?=  $testimonio['nombre'] ?></p>
						<p><?=  $testimonio['proyecto'] ?></p>
					</div>
					<div>
						<p>
							<?= $testimonio['detalle'] ?>
						</p>
						<a href="">
							<?= $testimonio['textoEnlace'] ?>
						</a>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>