import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';

import { registerLocaleData } from '@angular/common';
import id from '@angular/common/locales/id';
import { SummaryPipe } from './summary.pipe';

registerLocaleData(id);

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
