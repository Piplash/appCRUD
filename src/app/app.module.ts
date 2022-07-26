import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule }    from '@angular/platform-browser';
import { CommonModule }     from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { NgModule }         from '@angular/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
