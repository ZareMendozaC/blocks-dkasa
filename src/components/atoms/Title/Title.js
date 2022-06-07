import * as React from "react"

const Title = ({tagEle,data, ...others}) => {

  return(
    <>
		{
			(tagEle === "h1") &&
			<h1 className="wp-heading-inline" {...others}>{data}</h1>
		}
		{
			(tagEle === "h2") &&
			<h2 {...others}>{data}</h2>
		}
		{
			(tagEle === "h3") &&
			<h3 {...others}>{data}</h3>
		}
		{
			(tagEle === "h4") &&
			<h4 {...others}>{data}</h4>
		}
		{
			(tagEle !== "h1" && tagEle !== "h2" && tagEle !== "h3" && tagEle !== "h4") &&
			<div {...others}>{data}</div>
		}
    </>
  )
}
export default Title;
