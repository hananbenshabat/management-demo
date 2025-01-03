import { Component, input, InputSignal, Signal, viewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { UiManagedApplication } from '../../interfaces/ui-managed-application.interface';
import { DatePipe } from '@angular/common';
import { ROLLOUT_TO_PRETTY } from '../../types/rollout.type';
import { IColumn } from '../../interfaces/column.interface';
import { DEVICE_TYPE_ICONS } from '../../constants/device-type-icons.const';

@Component({
    selector: 'table-demo',
    templateUrl: './table-demo.component.html',
    styleUrl: './table-demo.component.scss',
    imports: [TableModule, DatePipe]
})
export class TableDemoComponent {
    tableApplicationsRef: Signal<Table | undefined> = viewChild<Table | undefined>('tableApplicationsRef');
    readonly data: InputSignal<UiManagedApplication[]> = input<UiManagedApplication[]>([]);
    readonly columns: InputSignal<IColumn[]> = input<IColumn[]>([]);
    readonly filterFields: InputSignal<string[]> = input<string[]>([]);
    readonly emptyMessage: InputSignal<string> = input<string>('No Data Found.');

    rollouts: Record<string, string> = ROLLOUT_TO_PRETTY;
    deviceTypeIcons: Record<string, string> = DEVICE_TYPE_ICONS;
    selection?: UiManagedApplication;
}
