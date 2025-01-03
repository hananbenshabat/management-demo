import { Component, input, InputSignal, model, ModelSignal } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { InputText } from 'primeng/inputtext';

@Component({
    selector: 'toolbar-subheader',
    templateUrl: './toolbar-header.component.html',
    styleUrl: './toolbar-header.component.scss',
    imports: [Toolbar, InputText]
})
export class ToolbarHeaderComponent {
    readonly title: InputSignal<string> = input<string>('');
    readonly filterPlaceholder: InputSignal<string> = input<string>('');
    filterValue: ModelSignal<string> = model<string>('');
}
