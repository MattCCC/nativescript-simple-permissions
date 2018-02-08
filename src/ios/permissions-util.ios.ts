export class PermissionsUtil {
    private _locationListener: LocationListener;
    private _locationManager: CLLocationManager;

    /*
    *   AUDIO PERMISSIONS
    */

    // Get Audio permissions status
    public getAudioPermissionStatus(): PermissionStatus {
        let permission = AVAudioSession.sharedInstance().recordPermission();
        switch (permission) {
            case AVAudioSessionRecordPermission.Granted:
                return PermissionStatus.Granted;
            case AVAudioSessionRecordPermission.Denied:
                return PermissionStatus.Denied;
            case AVAudioSessionRecordPermission.Undetermined:
                return PermissionStatus.Undetermined;
        }
    }

    // Request Audio permissions
    public requestAudioPermission(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            AVAudioSession.sharedInstance().requestRecordPermission(response => {
                resolve(response);
            })
        })
    }

    /*
    *   LOCATION PERMISSIONS
    */

    // Get Location permissions status (true for always mode)
    public getLocationPermissionStatus(always: boolean = false): PermissionStatus {
        let permission = CLLocationManager.authorizationStatus();
        return getLocationPermissionStatusFromCLAuthorizationStatus(permission, always);
    }

    // Request Location permissions (true for always mode)
    public requestLocationPermission(always: boolean = false): Promise<PermissionStatus> {
        return new Promise((resolve, reject) => {
            // Get current permissions status
            let permissionStatus = this.getLocationPermissionStatus(always);
            if (permissionStatus !== PermissionStatus.Undetermined) {
                resolve(permissionStatus);
            }

            if (!this._locationListener) {
                this._locationListener = new LocationListener();
            }

            if (!this._locationManager) {
                this._locationManager = new CLLocationManager();
                this._locationManager.delegate = this._locationListener;
                this._locationManager.desiredAccuracy = kCLLocationAccuracyBest;
            }

            this._locationListener.setResolveCallback((res: PermissionStatus) => {
                resolve(res);
            });

            if (always) {
                this._locationListener.setAlways();
                this._locationManager.requestAlwaysAuthorization();
            }
            else {
                this._locationListener.setWheninUse();
                this._locationManager.requestWhenInUseAuthorization();
            }
        });
    }

    /*
    *  CAMERA PERMISSIONS
    */

    // Get Camera permissions status
    public getCameraAuthorizationStatus(): PermissionStatus {

        let status = AVCaptureDevice.authorizationStatusForMediaType(AVMediaTypeVideo);
        switch (status) {
            case AVAuthorizationStatus.Authorized:
                return PermissionStatus.Granted;
            case AVAuthorizationStatus.Denied:
                return PermissionStatus.Denied;
            case AVAuthorizationStatus.NotDetermined:
                return PermissionStatus.Undetermined;
            case AVAuthorizationStatus.Restricted:
                return PermissionStatus.Denied;
        }
    }

    // Request Camera Permission
    public requestCameraPermission(): Promise<boolean> {
        return new Promise((resolve) => {
            AVCaptureDevice.requestAccessForMediaTypeCompletionHandler(AVMediaTypeVideo, resolve);
        });
    }

}

class LocationListener extends NSObject implements CLLocationManagerDelegate {
    public static ObjCProtocols = [CLLocationManagerDelegate]; // tslint:disable-line:variable-name
    private _always: boolean;
    private _resolve: (res: any) => void;
    private _reject: (error: Error) => void;

    setAlways() {
        this._always = true;
    }

    setResolveCallback(resolve: (res: any) => void) {
        this._resolve = resolve;
    }

    setWheninUse() {
        this._always = false;
    }
    public locationManagerDidChangeAuthorizationStatus(manager: CLLocationManager, status: CLAuthorizationStatus) {
        let res = getLocationPermissionStatusFromCLAuthorizationStatus(status, this._always);
        this._resolve(res);
    }
}

function getLocationPermissionStatusFromCLAuthorizationStatus(status: CLAuthorizationStatus, always = false): PermissionStatus {
    switch (status) {
        case CLAuthorizationStatus.kCLAuthorizationStatusAuthorized:
            return PermissionStatus.Granted;
        case CLAuthorizationStatus.kCLAuthorizationStatusAuthorizedAlways:
            return PermissionStatus.Granted;
        case CLAuthorizationStatus.kCLAuthorizationStatusAuthorizedWhenInUse:
            if (always) {
                return PermissionStatus.Denied;
            }
            return PermissionStatus.Granted;
        case CLAuthorizationStatus.kCLAuthorizationStatusDenied:
            return PermissionStatus.Denied;
        case CLAuthorizationStatus.kCLAuthorizationStatusNotDetermined:
            return PermissionStatus.Undetermined;
        case CLAuthorizationStatus.kCLAuthorizationStatusRestricted:
            return PermissionStatus.Denied;
    }
}



export enum PermissionStatus {
    Granted = "granted",
    Denied = "denied",
    Undetermined = "undetermined"
}

export const iOsPermissisonsUtil: PermissionsUtil = new PermissionsUtil();