import { iOsPermissisonsUtil, PermissionStatus } from './ios/permissions-util';
import { Common, Permissions } from './simple-permissions.common';

export class SimplePermissions extends Common {
    requestPermission(permission: Permissions): Promise<boolean> {
        return new Promise((resolve, reject) => {
            switch (permission) {
                case Permissions.RECORD_AUDIO:
                    iOsPermissisonsUtil.requestAudioPermission().then(res => resolve(res));
                    break;
                case Permissions.LOCATION_ALWAYS:
                    iOsPermissisonsUtil.requestLocationPermission(true).then(res => {
                        if (res == PermissionStatus.Granted) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    })
                    break;
                case Permissions.LOCATION_IN_USE:
                    iOsPermissisonsUtil.requestLocationPermission().then(res => {
                        if (res == PermissionStatus.Granted) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    })
                    break;
                case Permissions.CAMERA:
                    iOsPermissisonsUtil.requestCameraPermission().then(res => resolve(res));
                    break;
            }
        });

    }
}
