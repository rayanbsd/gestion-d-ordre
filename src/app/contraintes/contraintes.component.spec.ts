import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraintesComponent } from './contraintes.component';

describe('ContraintesComponent', () => {
  let component: ContraintesComponent;
  let fixture: ComponentFixture<ContraintesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContraintesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraintesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
