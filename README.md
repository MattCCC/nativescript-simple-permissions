# Nativescript Simple Permissions

This plugin is a wrap around Nathanael's nativescript-permissions plugin and also provides IOS Permissions with a matching API.

## (Optional) Prerequisites / Requirements

Don't forget to add permissions to `AndroidManifest.xml` for android and `Info.plist` for iOS (Xcode >= 8).

## Installation

To install simply run

```javascript
tns plugin add nativescript-simple-permissions
```

## Usage 

Describe any usage specifics for your plugin. Give examples for Android, iOS, Angular if needed. See [nativescript-drop-down](https://www.npmjs.com/package/nativescript-drop-down) for example.
	
	```javascript
  import { SimplePermissions } from 'nativescript-simple-permissions';
  import { Permissions } from 'nativescript-simple-permissions/simple-permissions.common';

export class HelloWorldModel extends Observable {
  public message: string;
  private simplePermissions: SimplePermissions;

  constructor() {
    super();

    this.simplePermissions = new SimplePermissions();
    this.message = this.simplePermissions.message;
  }
    ```)

## API

Describe your plugin methods and properties here. See [nativescript-feedback](https://github.com/EddyVerbruggen/nativescript-feedback) for example.

hasPermission(permission: Permissions) : boolean

requestPermission(permission: Permissions) : Promise<boolean>
    
| Property | Default | Description |
| --- | --- | --- |
| some property | property default value | property description, default values, etc.. |
| another property | property default value | property description, default values, etc.. |
    
## License

Apache License Version 2.0, January 2004
