import { Component, Input, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-film-item-video',
  templateUrl: './film-item-video.component.html',
  styleUrls: ['./film-item-video.component.css']
})
export class FilmItemVideoComponent implements OnInit {

  @Input('video') video: string;
  title = "6wD4V0rvlDI";
  someItem="<h1>Hi there</h1>";
  videoList =
    {
    name: "Item 1",
    slug: "Item-1",
    embed: '6wD4V0rvlDI',
    }
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getEmbedUrl(video){
    return this.sanitizer.bypassSecurityTrustResourceUrl(video)
  }

}
