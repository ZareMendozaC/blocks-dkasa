import {__experimentalText as Text, Icon} from "@wordpress/components";
import CheckIcons from "../Icons/CheckIcons";
import CloseIcons from "../Icons/CloseIcons";

const AlertValidation = ({typeEle, textEle}) => {

	let iconEle;
	switch (typeEle){
		case "check": iconEle = <CheckIcons />
			break;
		case "close": iconEle = <CloseIcons />
			break;
		case "error": iconEle = <CloseIcons />
			break;
	}

  return(
	  <Text className="lia-iflex-items-center"><Icon icon={iconEle} size={30}/> <span className="lia-ml-8">{textEle}</span></Text>
  )
}
export default AlertValidation;

AlertValidation.defaultProps = {
	typeEle: "check"
}
