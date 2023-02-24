import "./style.scss";

import("../wasm/pkg").then((module) => {
  function init() {
    const svgDom = document.getElementById("svg");
    const circle1 = document.getElementById("circle1");
    circle1.setAttribute("fill", "red");
    // circle1.setAttribute("cx", "200");

    circle1.addEventListener(
      "click",
      () => {
        circle1.setAttribute("r", 20 + +circle1.getAttribute("r") + "");
      },
      false
    );
  }

  init();
});
