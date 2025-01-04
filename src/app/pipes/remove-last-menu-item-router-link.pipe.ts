import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Pipe({
    name: 'removeLastMenuItemRouterLink'
})
export class RemoveLastMenuItemRouterLinkPipe implements PipeTransform {
    transform(items?: MenuItem[]): MenuItem[] | undefined {
        const lastItem: MenuItem | undefined = items?.[items.length - 1];
        if (lastItem) {
            lastItem.routerLink = undefined;
        }

        return items;
    }
}
