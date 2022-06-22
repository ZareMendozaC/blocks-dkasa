import { PanelBody, PanelRow, TextControl } from "@wordpress/components";
import TextEditor from "../../components/atoms/Text/TextEditor";
import SectionContainer from "../../components/atoms/Section/SectionContainer";
import Section from "../../components/atoms/Section/Section";
import internationalizationText from "../../helper/InternationalizationText";
import ImageUpload from "../../components/molecules/ImageUpload/ImageUpload";
import eventChangeAttr from "../../helper/eventChangeAttr";
import {
  useBlockProps,
  AlignmentToolbar,
  BlockControls,
  ColorPalette,
  InspectorControls,
} from "@wordpress/block-editor";
import getPaletteColors from "../../helper/getPaletteColors";
import { Flex, FlexItem } from "@wordpress/components";
import * as React from "react";

const BannerRojoBack = (props) => {
  const { attributes: attr, setAttributes: setAttr } = props;

  const blockProps = useBlockProps();

  const styleBlock = {
    color: attr.textColor,
    backgroundImage: `url(${attr.mediaUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "auto",
    backgroundColor: attr.backgroundColor,
    display: "flex",
    "align-items": "center",
  };
  const styleBlock2 = {
    padding: "20px",
    bottom: "0",
    position: "static",
    display: "flex",
    "flex-wrap": "wrap",
  };

  return (
    <Section blockProps={blockProps} styleEle={styleBlock}>
      <InspectorControls key="setting">
        <PanelBody
          title={internationalizationText("Color Fondo bloque carácteristicas")}
          initialOpen={false}
        >
          <PanelRow>
            <ColorPalette
              onChange={(event) =>
                eventChangeAttr(setAttr, { backgroundColor: event })
              }
              colors={getPaletteColors}
            />
          </PanelRow>
        </PanelBody>
        <PanelBody
          title={internationalizationText("Color de texto")}
          initialOpen={false}
        >
          <PanelRow>
            <ColorPalette
              onChange={(event) =>
                eventChangeAttr(setAttr, { textColor: event })
              }
              colors={getPaletteColors}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="banner_rojo_icon_admin">
        <SectionContainer>
          <ImageUpload
            setAttr={setAttr}
            detail={{
              mediaUrl: attr.mediaUrlDibujo,
              mediaId: attr.mediaUrlDibujo,
              propertyUrl: "mediaUrlDibujo",
              propertyId: "mediaUrlDibujo",
            }}
          />
        </SectionContainer>
      </div>
      <SectionContainer styleEle={styleBlock2}>
        <Flex className="data-fields-red-banner">
          <FlexItem className="w-100">
            <TextControl
              label="Texto Pequeño 1"
              onChange={(event) =>
                eventChangeAttr(setAttr, { textoPequeño1: event })
              }
              value={attr.textoPequeño1}
            />
          </FlexItem>
          <FlexItem>
            <TextControl
              label="Cifra Grande 1"
              onChange={(event) =>
                eventChangeAttr(setAttr, { cifraGrande1: event })
              }
              value={attr.cifraGrande1}
            />
          </FlexItem>
          <FlexItem>
            <TextControl
              label="Texto Pequeño 2"
              onChange={(event) =>
                eventChangeAttr(setAttr, { textoPequeño2: event })
              }
              value={attr.textoPequeño2}
            />
          </FlexItem>
          <FlexItem>
            <TextControl
              label="Cifra Grande 2"
              onChange={(event) =>
                eventChangeAttr(setAttr, { cifraGrande2: event })
              }
              value={attr.cifraGrande2}
            />
          </FlexItem>
          <FlexItem>
            <TextControl
              label="Texto Enlace"
              onChange={(event) =>
                eventChangeAttr(setAttr, { textoEnlace: event })
              }
              value={attr.textoEnlace}
            />
          </FlexItem>
          <FlexItem>
            <TextControl
              label="Enlace"
              onChange={(event) =>
                eventChangeAttr(setAttr, { enlace: event })
              }
              value={attr.enlace}
            />
          </FlexItem>
        </Flex>
      </SectionContainer>
    </Section>
  );
};

export default BannerRojoBack;
