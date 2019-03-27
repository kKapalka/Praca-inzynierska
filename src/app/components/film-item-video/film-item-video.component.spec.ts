import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmItemVideoComponent } from './film-item-video.component';

describe('FilmItemVideoComponent', () => {
  let component: FilmItemVideoComponent;
  let fixture: ComponentFixture<FilmItemVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmItemVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmItemVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
