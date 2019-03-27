import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-regulamin',
  templateUrl: './regulamin.component.html',
  styleUrls: ['./regulamin.component.css']
  

  
})
export class RegulaminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  color = this.getColor();

  public getColor() {
    return 'red';}
}
