import { TestBed } from '@angular/core/testing';

describe('MercadoLibreApiservice.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MercadoLibreApiservice.ServiceService = TestBed.get(MercadoLibreApiservice.ServiceService);
    expect(service).toBeTruthy();
  });
});
