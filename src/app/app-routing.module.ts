import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from '../pages/layout/applayout.component';
import { HomeComponent } from '../pages/home/home.component';
import { PastTrialsComponent } from '../pages/past-trials/past-trials.component';
import { HowItWorksComponent } from '../pages/how-it-works/how-it-works.component';
import { LoginComponent } from '../pages/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'past-trials', component: PastTrialsComponent },
      { path: 'how-it-works', component: HowItWorksComponent },
      { path: 'login', component: LoginComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
