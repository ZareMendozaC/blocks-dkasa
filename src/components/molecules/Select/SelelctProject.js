import {useEffect, useState} from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
import {Spinner, SelectControl} from "@wordpress/components";
import AlertValidation from "../../atoms/Alert/AlertValidation";
import internationalizationText from "../../../helper/InternationalizationText";


const SelectProject = ({setAttr, attr}) => {

	const [proyectos, setProyectos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [idProjectValue, setIdProjectValue] = useState("");

	useEffect(() => {

		apiFetch({
			path: 'landings-inmobiliarias/v1/quoter-projects'
		})
			.then((datos) => {
				const {data} = JSON.parse(datos);
				setProyectos(data);
				setLoading(false);
				setIdProjectValue(attr?.idProject);
			});

	}, []);

	const onChangeSelect = (event) => {
		setIdProjectValue(event);
		setAttr({idProject: event});
	}

	return (
		<div>
			{
				loading ?
					<Spinner/>
					:
					<>
						{
							(proyectos === null) ?
								<AlertValidation typeEle="error" textEle={internationalizationText("Error en las credenciales")}/>
								:
								<SelectControl onChange={onChangeSelect} value={idProjectValue}>
									<option value="">Elige un proyecto</option>
									{
										proyectos && proyectos.map((proyecto) => (
											<option value={proyecto.idProyecto}>{proyecto.proyecto}</option>
										))
									}
								</SelectControl>
						}
					</>
			}
		</div>

	)
}
export default SelectProject;
