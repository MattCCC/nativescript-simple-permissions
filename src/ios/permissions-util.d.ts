export declare class PermissionsUtil {
    private _locationListener;
    private _locationManager;
    getAudioPermissionStatus(): PermissionStatus;
    requestAudioPermission(): Promise<boolean>;
    getLocationPermissionStatus(always?: boolean): PermissionStatus;
    requestLocationPermission(always?: boolean): Promise<PermissionStatus>;
    getCameraAuthorizationStatus(): PermissionStatus;
    requestCameraPermission(): Promise<boolean>;
}
export declare enum PermissionStatus {
    Granted = "granted",
    Denied = "denied",
    Undetermined = "undetermined",
}
export declare const iOsPermissisonsUtil: PermissionsUtil;
