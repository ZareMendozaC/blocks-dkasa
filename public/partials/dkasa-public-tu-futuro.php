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

$projects = $attributes['projects'];
var_dump($projects);
?>
<section id="tu-futuro-front" class="container-fluid">
	<div class="row">

		<div class="col-12 px-0">
			<h2>Tu futuro hogar</h2>
		</div>
		<div class="col-12 px-0">
			<div class="contenido-contenedor">
				<?php foreach ($projects as $project) : ?>
					<div class="tf-card">
						<a href="#">
							<div class="td-card-front">
								<div>
									<img class="" src="<?= $project["mediaUrl"]; ?>" alt="Dibujo">
								</div>
								<div class="estado">
									<p><?= $project["estado"]; ?></p>
								</div>
							</div>
							<div class="tf-card-back">
								<div>
									<p><?= $project["nombre"]; ?></p>
									<p><?= $project["direccion"]; ?></p>
									<p><?= $project["detalles"]; ?></p>
									<p><?= $project["metraje"]; ?></p>
									<p><?= $project["precio"]; ?></p>
									<p><?= $project["estado"]; ?></p>
									<img class="" src="<?= $project["mediaUrlLogo"]; ?>" alt="Dibujo">
									<p><?= $project["textoEnlace"]; ?></p>
								</div>
							</div>
						</a>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
		<div class="col-12 px-0">
			<p>¡Quiero ver más!</p>
		</div>
	</div>
</section>