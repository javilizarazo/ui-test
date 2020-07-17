import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppLayoutComponent } from '../pages/layout/applayout.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { PastTrialsComponent } from '../pages/past-trials/past-trials.component';
import { HowItWorksComponent } from '../pages/how-it-works/how-it-works.component';
import { LoginComponent } from '../pages/login/login.component';
import { VotesComponent } from '../components/votes/votes.component';
import { DataService } from '../services/data.service';

@NgModule({
  declarations: [
    AppLayoutComponent,
    NavigationComponent,
    FooterComponent,
    AppComponent,
    HomeComponent,
    PastTrialsComponent,
    HowItWorksComponent,
    LoginComponent,
    VotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
