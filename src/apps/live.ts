import {View} from "../lib/view";
import {TableRenderer} from "../lib/renderers/table";

const renderer = new TableRenderer();
const view = new View(renderer);

var y = 0;
var x = 0;
var yStep = 1;
var xStep = 1;
var brightness = 0.4;

view.setColor({ r: 0, g: 0, b: 0});


var colors = [
  [255, 0, 0],
  [0, 255, 0],
  [0, 0, 255],
  [255, 255, 0],
  [255, 0, 255],
  [0, 255, 255],
  [255, 255, 255]
];
var colorIndex = 0;

function update() {
  view.setColor({ r: 0, g: 0, b: 0}, { x: x, y: y });
  //this.view.setBrightness(0.2, { x: x, y: y });

  x += xStep;
  if(x > 10 || x < 1) {
    xStep *= -1;
    colorIndex = (colorIndex + 1) % colors.length;

  } else {

    y += yStep;
    if(y > 6 || y < 1) {
      yStep *= -1;
      colorIndex = (colorIndex + 1) % colors.length;

    }
  }

  view.setColor(
    { r: colors[colorIndex][0], g: colors[colorIndex][1], b: colors[colorIndex][2]},
    { x: x, y: y }
  );
  //this.view.setBrightness(1, { x: x, y: y });

  setTimeout(update, 1000);
}

function render() {
  renderer.transmit();

  setTimeout(render, 20);
}

render();
update();