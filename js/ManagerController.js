export function ManagerController({ element, glass, shadow, tools }) {
  function init() {
    glass.init();
    shadow.init();
    tools.init();
    tools.updateObject();
    tools.updateCSSCode();
    listenerControllers();
  }

  function listenerControllers() {
    element.getcontrollers().addEventListener("click", (e) => {
      if (e.target.classList.contains("accordion")) {
        e.target.classList.toggle("active");
        e.target.children[1].classList.toggle("active");
      } else if (e.target.localName === "p") {
        e.target.parentNode.classList.toggle("active");
        e.target.nextElementSibling.classList.toggle("active");
      } else {
        return;
      }
    });

    element.getButton().addEventListener("click", () => {
      tools.copyButton();
    });
  }

  return { init };
}
