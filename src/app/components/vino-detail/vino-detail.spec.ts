import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinoDetail } from './vino-detail';

describe('VinoDetail', () => {
  let component: VinoDetail;
  let fixture: ComponentFixture<VinoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VinoDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinoDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
