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

import Testimonios from './blocks/Testimonios/Testimonios';
import TestimoniosJson from '../config/testimonios-block.json';

import DescriptionBack from './blocks/Description/DescriptionBack';
import DescriptionJson from '../config/description-block.json'; 

import DescriptionHogarBack from './blocks/DescriptionHogar/DescriptionHogarBack';
import DescriptionHogarJson from '../config/descriptionhogar-block.json'; 

import DescriptionUbicacionBack from './blocks/DescriptionUbicacion/DescriptionUbicacionBack';
import DescriptionUbicacionJson from '../config/description-ubicacion-block.json'; 

import SliderProyectoBack from './blocks/SliderProyecto/SliderProyectos';
import SliderProyectoJson from '../config/slider-proyecto-block.json'; 

import BannerInformacionBack from './blocks/BannerInformacion/BannerInformacionBack';
import BannerInformacionJson from '../config/informacion-block.json'; 

import BannerSimpleBack from './blocks/BannerSimple/BannerSimpleBack';
import BannerSimpleJson from '../config/banner-simple-block.json'; 

import MapaBack from './blocks/Mapa/MapaBack';
import MapaJson from '../config/mapa-block.json';


import AvanceBack from './blocks/Avance/AvanceBack';
import AvanceJson from '../config/avance-block.json';

	registerBlockType( BannerJson.name, { edit: BannerBack });
	registerBlockType( DescriptionJson.name, { edit: DescriptionBack});
	registerBlockType( BannerRojoJson.name, { edit: BannerRojoBack});
	registerBlockType( TuFuturoJson.name, { edit: TuFuturoBack});
	registerBlockType( TestimoniosJson.name, { edit: Testimonios});
	registerBlockType( DescriptionHogarJson.name, { edit: DescriptionHogarBack});
	registerBlockType( DescriptionUbicacionJson.name, { edit: DescriptionUbicacionBack});
	registerBlockType( SliderProyectoJson.name, { edit: SliderProyectoBack});
	registerBlockType( BannerInformacionJson.name, { edit: BannerInformacionBack});
	registerBlockType( BannerSimpleJson.name, { edit: BannerSimpleBack});
	registerBlockType( MapaJson.name, { edit: MapaBack});
	registerBlockType( AvanceJson.name, { edit: AvanceBack});