import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarLoggedComponent } from './navbar-logged/navbar-logged.component';
import { HttpClientModule } from '@angular/common/http';
// importing clientmodule from@angular/common/http cannot be found in 'fix error'...... found from google directly
import { FooterComponent } from './footer/footer.component';
import { UserPiechartComponent } from './user-piechart/user-piechart.component';
import { AdminPiechartComponent } from './admin-piechart/admin-piechart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    NavbarLoggedComponent,
    FooterComponent,
    UserPiechartComponent,
    AdminPiechartComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
