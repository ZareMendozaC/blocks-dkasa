import * as React from "react";
import { RichText } from '@wordpress/block-editor';

const TextFront = ({tagEle,data,others}) => {

  return(
	  <RichText.Content
		  tagName={tagEle}
		  value={ data }
		  { ...others }
	  />
  )
}
export default TextFront;
