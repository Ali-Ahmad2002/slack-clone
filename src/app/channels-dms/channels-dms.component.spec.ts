import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsDmsComponent } from './channels-dms.component';

describe('ChannelsDmsComponent', () => {
  let component: ChannelsDmsComponent;
  let fixture: ComponentFixture<ChannelsDmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelsDmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsDmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
