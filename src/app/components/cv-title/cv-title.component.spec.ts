import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvTitleComponent } from './cv-title.component';

describe('CvTitleComponent', () => {
  let component: CvTitleComponent;
  let fixture: ComponentFixture<CvTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
