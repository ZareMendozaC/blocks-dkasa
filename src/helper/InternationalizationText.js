import { __ } from '@wordpress/i18n';
import getDomain from "../components/organisms/Theme/Theme";

const internationalizationText = (data) => {

  return __(data,getDomain())

}
export default internationalizationText;
