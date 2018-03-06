import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhsComponent } from './arhs.component';

describe('ArhsComponent', () => {
  let component: ArhsComponent;
  let fixture: ComponentFixture<ArhsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
