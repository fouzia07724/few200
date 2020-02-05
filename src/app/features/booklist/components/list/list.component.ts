import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BooklistItemModel } from '../../model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  // model: BooklistItemModel[] = [
  //   { id: '1', description: 'Bear' },
  //  { id: '2', description: 'More Bear' }
  // ];
  @Input() model: BooklistItemModel[];

  constructor() { }

  ngOnInit() {
  }

}
