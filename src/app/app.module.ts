import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MercadoLibreApiserviceService } from 'src/app/services/mercado-libre-apiservice.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ MercadoLibreApiserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
