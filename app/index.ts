import "./style.scss";

import { SVG } from "@svgdotjs/svg.js";

function start() {
  const draw = SVG().addTo("body").size(300, 300);

  draw.rect(100, 100).fill("red").attr({
    x: 100,
    y: 100
  });
}

start();

// import("../wasm/pkg").then((module) => {
// import Svg from '../node_modules/@svgdotjs/svg.js/src/elements/Svg';
// function init() {
//   //   const svgDom = document.getElementById("svg");
//   //   const circle1 = document.getElementById("circle1");
//   //   circle1.setAttribute("fill", "red");
//   //   // circle1.setAttribute("cx", "200");

//   //   circle1.addEventListener(
//   //     "click",
//   //     () => {
//   //       circle1.setAttribute("r", 20 + +circle1.getAttribute("r") + "");
//   //     },
//   //     false
//   //   );
//   // }

//   // init();
// });
