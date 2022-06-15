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
<section>
	<?php if($images) : ?>
		<div class="lia-section-container lia-carousel">
			<?php foreach ($images as $image): ?>
				<div>
					<img src="<?= $image['mediaUrl'];?>" alt="" class="w-100">
					<h3 class="bg-black p-3 position-absolute left-0 bottom-0 right-0 w-100 mb-0 text-white"><?= $image['title'];?></h3>
				</div>
			<?php endforeach; ?>
		</div>
	<?php endif;?>
</section>