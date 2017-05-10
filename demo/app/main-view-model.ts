import {Observable} from 'data/observable';
import {NativescriptBottombar} from 'nativescript-nativescript-bottombar';

export class HelloWorldModel extends Observable {
  public message: string;
  private nativescriptBottombar: NativescriptBottombar;

  constructor() {
    super();

    this.nativescriptBottombar = new NativescriptBottombar();
    this.message = this.nativescriptBottombar.message;
  }
}