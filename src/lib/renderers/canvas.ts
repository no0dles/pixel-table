import {IRenderer} from "../lib/renderer";
import {IPixel} from "../lib/pixel";
import {EventEmitter} from "events";

export class CanvasRenderer extends EventEmitter implements IRenderer {
  update(...pixels: IPixel[]) {

  }
}
