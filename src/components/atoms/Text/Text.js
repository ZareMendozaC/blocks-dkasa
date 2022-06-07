import React from 'react';

const Text = ({data, ...others}) =>{
	return (
		<p {...others}>{data}</p>
	)
}

export default Text;
