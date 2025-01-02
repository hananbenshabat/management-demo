import { AfterViewInit, Component } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { ToggleButton } from 'primeng/togglebutton';
import { Button } from 'primeng/button';

@Component({
    selector: 'toolbar-header',
    templateUrl: './toolbar-header.component.html',
    styleUrl: './toolbar-header.component.scss',
    imports: [Toolbar, ToggleButton, Button]
})
export class ToolbarHeaderComponent implements AfterViewInit {
    docHTMLRef: HTMLHtmlElement | null = null;

    ngAfterViewInit(): void {
        this.docHTMLRef = document.querySelector('html');
    }
}
