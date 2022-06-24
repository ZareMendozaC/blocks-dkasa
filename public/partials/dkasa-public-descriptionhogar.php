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
?>

<div class="my-container mrg-r-l">
	<section class="row no-padding no-margin">
			<div class="col-md-12 col-12 no-padding mrg-btm-57">
				<h2 class="subtitle-general">Tu futuro Hogar</h2>
			</div>
			<div class="col-md-4 col-12 no-padding mrg-35_top order-2-res center-icons-f">
			<?php foreach ($images as $image): ?>
					<div class="col-md-12 col-6  box-carac_1"> 
						<div class="into-carac box-carac">
							<img src="<?= $image['mediaUrl'];?>" alt="" class="">
							<h3 class="subtitle-carac"><?= $image['title'];?></h3>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
			<div class="col-md-8 col-12 no-padding order-1-res">
			<img class="img-carac" src="<?= $mediaUrl;?>" alt="">
			</div>
	</section>
</div>