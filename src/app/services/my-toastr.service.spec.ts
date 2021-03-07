/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToastrService } from './my-toastr.service';

describe('Service: Toastr', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastrService]
    });
  });

  it('should ...', inject([ToastrService], (service: ToastrService) => {
    expect(service).toBeTruthy();
  }));
});
