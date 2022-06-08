import { useBlockProps } from '@wordpress/block-editor';
import TextEditor from "../../components/atoms/Text/TextEditor";
import Section from "../../components/atoms/Section/Section";
import SectionContainer from "../../components/atoms/Section/SectionContainer";
import eventChangeAttr from "../../helper/eventChangeAttr";
import ImageUpload from "../../components/molecules/ImageUpload/ImageUpload";
import Grid from "../../components/molecules/Grid/Grid";
import Item from "../../components/atoms/Item/Item";

const DescriptionBack = (props) => {

	const {
		attributes: attr,
		setAttributes: setAttr,
	} = props;

	const blockProps = useBlockProps();

	return (
		<Section blockProps={blockProps}>
			<SectionContainer>
				<Grid>
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
							placeholder="Texto"
						/>
					</Item>
					<Item percentage={40} className="lia-text-center">
						<ImageUpload
							setAttr={setAttr}
							mediaId={attr.mediaId}
							mediaUrl={attr.mediaUrl}
						/>
					</Item>
				</Grid>
			</SectionContainer>
		</Section>
	);
}

export default DescriptionBack;