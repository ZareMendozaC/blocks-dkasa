import * as React from "react"
import {Flex,FlexItem} from "@wordpress/components"
import TextEditor from "../../atoms/Text/TextEditor";
import Title from "../../atoms/Title/Title";
import ImageUpload from "../../molecules/ImageUpload/ImageUpload";

const CardTwoColumn = ({setAttributes,title,ingredients,instructions,mediaID,mediaURL}) => {

	const onChangeTitle = ( value ) => {
		setAttributes( { title: value } );
	};

	const onChangeIngredients = ( value ) => {
		setAttributes( { ingredients: value } );
	};

	const onChangeInstructions = ( value ) => {
		setAttributes( { instructions: value } );
	};

  return(
	  <div>
		<TextEditor
			tagEle="h2"
			placeholder="Write Recipe title…"
			data={title}
			eventEle={onChangeTitle}
		/>
		<Flex>
			<FlexItem>
				<Title data="Ingredientes" tagEle="h3"/>
				<TextEditor
					tagEle="ul"
					multiline="li"
					placeholder="Write a list of ingredients…"
					data={ingredients}
					classEle="ingredients"
					eventEle={onChangeIngredients}
				/>
				<Title data="Instrucciones" tagEle="h3"/>
				<TextEditor
					tagEle="div"
					multiline="p"
					placeholder="Escribe tu lista de ingredientes"
					data={instructions}
					classEle="steps"
					eventEle={onChangeInstructions}
				/>
			</FlexItem>
			<FlexItem>
				<ImageUpload
					setAttributes={setAttributes}
					mediaURL={mediaURL}
					mediaID={mediaID}
				/>
			</FlexItem>
		</Flex>
	  </div>
  )
}
export default CardTwoColumn;
