import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtitleComponent } from './newtitle.component';

describe('NewtitleComponent', () => {
  let component: NewtitleComponent;
  let fixture: ComponentFixture<NewtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
