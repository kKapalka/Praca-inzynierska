import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayfilmComponent } from './playfilm.component';

describe('PlayfilmComponent', () => {
  let component: PlayfilmComponent;
  let fixture: ComponentFixture<PlayfilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayfilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
