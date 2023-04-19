import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IsLikedComponent } from './shared/components/is-liked/is-liked.component';
import { CardsComponent } from './shared/components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    IsLikedComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
