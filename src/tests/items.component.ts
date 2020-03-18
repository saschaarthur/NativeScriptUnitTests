import { ItemsComponent } from '../app/item/items.component';
import { ItemService } from '../app/item/item.service';

import {
    nsTestBedAfterEach,
    nsTestBedBeforeEach,
    nsTestBedRender
} from 'nativescript-angular/testing';

xdescribe('ItemsComponent Test', () => {

    beforeEach(nsTestBedBeforeEach([ItemsComponent]));
    afterEach(nsTestBedAfterEach(false));

    it('should be defined', () => {

        nsTestBedRender(ItemsComponent).then((fixture) => {
            fixture.detectChanges();
            const component = fixture.componentInstance;
            expect(component).toBeTruthy();
        });

    });

});

describe('ItemsComponent Test', () => {

    let component: ItemsComponent;

    beforeEach(() => { component = new ItemsComponent(new ItemService())});

    it('should be defined', () => {
        expect(component).toBeTruthy();
    });

});