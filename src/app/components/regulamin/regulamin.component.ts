import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-regulamin',
  templateUrl: './regulamin.component.html',
  styleUrls: ['./regulamin.component.css']
})
export class RegulaminComponent implements OnInit {
  color: string = this.getColor();
  constructor() { }

  ngOnInit() {}

  public getColor() {
    return 'red';
  }
}
