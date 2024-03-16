export function GlassController({ element, tools }) {
  function init() {
    element.glassInit("#000000", 0.75, 1, 0, 20);

    element.getGlassBlur().addEventListener("input", () => {
      tools.updateObject();
    });

    element.getGlassTransparency().addEventListener("input", () => {
      tools.glassUpdateColor();
      tools.updateObject();
    });

    element.getGlassColor().addEventListener("input", () => {
      tools.glassUpdateColor();
      tools.updateObject();
    });

    element.getGlassOutline().addEventListener("input", () => {
      tools.updateObject();
    });

    element.getGlassRadius().addEventListener("input", () => {
      tools.updateObject();
    });
  }

  return { init };
}
