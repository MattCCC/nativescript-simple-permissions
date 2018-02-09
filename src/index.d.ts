import { Common, Permissions } from './simple-permissions.common';
export declare class SimplePermissions extends Common {
  requestPermission(permission: Permissions): Promise<boolean>;
  hasPermission(permission: Permissions): boolean;
}