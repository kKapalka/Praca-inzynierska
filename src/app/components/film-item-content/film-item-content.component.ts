import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-item-content',
  templateUrl: './film-item-content.component.html',
  styleUrls: ['./film-item-content.component.css']
})
export class FilmItemContentComponent implements OnInit{
  @Input('content') content: string;

  constructor() { }

  ngOnInit() {
  }

}
