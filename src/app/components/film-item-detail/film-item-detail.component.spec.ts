import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmItemDetailComponent } from './film-item-detail.component';

describe('FilmItemDetailComponent', () => {
  let component: FilmItemDetailComponent;
  let fixture: ComponentFixture<FilmItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
