import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhiteComponent } from './white/white.component';
import { GrayComponent } from './gray/gray.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteComponent,
    GrayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
