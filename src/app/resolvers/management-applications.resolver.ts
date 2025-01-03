import { ResolveFn } from '@angular/router';
import { MANAGE_STUB } from '../stubs/manage.stub';
import { UiManagedApplication } from '../interfaces/ui-managed-application.interface';

export const managementApplicationsResolver: ResolveFn<UiManagedApplication[]> = (): UiManagedApplication[] =>
    MANAGE_STUB.apps;
