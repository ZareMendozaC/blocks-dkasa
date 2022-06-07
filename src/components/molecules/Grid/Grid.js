const Grid = ({children, classEle, wrapEle}) =>{
	return (
		<div className={`lia-grid ${classEle} ${wrapEle && "lia-wrap"}`}>
			{children}
		</div>
	)
}

export default Grid;
