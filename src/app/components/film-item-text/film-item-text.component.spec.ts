import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmItemTextComponent } from './film-item-text.component';

describe('FilmItemTextComponent', () => {
  let component: FilmItemTextComponent;
  let fixture: ComponentFixture<FilmItemTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmItemTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmItemTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
