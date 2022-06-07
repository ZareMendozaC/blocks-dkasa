import * as React from "react"
import {Button} from '@wordpress/components';
import {MediaUpload} from '@wordpress/block-editor';
import internationalizationText from "../../../helper/InternationalizationText";
import noImage from "../../../../public/image/NoImage/no-image.jpeg";

const ImageUpload = ({setAttr, mediaId, mediaUrl}) => {

	const onSelectImage = (media) => {
		setAttr({
			mediaId: media.id,
			mediaUrl: media.url
		});
	};

	const quitImage = () => {
		setAttr({
			mediaId: null,
			mediaUrl: ""
		});
	}

	return (
		<div className="lia-recipe-image">
			<MediaUpload
				onSelect={onSelectImage}
				allowedTypes="image"
				value={mediaId}
				render={({open}) => (
					<>
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
						<Button
							variant="secondary"
							onClick={open}
						>
							{internationalizationText("Subir imagen")}
						</Button>
						<Button
							variant="secondary"
							onClick={quitImage}
							style={{marginLeft: "8px"}}
						>
							{internationalizationText("Quitar imagen")}
						</Button>
					</>
				)}
			/>
		</div>
	)
}
export default ImageUpload;
