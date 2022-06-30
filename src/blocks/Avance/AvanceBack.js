import {useState} from "@wordpress/element"
import { useBlockProps, ColorPalette} from '@wordpress/block-editor';
import Section from "../../components/atoms/Section/Section";
import SectionContainer from "../../components/atoms/Section/SectionContainer";
import { Button, __experimentalText as Text, TextControl} from '@wordpress/components';
import internationalizationText from "../../helper/InternationalizationText";
import ImageUploadRepeater from "../../components/molecules/ImageUpload/ImageUploadRepeater";
import Grid from "../../components/molecules/Grid/Grid";
import Item from "../../components/atoms/Item/Item";
import Title from "../../components/atoms/Title/Title";
import eventChangeAttr from "../../helper/eventChangeAttr";
import getPaletteColors from "../../helper/getPaletteColors";

const AvanceBack = (props) => {

	console.log("props",props);

	const {
		attributes: attr,
		setAttributes: setAttr,
	} = props;

	const [imagesArr, setImagesArr] = useState(attr.images);


	const blockProps = useBlockProps();

	const addImage = () =>{
		const itemObj = {
			mediaId: null,
			mediaUrl: "",
			fecha: "",
			videoUrl: ""
		}

		const newImagesArr = [...imagesArr, itemObj];

		setImagesArr(newImagesArr);
		setAttr({images: newImagesArr});
	}

	const trashImage = (index) =>{
		const newImagesArr = [...imagesArr];
		newImagesArr.splice(index,1);
		setImagesArr(newImagesArr);
		setAttr({images: newImagesArr});
	}

	const onChangeImageTitle = (event,index) =>{
		const newImagesArr = [...imagesArr];
		newImagesArr[index].fecha = event;
		setImagesArr(newImagesArr);
		setAttr({images: newImagesArr});
	}
	const onChangeVideo = (event,index) =>{
		const newImagesArr = [...imagesArr];
		newImagesArr[index].videoUrl = event;
		setImagesArr(newImagesArr);
		setAttr({images: newImagesArr});
	}

	return (
		<Section blockProps={blockProps}>
			<SectionContainer>
				<h4>Avance de obra</h4>
			</SectionContainer>
			<SectionContainer>
					<Text><strong>Link transparencia:</strong></Text>
					<TextControl 
							label="" 
							onChange={(event) => eventChangeAttr(setAttr, {link_transparencia: event})} 
							value={attr.link_transparencia}
						/>
			</SectionContainer>
			<SectionContainer>
						<label>Color boton fecha actual</label>
						<ColorPalette
							onChange={(event) => eventChangeAttr(setAttr, {backgroundColor: event})}
							colors={getPaletteColors}
							value={attr.backgroundColor}
						/>
			</SectionContainer>
			<SectionContainer>
				{
					imagesArr && imagesArr.map((imageArr, i)=>(
						<Grid key={i} classEle="lia-section-repeater lia-card__item">
							<Item percentage={80}>
								<Text><strong>Fecha:</strong></Text>
								<TextControl onChange={(event)=>onChangeImageTitle(event,i)} value={imageArr.fecha}/>
								
								<Text><strong>Video Url:</strong></Text>
								<TextControl onChange={(event)=>onChangeVideo(event,i)} value={imageArr.videoUrl}/>
								
								<div className="lia-text-right">
									<Button isDestructive onClick={()=>trashImage(i)}>
										Eliminar fecha
									</Button>
								</div>
							</Item>
						</Grid>
					))
				}
				<Button onClick={addImage} variant="primary">{internationalizationText("Agregar Fecha de obra")}</Button>
			</SectionContainer>
		</Section>
	);
}

export default AvanceBack;