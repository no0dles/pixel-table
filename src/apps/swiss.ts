import {View} from "../lib/view";
import {TableRenderer} from "../lib/renderers/table";

const renderer = new TableRenderer();
const view = new View(renderer);

let brightness = 0.0;
var step = 0.0;

view.setColor({ r: 255, g: 0, b: 0});

var color = { r: 255, g: 255, b: 255};

function update() {
  view.setColor(color, {x : 5, y: 1 });
  view.setColor(color, {x : 6, y: 1 });
  view.setColor(color, {x : 5, y: 2 });
  view.setColor(color, {x : 6, y: 2 });
  view.setColor(color, {x : 5, y: 3 });
  view.setColor(color, {x : 6, y: 3 });
  view.setColor(color, {x : 5, y: 3 });
  view.setColor(color, {x : 6, y: 3 });
  view.setColor(color, {x : 5, y: 4 });
  view.setColor(color, {x : 6, y: 4 });
  view.setColor(color, {x : 5, y: 5 });
  view.setColor(color, {x : 6, y: 5 });
  view.setColor(color, {x : 5, y: 6 });
  view.setColor(color, {x : 6, y: 6 });



  view.setColor(color, {x : 3, y: 3 });
  view.setColor(color, {x : 4, y: 3 });
  view.setColor(color, {x : 3, y: 4 });
  view.setColor(color, {x : 4, y: 4 });


  view.setColor(color, {x : 7, y: 3 });
  view.setColor(color, {x : 8, y: 3 });
  view.setColor(color, {x : 7, y: 4 });
  view.setColor(color, {x : 8, y: 4 });

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
