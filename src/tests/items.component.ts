import { ItemsComponent } from '../app/item/items.component';
import { ItemService } from '../app/item/item.service';

import {
    nsTestBedAfterEach,
    nsTestBedBeforeEach,
    nsTestBedRender
} from 'nativescript-angular/testing';

describe('ItemsComponent Test', () => {

    beforeEach(nsTestBedBeforeEach([ItemService, ItemsComponent]));
    afterEach(nsTestBedAfterEach(false));

    it('should be defined', () => {

        nsTestBedRender(ItemsComponent).then((fixture) => {
            fixture.detectChanges();
            const component = fixture.componentInstance;
            expect(component).toBeTruthy();
        });

    });

});