import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosectionGraphComponent } from './termosection-graph.component';

describe('TermosectionGraphComponent', () => {
  let component: TermosectionGraphComponent;
  let fixture: ComponentFixture<TermosectionGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermosectionGraphComponent]
    });
    fixture = TestBed.createComponent(TermosectionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
