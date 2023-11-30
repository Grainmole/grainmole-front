import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainsectionDetailsComponent } from './grainsection-details.component';

describe('GrainsectionDetailsComponent', () => {
  let component: GrainsectionDetailsComponent;
  let fixture: ComponentFixture<GrainsectionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrainsectionDetailsComponent]
    });
    fixture = TestBed.createComponent(GrainsectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
