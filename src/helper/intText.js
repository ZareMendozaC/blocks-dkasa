import { __ } from '@wordpress/i18n';
import getDomain from "./getDomain";


const intText = (data) => {

	return __(data,getDomain())

}
export default intText;