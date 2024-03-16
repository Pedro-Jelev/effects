export function ToolsController({ element }) {
  let glassRGBA;
  let shadowRGBA;

  function init() {
    glassUpdateColor();
    shadowUpdateColor();
  }

  function getRgba() {
    return glassRGBA;
  }

  function setRgba(value) {
    glassRGBA = value;
  }

  function hexToRgb(hex) {
    const value = hex.slice(1, 7);
    let rgbHex = value.match(/.{1,2}/g);
    let rgb = [
      parseInt(rgbHex[0], 16),
      parseInt(rgbHex[1], 16),
      parseInt(rgbHex[2], 16),
      1,
    ];

    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;
  }

  function glassTransparency(value) {
    let manipulate = glassRGBA.split(",");
    manipulate[3] = `${value})`;
    glassRGBA = manipulate.toString();
  }

  function shadowTransparency(value) {
    let manipulate = shadowRGBA.split(",");
    manipulate[3] = `${value})`;
    shadowRGBA = manipulate.toString();
  }

  function updateObject() {
    element.getObject().style.backdropFilter = `blur(${
      element.getGlassBlur().value
    }px)`;
    element.getObject().style.background = glassRGBA;
    element.getObject().style.outline = `${
      element.getGlassOutline().value
    }px solid ${element.getGlassColor().value}`;
    element.getObject().style.boxShadow = `${
      element.getShadowHorizontal().value
    }px ${element.getShadowVertical().value}px ${
      element.getShadowBlur().value
    }px ${element.getShadowSpread().value}px ${
      element.getShadowInset().value
    } ${shadowRGBA}`;
    element.getObject().style.borderRadius = `${
      element.getGlassRadius().value
    }px`;
    console.log(element.getObject().style.borderRaidus);

    updateCSSCode();
  }

  function updateCSSCode() {
    const css = `background-color: ${glassRGBA};\nbackdrop-filter: blur(${
      element.getGlassBlur().value
    }px);\noutline: ${element.getGlassOutline().value}px solid ${
      element.getGlassColor().value
    };\nborder-radius: ${element.getGlassRadius().value}px;\nbox-shadow: ${
      element.getShadowHorizontal().value
    }px, ${element.getShadowVertical().value}px, ${
      element.getShadowBlur().value
    }px, ${element.getShadowSpread().value}px, ${
      element.getShadowInset().value
    }, ${element.getShadowColor().value}`;
    element.setTextarea(css);
  }

  function copyButton() {
    const cssResult = element.getTextarea().value;
    const textarea = document.createElement("textarea");
    textarea.value = cssResult;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  function glassUpdateColor() {
    glassRGBA = hexToRgb(element.getGlassColor().value);
    glassTransparency(element.getGlassTransparency().value);
  }

  function shadowUpdateColor() {
    shadowRGBA = hexToRgb(element.getShadowColor().value);
    shadowTransparency(element.getShadowTransparency().value);
  }

  return {
    init,
    getRgba,
    setRgba,
    hexToRgb,
    updateObject,
    updateCSSCode,
    copyButton,
    glassUpdateColor,
    shadowUpdateColor,
  };
}
