# Nativescript Simple Permissions

This plugin is a wrap around Nathanael's nativescript-permissions plugin and also provides IOS Permissions with a matching API.

## (Optional) Prerequisites / Requirements

Don't forget to add permissions to `AndroidManifest.xml` for android and `Info.plist` for iOS (Xcode >= 8).

## Installation

To install simply run

```js
tns plugin add nativescript-simple-permissions
```

## Usage 

Describe any usage specifics for your plugin. Give examples for Android, iOS, Angular if needed. See [nativescript-drop-down](https://www.npmjs.com/package/nativescript-drop-down) for example.
	
```js
  import { SimplePermissions } from 'nativescript-simple-permissions';
  import { Permissions } from 'nativescript-simple-permissions/simple-permissions.common';

export class PermissionExample {
  private simplePermissions: SimplePermissions;

  constructor() {
    this.simplePermissions = new SimplePermissions();
  }
```

## API

Describe your plugin methods and properties here. See [nativescript-feedback](https://github.com/EddyVerbruggen/nativescript-feedback) for example.

hasPermission(permission: Permissions) : boolean

requestPermission(permission: Permissions) : Promise<boolean>
    
## License

Apache License Version 2.0, January 2004
