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
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effects';
import { ShoppingModule } from './features/shopping/shopping.module';
import { BooklistModule } from './features/booklist/booklist.module';

@NgModule({
  declarations: [
    AppComponent,
    TipCalculatorComponent,
    DashboardComponent,
    NavComponent,
    CommunicationsComponent,
    TodoEntryComponent,
    TodoListComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects]),
    ShoppingModule,
    BooklistModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
