import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbrellaModalComponent } from './umbrella-modal.component';

describe('UmbrellaModalComponent', () => {
  let component: UmbrellaModalComponent;
  let fixture: ComponentFixture<UmbrellaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmbrellaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmbrellaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
