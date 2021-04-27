import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalconnexionComponent } from './modalconnexion.component';

describe('ModalconnexionComponent', () => {
  let component: ModalconnexionComponent;
  let fixture: ComponentFixture<ModalconnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalconnexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
