import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {UserDashboardComponent} from "./components/user-dashboard/user-dashboard.component";
import {ManageUsersComponent} from "./components/manage-users/manage-users.component";
import {ManageAdvertisementComponent} from "./components/manage-advertisement/manage-advertisement.component";
import {CreateAdvertComponent} from "./components/create-advert/create-advert.component";
import {AdvertComponent} from "./advert/advert.component";
import {CarteComponent} from "./carte/carte.component";
import {AdvertsComponent} from "./adverts/adverts.component";
import {ResetComponent} from "./reset/reset.component";
import {AuthGuardService} from "./services/auth.guard.service";

const routes: Routes = [
  {    path:'auth',
    component:AuthComponent
  },
  {    path:'admin',
    component:AdminDashboardComponent
  },  {    path:'user',
    component:UserDashboardComponent
  },
  {    path:'manage-advertisment',
    component:ManageAdvertisementComponent
  },
  {    path:'manage-users',
    component:ManageUsersComponent
  },
  {    path:'home',
    component:HomeComponent
  },
  {    path:'',
    component:HomeComponent
  },
  {    path:'adverts',
    component:AdvertsComponent
  },
  {    path:'carte',
    component:CarteComponent
  },
  {    path:'advert/:id',
    component:AdvertComponent
  },
  { path: 'create-advert', component: CreateAdvertComponent, canActivate: [AuthGuardService] },

  {    path:'reset',
    component:ResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
