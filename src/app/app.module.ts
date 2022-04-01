import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooksCrudComponent } from './books-crud/books-crud.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShowbooksComponent } from './showbooks/showbooks.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BuyingComponent } from './buying/buying.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksCrudComponent,
    LoginComponent,
    SignupComponent,
    ShowbooksComponent,
    ContactComponent,
    AboutComponent,
    BuyingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
 
  bootstrap: [AppComponent]
  
})



 
export class AppModule {}
