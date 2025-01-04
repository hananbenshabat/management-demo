import { AfterViewInit, Component } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { ToggleButton } from 'primeng/togglebutton';
import { Button } from 'primeng/button';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'toolbar-caption',
    templateUrl: './toolbar-caption.component.html',
    styleUrl: './toolbar-caption.component.scss',
    imports: [Toolbar, ToggleButton, Button, NgOptimizedImage]
})
export class ToolbarCaptionComponent implements AfterViewInit {
    docHTMLRef: HTMLHtmlElement | null = null;

    ngAfterViewInit(): void {
        this.docHTMLRef = document.querySelector('html');
    }
}
