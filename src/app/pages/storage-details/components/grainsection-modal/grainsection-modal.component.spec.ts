import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainsectionModalComponent } from './grainsection-modal.component';

describe('GrainsectionModalComponent', () => {
  let component: GrainsectionModalComponent;
  let fixture: ComponentFixture<GrainsectionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrainsectionModalComponent]
    });
    fixture = TestBed.createComponent(GrainsectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
