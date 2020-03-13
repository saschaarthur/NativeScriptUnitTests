import { ItemsComponent } from '../app/item/items.component';

import {
    nsTestBedAfterEach,
    nsTestBedBeforeEach,
    nsTestBedRender
} from 'nativescript-angular/testing';

describe('ItemsComponent Test', () => {

    beforeEach(nsTestBedBeforeEach([ItemsComponent]));
    afterEach(nsTestBedAfterEach(false));

    return nsTestBedRender(ItemsComponent).then((fixture) => {
        fixture.detectChanges();
        const component = fixture.componentInstance;
        expect(component).toBeTruthy;
    });

});