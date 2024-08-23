import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FtoReportPage } from './fto-report.page';

describe('FtoReportPage', () => {
  let component: FtoReportPage;
  let fixture: ComponentFixture<FtoReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FtoReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
