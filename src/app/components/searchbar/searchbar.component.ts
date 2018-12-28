import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  filterText: string;
  @Output() name = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendFilter() {
    this.name.emit(this.filterText);
  }

}
