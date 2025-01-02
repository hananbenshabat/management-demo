import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MANAGE_STUB } from '../../stubs/manage.stub';
import { UiManagedApplication } from '../../interfaces/ui-managed-application.interface';
import { DatePipe } from '@angular/common';
import { ROLLOUT_TO_PRETTY } from '../../types/rollout.type';

@Component({
    selector: 'table-demo',
    imports: [TableModule, DatePipe],
    templateUrl: './table-demo.component.html',
    styleUrl: './table-demo.component.scss'
})
export class TableDemoComponent {
    data: UiManagedApplication[] = MANAGE_STUB.apps;
    rollouts: Record<string, string> = ROLLOUT_TO_PRETTY;
}
