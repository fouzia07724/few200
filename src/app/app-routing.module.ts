import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { CommunicationsComponent } from './components/communications/communications.component';
import { CounterComponent } from './components/counter/counter.component';


const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'communications',
    component: CommunicationsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'tip',
    component: TipCalculatorComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
