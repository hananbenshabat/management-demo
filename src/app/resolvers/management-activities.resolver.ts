import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { UiManagedApplication } from '../interfaces/ui-managed-application.interface';
import { MANAGE_STUB } from '../stubs/manage.stub';

export const managementActivitiesResolver: ResolveFn<UiManagedApplication[]> = (
    route: ActivatedRouteSnapshot
): UiManagedApplication[] =>
    MANAGE_STUB.apps.filter((a: UiManagedApplication): boolean => a.id === +route.params['id']);
