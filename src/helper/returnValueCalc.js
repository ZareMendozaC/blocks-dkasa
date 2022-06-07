import convertPxToCalc from "./convertPxToCalc";

const returnValueCalc = (data, dataDefault = 16) =>{
	if(data){
		data = convertPxToCalc(data);
		return `calc(100vw * (calc(${data}/var(--width_base))))`;
	}
	return `calc(100vw * (calc(${dataDefault}/var(--width_base))))`;
}

export default returnValueCalc;
