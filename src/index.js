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

import SliderArchiveProyectosBack from './blocks/SliderArchiveProyectos/SliderArchiveProyectosBack';
import SliderArchiveProyectosJson from '../config/slider-archive-proyectos-block.json'

import SliderArchiveProyectosSingleBack from './blocks/SliderArchiveProyectosSingle/SliderArchiveProyectosSingleBack';
import SliderArchiveProyectosSingleJson from '../config/slider-archive-proyectos-single-block.json'

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
	registerBlockType( DescriptionHogarJson.name, { edit: DescriptionHogarBack});
	registerBlockType( DescriptionUbicacionJson.name, { edit: DescriptionUbicacionBack});
	registerBlockType( SliderProyectoJson.name, { edit: SliderProyectoBack});
	registerBlockType( TestimoniosJson.name, { edit: TestimoniosBack });
	registerBlockType( SliderHomeJson.name, { edit:SliderHomeBack });
	registerBlockType( BannerInformacionJson.name, { edit: BannerInformacionBack});
	registerBlockType( BannerSimpleJson.name, { edit: BannerSimpleBack});
	registerBlockType( MapaJson.name, { edit: MapaBack});
	registerBlockType( SliderArchiveProyectosJson.name, { edit: SliderArchiveProyectosBack});
	registerBlockType( AvanceJson.name, { edit: AvanceBack});
	registerBlockType( SliderArchiveProyectosSingleJson.name, { edit: SliderArchiveProyectosSingleBack});
