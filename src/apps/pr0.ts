import {View} from "../lib/view";
import {TableRenderer} from "../lib/renderers/table";

const renderer = new TableRenderer();
const view = new View(renderer);

let brightness = 0.0;
var step = 0.1;

view.setColor({ r: 0, g: 0, b: 0});

function update() {
  view.setColor({ r: 255 * brightness, g: 0, b: 0}, {x : 3, y: 1 });
  view.setColor({ r: 255 * brightness, g: 0, b: 0}, {x : 4, y: 2 });
  view.setColor({ r: 255 * brightness, g: 0, b: 0}, {x : 5, y: 3 });
  view.setColor({ r: 255 * brightness, g: 0, b: 0}, {x : 4, y: 4 });
  view.setColor({ r: 255 * brightness, g: 0, b: 0}, {x : 3, y: 5 });



  view.setColor({ r: 255 * brightness, g: 0, b: 0}, {x : 6, y: 5 });
  view.setColor({ r: 255 * brightness, g: 0, b: 0}, {x : 7, y: 5 });
  view.setColor({ r: 255 * brightness, g: 0, b: 0}, {x : 8, y: 5 });

  brightness += step;

  if(brightness < 0) {
    brightness = 0;
    step *= -1;
  } else if(brightness > 1) {
    brightness = 1;
    step *= -1;
  }

  setTimeout(update, 100);
}

function render() {
  renderer.transmit();

  setTimeout(render, 20);
}

update();
render();
