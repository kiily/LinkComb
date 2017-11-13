import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonGridComponent } from './hexagon-grid.component';

describe('HexagonGridComponent', () => {
  let component: HexagonGridComponent;
  let fixture: ComponentFixture<HexagonGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexagonGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexagonGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
