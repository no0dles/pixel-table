import {View} from "./view";

export abstract class App {
  constructor(protected view: View) {

  }

  abstract init();

  abstract update(delta: number);
}