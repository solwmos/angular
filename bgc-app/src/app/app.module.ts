import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { RightareaComponent } from './rightarea/rightarea.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainareaComponent,
    RightareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
