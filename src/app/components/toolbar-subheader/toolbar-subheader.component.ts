import { Component } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { InputText } from 'primeng/inputtext';

@Component({
    selector: 'toolbar-subheader',
    templateUrl: './toolbar-subheader.component.html',
    styleUrl: './toolbar-subheader.component.scss',
    imports: [Toolbar, InputText]
})
export class ToolbarSubHeaderComponent {
}
