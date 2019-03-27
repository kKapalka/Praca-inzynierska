import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmItemContentComponent } from './film-item-content.component';

describe('FilmItemContentComponent', () => {
  let component: FilmItemContentComponent;
  let fixture: ComponentFixture<FilmItemContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmItemContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
