import { useState } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import Section from "../../components/atoms/Section/Section";
import SectionContainer from "../../components/atoms/Section/SectionContainer";
import {
  Button,
  __experimentalText as Text,
  TextControl,TextareaControl 
} from "@wordpress/components";
import internationalizationText from "../../helper/InternationalizationText";
import ImageUploadRepeater from "../../components/molecules/ImageUpload/ImageUploadRepeater";
import Grid from "../../components/molecules/Grid/Grid";
import Item from "../../components/atoms/Item/Item";
import Title from "../../components/atoms/Title/Title";

const Testimonios = (props) => {
  const { attributes: attr, setAttributes: setAttr } = props;

  const [testimoniosArr, setTestimoniosArr] = useState(attr.testimonios);

  const blockProps = useBlockProps();

  const addTestimonio = () => {
    const itemObj = {
      mediaId: null,
      mediaUrl: "",
      nombre: "",
      proyecto: "",
      detalle: "",
      textoEnlace: "",
    };

    const newTestimoniosArr = [...testimoniosArr, itemObj];

    setTestimoniosArr(newTestimoniosArr);
    setAttr({ testimonios: newTestimoniosArr });
  };

  const trashTestimonio = (index) => {
    const newTestimoniosArr = [...testimoniosArr];
    newTestimoniosArr.splice(index, 1);
    setTestimoniosArr(newTestimoniosArr);
    setAttr({ testimonios: newTestimoniosArr });
  };

  const onChangeTestimonioNombre = (event, index) => {
    const newTestimoniosArr = [...testimoniosArr];
    newTestimoniosArr[index].nombre = event;
    setTestimoniosArr(newTestimoniosArr);
    setAttr({ testimonios: newTestimoniosArr });
  };
  const onChangeTestimonioProyecto = (event, index) => {
    const newTestimoniosArr = [...testimoniosArr];
    newTestimoniosArr[index].proyecto = event;
    setTestimoniosArr(newTestimoniosArr);
    setAttr({ testimonios: newTestimoniosArr });
  };
  const onChangeTestimonioDetalle = (event, index) => {
    const newTestimoniosArr = [...testimoniosArr];
    newTestimoniosArr[index].detalle = event;
    setTestimoniosArr(newTestimoniosArr);
    setAttr({ testimonios: newTestimoniosArr });
  };
  const onChangeTestimonioTextoEnlace = (event, index) => {
    const newTestimoniosArr = [...testimoniosArr];
    newTestimoniosArr[index].textoEnlace = event;
    setTestimoniosArr(newTestimoniosArr);
    setAttr({ testimonios: newTestimoniosArr });
  };

  return (
    <Section blockProps={blockProps}>
      <SectionContainer>
        {testimoniosArr &&
          testimoniosArr.map((testimonioArr, i) => (
            <Grid key={i} classEle="flex-wrap lia-card__item tu-futuro-back-card">
              <div className="w-100 d-flex align-items-center">
                <Item percentage={20} classEle="lia-gap-8">
                  <ImageUploadRepeater
                    variables={props}
                    details={{
                      index: i,
                      datum: testimonioArr,
                      setData: setTestimoniosArr,
                      data: testimoniosArr,
                      namePropertyId: "mediaId",
                      namePropertyUrl: "mediaUrl",
                      namePropertyData: "testimonios",
                    }}
                  />
                </Item>
                <Item percentage={80}>
                  <Title tagEle="h4" data="Detalles" className="lia-mb-0" />
                  <Text>
                    <strong>Nombre:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeTestimonioNombre(event, i)}
                    value={testimonioArr.nombre}
                  />
                  <Text>
                    <strong>Proyecto:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeTestimonioProyecto(event, i)}
                    value={testimonioArr.proyecto}
                  />
                </Item>
              </div>
              <div class="w-100">
                <div>
                  <Text>
                    <strong>Testimonio:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeTestimonioDetalle(event, i)}
                    value={testimonioArr.detalle}
                  />
                  <Text>
                    <strong>Texto de Enlace:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeTestimonioTextoEnlace(event, i)}
                    value={testimonioArr.textoEnlace}
                  />
                  <div className="lia-text-right">
                    <Button isDestructive onClick={() => trashTestimonio(i)}>
                      Eliminar Testimonio
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        <Button onClick={addTestimonio} variant="primary">
          {internationalizationText("Agregar Testimonio")}
        </Button>
      </SectionContainer>
    </Section>
  );
};

export default Testimonios;
