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
    this.simplePermissions.requestPermission(Permissions.RECORD_AUDIO)
    .then((res) => console.log("res", res))
    .catch(() => console.log("error"));
  }

  requestLocationWhenInUse() {
    console.log("Requesting location when in use");
    this.simplePermissions.requestPermission(Permissions.LOCATION_IN_USE)
    .then((res) => console.log("res", res)); 
  }

  requestLocationAlways() {
    console.log("Requesting location always");
    this.simplePermissions.requestPermission(Permissions.LOCATION_ALWAYS).then((res) => console.log("res", res)); 
  }

  requestCamera() {
    console.log("Requesting camera");
    this.simplePermissions.requestPermission(Permissions.CAMERA).then((res)=> console.log("res", res));
  }
 
}
