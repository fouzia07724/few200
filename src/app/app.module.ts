import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { CommunicationsComponent } from './components/communications/communications.component';
import { TodoEntryComponent } from './components/communications/todo-entry/todo-entry.component';
import { TodoListComponent } from './components/communications/todo-list/todo-list.component';
import { TodoService } from './components/communications/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TipCalculatorComponent,
    DashboardComponent,
    NavComponent,
    CommunicationsComponent,
    TodoEntryComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
