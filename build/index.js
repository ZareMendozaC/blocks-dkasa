/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/Banner/BannerBack.js":
/*!*****************************************!*\
  !*** ./src/blocks/Banner/BannerBack.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_atoms_Text_TextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/atoms/Text/TextEditor */ "./src/components/atoms/Text/TextEditor.js");
/* harmony import */ var _components_atoms_Section_SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/atoms/Section/SectionContainer */ "./src/components/atoms/Section/SectionContainer.js");
/* harmony import */ var _components_atoms_Section_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/atoms/Section/Section */ "./src/components/atoms/Section/Section.js");
/* harmony import */ var _helper_InternationalizationText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper/InternationalizationText */ "./src/helper/InternationalizationText.js");
/* harmony import */ var _components_molecules_ImageUpload_ImageUpload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/molecules/ImageUpload/ImageUpload */ "./src/components/molecules/ImageUpload/ImageUpload.js");
/* harmony import */ var _helper_eventChangeAttr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helper/eventChangeAttr */ "./src/helper/eventChangeAttr.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helper_getPaletteColors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helper/getPaletteColors */ "./src/helper/getPaletteColors.js");











const BannerBack = props => {
  const {
    attributes: attr,
    setAttributes: setAttr
  } = props;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)();
  const styleBlock = {
    backgroundColor: attr.backgroundColor,
    color: attr.textColor,
    backgroundImage: `url(${attr.mediaUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_atoms_Section_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blockProps: blockProps,
    styleEle: styleBlock
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.AlignmentToolbar, {
    value: attr.alignment,
    onChange: event => (0,_helper_eventChangeAttr__WEBPACK_IMPORTED_MODULE_7__["default"])(setAttr, {
      alignment: event
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, {
    key: "setting"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_helper_InternationalizationText__WEBPACK_IMPORTED_MODULE_5__["default"])("Color de Fondo"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.ColorPalette, {
    onChange: event => (0,_helper_eventChangeAttr__WEBPACK_IMPORTED_MODULE_7__["default"])(setAttr, {
      backgroundColor: event
    }),
    colors: _helper_getPaletteColors__WEBPACK_IMPORTED_MODULE_9__["default"]
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_helper_InternationalizationText__WEBPACK_IMPORTED_MODULE_5__["default"])('Color de texto'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.ColorPalette, {
    onChange: event => (0,_helper_eventChangeAttr__WEBPACK_IMPORTED_MODULE_7__["default"])(setAttr, {
      textColor: event
    }),
    colors: _helper_getPaletteColors__WEBPACK_IMPORTED_MODULE_9__["default"]
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_helper_InternationalizationText__WEBPACK_IMPORTED_MODULE_5__["default"])('Imagen de fondo'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_molecules_ImageUpload_ImageUpload__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setAttr: setAttr,
    mediaId: attr.mediaId,
    mediaUrl: attr.mediaUrl
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_atoms_Section_SectionContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_atoms_Text_TextEditor__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tagEle: "h2",
    eventEle: event => (0,_helper_eventChangeAttr__WEBPACK_IMPORTED_MODULE_7__["default"])(setAttr, {
      title: event
    }),
    data: attr.title,
    placeholder: "Titulo",
    styleEle: {
      textAlign: attr.alignment
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_atoms_Text_TextEditor__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tagEle: "p",
    eventEle: event => (0,_helper_eventChangeAttr__WEBPACK_IMPORTED_MODULE_7__["default"])(setAttr, {
      content: event
    }),
    data: attr.content,
    styleEle: {
      textAlign: attr.alignment
    },
    placeholder: "Texto"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerBack);

/***/ }),

/***/ "./src/blocks/Description/DescriptionBack.js":
/*!***************************************************!*\
  !*** ./src/blocks/Description/DescriptionBack.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_atoms_Text_TextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/atoms/Text/TextEditor */ "./src/components/atoms/Text/TextEditor.js");
/* harmony import */ var _components_atoms_Section_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/atoms/Section/Section */ "./src/components/atoms/Section/Section.js");
/* harmony import */ var _components_atoms_Section_SectionContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/atoms/Section/SectionContainer */ "./src/components/atoms/Section/SectionContainer.js");
/* harmony import */ var _helper_eventChangeAttr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper/eventChangeAttr */ "./src/helper/eventChangeAttr.js");
/* harmony import */ var _components_molecules_ImageUpload_ImageUpload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/molecules/ImageUpload/ImageUpload */ "./src/components/molecules/ImageUpload/ImageUpload.js");
/* harmony import */ var _components_molecules_Grid_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/molecules/Grid/Grid */ "./src/components/molecules/Grid/Grid.js");
/* harmony import */ var _components_atoms_Item_Item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/atoms/Item/Item */ "./src/components/atoms/Item/Item.js");










const DescriptionBack = props => {
  const {
    attributes: attr,
    setAttributes: setAttr
  } = props;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_atoms_Section_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    blockProps: blockProps
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_atoms_Section_SectionContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_molecules_Grid_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_atoms_Item_Item__WEBPACK_IMPORTED_MODULE_8__["default"], {
    percentage: 60
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_atoms_Text_TextEditor__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tagEle: "h2",
    eventEle: event => (0,_helper_eventChangeAttr__WEBPACK_IMPORTED_MODULE_5__["default"])(setAttr, {
      title: event
    }),
    data: attr.title,
    placeholder: "Titulo"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_atoms_Text_TextEditor__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tagEle: "p",
    eventEle: event => (0,_helper_eventChangeAttr__WEBPACK_IMPORTED_MODULE_5__["default"])(setAttr, {
      content: event
    }),
    data: attr.content,
    placeholder: "Texto"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_atoms_Item_Item__WEBPACK_IMPORTED_MODULE_8__["default"], {
    percentage: 40,
    className: "lia-text-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_molecules_ImageUpload_ImageUpload__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setAttr: setAttr,
    mediaId: attr.mediaId,
    mediaUrl: attr.mediaUrl
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DescriptionBack);

/***/ }),

/***/ "./src/bloque1/index.js":
/*!******************************!*\
  !*** ./src/bloque1/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

wp.blocks.registerBlockType("dkasa/block-1", {
  title: "Bloque 11",
  icon: "smiley",
  category: "custom-layout-category",
  attributes: {
    skyColor: {
      type: "string"
    },
    grassColor: {
      type: "string"
    }
  },
  edit: function (props) {
    function updateSkyColor(event) {
      props.setAttributes({
        skyColor: event.target.value
      });
    }

    function updateGrassColor(event) {
      props.setAttributes({
        grassColor: event.target.value
      });
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      placeholder: "sky color",
      value: props.attributes.skyColor,
      onChange: updateSkyColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      placeholder: "grass color",
      value: props.attributes.grassColor,
      onChange: updateGrassColor
    }));
  },
  save: function () {
    return null;
  }
});

/***/ }),

/***/ "./src/bloque2/index.js":
/*!******************************!*\
  !*** ./src/bloque2/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

wp.blocks.registerBlockType("dkasa/block-2", {
  title: "Bloque 2",
  icon: "awards",
  category: "custom-layout-category",
  edit: function () {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Hello bloque2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Hello paragraph 2"));
  },
  save: function () {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "bloque2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "dsadsa"));
  }
});

/***/ }),

/***/ "./src/components/atoms/Item/Item.js":
/*!*******************************************!*\
  !*** ./src/components/atoms/Item/Item.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



const Item = _ref => {
  let {
    children,
    percentage,
    classEle,
    others
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: `lia-item lia-item-${percentage} ${classEle}`
  }, others), children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);

/***/ }),

/***/ "./src/components/atoms/Section/Section.js":
/*!*************************************************!*\
  !*** ./src/components/atoms/Section/Section.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Section = _ref => {
  let {
    blockProps,
    styleEle,
    children
  } = _ref;
  const newBlockProps = { ...blockProps,
    style: styleEle
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", newBlockProps, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./src/components/atoms/Section/SectionContainer.js":
/*!**********************************************************!*\
  !*** ./src/components/atoms/Section/SectionContainer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const SectionContainer = _ref => {
  let {
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lia-seccion-container"
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionContainer);

/***/ }),

/***/ "./src/components/atoms/Text/TextEditor.js":
/*!*************************************************!*\
  !*** ./src/components/atoms/Text/TextEditor.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_InternationalizationText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/InternationalizationText */ "./src/helper/InternationalizationText.js");






const TextEditor = _ref => {
  let {
    tagEle,
    eventEle,
    data,
    placeholder,
    multiline,
    classEle,
    styleEle,
    others
  } = _ref;
  const newOthers = { ...others,
    style: styleEle
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    tagName: tagEle,
    onChange: eventEle,
    value: data,
    placeholder: (0,_helper_InternationalizationText__WEBPACK_IMPORTED_MODULE_4__["default"])(placeholder),
    multiline: multiline,
    className: classEle
  }, newOthers));
};

TextEditor.defaultProps = {
  data: "",
  placeholder: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextEditor);

/***/ }),

/***/ "./src/components/molecules/Grid/Grid.js":
/*!***********************************************!*\
  !*** ./src/components/molecules/Grid/Grid.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const Grid = _ref => {
  let {
    children,
    classEle,
    wrapEle
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `lia-grid ${classEle} ${wrapEle && "lia-wrap"}`
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);

/***/ }),

/***/ "./src/components/molecules/ImageUpload/ImageUpload.js":
/*!*************************************************************!*\
  !*** ./src/components/molecules/ImageUpload/ImageUpload.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_InternationalizationText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/InternationalizationText */ "./src/helper/InternationalizationText.js");
/* harmony import */ var _public_image_NoImage_no_image_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/image/NoImage/no-image.jpeg */ "./public/image/NoImage/no-image.jpeg");







const ImageUpload = _ref => {
  let {
    setAttr,
    mediaId,
    mediaUrl
  } = _ref;

  const onSelectImage = media => {
    setAttr({
      mediaId: media.id,
      mediaUrl: media.url
    });
  };

  const quitImage = () => {
    setAttr({
      mediaId: null,
      mediaUrl: ""
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lia-recipe-image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    onSelect: onSelectImage,
    allowedTypes: "image",
    value: mediaId,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, mediaId ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "lia-w-full",
        src: mediaUrl,
        alt: (0,_helper_InternationalizationText__WEBPACK_IMPORTED_MODULE_4__["default"])("Imagen subida")
      }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "lia-w-full",
        src: _public_image_NoImage_no_image_jpeg__WEBPACK_IMPORTED_MODULE_5__,
        alt: (0,_helper_InternationalizationText__WEBPACK_IMPORTED_MODULE_4__["default"])("No imagen")
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "secondary",
        onClick: open
      }, (0,_helper_InternationalizationText__WEBPACK_IMPORTED_MODULE_4__["default"])("Subir imagen")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "secondary",
        onClick: quitImage,
        style: {
          marginLeft: "8px"
        }
      }, (0,_helper_InternationalizationText__WEBPACK_IMPORTED_MODULE_4__["default"])("Quitar imagen")));
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageUpload);

/***/ }),

/***/ "./src/components/organisms/Theme/Theme.js":
/*!*************************************************!*\
  !*** ./src/components/organisms/Theme/Theme.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getDomain = () => {
  return "landings-inmobiliarias";
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDomain);

/***/ }),

/***/ "./src/helper/InternationalizationText.js":
/*!************************************************!*\
  !*** ./src/helper/InternationalizationText.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_organisms_Theme_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/organisms/Theme/Theme */ "./src/components/organisms/Theme/Theme.js");



const internationalizationText = data => {
  return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(data, (0,_components_organisms_Theme_Theme__WEBPACK_IMPORTED_MODULE_1__["default"])());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (internationalizationText);

/***/ }),

/***/ "./src/helper/eventChangeAttr.js":
/*!***************************************!*\
  !*** ./src/helper/eventChangeAttr.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const eventChangeAttr = (setAttr, value) => {
  setAttr(value);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventChangeAttr);

/***/ }),

/***/ "./src/helper/getPaletteColors.js":
/*!****************************************!*\
  !*** ./src/helper/getPaletteColors.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getPaletteColors = () => {
  return [{
    name: 'red',
    color: '#f00'
  }, {
    name: 'white',
    color: '#fff'
  }, {
    name: 'blue',
    color: '#00f'
  }, {
    name: 'gray',
    color: 'gray'
  }];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPaletteColors());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bloque1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloque1 */ "./src/bloque1/index.js");
/* harmony import */ var _bloque2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bloque2 */ "./src/bloque2/index.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _blocks_Banner_BannerBack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/Banner/BannerBack */ "./src/blocks/Banner/BannerBack.js");
/* harmony import */ var _config_banner_block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/banner-block.json */ "./config/banner-block.json");
/* harmony import */ var _blocks_Description_DescriptionBack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/Description/DescriptionBack */ "./src/blocks/Description/DescriptionBack.js");
/* harmony import */ var _config_description_block_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/description-block.json */ "./config/description-block.json");









(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(_config_banner_block_json__WEBPACK_IMPORTED_MODULE_6__.name, {
  edit: _blocks_Banner_BannerBack__WEBPACK_IMPORTED_MODULE_5__["default"]
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(_config_description_block_json__WEBPACK_IMPORTED_MODULE_8__.name, {
  edit: _blocks_Description_DescriptionBack__WEBPACK_IMPORTED_MODULE_7__["default"]
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/image/NoImage/no-image.jpeg":
/*!********************************************!*\
  !*** ./public/image/NoImage/no-image.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/no-image.19bbfb66.jpeg";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./config/banner-block.json":
/*!**********************************!*\
  !*** ./config/banner-block.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"landings-inmobiliarias/banner","version":"0.1.0","title":"Banner","category":"theme","icon":"building","description":"Banner - Landings Inmobiliarias","textdomain":"banner","attributes":{"mediaId":{"type":"number"},"mediaUrl":{"type":"string","default":""},"backgroundColor":{"type":"string","default":"blue"},"textColor":{"type":"string","default":"white"},"title":{"type":"string","default":""},"content":{"type":"string","default":""},"alignment":{"type":"string","default":"center"}}}');

/***/ }),

/***/ "./config/description-block.json":
/*!***************************************!*\
  !*** ./config/description-block.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"landings-inmobiliarias/description","version":"0.1.0","title":"Descripción","category":"theme","icon":"building","description":"Descripción - Landings Inmobiliarias","textdomain":"description","attributes":{"mediaId":{"type":"number"},"mediaUrl":{"type":"string","default":""},"title":{"type":"string","default":""},"content":{"type":"string","default":""}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkdkasa_plugin"] = globalThis["webpackChunkdkasa_plugin"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map