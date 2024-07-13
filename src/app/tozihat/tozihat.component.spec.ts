import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TozihatComponent } from './tozihat.component';

describe('TozihatComponent', () => {
  let component: TozihatComponent;
  let fixture: ComponentFixture<TozihatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TozihatComponent]
    });
    fixture = TestBed.createComponent(TozihatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
