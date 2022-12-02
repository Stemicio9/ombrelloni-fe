import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuErrorComponent } from './menu-error.component';

describe('MenuErrorComponent', () => {
  let component: MenuErrorComponent;
  let fixture: ComponentFixture<MenuErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
