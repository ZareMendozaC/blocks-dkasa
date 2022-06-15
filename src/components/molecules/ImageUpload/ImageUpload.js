import {Button, Icon} from '@wordpress/components';
import {MediaUpload} from '@wordpress/block-editor';
import noImage from "../../../../public/image/NoImage/no-image2.jpg";
import intText from "../../../helper/intText";

const ImageUpload = ({setAttr, detail}) => {
	const {
		mediaUrl,
		mediaId,
		propertyUrl,
		propertyId
	} = detail;

	const onSelectImage = (media) => {
		setAttr({
			[propertyId]: media.id,
			[propertyUrl]: media.url
		});
	};

	const quitImage = () => {
		setAttr({
			[propertyId]: null,
			[propertyUrl]: ""
		});
	}

	return (
		<div className="pda-recipe-image">
			<MediaUpload
				onSelect={onSelectImage}
				allowedTypes="image"
				value={mediaId}
				render={({open}) => (
					<div className="pda-recipe-image">
						<div className="pda-image-upload pda-lheight-0">
							{
								mediaId ?
									<img
										className="pda-w-full"
										src={mediaUrl}
										alt={intText("Imagen subida")}
									/>
									:
									<img
										className="pda-w-full"
										src={noImage}
										alt={intText("No imagen")}
									/>
							}
						</div>
						<div className="pda-image-upload__hover pda-flex-center pda-lheight-0">
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
								<Icon icon="trash" style={{marginLeft:"0"}}/>
							</Button>
						</div>
					</div>
				)}
			/>
		</div>
	)
}
export default ImageUpload;