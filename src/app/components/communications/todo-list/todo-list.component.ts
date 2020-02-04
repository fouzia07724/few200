import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from './models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() list: TodoItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  markcomplete(item: TodoItem) {
    item.completed = true;
  }



}




