import {Component, Input, OnInit} from '@angular/core';
import {DetailsService} from '../../details.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-playfilm',
  templateUrl: './playfilm.component.html',
  styleUrls: ['./playfilm.component.css']
})
export class PlayfilmComponent implements OnInit {

title: string;
image: string;
video: string;
content: string;
director: string;
genre: string;
duration: string;

constructor(private details: DetailsService, private router: Router,) { }

    ngOnInit() {
        this.details.currentTitle.subscribe(title => this.title = title);
        this.details.currentImage.subscribe(image => this.image = image);
        this.details.currentVideo.subscribe(video => this.video = video);
        this.details.currentContent.subscribe(content => this.content = content);
        this.details.currentDirector.subscribe(director => this.director = director);
        this.details.currentGenre.subscribe(genre => this.genre = genre);
        this.details.currentDuration.subscribe(duration => this.duration = duration);
    }

    loadDetails(title, image, video, id, content, director, genre, duration) {
          this.details.changeImage(image);
          this.details.changeVideo(video);
          this.details.changeTitle(title);
          this.router.navigate(['/film/details/', id]);
          this.details.changeContent(content);
          this.details.changeDirector(director);
          this.details.changeGenre(genre);
          this.details.changeDuration(duration);
      }
}
