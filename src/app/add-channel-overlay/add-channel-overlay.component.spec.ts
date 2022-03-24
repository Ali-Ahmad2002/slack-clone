import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChannelOverlayComponent } from './add-channel-overlay.component';

describe('AddChannelOverlayComponent', () => {
  let component: AddChannelOverlayComponent;
  let fixture: ComponentFixture<AddChannelOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChannelOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChannelOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
