import {PanelBody, PanelRow, TextControl} from '@wordpress/components';
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

const BannerBack = (props) => {

	const {
		attributes: attr,
		setAttributes: setAttr,
	} = props;

	const blockProps = useBlockProps();

	const styleBlock = {
		color: attr.textColor,
		backgroundImage: `url(${attr.mediaUrl})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		height: "400px"
	};
    const styleBlock2 = {
		backgroundColor: attr.backgroundColor,
		padding: "20px",
		position: "absolute",
		bottom: "0"
	}
	
	return (
		<Section blockProps={blockProps} styleEle={styleBlock}>

			<BlockControls>
				<AlignmentToolbar
					value={attr.alignment}
					onChange={(event) => eventChangeAttr(setAttr, {alignment: event})}
				/>
			</BlockControls>

			<InspectorControls key="setting">
				<PanelBody title={internationalizationText("Color Fondo bloque carácteristicas")} initialOpen={false}>
					<PanelRow>
						<ColorPalette
							onChange={(event) => eventChangeAttr(setAttr, {backgroundColor: event})}
							colors={getPaletteColors}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={internationalizationText('Color de texto')} initialOpen={false}>
					<PanelRow>
						<ColorPalette
							onChange={(event) => eventChangeAttr(setAttr, {textColor: event})}
							colors={getPaletteColors}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={internationalizationText('Imagen de fondo')} initialOpen={false}>
					<PanelRow>
					<ImageUpload
							setAttr={setAttr}
							detail={{
								mediaUrl: attr.mediaUrl,
								mediaId: attr.mediaId,
								propertyUrl: "mediaUrl",
								propertyId: "mediaId"
							}}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className="logo-admin">
				<SectionContainer >
				<ImageUpload
							setAttr={setAttr}
							detail={{
								mediaUrl: attr.mediaUrlLogo,
								mediaId: attr.mediaIdLogo,
								propertyUrl: "mediaUrlLogo",
								propertyId: "mediaIdLogo"
							}}
						/>
				</SectionContainer>
			</div>
			<SectionContainer styleEle={styleBlock2}>
				<Flex>
					<FlexItem>
						<TextControl 
							label="Área total" 
							onChange={(event) => eventChangeAttr(setAttr, {area: event})} 
							value={attr.area}
						/>
					</FlexItem>
					<FlexItem>
						<TextControl 
							label="Dormitorios" 
							onChange={(event) => eventChangeAttr(setAttr, {dormitorios: event})} 
							value={attr.dormitorios}
						/>
					</FlexItem>
					<FlexItem>
						<TextControl 
							label="Ubicación" 
							onChange={(event) => eventChangeAttr(setAttr, {ubicacion: event})} 
							value={attr.ubicacion}
						/>
					</FlexItem>
					<FlexItem>
						<TextControl 
							label="Precio" 
							onChange={(event) => eventChangeAttr(setAttr, {precio: event})} 
							value={attr.precio}
						/>
					</FlexItem>
				</Flex>
			</SectionContainer>

		</Section>

	);
}

export default BannerBack;
