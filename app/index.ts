import "./style.scss";

import("../wasm/pkg").then((module) => {
  function init() {
    const circle1 = document.getElementById("circle1");
    circle1.setAttribute("fill", "red");
    circle1.setAttribute("cx", "200");
  }

  init();
});
