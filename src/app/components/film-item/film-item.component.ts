import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() image: string;
 
  @Input() title: string;
  @Input() content: string;
  @Input() director: string;
  @Input() genre: string;
  @Input() duration: string;

  constructor() { }

  ngOnInit() {
  }

}
