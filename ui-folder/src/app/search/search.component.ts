import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  enteredValue = '';

  @Output()
  searchedTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchedTextChanged() {
    this.searchedTextChanged.emit(this.enteredValue);
  }
}
