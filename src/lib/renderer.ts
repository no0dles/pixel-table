import {IPixel} from "./pixel";
import {EventEmitter} from "events";

export interface IRenderer extends EventEmitter {
  update(...pixels: IPixel[]);
}