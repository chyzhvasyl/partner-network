import { TestBed } from '@angular/core/testing';

import { LanguageControlServiceService } from './translate.service';

describe('TranslateService', () => {
  let service: LanguageControlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageControlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
