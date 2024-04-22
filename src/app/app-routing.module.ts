import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsercreationComponent } from './usercreation/usercreation.component';
import {HttpClientModule} from '@angular/common/http'
const routes: Routes = [
  {path: '',redirectTo:'login',pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'usercreation',component:UsercreationComponent},
  {path: '**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
