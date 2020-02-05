import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  // tslint:disable-next-line: align
  addItem(descriptionEl: HTMLInputElement) {
    // todo Dispatch an action
    descriptionEl.value = '';
    descriptionEl.focus();
  }

}
