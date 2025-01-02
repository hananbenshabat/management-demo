import { UiManagedApplication } from './ui-managed-application.interface';

export interface UiManagedApplications {
    maxNameLength: number;
    blackListApps: string[];
    apps: UiManagedApplication[];
}
