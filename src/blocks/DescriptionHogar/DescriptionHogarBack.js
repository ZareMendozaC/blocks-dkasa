import { useState } from "@wordpress/element";
import { useBlockProps, ColorPalette, InspectorControls } from "@wordpress/block-editor";
import Section from "../../components/atoms/Section/Section";
import SectionContainer from "../../components/atoms/Section/SectionContainer";
import {
	Button,
	__experimentalText as Text,
	TextControl,
	PanelBody,
	PanelRow
} from "@wordpress/components";
import eventChangeAttr from "../../helper/eventChangeAttr";

import internationalizationText from "../../helper/InternationalizationText";
import ImageUploadRepeater from "../../components/molecules/ImageUpload/ImageUploadRepeater";
import ImageUpload from "../../components/molecules/ImageUpload/ImageUpload";
import Grid from "../../components/molecules/Grid/Grid";
import Item from "../../components/atoms/Item/Item";
import getPaletteColors from "../../helper/getPaletteColors";

const DescriptionHogarBack = (props) => {
	console.log("props", props);

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

	return (
		<Section blockProps={blockProps}>
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
							value={attr.backgroundColor}
						/>
					</PanelRow>
				</PanelBody>
				</InspectorControls>
			<SectionContainer>
				{imagesArr &&
					imagesArr.map((imageArr, i) => (
						<Grid
							key={i}
							classEle="lia-section-repeater lia-card__item"
						>
							<Item
								percentage={15}
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
								<Text>
									<strong>Característica:</strong>
								</Text>
								<TextControl
									onChange={(event) => onChangeImageTitle(event, i)}
									value={imageArr.title}
								/>
								<div className="lia-text-right">
									<Button
										isDestructive
										onClick={() => trashImage(i)}
									>
										Eliminar
									</Button>
								</div>
							</Item>
						</Grid>
					))}
				<Button
					onClick={addImage}
					variant="primary"
				>
					{internationalizationText("+ Agregar")}
				</Button>
			</SectionContainer>
			<SectionContainer>
				<ImageUpload
					setAttr={setAttr}
					detail={{
						mediaUrl: attr.mediaUrl,
						mediaId: attr.mediaId,
						propertyUrl: "mediaUrl",
						propertyId: "mediaId",
					}}
				/>
			</SectionContainer>
		</Section>
	);
};

export default DescriptionHogarBack;
