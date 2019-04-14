import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import {AuthService} from '../../services/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  employee: Employee[];
  empSelected: Number;
  modifedtext: string;
  subscription = {
    accountnumber: '',
    validity: 1,
  };

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  create() {
    this.authService.createsubscription(this.subscription).subscribe((result) => {
      return result;
    });
  }

  ngOnInit() {
    this.employee = [
      {Id: 1, Name: '1 miesiąc (30 zł)'},
      {Id: 2, Name: '2 miesiące (55 zł)'},
      {Id: 3, Name: '3 miesiące (75 zł)'},
      {Id: 4, Name: '4 miesiące (90 zł)'}
    ];
  }

  onEmployeeSelected(val: any) {
    this.customFunction(val);
  }

  customFunction(val: any) {
    this.modifedtext = ' The value ' + val + ' was selected from dropdown';
  }
}
