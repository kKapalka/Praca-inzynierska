import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film-item-text',
  templateUrl: './film-item-text.component.html',
  styleUrls: ['./film-item-text.component.css']
})
export class FilmItemTextComponent implements OnInit {
  @Input('title') title: string;
  @Input('image') image: string;

  @Input('content') content: string;
  @Input('director') director: string;
  @Input('genre') genre: string;
  @Input('duration') duration: string;

  constructor() { }

  ngOnInit() {
  }

}
