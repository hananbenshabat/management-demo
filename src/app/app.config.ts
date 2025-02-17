import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Nora from '@primeng/themes/nora';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './interceptors/error.interceptor';
import { definePreset } from '@primeng/themes';
import { MessageService } from 'primeng/api';
import { ROUTES } from './app.routes';
import { PreloadAllModules, provideRouter, withInMemoryScrolling, withPreloading } from '@angular/router';

const preset = definePreset(Nora, {
    semantic: {
        focusRing: {
            width: 0,
            offset: 0
        },
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}'
        }
    }
});

export const appConfig: ApplicationConfig = {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        provideRouter(ROUTES, withPreloading(PreloadAllModules), withInMemoryScrolling()),
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: preset,
                options: {
                    prefix: 'p',
                    darkModeSelector: '.dark',
                    cssLayer: false
                }
            }
        }),
        provideHttpClient(withInterceptors([errorInterceptor])),
        MessageService
    ]
};
