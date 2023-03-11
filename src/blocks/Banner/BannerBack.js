import { PanelBody, PanelRow, TextControl } from "@wordpress/components";
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
} from "@wordpress/block-editor";
import getPaletteColors from "../../helper/getPaletteColors";
import { Flex, FlexItem } from "@wordpress/components";
import React, { useState } from "react";
import ImageUploadRepeater from "../../components/molecules/ImageUpload/ImageUploadRepeater";
import Grid from "../../components/molecules/Grid/Grid";
import Item from "../../components/atoms/Item/Item";
import Title from "../../components/atoms/Title/Title";
import { Button } from "@wordpress/components";

const BannerBack = (props) => {
	const { attributes: attr, setAttributes: setAttr } = props;

	const [imagesArr, setImagesArr] = useState(attr.images);

	const blockProps = useBlockProps();

	const addImage = () => {
		const itemObj = {
			mediaId: null,
			mediaUrl: "",
			title: "",
		};

		const newImagesArr = [...imagesArr, itemObj];

		setImagesArr(newImagesArr);
		setAttr({ images: newImagesArr });
	};

	const trashImage = (index) => {
		const newImagesArr = [...imagesArr];
		newImagesArr.splice(index, 1);
		setImagesArr(newImagesArr);
		setAttr({ images: newImagesArr });
	};

	const onChangeImageTitle = (event, index) => {
		const newImagesArr = [...imagesArr];
		newImagesArr[index].title = event;
		setImagesArr(newImagesArr);
		setAttr({ images: newImagesArr });
	};

	/* const styleBlock = {
		color: attr.textColor,
		backgroundImage: `url(${attr.mediaUrl})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		height: "400px"
	}; */
	const styleBlock2 = {
		backgroundColor: attr.backgroundColor,
		padding: "20px",
		bottom: "0",
	};

	return (
		<Section blockProps={blockProps}>
			<BlockControls>
				<AlignmentToolbar
					value={attr.alignment}
					onChange={(event) => eventChangeAttr(setAttr, { alignment: event })}
				/>
			</BlockControls>

			<InspectorControls key="setting">
				<PanelBody
					title={internationalizationText("Color Fondo bloque carácteristicas")}
					initialOpen={false}
				>
					<PanelRow>
						<ColorPalette
							onChange={(event) =>
								eventChangeAttr(setAttr, { backgroundColor: event })
							}
							colors={getPaletteColors}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={internationalizationText("Color de texto")}
					initialOpen={false}
				>
					<PanelRow>
						<ColorPalette
							onChange={(event) =>
								eventChangeAttr(setAttr, { textColor: event })
							}
							colors={getPaletteColors}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={internationalizationText("Imagen de fondo")}
					initialOpen={false}
				>
					<PanelRow>
						<ImageUpload
							setAttr={setAttr}
							detail={{
								mediaUrl: attr.mediaUrl,
								mediaId: attr.mediaId,
								propertyUrl: "mediaUrl",
								propertyId: "mediaId",
							}}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className="logo-admin">
				<SectionContainer></SectionContainer>
			</div>
			<SectionContainer styleEle={styleBlock2}>
			<TextEditor
							tagEle="h3"
							eventEle={(event)=> eventChangeAttr(setAttr,{titulo: event})}
							data={ attr.titulo }
							placeholder="Titulo"
						/>
				<ImageUpload
					setAttr={setAttr}
					detail={{
						mediaUrl: attr.mediaUrlLogo,
						mediaId: attr.mediaIdLogo,
						propertyUrl: "mediaUrlLogo",
						propertyId: "mediaIdLogo",
					}}
				/>
				<Flex>
					<FlexItem>
						<TextControl
							label="Área total"
							onChange={(event) => eventChangeAttr(setAttr, { area: event })}
							value={attr.area}
						/>
					</FlexItem>
					<FlexItem>
						<TextControl
							label="Dormitorios"
							onChange={(event) =>
								eventChangeAttr(setAttr, { dormitorios: event })
							}
							value={attr.dormitorios}
						/>
					</FlexItem>
					<FlexItem>
						<TextControl
							label="Ubicación"
							onChange={(event) =>
								eventChangeAttr(setAttr, { ubicacion: event })
							}
							value={attr.ubicacion}
						/>
					</FlexItem>
					<FlexItem>
						<TextControl
							label="Precio"
							onChange={(event) => eventChangeAttr(setAttr, { precio: event })}
							value={attr.precio}
						/>
					</FlexItem>
				</Flex>
				<Flex>
					<FlexItem>
						<TextControl
							label="Formulario"
							onChange={(event) =>
								eventChangeAttr(setAttr, { formulario: event })
							}
							value={attr.formulario}
						/>
					</FlexItem>
				</Flex>
				<Flex>
					<FlexItem>
						<TextEditor
							tagEle="p"
							eventEle={(event) =>
								eventChangeAttr(setAttr, { descripcion: event })
							}
							data={attr.descripcion}
							placeholder="Descripcion"
						/>
					</FlexItem>
				</Flex>
			</SectionContainer>
			{imagesArr &&
				imagesArr.map((imageArr, i) => (
					<Grid
						key={i}
						classEle="lia-section-repeater lia-card__item"
					>
						<Item
							percentage={20}
							classEle="lia-gap-8"
						>
							<ImageUploadRepeater
								variables={props}
								details={{
									index: i,
									datum: imageArr,
									setData: setImagesArr,
									data: imagesArr,
									namePropertyId: "mediaId",
									namePropertyUrl: "mediaUrl",
									namePropertyData: "images",
								}}
							/>
						</Item>
						<Item percentage={80}>
							<div className="lia-text-right">
								<Button
									isDestructive
									onClick={() => trashImage(i)}
								>
									Eliminar Imagen
								</Button>
							</div>
						</Item>
					</Grid>
				))}
			<Button
				onClick={addImage}
				variant="primary"
			>
				{internationalizationText("Agregar imagen")}
			</Button>
			<SectionContainer></SectionContainer>
		</Section>
	);
};

export default BannerBack;
