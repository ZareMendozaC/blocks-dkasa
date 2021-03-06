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

const BannerSimpleBack = (props) => {

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
				<Flex>
					<FlexItem>
						<TextControl 
							label="Nombre del Proyecto" 
							onChange={(event) => eventChangeAttr(setAttr, {nombreproyecto: event})} 
							value={attr.nombreproyecto}
						/>
					</FlexItem>
					<FlexItem>
						<TextEditor
							tagEle="p"
							eventEle={(event)=> eventChangeAttr(setAttr,{frase: event})}
							data={ attr.frase }
							placeholder="Frase"
						/>
					</FlexItem>
				</Flex>
			</SectionContainer>

		</Section>

	);
}

export default BannerSimpleBack;
