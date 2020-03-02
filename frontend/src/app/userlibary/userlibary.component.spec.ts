import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlibaryComponent } from './userlibary.component';

describe('UserlibaryComponent', () => {
  let component: UserlibaryComponent;
  let fixture: ComponentFixture<UserlibaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlibaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlibaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
