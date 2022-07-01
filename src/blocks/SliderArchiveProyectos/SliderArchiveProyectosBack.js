import { useState } from "@wordpress/element";
import { useBlockProps, ColorPalette } from "@wordpress/block-editor";
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
import getPaletteColors from "../../helper/getPaletteColors";

const SliderArchiveProyectosBack = (props) => {
  console.log("props", props);

  const { attributes: attr, setAttributes: setAttr } = props;

  const [imagesArr, setImagesArr] = useState(attr.slides);

  const blockProps = useBlockProps();

  const addImage = () => {
    const itemObj = {
      mediaIdLogo: null,
      mediaUrlLogo: "",
      mediaIdMovil: null,
      mediaUrlMovil: "",
      nombre: "",
      descripcion: "",
      textoEnlace: "",
      enlace: "",
      backgroundColor: ""
    };

    const newImagesArr = [...imagesArr, itemObj];

    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };

  const trashImage = (index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr.splice(index, 1);
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };

  const onChangeImageNombre = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].nombre = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };
  const onChangeImageDescripcion = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].descripcion = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };

  const onChangeImageTextoEnlace = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].textoEnlace = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };

  const onChangeImageEnlace = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].enlace = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };
  const onChangeBackgroundColor = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].backgroundColor = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };

  return (
    <Section blockProps={blockProps}>
      <SectionContainer>
        {imagesArr &&
          imagesArr.map((imageArr, i) => (
            <Grid key={i} classEle="flex-wrap slide-home-card__item slider-home-back-card background-color" >
              <div className="w-100 d-flex align-items-center" style={{backgroundColor: imageArr.backgroundColor}}>                
                <Item percentage={80}>
                  <Title tagEle="h4" data="Detalle" className="lia-mb-0" />
                  <Text>
                    <strong>Nombre:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImageNombre(event, i)}
                    value={imageArr.nombre}
                  />
                  <Text>
                    <strong>Descripcion:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImageDescripcion(event, i)}
                    value={imageArr.descripcion}
                  />
                  <Text>
                    <strong>Texto de Enlace:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImageTextoEnlace(event, i)}
                    value={imageArr.textoEnlace}
                  />
                  <Text>
                    <strong>Enlace:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImageEnlace(event, i)}
                    value={imageArr.enlace}
                  />
                  <ColorPalette
              onChange={(event) => onChangeBackgroundColor(event, i)}
              colors={getPaletteColors}
            />
                </Item>
              </div>
              <div class="w-100" style={{backgroundColor: imageArr.backgroundColor}}>
              <div class="d-flex">
                  <Item percentage={50} classEle="lia-gap-8">
                  <Text>
                    <strong>Imagen de Fondo:</strong>
                  </Text>
                    <ImageUploadRepeater
                      variables={props}
                      details={{
                        index: i,
                        datum: imageArr,
                        setData: setImagesArr,
                        data: imagesArr,
                        namePropertyId: "mediaIdLogo",
                        namePropertyUrl: "mediaUrlLogo",
                        namePropertyData: "slides",
                      }}
                    />
                  </Item>
                  <Item percentage={50} classEle="lia-gap-8">
                  <Text>
                    <strong>Imagen de Fondo Movil:</strong>
                  </Text>
                    <ImageUploadRepeater
                      variables={props}
                      details={{
                        index: i,
                        datum: imageArr,
                        setData: setImagesArr,
                        data: imagesArr,
                        namePropertyId: "mediaIdMovil",
                        namePropertyUrl: "mediaUrlMovil",
                        namePropertyData: "slides",
                      }}
                    />
                  </Item>
                </div>
                <div className="lia-text-right">
                  <Button isDestructive onClick={() => trashImage(i)}>
                    Eliminar Imagen
                  </Button>
                </div>
              </div>
            </Grid>
          ))}
        <Button onClick={addImage} variant="primary">
          {internationalizationText("Agregar imagen")}
        </Button>
      </SectionContainer>
    </Section>
  );
};

export default SliderArchiveProyectosBack;
