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
import eventChangeAttr from "../../helper/eventChangeAttr";

const SliderArchiveProyectosSingleBack = (props) => {
  console.log("props", props);

  const { attributes: attr, setAttributes: setAttr } = props;

  const [imagesArr, setImagesArr] = useState(attr.slides);

  const blockProps = useBlockProps();

  const addImage = () => {
    const itemObj = {
      mediaId: null,
      mediaUrl: "",
      nombre: "",
      area: "",
      dormitorios: "",
      ubicacion: "",
      precio: "",
      textoEnlace: "",
      enlace: "",
      estado: "",
      backgroundColor: "",
      video: "",
      panoramica: "",
      tour: ""
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
  const onChangeImageArea = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].area = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };
  const onChangeImageDormitorios = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].dormitorios = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };
  const onChangeImageUbicacion = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].ubicacion = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };
  const onChangeImagePrecio = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].precio = event;
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
  const onChangeImageEstado = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].estado = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };
  const onChangeImageVideo = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].video = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };
  const onChangeImagePanoramica = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].panoramica = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };
  const onChangeImageTour = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].tour = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };
  const onChangeImageBackgroundColor = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].backgroundColor = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };

  return (
    <Section blockProps={blockProps}>
      <SectionContainer>
        <Text>
          <strong>Titulo:</strong>
        </Text>
        <TextControl
                    onChange={(event) =>
                      eventChangeAttr(setAttr, { titulo: event })
                    }
                    value={attr.titulo}
                  />
        {imagesArr &&
          imagesArr.map((imageArr, i) => (
            <Grid
              key={i}
              classEle="flex-wrap slide-home-card__item slider-home-back-card"
            >
              <div
                className="w-100 d-flex align-items-center"
                style={{ backgroundColor: imageArr.backgroundColor }}
              >
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
                    <strong>Área:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImageArea(event, i)}
                    value={imageArr.area}
                  />
                  <Text>
                    <strong>Dormitorios:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImageDormitorios(event, i)}
                    value={imageArr.dormitorios}
                  />
                  <Text>
                    <strong>Ubicacion:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImageUbicacion(event, i)}
                    value={imageArr.ubicacion}
                  />
                  <Text>
                    <strong>Precio:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImagePrecio(event, i)}
                    value={imageArr.precio}
                  />
                  <Text>
                    <strong>Texto Enlace:</strong>
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
                  <Text>
                    <strong>Estado:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImageEstado(event, i)}
                    value={imageArr.estado}
                  />
                  <Text>
                    <strong>Video:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImageVideo(event, i)}
                    value={imageArr.video}
                  />
                  <Text>
                    <strong>Panoramica:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImagePanoramica(event, i)}
                    value={imageArr.panoramica}
                  />
                  <Text>
                    <strong>Tour:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImageTour(event, i)}
                    value={imageArr.tour}
                  />
                  <Text>
                    <strong>Color:</strong>
                  </Text>
                  <ColorPalette
                    onChange={(event) => onChangeImageBackgroundColor(event, i)}
                    colors={getPaletteColors}
                  />
                </Item>
              </div>
              <div
                class="w-100"
                style={{ backgroundColor: imageArr.backgroundColor }}
              >
                <div>
                  <Text>
                    <strong>Imagen de Fondo:</strong>
                  </Text>
                  <Item percentage={100} classEle="lia-gap-8">
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

export default SliderArchiveProyectosSingleBack;
