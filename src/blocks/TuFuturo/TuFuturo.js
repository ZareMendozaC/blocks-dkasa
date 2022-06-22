import { useState } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import Section from "../../components/atoms/Section/Section";
import SectionContainer from "../../components/atoms/Section/SectionContainer";
import {
  Button,
  __experimentalText as Text,
  TextControl,
} from "@wordpress/components";
import internationalizationText from "../../helper/InternationalizationText";
import ImageUploadRepeater from "../../components/molecules/ImageUpload/ImageUploadRepeater";
import Grid from "../../components/molecules/Grid/Grid";
import Item from "../../components/atoms/Item/Item";
import Title from "../../components/atoms/Title/Title";

const TuFuturo = (props) => {
  const { attributes: attr, setAttributes: setAttr } = props;

  const [projectsArr, setProjectsArr] = useState(attr.projects);

  const blockProps = useBlockProps();

  const addProject = () => {
    const itemObj = {
      mediaId: null,
      mediaUrl: "",
      estado: "",
      nombre: "",
      direccion: "",
      distrito: "",
      detalles: "",
      metraje: "",
      precio: "",
      mediaIdLogo: null,
      mediaUrlLogo: "",
      textoEnlace: "",
      enlace: "",
    };

    const newProjectsArr = [...projectsArr, itemObj];

    setProjectsArr(newProjectsArr);
    setAttr({ projects: newProjectsArr });
  };

  const trashProject = (index) => {
    const newProjectsArr = [...projectsArr];
    newProjectsArr.splice(index, 1);
    setProjectsArr(newProjectsArr);
    setAttr({ projects: newProjectsArr });
  };

  const onChangeProjectEstado = (event, index) => {
    const newProjectsArr = [...projectsArr];
    newProjectsArr[index].estado = event;
    setProjectsArr(newProjectsArr);
    setAttr({ projects: newProjectsArr });
  };
  const onChangeProjectNombre = (event, index) => {
    const newProjectsArr = [...projectsArr];
    newProjectsArr[index].nombre = event;
    setProjectsArr(newProjectsArr);
    setAttr({ projects: newProjectsArr });
  };
  const onChangeProjectDireccion = (event, index) => {
    const newProjectsArr = [...projectsArr];
    newProjectsArr[index].direccion = event;
    setProjectsArr(newProjectsArr);
    setAttr({ projects: newProjectsArr });
  };
  const onChangeProjectDistrito = (event, index) => {
    const newProjectsArr = [...projectsArr];
    newProjectsArr[index].distrito = event;
    setProjectsArr(newProjectsArr);
    setAttr({ projects: newProjectsArr });
  };
  const onChangeProjectDetalles = (event, index) => {
    const newProjectsArr = [...projectsArr];
    newProjectsArr[index].detalles = event;
    setProjectsArr(newProjectsArr);
    setAttr({ projects: newProjectsArr });
  };
  const onChangeProjectMetraje = (event, index) => {
    const newProjectsArr = [...projectsArr];
    newProjectsArr[index].metraje = event;
    setProjectsArr(newProjectsArr);
    setAttr({ projects: newProjectsArr });
  };
  const onChangeProjectPrecio = (event, index) => {
    const newProjectsArr = [...projectsArr];
    newProjectsArr[index].precio = event;
    setProjectsArr(newProjectsArr);
    setAttr({ projects: newProjectsArr });
  };
  const onChangeProjectTextoEnlace = (event, index) => {
    const newProjectsArr = [...projectsArr];
    newProjectsArr[index].textoEnlace = event;
    setProjectsArr(newProjectsArr);
    setAttr({ projects: newProjectsArr });
  };
  const onChangeProjectEnlace = (event, index) => {
    const newProjectsArr = [...projectsArr];
    newProjectsArr[index].enlace = event;
    setProjectsArr(newProjectsArr);
    setAttr({ projects: newProjectsArr });
  };

  return (
    <Section blockProps={blockProps}>
      <SectionContainer>
        {projectsArr &&
          projectsArr.map((projectArr, i) => (
            <Grid key={i} classEle="flex-wrap lia-card__item tu-futuro-back-card">
              <div className="w-100 d-flex align-items-center">
                <Item percentage={20} classEle="lia-gap-8">
                  <ImageUploadRepeater
                    variables={props}
                    details={{
                      index: i,
                      datum: projectArr,
                      setData: setProjectsArr,
                      data: projectsArr,
                      namePropertyId: "mediaId",
                      namePropertyUrl: "mediaUrl",
                      namePropertyData: "projects",
                    }}
                  />
                </Item>
                <Item percentage={80}>
                  <Title tagEle="h4" data="Detalle" className="lia-mb-0" />
                  <Text>
                    <strong>Estado:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeProjectEstado(event, i)}
                    value={projectArr.estado}
                  />
                </Item>
              </div>
              <div class="w-100">
                <Title tagEle="h4" data="Datos" className="lia-mb-0" />
                <div>
                  <Text>
                    <strong>Nombre:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeProjectNombre(event, i)}
                    value={projectArr.nombre}
                  />
                  <Text>
                    <strong>Direccion:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeProjectDireccion(event, i)}
                    value={projectArr.direccion}
                  />
                  <Text>
                    <strong>Distrito:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeProjectDistrito(event, i)}
                    value={projectArr.distrito}
                  />
                  <Text>
                    <strong>Detalles:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeProjectDetalles(event, i)}
                    value={projectArr.detalles}
                  />
                  <Text>
                    <strong>Metraje:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeProjectMetraje(event, i)}
                    value={projectArr.metraje}
                  />
                  <Text>
                    <strong>Precio:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeProjectPrecio(event, i)}
                    value={projectArr.precio}
                  />
                  <Text>
                    <strong>Texto de Enlace:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeProjectTextoEnlace(event, i)}
                    value={projectArr.textoEnlace}
                  />
                  <Text>
                    <strong>Enlace:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeProjectEnlace(event, i)}
                    value={projectArr.enlace}
                  />
                  <Text>
                    <strong>Logo:</strong>
                  </Text>
                  <div class="logo-field">
                  <ImageUploadRepeater
                    variables={props}
                    details={{
                      index: i,
                      datum: projectArr,
                      setData: setProjectsArr,
                      data: projectsArr,
                      namePropertyId: "mediaIdLogo",
                      namePropertyUrl: "mediaUrlLogo",
                      namePropertyData: "projects",
                    }}
                  />
                  </div>
                  <div className="lia-text-right">
                    <Button isDestructive onClick={() => trashProject(i)}>
                      Eliminar Proyecto
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        <Button onClick={addProject} variant="primary">
          {internationalizationText("Agregar Proyecto")}
        </Button>
      </SectionContainer>
    </Section>
  );
};

export default TuFuturo;
