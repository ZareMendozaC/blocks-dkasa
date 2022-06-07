import * as React from "react"
import { RichText } from '@wordpress/block-editor';
import internationalizationText from "../../../helper/InternationalizationText";

const TextEditor = ({tagEle,eventEle,data,placeholder,multiline,classEle,styleEle,others}) => {

  const newOthers = {...others, style: styleEle};

  return(
	  <RichText
		  tagName={tagEle}
		  onChange={eventEle}
		  value={data}
		  placeholder={internationalizationText(placeholder)}
		  multiline={multiline}
		  className={classEle}
		  {...newOthers}
	  />
  )
}

TextEditor.defaultProps = {
  data: "",
  placeholder: ""
}

export default TextEditor;
