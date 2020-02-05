import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';

// this one is for API hook up
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './effects/list.effects';


@NgModule({
  declarations: [ShoppingComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    HttpClientModule,    // this one is for APi hook up
    EffectsModule.forFeature([ListEffects]) // this is for effects hook up
  ],
  exports: [ShoppingComponent]
})
export class ShoppingModule { }
