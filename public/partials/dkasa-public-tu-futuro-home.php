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

$titulo = $attributes['titulo'];
$projects = $attributes['projects'];
?>
<section id="slider-futuro-home-front" class="container-fluid">
    <div class="row">
        <div class="col-12 px-0 columna-1">
            <h2 class="titulo"><?= $titulo ?></h2>
            <p class="aclaracion">Desliza a la <span>DERECHA</span> o <span>IZQUIERDA</span> para ver nuestros proyectos</p>
        </div>
        <div class="col-12 px-0">
			<div class="contenido-contenedor">
				<div id="slider-futuro-home">
				<?php foreach ($projects as $project) : ?>
						<div class="tf-card">
							<a href="<?= $project["enlace"]; ?>">
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
										<p class="nombre"><?= $project["nombre"]; ?></p>
										<p class="direccion"><?= $project["direccion"]; ?></p>
										<p class="distrito"><?= $project["distrito"]; ?></p>
										<p class="detalles"><?= $project["detalles"]; ?></p>
										<p class="metraje"><?= $project["metraje"]; ?></p>
										<p class="precio"><?= $project["precio"]; ?></p>
										<p class="estado"><?= $project["estado"]; ?></p>
										<img class="logo" src="<?= $project["mediaUrlLogo"]; ?>" alt="Dibujo">
										<div class="d-flex justify-content-end align-items-center">
											<p class="texto-enlace"><?= $project["textoEnlace"]; ?></p>
											<img src="<?= site_url("/").'wp-content/uploads/2022/06/Vector.png' ?>" alt="">
										</div>
									</div>
								</div>
							</a>
						</div>
				<?php endforeach; ?>
				</div>
			</div>
		</div>
    </div>
</section>