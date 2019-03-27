import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmItemImageComponent } from './film-item-image.component';

describe('FilmItemImageComponent', () => {
  let component: FilmItemImageComponent;
  let fixture: ComponentFixture<FilmItemImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmItemImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
