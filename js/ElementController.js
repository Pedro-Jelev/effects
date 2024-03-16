export function ElementController() {
  const glassBlurInput = document.querySelector(".box-wrapper #glass-blur");
  const glassRadiusInput = document.querySelector(".box-wrapper #glass-radius");
  const glassColorInput = document.querySelector(".box-wrapper #color");
  const glassTransparencyInput = document.querySelector(
    ".box-wrapper #glass-transparency"
  );
  const glassOutlineInput = document.querySelector(
    ".box-wrapper #glass-outline"
  );

  const shadowHorizontalInput = document.querySelector(
    ".box-wrapper #horizontal"
  );
  const shadowVerticalInput = document.querySelector(".box-wrapper #vertical");
  const shadowBlurInput = document.querySelector(".box-wrapper #shadow-blur");
  const shadowTransparencyInput = document.querySelector(
    ".box-wrapper #shadow-transparency"
  );
  const shadowSpreadInput = document.querySelector(
    ".box-wrapper #shadow-spread"
  );
  const shadowInsetInput = document.querySelector(
    ".box-wrapper.checkbox #shadow-inset"
  );
  const shadowColorInput = document.querySelector(".box-wrapper #shadow-color");

  const controllers = document.querySelector(".app .controllers");
  const object = document.querySelector(".object");
  const textareaInput = document.querySelector(".box-wrapper #css");
  const button = document.querySelector(".app .controllers .btn-copy");

  function glassInit(color, transparency, blur, outline, radius) {
    glassBlurInput.value = blur;
    glassColorInput.value = color;
    glassTransparencyInput.value = transparency;
    glassOutlineInput.value = outline;
    glassRadiusInput.value = radius;
  }

  function shadowInit(
    horizontal,
    vertical,
    blur,
    spread,
    inset,
    color,
    transparency
  ) {
    shadowHorizontalInput.value = horizontal;
    shadowVerticalInput.value = vertical;
    shadowBlurInput.value = blur;
    shadowSpreadInput.value = spread;
    shadowInsetInput.value = inset;
    shadowColorInput.value = color;
    shadowTransparencyInput.value = transparency;
  }

  function getcontrollers() {
    return controllers;
  }

  function getObject() {
    return object;
  }

  function getTextarea() {
    return textareaInput;
  }

  function getButton() {
    return button;
  }

  function setTextarea(text) {
    textareaInput.value = text;
  }

  function getGlassBlur() {
    return glassBlurInput;
  }

  function getGlassTransparency() {
    return glassTransparencyInput;
  }

  function getGlassColor() {
    return glassColorInput;
  }

  function getGlassOutline() {
    return glassOutlineInput;
  }

  function getGlassRadius() {
    return glassRadiusInput;
  }

  function getShadowHorizontal() {
    return shadowHorizontalInput;
  }

  function getShadowVertical() {
    return shadowVerticalInput;
  }

  function getShadowBlur() {
    return shadowBlurInput;
  }

  function getShadowTransparency() {
    return shadowTransparencyInput;
  }

  function getShadowSpread() {
    return shadowSpreadInput;
  }

  function getShadowInset() {
    return shadowInsetInput;
  }

  function getShadowColor() {
    return shadowColorInput;
  }

  return {
    glassInit,
    shadowInit,
    getObject,
    getcontrollers,
    getTextarea,
    getButton,
    getGlassBlur,
    getGlassTransparency,
    getGlassColor,
    getGlassOutline,
    setTextarea,
    getShadowBlur,
    getShadowColor,
    getShadowHorizontal,
    getShadowInset,
    getGlassRadius,
    getShadowSpread,
    getShadowVertical,
    getShadowTransparency,
  };
}
