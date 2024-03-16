export function ShadowController({ element, tools }) {
  function init() {
    element.shadowInit(50, 20, 10, 0, "", "#252525", 0.85);

    element.getShadowBlur().addEventListener("input", () => {
      tools.updateObject();
    });

    element.getShadowColor().addEventListener("input", () => {
      tools.shadowUpdateColor();
      tools.updateObject();
    });

    element.getShadowHorizontal().addEventListener("input", () => {
      tools.updateObject();
    });

    element.getShadowInset().addEventListener("input", () => {
      toggleInset();
      tools.updateObject();
    });

    element.getShadowSpread().addEventListener("input", () => {
      tools.updateObject();
    });

    element.getShadowVertical().addEventListener("input", () => {
      tools.updateObject();
    });

    element.getShadowTransparency().addEventListener("input", () => {
      tools.shadowUpdateColor();
      tools.updateObject();
    });
  }

  function toggleInset() {
    element.getShadowInset().checked
      ? (element.getShadowInset().value = "inset")
      : (element.getShadowInset().value = "");
  }

  return { init };
}
