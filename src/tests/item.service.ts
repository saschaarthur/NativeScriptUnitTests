import { ItemService } from '../app/item/item.service';

describe('ItemsService Test', () => {

    let service: ItemService;

    beforeEach(() => { service = new ItemService(); });

    it('should be defined',() => {
        expect(service).toBeTruthy();
    });

    it('should have its functions defined',() => {
        expect(service.getItems).toBeTruthy();
        expect(service.getItem).toBeTruthy();
    });

});