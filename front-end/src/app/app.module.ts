import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {UserDashboardComponent} from "./components/user-dashboard/user-dashboard.component";
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageAdvertisementComponent } from './components/manage-advertisement/manage-advertisement.component';
import { AdvertsComponent } from './adverts/adverts.component';
import { CarteComponent } from './carte/carte.component';
import { CreateAdvertComponent } from './components/create-advert/create-advert.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResetComponent } from './reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ManageUsersComponent,
    ManageAdvertisementComponent,
    AdvertsComponent,
    CarteComponent,
    CreateAdvertComponent,
    NavbarComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
