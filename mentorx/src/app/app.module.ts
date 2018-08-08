import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { FormsModule } from '@angular/forms';
import { MentorModule } from './mentor/mentor.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MentorModule,
    AuthModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
