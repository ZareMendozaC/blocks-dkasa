import {PanelBody, PanelRow} from '@wordpress/components';
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

const BannerBack = (props) => {

	const {
		attributes: attr,
		setAttributes: setAttr,
	} = props;

	const blockProps = useBlockProps();

	const styleBlock = {
		backgroundColor: attr.backgroundColor,
		color: attr.textColor,
		backgroundImage: `url(${attr.mediaUrl})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center"
	};

	return (
		<Section blockProps={blockProps} styleEle={styleBlock}>

			<BlockControls>
				<AlignmentToolbar
					value={attr.alignment}
					onChange={(event) => eventChangeAttr(setAttr, {alignment: event})}
				/>
			</BlockControls>

			<InspectorControls key="setting">
				<PanelBody title={internationalizationText("Color de Fondo")} initialOpen={false}>
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
							mediaId={attr.mediaId}
							mediaUrl={attr.mediaUrl}
						/>
					</PanelRow>
				</PanelBody>

			</InspectorControls>

			<SectionContainer>
				<TextEditor
					tagEle="h2"
					eventEle={(event) => eventChangeAttr(setAttr, {title: event})}
					data={attr.title}
					placeholder="Titulo"
					styleEle={{textAlign: attr.alignment}}
				/>
				<TextEditor
					tagEle="p"
					eventEle={(event) => eventChangeAttr(setAttr, {content: event})}
					data={attr.content}
					styleEle={{textAlign: attr.alignment}}
					placeholder="Texto"
				/>
			</SectionContainer>

		</Section>
	);
}

export default BannerBack;
