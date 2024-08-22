import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileInnerPage } from './profile-inner.page';

describe('ProfileInnerPage', () => {
  let component: ProfileInnerPage;
  let fixture: ComponentFixture<ProfileInnerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
