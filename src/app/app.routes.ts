import { Routes } from '@angular/router';
import { RoutePath } from './enums/route-path.enum';
import { ManagementApplicationsComponent } from './components/management-applications/management-applications.component';
import { managementApplicationsResolver } from './resolvers/management-applications.resolver';
import { managementActivitiesGuard } from './guards/management-activities.guard';
import { managementActivitiesResolver } from './resolvers/management-activities.resolver';

export const ROUTES: Routes = [
    {
        path: RoutePath.Applications,
        children: [
            {
                path: '',
                component: ManagementApplicationsComponent,
                resolve: { appsData: managementApplicationsResolver }
            },
            {
                path: ':id',
                component: ManagementApplicationsComponent,
                canActivate: [managementActivitiesGuard],
                resolve: { appsData: managementActivitiesResolver }
            }
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: '/' + RoutePath.Applications }
];
