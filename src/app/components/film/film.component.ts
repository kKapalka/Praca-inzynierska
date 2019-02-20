import {Component, Input, OnInit} from '@angular/core';
import {DetailsService} from '../../details.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data-service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  items;
  @Input() filterText: string;

  constructor(private details: DetailsService, private dataService: DataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.filterText = params['title'];
    });

    this.dataService.getAll().subscribe(result => {
      console.log(result);
      this.items = result;
    });
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
