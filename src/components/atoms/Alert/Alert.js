import {Animate, Notice} from "@wordpress/components";

const Alert = ({originEle, menssageEle, statusEle, onRemoveEle, isDismissibleEle, onDismissEle, typeEle}) => (
	<Animate type={typeEle} options={ { originEle } }>
		{({className}) => (
			<Notice
				className={className}
				status={statusEle}
				onRemove={onRemoveEle}
				isDismissible={isDismissibleEle}
				onDismiss={onDismissEle}
			>
				<p>{menssageEle}</p>
			</Notice>
		)}
	</Animate>
);
export default Alert;

Alert.defaultProps = {
  menssageEle: "Exito",
  statusEle: "success",
  typeEle: "slide-in"
}
