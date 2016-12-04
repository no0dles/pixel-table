import {View} from "../lib/view";
import {TableRenderer} from "../lib/renderers/table";

const renderer = new TableRenderer();
const view = new View(renderer);

let brightness = 0.0;
var step = 0.0;

var treeColor = { r: 0, g: 255, b: 0};
var woodColor = { r: 160, g: 104, b: 40};

var x = 8;

var treeCords = [
  {x : x, y: 3 },
  {x : x, y: 4 },
  {x : x-1, y: 3 },
  {x : x-1, y: 4 },
  {x : x-2, y: 2 },
  {x : x-2, y: 3 },
  {x : x-2, y: 4 },
  {x : x-2, y: 5 },
  {x : x-3, y: 2 },
  {x : x-3, y: 3 },
  {x : x-3, y: 4 },
  {x : x-3, y: 5 },
  {x : x-4, y: 1 },
  {x : x-4, y: 2 },
  {x : x-4, y: 3 },
  {x : x-4, y: 4 },
  {x : x-4, y: 5 },
  {x : x-4, y: 6 }
];

var woodCords = [
  {x : x-5, y: 3 },
  {x : x-5, y: 4 },
  {x : x-6, y: 3 },
  {x : x-6, y: 4 }
];

var flocks = [
  { y: 1, x: 17 },
  { y: 6, x: 11 }
];

function update() {
  view.setColor({ r: 0, g: 0, b: 100});

  for(var treeCord of treeCords) {
    view.setColor(treeColor, treeCord);
  }

  for(var wordCord of woodCords) {
    view.setColor(woodColor, wordCord);
  }

  for(var sx = 0; sx < 2; sx++) {
    for(var y = 0; y < 8; y++) {
      view.setColor({ r: 255, g: 255, b: 255}, {x : sx, y: y });
    }
  }

  for(var flock of flocks) {
    flock.x--;

    if(flock.x < 2) {
      flock.y = Math.floor(Math.random()*8);
      flock.x = 13;
    }
    if(flock.x < 11) {
      view.setColor({ r: 255, g: 255, b: 255 }, flock);
    }
  }

  view.setColor({ r: 255, g: 0, b: 0 }, {x : x-6, y: 5 });
  view.setColor({ r: 255, g: 165, b: 0 }, {x : x-6, y: 1 });


  brightness += step;

  if(brightness < 0) {
    brightness = 0;
    step *= -1;
  } else if(brightness > 1) {
    brightness = 1;
    step *= -1;
  }

  setTimeout(update, 700);
}

function render() {
  renderer.transmit();

  setTimeout(render, 20);
}

update();
render();
