import {PanelBody, PanelRow, TextControl,TextareaControl } from '@wordpress/components';
import TextEditor from "../../components/atoms/Text/TextEditor";
import SectionContainer from "../../components/atoms/Section/SectionContainer";
import Section from "../../components/atoms/Section/Section";
import internationalizationText from "../../helper/InternationalizationText";
import ImageUpload from "../../components/molecules/ImageUpload/ImageUpload";
import eventChangeAttr from "../../helper/eventChangeAttr";
import {
	useBlockProps,
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
} from '@wordpress/block-editor';
import getPaletteColors from "../../helper/getPaletteColors";
import { Flex, FlexItem } from '@wordpress/components';

const MapaBack = (props) => {

	const {
		attributes: attr,
		setAttributes: setAttr,
	} = props;

	const blockProps = useBlockProps();

	const styleBlock = {
		color: attr.textColor,
	};

	
	return (
		<Section blockProps={blockProps} styleEle={styleBlock}>
			<SectionContainer>
				<Flex className='lia-card__item flex-wrap-admin'>
					<FlexItem className='width-card-100'>
						<h4>Detalles Mapa</h4>
					</FlexItem>
					<FlexItem className='width-card-100'>
						<TextControl 
							label="Shortcode mapa" 
							onChange={(event) => eventChangeAttr(setAttr, {shortcodemapa: event})} 
							value={attr.shortcodemapa}
						/>

						<TextControl 
							label="Link Waze" 
							onChange={(event) => eventChangeAttr(setAttr, {linkwaze: event})} 
							value={attr.linkwaze}
						/>

<TextControl 
							label="Link quiero visitarlo" 
							onChange={(event) => eventChangeAttr(setAttr, {linkvisita: event})} 
							value={attr.linkvisita}
						/>
					</FlexItem>
				</Flex>
			</SectionContainer>

		</Section>

	);
}

export default MapaBack;
