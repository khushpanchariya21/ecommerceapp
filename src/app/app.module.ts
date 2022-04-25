import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ProductSearchComponent } from './views/product-search/product-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { NavigationComponent } from './views/navigation/navigation.component';
import { NgxSpinnerModule } from "ngx-spinner";

import {AutocompleteLibModule} from 'angular-ng-autocomplete';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductSearchComponent,
    ProductDetailsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
     NgxSpinnerModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
