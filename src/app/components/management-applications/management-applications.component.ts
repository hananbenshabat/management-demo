import { Component } from '@angular/core';
import { ToolbarHeaderComponent } from '../toolbar-header/toolbar-header.component';
import { TableDemoComponent } from '../table-demo/table-demo.component';
import { UiManagedApplication } from '../../interfaces/ui-managed-application.interface';
import { IColumn } from '../../interfaces/column.interface';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'management-applications',
    templateUrl: './management-applications.component.html',
    styleUrl: './management-applications.component.scss',
    imports: [ToolbarHeaderComponent, TableDemoComponent]
})
export class ManagementApplicationsComponent {
    managementApplicationsData: UiManagedApplication[] = [];
    managementApplicationsColumns: IColumn<UiManagedApplication>[] = [
        { field: 'type', header: 'Type', style: 'width: 5%; line-height: 1;' },
        { field: 'appName', header: 'Application Name', style: 'width: 32.5%;' },
        { field: 'identifiers', header: 'Process Name/URL' },
        { field: 'rollout', header: 'Rollout', style: 'width: 7.2%;' },
        { field: 'activities', header: 'Activities', style: 'width: 8%;' },
        { field: 'lastMod', header: 'Last Modified', style: 'width: 7%;' }
    ];
    managementApplicationsFilterFields: (keyof Omit<UiManagedApplication, 'lastMod'>)[] =
        this.managementApplicationsColumns.flatMap(
            (c: IColumn<UiManagedApplication>): (keyof Omit<UiManagedApplication, 'lastMod'>)[] =>
                c.field === 'lastMod' ? [] : [c.field]
        );
    home: MenuItem = { label: 'Managed Applications', routerLink: '/' };
    selectedApplications: MenuItem[] = [this.home];

    constructor(private activatedRoute: ActivatedRoute) {
        this.activatedRoute.data.subscribe((data: Data): void => {
            this.managementApplicationsData = data['appsData'] || [];
        });

        this.activatedRoute.params.subscribe((params: Params): void => {
            if (params['id']) {
                const activities = {
                    label: `${this.managementApplicationsData[0]?.appName} Activities`,
                    routerLink: params['id']
                };
                this.selectedApplications = [this.home, activities];
            } else {
                this.selectedApplications = [this.home];
            }
        });
    }
}
