import { Component } from '@angular/core';

interface Link {
    label: string;
    url: string;
}

@Component({
    selector: 'share-sidebar',
    templateUrl: './sidebar.component.html',
    styles: ``
})
export class SidebarComponent {

    public routes: Link[] = [
        {
            label: 'Por Capital',
            url: 'countries/by-capital'
        },
        {
            label: 'Por País',
            url: 'countries/by-country'
        },
        {
            label: 'Por Región',
            url: 'countries/by-region'
        },
    ]
}
