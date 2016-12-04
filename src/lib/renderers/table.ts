import {EventEmitter} from "events";
import {IRenderer} from "../renderer";
import {PixelMapper} from "../mapper";
import {IPixel} from "../pixel";

const WebSocket = require('ws');

export class TableRenderer extends EventEmitter implements IRenderer {
  private static LED_COUNT = 384;
  private static BUFFER_OFFSET = 4;
  private static SOCKET_URL = "ws://192.168.1.120:7890";

  private socket: WebSocket;
  private frame: Uint8ClampedArray;
  private mapper: PixelMapper;

  constructor() {
    super();

    this.socket = new WebSocket(TableRenderer.SOCKET_URL);
    this.socket.onopen = () => {
      this.transmit();
      this.emit("ready");
    };

    this.frame = new Uint8ClampedArray(TableRenderer.BUFFER_OFFSET + TableRenderer.LED_COUNT * 3);
    this.mapper = new PixelMapper();
  }

  update(...pixels: IPixel[]) {
    console.log(pixels);
    for(let pixel of pixels) {
      let mapping = this.mapper.resolve(pixel.coordinate);
      for(let i = 0; i < mapping.range; i++) {
        this.frame[TableRenderer.BUFFER_OFFSET + mapping.index*3 + i*3] = pixel.color.r;
        this.frame[TableRenderer.BUFFER_OFFSET + mapping.index*3 + i*3 + 1] = pixel.color.g;
        this.frame[TableRenderer.BUFFER_OFFSET + mapping.index*3 + i*3 + 2] = pixel.color.b;
      }
    }

    //this.transmit();
  }

  transmit() {
    if(this.socket.readyState != 1) {
      return;
    }

    if(this.socket.bufferedAmount > this.frame.length) {
      console.log("lagging");
      return;
    }

    this.socket.send(this.frame.buffer);
  }
}
