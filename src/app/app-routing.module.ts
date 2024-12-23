import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AddpetComponent } from './Components/addpet/addpet.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { HomeComponent } from './Components/home/home.component';
import { MainScreenComponent } from './Components/main-screen/main-screen.component';
import { homeRoutes } from './home.route';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full' 
  },
  {
    path: 'addPet',
    component: AddpetComponent,
    canActivate : [AuthGuardGuard]
  },
  {
    path: 'main-screen',
    component: MainScreenComponent,
    children:homeRoutes,
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
