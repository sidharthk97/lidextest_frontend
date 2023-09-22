import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [

  // {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'user', component: UserComponent},
  {path:'admin', component: AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
