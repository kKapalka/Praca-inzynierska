import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

subscription={
accountnumber: '',
validity: '',

};



  ngOnInit() {
  }

}
