import { Component, OnInit } from '@angular/core';
import { ShoppingItemModel } from '../../model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  model: ShoppingItemModel[] = [
    { id: '1', description: 'Bear' },
    { id: '2', description: 'More Bear' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
