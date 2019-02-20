import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film-item-image',
  templateUrl: './film-item-image.component.html',
  styleUrls: ['./film-item-image.component.css']
})
export class FilmItemImageComponent implements OnInit {
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
