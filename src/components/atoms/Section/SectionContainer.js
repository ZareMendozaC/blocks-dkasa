import * as React from "react"

const SectionContainer = ({styleEle, children}) => {
  const newBlockProps = {style: styleEle};
  return(
    <div  {...newBlockProps} className="lia-seccion-container">
		{children}
    </div>
  )
}
export default SectionContainer;


