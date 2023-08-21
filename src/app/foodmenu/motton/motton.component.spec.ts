import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MottonComponent } from './motton.component';

describe('MottonComponent', () => {
  let component: MottonComponent;
  let fixture: ComponentFixture<MottonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MottonComponent]
    });
    fixture = TestBed.createComponent(MottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
