import {Button, Icon} from '@wordpress/components';
import {MediaUpload} from '@wordpress/block-editor';
import noImage from "../../../../public/image/NoImage/no-image2.jpg";
import intText from "../../../helper/intText";

const FileUpload = ({setAttr, detail}) => {
	const {
		mediaUrl,
		mediaId,
        mediaName,
		propertyUrl,
		propertyId,
        propertyName
	} = detail;

	const onSelectImage = (media) => {
		setAttr({
			[propertyId]: media.id,
			[propertyUrl]: media.url,
            [propertyName] : media.filename
		});
	};


	return (
		<div className="pda-recipe-image">
			<MediaUpload
				onSelect={onSelectImage}
				allowedTypes="application/pdf"
				value={mediaId}
				render={({open}) => (
					<div className="pda-recipe-image">
                        <a style={{color: 
                        "currentColor",fontSize: "15px",lineHeight:"17px", verticalAlign: "super",opacity: ".7"}} href={mediaUrl}>{mediaName}</a>
						<div className="pda-image-upload__hover pda-flex-center pda-lheight-0">
							<Button
								variant="primary"
								onClick={open}
                                label="Agregar archivo"
							>
								<Icon icon="media-document"/>
                                Agregar brochure
							</Button>
                            

						</div>
					</div>
				)}
			/>
		</div>
	)
}
export default FileUpload;