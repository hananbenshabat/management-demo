import { Component, input, InputSignal, model, ModelSignal } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { InputText } from 'primeng/inputtext';
import { Breadcrumb } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { RemoveLastMenuItemRouterLinkPipe } from '../../pipes/remove-last-menu-item-router-link.pipe';

@Component({
    selector: 'toolbar-header',
    templateUrl: './toolbar-header.component.html',
    styleUrl: './toolbar-header.component.scss',
    imports: [Toolbar, InputText, Breadcrumb, RemoveLastMenuItemRouterLinkPipe]
})
export class ToolbarHeaderComponent {
    readonly items: InputSignal<MenuItem[] | undefined> = input<MenuItem[] | undefined>();
    readonly filterPlaceholder: InputSignal<string> = input<string>('');
    filterValue: ModelSignal<string> = model<string>('');
}
