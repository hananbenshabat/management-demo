import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Toast } from 'primeng/toast';
import {
    Event,
    NavigationCancel,
    NavigationCancellationCode,
    NavigationError,
    Router,
    RouterOutlet
} from '@angular/router';
import { ToolbarCaptionComponent } from './components/toolbar-caption/toolbar-caption.component';
import { RoutePath } from './enums/route-path.enum';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [Toast, RouterOutlet, ToolbarCaptionComponent]
})
export class AppComponent implements AfterViewInit, OnDestroy {
    docHTMLRef: HTMLHtmlElement | null = null;
    routerSubscription?: Subscription;

    constructor(private router: Router) {
        this.routerSubscription = this.router.events.subscribe((event: Event): void => {
            this.syncNavigationFallback(event);
        });
    }

    ngAfterViewInit(): void {
        this.docHTMLRef = document.querySelector('html');
    }

    ngOnDestroy(): void {
        this.routerSubscription?.unsubscribe();
    }

    syncNavigationFallback(event: Event): void {
        if (
            ((event instanceof NavigationCancel && event.code === NavigationCancellationCode.GuardRejected) ||
                event instanceof NavigationError) &&
            event.id === 1
        ) {
            void this.router.navigate([RoutePath.Applications]);
        }
    }
}
