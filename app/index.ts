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
