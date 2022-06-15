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
import eventChangeAttr from "../../helper/eventChangeAttr";

const TuFuturo = (props) => {
  console.log("props", props);

  const { attributes: attr, setAttributes: setAttr } = props;

  const [imagesArr, setImagesArr] = useState(attr.images);

  const blockProps = useBlockProps();

  const addImage = () => {
    const itemObj = {
      mediaId: null,
      mediaUrl: "",
      estado: "",
      nombre: "",
      direccion: "",
      detalles: "",
      metraje: "",
      precio: "",
      mediaIdLogo: null,
      mediaUrlLogo: "",
      textoEnlace: "",
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

  const onChangeImageEstado = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].estado = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };
  const onChangeImageNombre = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].nombre = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };
  const onChangeImageDireccion = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].direccion = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };
  const onChangeImageDetalles = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].detalles = event;
    setImagesArr(newImagesArr);
    setAttr({ images: newImagesArr });
  };
  const onChangeImageMetraje = (event, index) => {
    const newImagesArr = [...imagesArr];
    newImagesArr[index].metraje = event;
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

  return (
    <Section blockProps={blockProps}>
      <SectionContainer>
        {imagesArr &&
          imagesArr.map((imageArr, i) => (
            <Grid key={i} classEle="flex-wrap lia-card__item tu-futuro-back-card">
              <div className="w-100 d-flex align-items-center">
                <Item percentage={20} classEle="lia-gap-8">
                  <ImageUploadRepeater
                    variables={props}
                    details={{
                      index: i,
                      datum: imageArr,
                      setData: setImagesArr,
                      data: imagesArr,
                      namePropertyId: "mediaId",
                      namePropertyUrl: "mediaUrl",
                      namePropertyData: "images",
                    }}
                  />
                </Item>
                <Item percentage={80}>
                  <Title tagEle="h4" data="Detalle" className="lia-mb-0" />
                  <Text>
                    <strong>Estado:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImageEstado(event, i)}
                    value={imageArr.estado}
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
                    onChange={(event) => onChangeImageNombre(event, i)}
                    value={imageArr.nombre}
                  />
                  <Text>
                    <strong>Direccion:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImageDireccion(event, i)}
                    value={imageArr.direccion}
                  />
                  <Text>
                    <strong>Detalles:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImageDetalles(event, i)}
                    value={imageArr.detalles}
                  />
                  <Text>
                    <strong>Metraje:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImageMetraje(event, i)}
                    value={imageArr.metraje}
                  />
                  <Text>
                    <strong>Precio:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImagePrecio(event, i)}
                    value={imageArr.precio}
                  />
                  <Text>
                    <strong>Texto de Enlace:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeImageTextoEnlace(event, i)}
                    value={imageArr.textoEnlace}
                  />
                  <Text>
                    <strong>Logo:</strong>
                  </Text>
                  <div class="logo-field">
                  <ImageUploadRepeater
                    variables={props}
                    details={{
                      index: i,
                      datum: imageArr,
                      setData: setImagesArr,
                      data: imagesArr,
                      namePropertyId: "mediaIdLogo",
                      namePropertyUrl: "mediaUrlLogo",
                      namePropertyData: "images",
                    }}
                  />
                  </div>
                  <div className="lia-text-right">
                    <Button isDestructive onClick={() => trashImage(i)}>
                      Eliminar Imagen
                    </Button>
                  </div>
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

export default TuFuturo;
