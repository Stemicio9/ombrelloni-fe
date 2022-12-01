import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbrellaCheckComponent } from './umbrella-check.component';

describe('UmbrellaCheckComponent', () => {
  let component: UmbrellaCheckComponent;
  let fixture: ComponentFixture<UmbrellaCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmbrellaCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmbrellaCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
