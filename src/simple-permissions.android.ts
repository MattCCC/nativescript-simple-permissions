import { Common , Permissions} from './simple-permissions.common';

import * as permissions from 'nativescript-permissions';

declare var android;

export class SimplePermissions extends Common {
    requestPermission(permission: Permissions) {
        return new Promise((resolve, reject )=> {
            switch (permission) {
                case Permissions.RECORD_AUDIO:
                permissions.requestPermission(android.Manifest.permission.RECORD_AUDIO, "Permission to record audio")
                .then(() => resolve(true))
                .catch(() => resolve(false));
            }
        });

    }
}
