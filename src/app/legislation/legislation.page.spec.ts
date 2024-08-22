import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegislationPage } from './legislation.page';

describe('LegislationPage', () => {
  let component: LegislationPage;
  let fixture: ComponentFixture<LegislationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
