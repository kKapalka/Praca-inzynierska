import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-home',
  templateUrl: './film-home.component.html',
  styleUrls: ['./film-home.component.css']
})
export class FilmHomeComponent implements OnInit {

  filterText: string;

  constructor() { }

  ngOnInit() {
  }

  getName($event) {
    this.filterText = $event;
  }

}
