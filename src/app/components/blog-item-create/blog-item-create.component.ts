import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../services/data-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-item-create',
  templateUrl: './blog-item-create.component.html',
  styleUrls: ['./blog-item-create.component.css']
})
export class BlogItemCreateComponent implements OnInit {

  formBlog = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
    url: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
  });

  item = {
    id: null,
    title: '',
    url: '',
    content: '',
  };

  constructor(private dataService: DataService, private  router: Router) { }

  ngOnInit() {
  }

  setData(item){
    this.dataService.addPost(item).subscribe();
    this.router.navigate(['/blog']);
  }

}
