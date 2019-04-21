import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import {AuthService} from '../../services/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  failedSub = false;
  options: ({ value: number; name: string })[] = [{
    value: 1,
    name: '1 miesiąc (30 zł)'
  }, {
    value: 2,
    name: '2 miesiące (55 zł)'
  }, {
    value: 3,
    name: '3 miesiące (75 zł)'
  }, {
    value: 4,
    name: '4 miesiące (90 zł)'
  }];
  subscription = {
    accountnumber: '',
    validityMonths: 1,
  };

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  create() {
    this.authService.createsubscription(this.subscription).subscribe(res => {
      this.authService.getSubscriptions();
      setTimeout(() => {
        if (this.authService.hasSubscription) {
          this.router.navigate(['user']);
        } else {
          this.failedSub = true;
          setTimeout(() => {
            this.failedSub = false;
          }, 2000);
        }
      }, 500);
    });
  }

  ngOnInit() {}
}
