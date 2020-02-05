import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ShoppingItemModel } from '../../model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  // model: ShoppingItemModel[] = [
  //   { id: '1', description: 'Bear' },
  //   { id: '2', description: 'More Bear' }
  // ];

  @Input() model: ShoppingItemModel[];
  constructor() { }

  ngOnInit() {
  }

}
