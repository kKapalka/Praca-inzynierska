import {Component, Input, OnInit} from '@angular/core';
import {DetailsService} from '../../details.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data-service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

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

  loadDetails(text, image, id) {
      this.details.changeImage(image);
      this.details.changeText(text);
      this.router.navigate(['/blog/details/', id]);
  }

}
