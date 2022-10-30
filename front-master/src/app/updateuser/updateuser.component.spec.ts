import { ComponentFixture, TestBed } from '@angular/core/testing';

import { updateuserComponent } from './updateuser.component';

describe('updateuserComponent', () => {
  let component: updateuserComponent;
  let fixture: ComponentFixture<updateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ updateuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(updateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
