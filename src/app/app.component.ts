import { AfterViewInit, Component } from '@angular/core';
import { Toast } from 'primeng/toast';
import { RouterOutlet } from '@angular/router';
import { ToolbarHeaderComponent } from './components/toolbar-header/toolbar-header.component';
import { ToolbarSubHeaderComponent } from './components/toolbar-subheader/toolbar-subheader.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [Toast, RouterOutlet, ToolbarHeaderComponent, ToolbarSubHeaderComponent],
    styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
    docHTMLRef: HTMLHtmlElement | null = null;

    ngAfterViewInit(): void {
        this.docHTMLRef = document.querySelector('html');
    }
}
