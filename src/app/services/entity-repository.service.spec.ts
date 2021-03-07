/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EntityRepositoryService } from './entity-repository.service';

describe('Service: EntityRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntityRepositoryService]
    });
  });

  it('should ...', inject([EntityRepositoryService], (service: EntityRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
