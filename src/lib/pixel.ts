import {ICoordinate} from "./coordinate";
import {IRGB} from "./rgb";

export interface IPixel {
  color: IRGB;
  coordinate: ICoordinate;
}