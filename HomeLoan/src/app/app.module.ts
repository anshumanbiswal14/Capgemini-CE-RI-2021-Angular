import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllPacksComponent } from './all-packs/all-packs.component';
import { StringpipePipe } from './stringpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AllPacksComponent,
    StringpipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
