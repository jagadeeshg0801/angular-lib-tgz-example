import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JagLibraryModule } from 'jag-library';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, JagLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
