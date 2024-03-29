import {useBlockProps} from '@wordpress/block-editor';
import TextEditor from "../../components/atoms/Text/TextEditor";
import Section from "../../components/atoms/Section/Section";
import SectionContainer from "../../components/atoms/Section/SectionContainer";
import eventChangeAttr from "../../helper/eventChangeAttr";
import ImageUpload from "../../components/molecules/ImageUpload/ImageUpload";
import FileUpload from '../../components/molecules/FileUpload/FileUpload';
import Grid from "../../components/molecules/Grid/Grid";
import Item from "../../components/atoms/Item/Item";
import { Flex, FlexItem, TextControl, Text } from '@wordpress/components';
import {ColorPalette, InspectorControls, RichText} from '@wordpress/block-editor';
import getPaletteColors from "../../helper/getPaletteColors";
const DescriptionUbicacionBack= (props) => {

	const {
		attributes: attr,
		setAttributes: setAttr,
	} = props;

	const blockProps = useBlockProps();
	console.log("props ubicacion",props);

	return (
		<Section blockProps={blockProps}>
			<SectionContainer>
				<Grid>
					<Item percentage={40} className="lia-text-center">
						<ImageUpload
								setAttr={setAttr}
								detail={{
									mediaUrl: attr.mediaUrl,
									mediaId: attr.mediaId,
									propertyUrl: "mediaUrl",
									propertyId: "mediaId"
								}}
							/>
					<TextControl 
							label="Link button vista panoramica" 
							onChange={(event) => eventChangeAttr(setAttr, {vistapano: event})} 
							value={attr.vistapano}
						/>
					</Item>
					<Item percentage={60}>
						<TextEditor
							tagEle="h2"
							eventEle={(event)=> eventChangeAttr(setAttr,{title: event})}
							data={ attr.title }
							placeholder="Titulo"
						/>
						<TextEditor
							tagEle="p"
							eventEle={(event)=> eventChangeAttr(setAttr,{content: event})}
							data={ attr.content }
							placeholder="Descripcion"
						/>
						<Grid>
							<Item percentage={50}>
								<TextEditor
									tagEle="p"
									eventEle={(event)=> eventChangeAttr(setAttr,{txtBtn: event})}
									data={ attr.txtBtn }
									placeholder="Texto tour"
								/>
								<TextEditor
									tagEle="p"
									eventEle={(event)=> eventChangeAttr(setAttr,{urlBtn: event})}
									data={ attr.urlBtn }
									placeholder="url tour"
								/>
							<ColorPalette
									onChange={(event) => eventChangeAttr(setAttr, {backgroundColor: event})}
									colors={getPaletteColors}
									value={attr.backgroundColor}
								/>
							</Item>
							<Item percentage={50}>
								<TextEditor
									tagEle="p"
									eventEle={(event)=> eventChangeAttr(setAttr,{txtBtnTwo: event})}
									data={ attr.txtBtnTwo }
									placeholder="Texto video"
								/>
								<TextEditor
									tagEle="p"
									eventEle={(event)=> eventChangeAttr(setAttr,{urlBtnTwo: event})}
									data={ attr.urlBtnTwo }
									placeholder="url video"
								/>
							</Item>
							<Item>
							<FileUpload
								setAttr={setAttr}
								detail={{
									mediaUrl: attr.mediaUrlpdf,
									mediaId: attr.mediaIdpdf,
									mediaName: attr.mediaName,
									propertyUrl: "mediaUrlpdf",
									propertyId: "mediaIdpdf",
									propertyName: "mediaName"
								}}
							/>
							</Item>
						</Grid>
						

					</Item>
					<Item>
					<ImageUpload
								setAttr={setAttr}
								detail={{
									mediaUrl: attr.mediaPanUrl,
									mediaId: attr.mediaPanId,
									propertyUrl: "mediaPanUrl",
									propertyId: "mediaPanId"
								}}
							/>
					</Item>
				</Grid>
			</SectionContainer>
		</Section>
	);
}

export default DescriptionUbicacionBack;