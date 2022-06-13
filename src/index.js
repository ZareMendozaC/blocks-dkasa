import "./bloque1";
import "./bloque2";

import { registerBlockType } from '@wordpress/blocks';
import { render } from '@wordpress/element';
import './style.scss';

import BannerBack from './blocks/Banner/BannerBack';
import BannerJson from '../config/banner-block.json';

import DescriptionBack from './blocks/Description/DescriptionBack';
import DescriptionJson from '../config/description-block.json'; 


	registerBlockType( BannerJson.name, { edit: BannerBack });
	registerBlockType( DescriptionJson.name, { edit: DescriptionBack});
