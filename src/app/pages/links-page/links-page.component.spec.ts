import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksPageComponent } from './links-page.component';

describe('LinksPaegComponent', () => {
  let component: LinksPageComponent;
  let fixture: ComponentFixture<LinksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
