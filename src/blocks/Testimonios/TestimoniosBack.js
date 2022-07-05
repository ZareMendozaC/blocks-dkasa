import { useState } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import Section from "../../components/atoms/Section/Section";
import SectionContainer from "../../components/atoms/Section/SectionContainer";
import {
  Button,
  __experimentalText as Text,
  TextControl,
  TextareaControl,
} from "@wordpress/components";
import internationalizationText from "../../helper/InternationalizationText";
import ImageUploadRepeater from "../../components/molecules/ImageUpload/ImageUploadRepeater";
import Grid from "../../components/molecules/Grid/Grid";
import Item from "../../components/atoms/Item/Item";
import Title from "../../components/atoms/Title/Title";

const TestimoniosBack = (props) => {
  const { attributes: attr, setAttributes: setAttr } = props;

  const [testimonialsArr, setTestimonialsArr] = useState(attr.testimonials);

  const blockProps = useBlockProps();

  const addTestimonial = () => {
    const itemObj = {
      mediaId: null,
      mediaUrl: "",
      nombre: "",
      proyecto: "",
      descripcion: "",
      textoEnlace: "",
      enlace:""
    };

    const newTestimonialsArr = [...testimonialsArr, itemObj];

    setTestimonialsArr(newTestimonialsArr);
    setAttr({ testimonials: newTestimonialsArr });
  };
  const trashTestimonial = (index) => {
    const newTestimonialsArr = [...testimonialsArr];
    newTestimonialsArr.splice(index, 1);
    setTestimonialsArr(newTestimonialsArr);
    setAttr({ testimonials: newTestimonialsArr });
  };

  const onChangeTestimonialNombre = (event, index) => {
    const newTestimonialsArr = [...testimonialsArr];
    newTestimonialsArr[index].nombre = event;
    setTestimonialsArr(newTestimonialsArr);
    setAttr({ testimonials: newTestimonialsArr });
  };
  const onChangeTestimonialtProyecto = (event, index) => {
    const newTestimonialsArr = [...testimonialsArr];
    newTestimonialsArr[index].proyecto = event;
    setTestimonialsArr(newTestimonialsArr);
    setAttr({ testimonials: newTestimonialsArr });
  };
  const onChangeTestimonialDescripcion = (event, index) => {
    const newTestimonialsArr = [...testimonialsArr];
    newTestimonialsArr[index].descripcion = event;
    setTestimonialsArr(newTestimonialsArr);
    setAttr({ testimonials: newTestimonialsArr });
  };
  const onChangeTestimonialTextoEnlace = (event, index) => {
    const newTestimonialsArr = [...testimonialsArr];
    newTestimonialsArr[index].textoEnlace = event;
    setTestimonialsArr(newTestimonialsArr);
    setAttr({ testimonials: newTestimonialsArr });
  };
  const onChangeTestimonialEnlace = (event, index) => {
    const newTestimonialsArr = [...testimonialsArr];
    newTestimonialsArr[index].enlace = event;
    setTestimonialsArr(newTestimonialsArr);
    setAttr({ testimonials: newTestimonialsArr });
  };

  return (
    <Section blockProps={blockProps}>
      <SectionContainer>
        {testimonialsArr &&
          testimonialsArr.map((testimonialArr, i) => (
            <Grid
              key={i}
              classEle="flex-wrap lia-card__item tu-futuro-back-card"
            >
              <div className="w-100 d-flex align-items-center">
                <Item percentage={20} classEle="lia-gap-8">
                  <ImageUploadRepeater
                    variables={props}
                    details={{
                      index: i,
                      datum: testimonialArr,
                      setData: setTestimonialsArr,
                      data: testimonialsArr,
                      namePropertyId: "mediaId",
                      namePropertyUrl: "mediaUrl",
                      namePropertyData: "testimonials",
                    }}
                  />
                </Item>
                <Item percentage={80}>
                  <Title tagEle="h4" data="Detalle" className="lia-mb-0" />
                  <Text>
                    <strong>Nombre:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeTestimonialNombre(event, i)}
                    value={testimonialArr.nombre}
                  />
                  <Text>
                    <strong>Proyecto:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) => onChangeTestimonialtProyecto(event, i)}
                    value={testimonialArr.proyecto}
                  />
                  <Text>
                    <strong>Texto de Enlace:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) =>
                      onChangeTestimonialTextoEnlace(event, i)
                    }
                    value={testimonialArr.textoEnlace}
                  />
                  <Text>
                    <strong>Enlace:</strong>
                  </Text>
                  <TextControl
                    onChange={(event) =>
                      onChangeTestimonialEnlace(event, i)
                    }
                    value={testimonialArr.enlace}
                  />
                </Item>
              </div>
              <div class="w-100">
                <div>
                  <Text>
                    <strong>Descripción:</strong>
                  </Text>
                  <TextareaControl
                    onChange={(event) => onChangeTestimonialDescripcion(event, i)}
                    value={testimonialArr.descripcion}
                  />
                </div>
                <div className="lia-text-right">
                  <Button isDestructive onClick={() => trashTestimonial(i)}>
                    Eliminar Testimonio
                  </Button>
                </div>
              </div>
            </Grid>
          ))}
        <Button onClick={addTestimonial} variant="primary">
          {internationalizationText("Agregar Testimonio")}
        </Button>
      </SectionContainer>
    </Section>
  );
};

export default TestimoniosBack;
