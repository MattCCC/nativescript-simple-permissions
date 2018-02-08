import { Common, Permissions } from './simple-permissions.common';

import * as permissions from 'nativescript-permissions';

declare var android;

export class SimplePermissions extends Common {
    requestPermission(permission: Permissions): Promise<boolean> {
        return new Promise((resolve, reject) => {
            switch (permission) {
                case Permissions.RECORD_AUDIO:
                    permissions.requestPermission(android.Manifest.permission.RECORD_AUDIO, "Permission to record audio")
                        .then(() => resolve(true))
                        .catch(() => resolve(false));
                    break;
                case Permissions.CAMERA:
                    permissions.requestPermission(android.Manifest.permission.CAMERA, "Permissions to get camera")
                        .then(() => resolve(true))
                        .catch(() => resolve(false));
                    break;
                case Permissions.LOCATION_ALWAYS:
                case Permissions.LOCATION_IN_USE:
                    permissions.requestPermission(android.Manifest.permission.ACCESS_FINE_LOCATION, "Permissions to get location")
                        .then(() => resolve(true))
                        .catch(() => resolve(false));
                    break;
            }
        });

    }
}
