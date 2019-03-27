import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data-service";

@Component({
  selector: 'film-blog-create',
  templateUrl: './film-item-create.component.html',
  styleUrls: ['./film-item-create.component.css']
})
export class FilmItemCreateComponent implements OnInit {

  film = {
    title: '',
    imageurl: '',
    videourl: '',
    content: '',
    director: '',
    genre: '',
    duration: ''
  }

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  createFilm(film){
    this.dataService.createNewOrUpdate(film).subscribe( result => {
      console.log('Button works');
    })
  }

  submit(){
    this.createFilm(this.film);
  }

}
