import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageDetailsComponent } from './storage-details.component';

describe('StorageDetailsComponent', () => {
  let component: StorageDetailsComponent;
  let fixture: ComponentFixture<StorageDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorageDetailsComponent]
    });
    fixture = TestBed.createComponent(StorageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
