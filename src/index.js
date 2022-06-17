import "./bloque1";
import "./bloque2";

import { registerBlockType } from '@wordpress/blocks';
import { render } from '@wordpress/element';
import './style.scss';

import BannerBack from './blocks/Banner/BannerBack';
import BannerJson from '../config/banner-block.json';

import BannerRojoBack from './blocks/BannerRojo/BannerRojoBack';
import BannerRojoJson from '../config/banner-rojo-block.json';

import TuFuturoBack from './blocks/TuFuturo/TuFuturo';
import TuFuturoJson from '../config/tu-futuro-block.json';

import DescriptionBack from './blocks/Description/DescriptionBack';
import DescriptionJson from '../config/description-block.json'; 

import DescriptionHogarBack from './blocks/DescriptionHogar/DescriptionHogarBack';
import DescriptionHogarJson from '../config/descriptionhogar-block.json'; 

import TestimoniosBack from './blocks/Testimonios/TestimoniosBack'
import TestimoniosJson from '../config/testimonios-block.json'

import DescriptionUbicacionBack from './blocks/DescriptionUbicacion/DescriptionUbicacionBack';
import DescriptionUbicacionJson from '../config/description-ubicacion-block.json';

import SliderHomeBack from './blocks/SliderHome/SliderHomeBack';
import SliderHomeJson from '../config/slider-home-block.json'

import SliderProyectoBack from './blocks/SliderProyecto/SliderProyectos';
import SliderProyectoJson from '../config/slider-proyecto-block.json'; 

	registerBlockType( BannerJson.name, { edit: BannerBack });
	registerBlockType( DescriptionJson.name, { edit: DescriptionBack});
	registerBlockType( BannerRojoJson.name, { edit: BannerRojoBack});
	registerBlockType( TuFuturoJson.name, { edit: TuFuturoBack});
	registerBlockType( DescriptionHogarJson.name, { edit: DescriptionHogarBack});
	registerBlockType( DescriptionUbicacionJson.name, { edit: DescriptionUbicacionBack});
	registerBlockType( SliderProyectoJson.name, { edit: SliderProyectoBack});
	registerBlockType( TestimoniosJson.name, { edit: TestimoniosBack });
	registerBlockType( SliderHomeJson.name, { edit:SliderHomeBack });
