import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmHomeComponent } from './film-home.component';

describe('FilmHomeComponent', () => {
  let component: FilmHomeComponent;
  let fixture: ComponentFixture<FilmHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
