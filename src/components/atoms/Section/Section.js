import * as React from "react"

const Section = ({blockProps, styleEle, children}) => {

  const newBlockProps = {...blockProps, style: styleEle};

  return(
    <section {...newBlockProps}>
		{children}
    </section>
  )
}
export default Section;
