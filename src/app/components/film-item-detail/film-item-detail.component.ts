import {Component, Input, OnInit} from '@angular/core';
import {DetailsService} from '../../details.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';


@Component({
  selector: 'app-film-item-detail',
  templateUrl: './film-item-detail.component.html',
  styleUrls: ['./film-item-detail.component.css']
})
export class FilmItemDetailComponent implements OnInit {
    title: string;
    image: string;
    video: string;
    content: string;
    director: string;
    genre: string;
    duration: string;

    constructor(private details: DetailsService, private router: Router, public authService: AuthService) { }

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


