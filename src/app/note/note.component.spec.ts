import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteComponent } from './note.component';

describe('BordereauComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});