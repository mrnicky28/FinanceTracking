import { TestBed } from '@angular/core/testing';

import { CurrensiesDataService } from './currensies-data.service';

describe('CurrensiesDataService', () => {
    let service: CurrensiesDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CurrensiesDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
