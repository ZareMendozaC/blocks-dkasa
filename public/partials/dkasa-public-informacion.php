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
$title = $attributes['title'];
$content = $attributes['content'];

$urlBtn = $attributes['urlBtn'];
$txtBtn = $attributes['txtBtn'];

$urlBtnTwo = $attributes['urlBtnTwo'];
$txtBtnTwo = $attributes['txtBtnTwo'];

$formulario = $attributes['formulario'];

$backgroundColor = $attributes['backgroundColor'];
?>
<style>
    .btn-green-lg{
        background-color:<?= $backgroundColor; ?> !important;
    }
    .is-active{
        background-color:<?= $backgroundColor; ?> !important;
        color: #fff !important;
        border: 0px !important;

}
</style>
<div class="separador-87">
        <div class="accordion" id="CotizaAqui">
                <div class="card">
                    <div class="card-header banner-color " id="heading" style="background-color:<?= $backgroundColor; ?>" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <h2 class="mb-0 my-container">
                            <button id="titlebtnInf" class="btn btn-link banner-color-button text-left collapsed" type="button" >
                            Quiero más información
                            </button>
                            <div>
                                <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5615 -2.13184e-07L25 2.4484L12.4989 15L1.0973e-06 2.44839L2.43854 -1.97239e-06L12.4989 10.1032L22.5615 -2.13184e-07Z" fill="white"/>
                                </svg>
                            </div>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse color-form" aria-labelledby="heading" data-parent="#CotizaAqui">
                    <div class="my-container">
                        <div class="card-body-form">
                            <?= $formulario;?>
                        </div>
                    </div>
                    </div>
                </div>
    </div>


</div>