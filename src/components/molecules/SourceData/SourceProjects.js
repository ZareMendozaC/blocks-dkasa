import {Button,__experimentalText as Text, TextControl} from "@wordpress/components";
import {useState} from "@wordpress/element";
import ImageUploadRepeater from "../ImageUpload/ImageUploadRepeater";
import Grid from "../Grid/Grid";
import Item from "../../atoms/Item/Item";

const SourceProjects = ({variables}) => {

	const {
		attributes: attr,
		setAttributes: setAttr
	} = variables;

	const [projectArr, setProjectArr] = useState(attr.projects);

	const deleteProject = (index) =>{
		const newProjectArr = [...projectArr];
		newProjectArr.splice(index,1);
		setProjectArr(newProjectArr);
		setAttr({projects: newProjectArr});
	}

	const addProject = () =>{
		const itemObj = {
			nroDormitorio: "",
			modelo: "",
			nroBanios: "",
			idImagen: null,
			urlImagen: "",
			areaVenta: "",
			precioVenta: ""
		}
		const newProjectArr = [...projectArr, itemObj];
		setProjectArr(newProjectArr);
		setAttr({projects: newProjectArr});
	}

	const onChangeControl = (event,index,property) =>{
		const newProjectArr = [...projectArr];
		newProjectArr[index][property] = event;
		setProjectArr(newProjectArr);
		setAttr({projects: newProjectArr});
	}

  return(
    <>
		<div className="lia-quoter-projects lia-w-full">
			{
				projectArr && projectArr.map((project, i)=>(
					<Grid classEle="lia-section-repeater lia-quoter-projects__item">
						<Item classEle="lia-quoter-projects__left" percentage={30}>
							<ImageUploadRepeater
								variables={variables}
								details ={{
									index: i,
									datum: project,
									setData: setProjectArr,
									data: projectArr,
									namePropertyId: "idImagen",
									namePropertyUrl: "urlImagen",
									namePropertyData: "projects"

								}}
							/>
						</Item>
						<Item classEle="lia-quoter-projects__right" percentage={70}>
							<div>
								<Text>Modelo</Text>
								<TextControl
									onChange={(valor)=>onChangeControl(valor,i,"modelo")}
									value={project?.modelo}
								/>
							</div>
							<Grid>
								<Item percentage={50} classEle="lia-gap-8">
									<Text>Nro. Dormitorio</Text>
									<TextControl
										type="number"
										onChange={(valor)=>onChangeControl(valor,i,"nroDormitorio")}
										value={project?.nroDormitorio}
									/>
									<Text >Nro. Baños</Text>
									<TextControl
										type="number"
										onChange={(valor)=>onChangeControl(valor,i,"nroBanios")}
										value={project?.nroBanios}
									/>
								</Item>
								<Item percentage={50}>
									<Text>Área Venta</Text>
									<TextControl
										onChange={(valor)=>onChangeControl(valor,i,"areaVenta")}
										value={project?.areaVenta}
									/>
									<Text>Precio Venta</Text>
									<TextControl
										onChange={(valor)=>onChangeControl(valor,i,"precioVenta")}
										value={project?.precioVenta}
									/>
								</Item>
							</Grid>
							<div className="lia-mt-8 lia-text-right">
								<Button isDestructive onClick={()=>deleteProject(i)}>Eliminar Modelo</Button>
							</div>
						</Item>
					</Grid>
				))
			}
			<Button variant="primary" onClick={addProject}>Agregar Modelo</Button>
		</div>
    </>
  )
}
export default SourceProjects;
