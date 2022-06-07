import * as React from "react"
import internationalizationText from "../../../helper/InternationalizationText";
import { MediaUpload } from '@wordpress/block-editor';
import { Button, Icon } from '@wordpress/components';
import noImage from "../../../../public/image/NoImage/no-image.jpeg"

const ImageUploadRepeater = ({variables, details}) => {

	const {
		setAttributes: setAttr
	} = variables;

	const {
		datum,
		data,
		namePropertyId,
		namePropertyUrl,
		index,
		setData,
		namePropertyData
	} = details;

	const mediaId = datum[namePropertyId];
	const mediaUrl = datum[namePropertyUrl];

const onChangeImage = (media) =>{
	const newImagesArr = [...data];
	newImagesArr[index][namePropertyId] = media.id;
	newImagesArr[index][namePropertyUrl] = media.url;
	setData(newImagesArr);
	setAttr({[namePropertyData]: newImagesArr});
}

const quitImage = () => {
	const newImagesArr = [...data];
	newImagesArr[index][namePropertyId] = null;
	newImagesArr[index][namePropertyUrl] = "";
	setData(newImagesArr);
	setAttr({[namePropertyData]: newImagesArr});
}

  return(
	  <div>
		  <MediaUpload
			  onSelect={onChangeImage}
			  allowedTypes="image"
			  value={ mediaId }
			  render={ ( { open } ) => (
				  <div className="lia-recipe-image">
					  <div className="lia-image-upload lia-lheight-0">
						  {
							  mediaId ?
								  <img
									  className="lia-w-full"
									  src={mediaUrl}
									  alt={internationalizationText("Imagen subida")}
								  />
								  :
								  <img
									  className="lia-w-full"
									  src={noImage}
									  alt={internationalizationText("No imagen")}
								  />
						  }
					  </div>
					  <div className="lia-image-upload__hover lia-flex-center lia-lheight-0">
						  <Button
							  variant="primary"
							  onClick={open}
						  >
							  <Icon icon="upload"/>
						  </Button>
						  <Button
							  variant="primary"
							  isDestructive
							  onClick={quitImage}
							  style={{margin: "8px"}}
						  >
							  <Icon icon="trash"/>
						  </Button>
					  </div>
				  </div>
			  ) }
		  />
	  </div>
  )
}
export default ImageUploadRepeater;
