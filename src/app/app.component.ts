import { AfterViewInit, Component } from '@angular/core';
import { Toast } from 'primeng/toast';
import { RouterOutlet } from '@angular/router';
import { ToolbarCaptionComponent } from './components/toolbar-caption/toolbar-caption.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [Toast, RouterOutlet, ToolbarCaptionComponent]
})
export class AppComponent implements AfterViewInit {
    docHTMLRef: HTMLHtmlElement | null = null;

    ngAfterViewInit(): void {
        this.docHTMLRef = document.querySelector('html');
    }
}
