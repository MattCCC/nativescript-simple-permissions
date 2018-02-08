import { Observable } from 'tns-core-modules/data/observable';
import { SimplePermissions } from 'nativescript-simple-permissions';

export class HelloWorldModel extends Observable {
  public message: string;
  private simplePermissions: SimplePermissions;

  constructor() {
    super();

    this.simplePermissions = new SimplePermissions();
    this.message = this.simplePermissions.message;
  }
}
