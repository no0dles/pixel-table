import {ICoordinate} from "./coordinate";
import {View} from "./view";

export interface IPixelMapping {
  index: number;
  range: number;
}

export class PixelMapper {
  private mapping: { [index: number]: IPixelMapping };

  constructor() {
    this.mapping = {};
    this.init();
  }

  init() {
    this.mapping[0] = { index: 48, range: 4 };
    this.mapping[1] = { index: 52, range: 4 };
    this.mapping[2] = { index: 56, range: 4 };
    this.mapping[3] = { index: 60, range: 4 };
    this.mapping[4] = { index: 188, range: 4 };
    this.mapping[5] = { index: 184, range: 4 };
    this.mapping[6] = { index: 180, range: 4 };
    this.mapping[7] = { index: 176, range: 4 };
    this.mapping[8] = { index: 316, range: 4 };
    this.mapping[9] = { index: 312, range: 4 };
    this.mapping[10] = { index: 308, range: 4 };
    this.mapping[11] = { index: 304, range: 4 };
    this.mapping[12] = { index: 44, range: 4 };
    this.mapping[13] = { index: 40, range: 4 };
    this.mapping[14] = { index: 36, range: 4 };
    this.mapping[15] = { index: 32, range: 4 };
    this.mapping[16] = { index: 160, range: 4 };
    this.mapping[17] = { index: 164, range: 4 };
    this.mapping[18] = { index: 168, range: 4 };
    this.mapping[19] = { index: 172, range: 4 };
    this.mapping[20] = { index: 288, range: 4 };
    this.mapping[21] = { index: 292, range: 4 };
    this.mapping[22] = { index: 296, range: 4 };
    this.mapping[23] = { index: 300, range: 4 };
    this.mapping[24] = { index: 16, range: 4 };
    this.mapping[25] = { index: 20, range: 4 };
    this.mapping[26] = { index: 24, range: 4 };
    this.mapping[27] = { index: 28, range: 4 };
    this.mapping[28] = { index: 156, range: 4 };
    this.mapping[29] = { index: 152, range: 4 };
    this.mapping[30] = { index: 148, range: 4 };
    this.mapping[31] = { index: 144, range: 4 };
    this.mapping[32] = { index: 284, range: 4 };
    this.mapping[33] = { index: 280, range: 4 };
    this.mapping[34] = { index: 276, range: 4 };
    this.mapping[35] = { index: 272, range: 4 };
    this.mapping[36] = { index: 12, range: 4 };
    this.mapping[37] = { index: 8, range: 4 };
    this.mapping[38] = { index: 4, range: 4 };
    this.mapping[39] = { index: 0, range: 4 };
    this.mapping[40] = { index: 128, range: 4 };
    this.mapping[41] = { index: 132, range: 4 };
    this.mapping[42] = { index: 136, range: 4 };
    this.mapping[43] = { index: 140, range: 4 };
    this.mapping[44] = { index: 256, range: 4 };
    this.mapping[45] = { index: 260, range: 4 };
    this.mapping[46] = { index: 264, range: 4 };
    this.mapping[47] = { index: 268, range: 4 };
    this.mapping[48] = { index: 76, range: 4 };
    this.mapping[49] = { index: 72, range: 4 };
    this.mapping[50] = { index: 68, range: 4 };
    this.mapping[51] = { index: 64, range: 4 };
    this.mapping[52] = { index: 192, range: 4 };
    this.mapping[53] = { index: 196, range: 4 };
    this.mapping[54] = { index: 200, range: 4 };
    this.mapping[55] = { index: 204, range: 4 };
    this.mapping[56] = { index: 320, range: 4 };
    this.mapping[57] = { index: 324, range: 4 };
    this.mapping[58] = { index: 328, range: 4 };
    this.mapping[59] = { index: 332, range: 4 };
    this.mapping[60] = { index: 80, range: 4 };
    this.mapping[61] = { index: 84, range: 4 };
    this.mapping[62] = { index: 88, range: 4 };
    this.mapping[63] = { index: 92, range: 4 };
    this.mapping[64] = { index: 220, range: 4 };
    this.mapping[65] = { index: 216, range: 4 };
    this.mapping[66] = { index: 212, range: 4 };
    this.mapping[67] = { index: 208, range: 4 };
    this.mapping[68] = { index: 348, range: 4 };
    this.mapping[69] = { index: 344, range: 4 };
    this.mapping[70] = { index: 340, range: 4 };
    this.mapping[71] = { index: 336, range: 4 };
    this.mapping[72] = { index: 108, range: 4 };
    this.mapping[73] = { index: 104, range: 4 };
    this.mapping[74] = { index: 100, range: 4 };
    this.mapping[75] = { index: 96, range: 4 };
    this.mapping[76] = { index: 224, range: 4 };
    this.mapping[77] = { index: 228, range: 4 };
    this.mapping[78] = { index: 232, range: 4 };
    this.mapping[79] = { index: 236, range: 4 };
    this.mapping[80] = { index: 352, range: 4 };
    this.mapping[81] = { index: 356, range: 4 };
    this.mapping[82] = { index: 360, range: 4 };
    this.mapping[83] = { index: 364, range: 4 };
    this.mapping[84] = { index: 112, range: 4 };
    this.mapping[85] = { index: 116, range: 4 };
    this.mapping[86] = { index: 120, range: 4 };
    this.mapping[87] = { index: 124, range: 4 };
    this.mapping[88] = { index: 252, range: 4 };
    this.mapping[89] = { index: 248, range: 4 };
    this.mapping[90] = { index: 244, range: 4 };
    this.mapping[91] = { index: 240, range: 4 };
    this.mapping[92] = { index: 380, range: 4 };
    this.mapping[93] = { index: 376, range: 4 };
    this.mapping[94] = { index: 372, range: 4 };
    this.mapping[95] = { index: 368, range: 4 };
  }

  resolve(coordinate: ICoordinate): IPixelMapping {
    if(coordinate.x < 0 || coordinate.x > 11 || coordinate.y < 0 || coordinate.y > 7) {
      throw new Error(`Invalid coordinate (${coordinate.x}/${coordinate.y})`);
    }

    const index = coordinate.x + coordinate.y * View.WIDTH;

    return this.mapping[index];
  }
}
