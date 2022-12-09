import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbrellaChooseComponent } from './umbrella-choose.component';

describe('UmbrellaChooseComponent', () => {
  let component: UmbrellaChooseComponent;
  let fixture: ComponentFixture<UmbrellaChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmbrellaChooseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmbrellaChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
