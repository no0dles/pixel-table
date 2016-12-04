import {IRenderer} from "./renderer";
import {ICoordinate} from "./coordinate";
import {IPixel} from "./pixel";
import {IRGB} from "./rgb";

export class View {
  public static WIDTH = 12;
  public static HEIGHT = 8;

  private pixels: Array<{ pixel: IPixel, rgb: IRGB, brightness: number }>;

  constructor(private renderer: IRenderer) {
    this.pixels = [];

    this.setColor({ r: 0, g: 0, b: 0 });
    this.setBrightness(1);
  }

  private updatePixel(coordinate: ICoordinate, rgb?: IRGB, brightness?: number) {
    const index = coordinate.x + coordinate.y * View.WIDTH;
    let pixel = this.pixels[index];

    if(!pixel) {
      pixel = {
        pixel: {
          color: {r: 0, g: 0, b: 0},
          coordinate: coordinate
        },
        rgb: {
          r: 0, g: 0, b: 0
        },
        brightness: 1
      };
    }

    if(brightness) {
      pixel.brightness = brightness;
    }

    if(rgb) {
      pixel.rgb = rgb;
    }

    if(brightness !== null || rgb !== null) {
      pixel.pixel.color.r = pixel.rgb.r * pixel.brightness;
      pixel.pixel.color.g = pixel.rgb.g * pixel.brightness;
      pixel.pixel.color.b = pixel.rgb.b * pixel.brightness;
    }

    return pixel.pixel;
  }

  setColor(rgb: IRGB, coordinate?: ICoordinate) {
    if(coordinate) {
      this.renderer.update(this.updatePixel(coordinate, rgb));
    } else {
      let pixels = new Array<IPixel>();
      for(let x = 0; x < View.WIDTH; x++) {
        for(let y = 0; y < View.HEIGHT; y++) {
          pixels.push(this.updatePixel({ x: x, y: y }, rgb));
        }
      }
      this.renderer.update(...pixels);
    }

  }

  setBrightness(brightness: number, coordinate?: ICoordinate) {
    if(coordinate) {
      this.renderer.update(this.updatePixel(coordinate, null, brightness));
    } else {
      let pixels = new Array<IPixel>();
      for(let x = 0; x < View.WIDTH; x++) {
        for(let y = 0; y < View.HEIGHT; y++) {
          pixels.push(this.updatePixel({ x: x, y: y }, null, brightness));
        }
      }
      this.renderer.update(...pixels);
    }
  }
}