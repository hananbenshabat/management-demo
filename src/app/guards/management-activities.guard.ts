import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync } from '@angular/router';
import { UiManagedApplication } from '../interfaces/ui-managed-application.interface';
import { MANAGE_STUB } from '../stubs/manage.stub';

export const managementActivitiesGuard: CanActivateFn = (route: ActivatedRouteSnapshot): MaybeAsync<GuardResult> =>
    route.params['id'] && !!MANAGE_STUB.apps.find((a: UiManagedApplication): boolean => a.id === +route.params['id']);
