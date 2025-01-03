import { Routes } from '@angular/router';
import { RoutePath } from './enums/route-path.enum';
import { ManagementApplicationsComponent } from './components/management-applications/management-applications.component';
import { managementApplicationsResolver } from './resolvers/management-applications.resolver';

export const ROUTES: Routes = [
    {
        path: RoutePath.Applications,
        component: ManagementApplicationsComponent,
        resolve: { appsData: managementApplicationsResolver }
    },
    { path: '**', pathMatch: 'full', redirectTo: '/' + RoutePath.Applications }
];
