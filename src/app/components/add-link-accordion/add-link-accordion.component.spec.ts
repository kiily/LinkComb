import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLinkAccordionComponent } from './add-link-accordion.component';

describe('AddLinkAccordionComponent', () => {
  let component: AddLinkAccordionComponent;
  let fixture: ComponentFixture<AddLinkAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLinkAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLinkAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
