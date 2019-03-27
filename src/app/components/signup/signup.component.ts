import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data-service";
import {AuthService} from '../../services/auth/auth.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  credentials = {
 firstname: '',
 lastname: '',
 login: '',
 email: '',
 password: '',
};


  create() {
    this.authService.createOrUpdate(this.credentials).subscribe((result) => {
      return result;

    });
  }


  ngOnInit() {
  }

}

