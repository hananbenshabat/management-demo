import { Routes } from '@angular/router';
import { RoutePath } from './enums/route-path.enum';
import { TableDemoComponent } from './components/table-demo/table-demo.component';

export const ROUTES: Routes = [
    {
        path: RoutePath.Applications,
        component: TableDemoComponent
    },
    { path: '**', pathMatch: 'full', redirectTo: '/' + RoutePath.Applications }
];
