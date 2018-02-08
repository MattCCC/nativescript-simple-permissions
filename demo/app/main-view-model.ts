import { Permissions } from 'nativescript-simple-permissions/simple-permissions.common';
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

  requestRecordAudio() {
    console.log("Requesting audio recording");
    this.simplePermissions.requestPermission(Permissions.RECORD_AUDIO).then((res) => console.log("res", res));
  }
 
}
