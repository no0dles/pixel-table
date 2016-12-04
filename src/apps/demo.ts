import {App} from "../lib/app";

export class DemoApp extends App {
  private x: number = 0;
  private y: number = 0;
  private xStep: number = 1;
  private yStep: number = 1;

  init() {
    this.view.setColor({ r: 255, g: 255, b: 255});
    this.view.setBrightness(0.2);
  }

  update(delta: number) {
    this.view.setColor({ r: 255, g: 255, b: 255}, { x: this.x, y: this.y });
    //this.view.setBrightness(0.2, { x: x, y: y });

    this.y += this.yStep;
    if(this.y > 6 || this.y < 1) {
      this.yStep *= -1;

      this.x += this.xStep;
      if(this.x > 2 || this.x < 1) {
        this.xStep *= -1;
      }
    }

    this.view.setColor(
      { r: 255, g: 0, b: 0},
      { x: this.x, y: this.y }
    );
    //this.view.setBrightness(1, { x: x, y: y });
  }
}