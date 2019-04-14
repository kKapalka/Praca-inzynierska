import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('login') login: string;
  @Input('firstname') firstname: string;
  @Input('firstname') lastname: string;

  constructor() { }

  ngOnInit() {
  }

}
