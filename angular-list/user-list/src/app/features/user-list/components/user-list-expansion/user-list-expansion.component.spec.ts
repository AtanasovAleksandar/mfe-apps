import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListExpansionComponent } from './user-list-expansion.component';

describe('UserListExpansionComponent', () => {
  let component: UserListExpansionComponent;
  let fixture: ComponentFixture<UserListExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
