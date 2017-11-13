import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLinkFormComponent } from './update-link-form.component';

describe('UpdateLinkFormComponent', () => {
  let component: UpdateLinkFormComponent;
  let fixture: ComponentFixture<UpdateLinkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLinkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
