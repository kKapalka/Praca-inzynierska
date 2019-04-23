import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  login: string;
  firstname: string;
  lastname: string;
  constructor( private auth: AuthService) {
    this.auth.getSubscriptions();
    this.auth.getUserById(this.auth.currentUser.userId).subscribe(res => {
      this.login = res.login;
      this.firstname = res.firstname;
      this.lastname = res.lastname;
    });
  }
  hasSubscription(){
    return this.auth.hasSubscription;
  }
  ngOnInit() {
  }

}
