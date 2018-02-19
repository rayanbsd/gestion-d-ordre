import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneLibreComponent } from './zone-libre.component';

describe('ZoneLibreComponent', () => {
  let component: ZoneLibreComponent;
  let fixture: ComponentFixture<ZoneLibreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneLibreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
