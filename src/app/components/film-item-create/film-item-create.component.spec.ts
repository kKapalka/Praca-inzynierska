import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmItemCreateComponent } from './film-item-create.component';

describe('FilmItemCreateComponent', () => {
  let component: FilmItemCreateComponent;
  let fixture: ComponentFixture<FilmItemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmItemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
