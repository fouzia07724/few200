import { Component, OnInit } from '@angular/core';
import { BooklistItemModel } from '../../model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  model: BooklistItemModel[] = [
    { id: '1', description: 'Bear' },
    { id: '2', description: 'More Bear' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
