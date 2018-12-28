import {Component, Input, OnInit} from '@angular/core';
import {DetailsService} from '../../details.service';

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {
    text: string;
    image: string;

    constructor(private details: DetailsService) { }

    ngOnInit() {
        this.details.currentText.subscribe(text => this.text = text);
        this.details.currentImage.subscribe(image => this.image = image);
    }
}
