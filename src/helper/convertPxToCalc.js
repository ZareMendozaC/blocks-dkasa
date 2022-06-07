const convertPxToCalc = (data) => {
	if(data){
		return data.replace(/[px|rem|em]+/g,"");
	}
	return 0;
}

export default convertPxToCalc;
