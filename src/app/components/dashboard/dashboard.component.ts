import { Component, OnInit } from '@angular/core';
import { TodoDashboardSummary } from '../models';
import { TodoService } from '../communications/todo.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  model$: Observable<TodoDashboardSummary>;


  constructor(private service: TodoService) { }

  ngOnInit() {
    this.model$ = this.service.getDashboardSummary();
  }


}
