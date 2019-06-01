import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';
import { MatDialogModule } from '@angular/material';

describe('ModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MatDialogModule
    ]
  }));

  it('should be created', () => {
    const service: ModalService = TestBed.get(ModalService);
    expect(service).toBeTruthy();
  });
});
