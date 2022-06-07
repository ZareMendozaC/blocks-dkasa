const Item = ({children, percentage,classEle, others}) => {
	return (
		<div className={`lia-item lia-item-${percentage} ${classEle}`} {...others}>
			{children}
		</div>
	)
}

export default Item;
